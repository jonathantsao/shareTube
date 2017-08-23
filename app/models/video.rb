class Video < ApplicationRecord
  validates :title, :description, :user_id, :views, presence: true
  has_attached_file :video
  validates_attachment_content_type :video, content_type: /\Avideo\/.*\z/

  belongs_to :user



end
