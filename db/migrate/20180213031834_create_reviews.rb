class CreateReviews < ActiveRecord::Migration[5.1]
  def change
    create_table :reviews do |t|
      t.string :content
      t.integer :babe_id

      t.timestamps
    end
    add_index :reviews, :babe_id
  end
end
