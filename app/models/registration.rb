class Registration
  include ActiveModel::Model
  attr_accessor :fb_data, :tw_data, :username
  validates :username, presence: true
  validate :fb_data_must_be_valid_hash
  validate :tw_data_must_be_valid_hash

  def save
    return false if invalid?

    if fb_data.present?
      user = User.new(
        username: username,
        facebook_uid: fb_data["uid"],
        facebook_link: fb_data["extra"]["raw_info"]["link"],
        facebook_access_token: fb_data["credentials"]["token"],
        email: fb_data["info"]["email"],
        name: fb_data["info"]["name"],
        image_url: fb_data["info"]["image"],
      )
    elsif tw_data.present?
      user = User.new(
        username: username,
        twitter_uid: tw_data["uid"],
        twitter_link: tw_data["info"]["urls"]["Twitter"],
        twitter_access_token: tw_data["credentials"]["token"],
        twitter_access_token_secret: tw_data["credentials"]["secret"],
        name: tw_data["info"]["name"],
        image_url: tw_data["info"]["image"],
      )
    else
      raise "Invalid auth hash from omniauth"
    end

    user.save!
    user
  end

  private

  def fb_data_must_be_valid_hash
    return if fb_data.blank?

    if fb_data["uid"].present? && fb_data["info"]["email"].present? &&
        fb_data["info"]["name"].present? && fb_data["info"]["image"].present? &&
        fb_data["extra"]["raw_info"]["link"].present? && fb_data["credentials"]["token"]
      return
    end
    errors.add(:registration, "must be made from valid facebook auth hash")
  end

  def tw_data_must_be_valid_hash
    return if tw_data.blank?

    if tw_data["uid"].present? && tw_data["info"]["name"].present? &&
        tw_data["info"]["image"].present? && tw_data["info"]["urls"]["Twitter"].present? &&
        tw_data["credentials"]["token"].present? && tw_data["credentials"]["secret"].present?
      return
    end
    errors.add(:registration, "must be made from valid twitter auth hash")
  end
end
