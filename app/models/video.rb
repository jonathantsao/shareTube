class Video < ApplicationRecord
  include PgSearch
  pg_search_scope :basic_search,
    against: { title: 'A', description: 'B' },
    using: {
      dmetaphone: { any_word:  true },
      tsearch: { dictionary: "english", any_word: true, prefix: true },
      trigram: { threshold: 0.1 }
    }

  validates :title, :description, :user_id, :video, :views, presence: true

  has_attached_file :video, :styles => {thumb: ["400x400#", "jpg"]}
  validates_attachment_content_type :video, content_type: /\Avideo\/.*\z/

  belongs_to :user
  has_many :comments
  has_many :likes, as: :likeable



end
