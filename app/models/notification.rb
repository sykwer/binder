class Notification < ApplicationRecord
  belongs_to :user, foreign_key: "destination_user_id"
  belongs_to :notificatable, polymorphic: true

  def read!
    self.is_read = true
    save!
  end

  def unread!
    self.is_read = false
    save!
  end
end
