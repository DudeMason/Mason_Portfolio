# syntax=docker/dockerfile:1

# --- Stage 1: build the React client ---
FROM node:22-slim AS client-build
WORKDIR /client
COPY client/package.json client/yarn.lock ./
RUN yarn install --frozen-lockfile
COPY client/ ./
RUN yarn build

# --- Stage 2: Rails runtime ---
FROM ruby:3.4-slim AS runtime

RUN apt-get update -qq && apt-get install -y --no-install-recommends \
    libpq5 \
  && rm -rf /var/lib/apt/lists/*

WORKDIR /app

ENV RAILS_ENV=production \
    RACK_ENV=production \
    BUNDLE_WITHOUT="development:test" \
    RAILS_LOG_TO_STDOUT=1

COPY Gemfile Gemfile.lock ./
RUN apt-get update -qq && apt-get install -y --no-install-recommends build-essential libpq-dev git \
  && bundle config set --local without "${BUNDLE_WITHOUT}" \
  && bundle install --jobs 4 \
  && apt-get purge -y build-essential libpq-dev git \
  && apt-get autoremove -y \
  && rm -rf /var/lib/apt/lists/* /usr/local/bundle/cache

COPY . .
COPY --from=client-build /client/build/ /app/public/

RUN groupadd --system rails \
  && useradd --system --gid rails --create-home --home-dir /home/rails rails \
  && chown -R rails:rails /app
USER rails

EXPOSE 3000

CMD ["bundle", "exec", "puma", "-p", "3000"]
