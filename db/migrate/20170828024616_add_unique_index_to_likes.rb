class AddUniqueIndexToLikes < ActiveRecord::Migration[5.1]
  def change
    add_index :likes, [:likeable_type, :likeable_id, :user_id], unique: true
  end
end
