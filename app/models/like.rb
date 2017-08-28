class Like < ApplicationRecord
  validates :user, presence: true
  validates :value, presence: true, inclusion: { in: [-1, 1]}

  belongs_to :likeable, polymorphic: true
  belongs_to :user


end
