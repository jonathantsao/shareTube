class Like < ApplicationRecord
  validates :user, presence: true, uniqueness: true

  belongs_to :likeable, polymorphic: true
  belongs_to :user


end
