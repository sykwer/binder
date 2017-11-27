class Contact < ApplicationRecord
  validates :name, :email, :content, presence: true
  validates :email, format: { with: EMAIL_REGREX }
end
