# My Portfolio Website

This is a website representing my portfolio! It contains links to my finished projects and some info about me.

It's written using ReactJS on Rails, using languages such as RUBY, JavaScript, HTML, and CSS.

https://www.masoneyre.org

## Local development

Everything runs in Docker — no local Ruby/Node install required.

```
docker compose up --build
```

- Rails API: http://localhost:3001
- React dev server: http://localhost:3000 (proxies API calls to the `api` service)
- Postgres: localhost:5432 (user/pass/db: `portfolio`/`portfolio`/`portfolio_development`)

First-time setup (create/migrate the database):

```
docker compose exec api bin/rails db:prepare
```

Run the Rails test suite:

```
docker compose exec api bin/rails test
```

## Production

`Dockerfile` at the repo root builds a standalone production image: it builds the React client and bundles it into the Rails app's `public/` directory, then serves both from a single Puma process. Build and run it with:

```
docker build -t portfolio .
docker run -e RAILS_MASTER_KEY=... -e DATABASE_URL=... -p 3000:3000 portfolio
```
