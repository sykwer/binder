class Registration
  include ActiveModel::Model
  attr_accessor :fb_data, :tw_data, :username
  validates :username, presence: true
  validate :fb_data_must_be_valid_hash
  validate :tw_data_must_be_valid_hash

  def save
    return false if invalid?

    user = User.new(
      username: username,
      facebook_uid: fb_data.present? ? fb_data["uid"] : nil,
      facebook_link: fb_data.present? ? fb_data["extra"]["raw_info"]["link"] : nil,
      twitter_uid: fb_data.present? ? nil : tw_data["uid"],
      twitter_link: fb_data.present? ? nil : tw_data["info"]["urls"]["Twitter"],
      email: fb_data.present? ? fb_data["info"]["email"] : nil,
      name: fb_data.present? ? fb_data["info"]["name"] : tw_data["info"]["name"],
      image_url: fb_data.present? ? fb_data["info"]["image"] : tw_data["info"]["image"],
    )
    user.save!
    user
  end

  private

  def fb_data_must_be_valid_hash
    return if fb_data.blank?

    if fb_data["uid"].present? && fb_data["info"]["email"].present? &&
        fb_data["info"]["name"].present? && fb_data["info"]["image"].present? &&
        fb_data["extra"]["raw_info"]["link"].present?
      return
    end
    errors.add(:registration, "must be made from valid facebook auth hash")
  end

  def tw_data_must_be_valid_hash
    return if tw_data.blank?

    if tw_data["uid"].present? && tw_data["info"]["name"].present? &&
        tw_data["info"]["image"].present? && tw_data["info"]["urls"]["Twitter"].present?
      return
    end
    errors.add(:registration, "must be made from valid twitter auth hash")
  end
end
