class Registration
  include ActiveModel::Model
  attr_accessor :auth, :username
  validates :auth, :username, presence: true
  validate :auth_must_be_valid_hash

  def save
    return false if invalid?
    user = User.new(
      username: username,
      provider: auth["provider"],
      uid: auth["uid"],
      email: auth["info"]["email"],
      name: auth["info"]["name"],
      image_url: auth["info"]["image"],
    )
    user.save!
    user
  end

  private

  def auth_must_be_valid_hash
    if auth["provider"].present? && auth["uid"].present? && auth["info"]["email"].present? &&
        auth["info"]["name"].present? && auth["info"]["image"].present?
      return
    end
    errors.add(:registration, "must be made from valid auth hash")
  end
end
