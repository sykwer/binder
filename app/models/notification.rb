class Notification < ApplicationRecord
  belongs_to :user, foreign_key: "destination_user_id"
  belongs_to :notificatable, polymorphic: true

  before_create do
    user.has_unchecked_notifications = true
    user.save!
  end

  def read!
    self.is_read = true
    save!
  end

  def unread!
    self.is_read = false
    save!
  end
end
