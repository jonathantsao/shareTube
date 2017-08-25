class Video < ApplicationRecord
  validates :title, :description, :user_id, :video, :views, presence: true

  # has_attached_file :thumbnail, default_url: "/app/assets/images/missing.png"
  # validates_attachment_content_type :thumbnail, content_type: /\Aimage\/.*\z/
# , :styles => {thumb: ["400x400#", "jpg"]}

  has_attached_file :video
  validates_attachment_content_type :video, content_type: /\Avideo\/.*\z/

  belongs_to :user



end
