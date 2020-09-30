class CreateBlogs < ActiveRecord::Migration[6.0]
	def change
		create_table :blogs do |t|
			t.string :title
			t.string :body
			t.string :date
			t.integer :like, default: 0
			t.integer :dislike, default: 0

			t.timestamps
		end
	end
end
