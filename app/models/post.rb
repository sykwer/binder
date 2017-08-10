class Post < ApplicationRecord
  belongs_to :user

  with_options presence: true do
    validates :content_draft
    validates :content
    validates :asin
    validates :book_image_url
    validates :book_name
    validates :book_author
    validates :affiliate_link
  end

  before_create do
    self.uuid = SecureRandom.uuid
  end
end
