class AddUserIDtoLikes < ActiveRecord::Migration[5.1]
  def change
    add_column :likes, :user_id, :integer
    add_index :likes, :user_id
    change_column :likes, :user_id, :integer, null: false
  end
end
