class Registration
  include ActiveModel::Model
  attr_accessor :fb_data, :username
  validates :fb_data, :username, presence: true
  validate :fb_data_must_be_valid_hash

  def save
    return false if invalid?
    user = User.new(
      username: username,
      facebook_uid: fb_data["uid"],
      email: fb_data["info"]["email"],
      name: fb_data["info"]["name"],
      image_url: fb_data["info"]["image"],
    )
    user.save!
    user
  end

  private

  def fb_data_must_be_valid_hash
    if fb_data["provider"].present? && fb_data["uid"].present? && fb_data["info"]["email"].present? &&
        fb_data["info"]["name"].present? && fb_data["info"]["image"].present?
      return
    end
    errors.add(:registration, "must be made from valid auth hash")
  end
end
