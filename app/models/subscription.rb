class Subscription < ApplicationRecord
  validates :subscriber, :subscribed, presence: true
  validates :subcribed_id, uniqueness: { scope: [:subscriber_id] }

  belongs_to :subscriber,
    class_name: :User,
    primary_key: :id,
    foreign_key: :subscriber_id

  belongs_to :subscribed,
    class_name: :User,
    primary_key: :id,
    foreign_key: :subscribed_id

end
