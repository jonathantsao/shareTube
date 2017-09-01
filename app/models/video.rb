class Video < ApplicationRecord
  include PgSearch
  pg_search_scope :basic_search,
    against: { title: 'A', description: 'B' },
    using: {
      dmetaphone: { any_word:  true },
      tsearch: { dictionary: "english", prefix: true },
      trigram: { threshold: 0.1 }
    }

  pg_search_scope :suggest_search,
    against: :title,
    using: {
      tsearch: { prefix: true, any_word: true },
      dmetaphone: { sort_only: true }
    }

  validates :title, :description, :user_id, :video, :views, presence: true

  has_attached_file :video, :styles => {thumb: ["400x400#", "jpg"]}
  validates_attachment_content_type :video, content_type: /\Avideo\/.*\z/

  belongs_to :user
  has_many :comments, dependent: :destroy
  has_many :likes, as: :likeable, dependent: :destroy



end
