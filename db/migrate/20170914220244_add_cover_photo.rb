class AddCoverPhoto < ActiveRecord::Migration[5.1]
  def up
    add_attachment :users, :cover
  end

  def down
    remove_attachment :users, :cover
  end
end
