class User < ApplicationRecord
  validates :session_token, :username, :password_digest, presence: true
  validates :username, :session_token, uniqueness: true
  validates :password, length: { minimum: 6, allow_nil: true }

  has_attached_file :image, :styles => { :small => "100x100#"}, default_url: "https://s3.us-east-2.amazonaws.com/sharetube-dev/users/images/000/000/037/small/default.png"
  validates_attachment_content_type :image, content_type: /\Aimage\/.*\Z/

  has_attached_file :cover, :styles => { :banner => "1300x270#"}, default_url: "https://s3.us-east-2.amazonaws.com/sharetube-dev/users/covers/000/000/041/banner/banner.jpg"
  validates_attachment_content_type :cover, content_type: /\Aimage\/.*\Z/

  after_initialize :ensure_session_token
  attr_reader :password

  has_many :videos, dependent: :destroy
  has_many :comments, dependent: :destroy
  has_many :likes, dependent: :destroy

  has_many :subscriptions_to,
    class_name: :Subscription,
    primary_key: :id,
    foreign_key: :subscriber_id,
    dependent: :destroy

  has_many :subscribed_channels,
    through: :subscriptions_to,
    source: :subscribed

  has_many :subscriptions_from,
    class_name: :Subscription,
    primary_key: :id,
    foreign_key: :subscribed_id,
    dependent: :destroy

  has_many :subscribers,
    through: :subscriptions_from,
    source: :subscriber


  def self.find_by_credentials(username, password)
    user = User.find_by(username: username)
    return nil unless user && user.is_password?(password)
    user
  end

  def password=(password)
    @password = password
    self.password_digest = BCrypt::Password.create(password)
  end

  def is_password?(password)
    BCrypt::Password.new(self.password_digest).is_password?(password)
  end

  def reset_session_token!
    self.session_token = SecureRandom.urlsafe_base64(16)
    self.save!
    self.session_token
  end

  private

  def ensure_session_token
    self.session_token ||= SecureRandom.urlsafe_base64(16)
  end

end
