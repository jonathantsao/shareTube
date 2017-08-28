class AddColumnToLikes < ActiveRecord::Migration[5.1]
  def change
    add_column :likes, :value, :integer
    change_column :likes, :value, :integer, null: false
  end
end
