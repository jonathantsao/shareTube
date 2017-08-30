class RemoveThumbnailColumnsFromVideos < ActiveRecord::Migration[5.1]
  def change
    remove_column :videos, :thumbnail_file_name, :string
    remove_column :videos, :thumbnail_content_type, :string
    remove_column :videos, :thumbnail_file_size, :integer
    remove_column :videos, :thumbnail_updated_at, :datetime
  end
end
