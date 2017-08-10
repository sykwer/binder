class Post < ApplicationRecord
  belongs_to :user

  before_create do
    self.uuid = SecureRandom.uuid
  end

  def to_param
    uuid
  end
end
