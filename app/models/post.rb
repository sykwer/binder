class Post < ApplicationRecord
  belongs_to :user

  width_options presence: true do
    validates :content_draft
    validates :content
    vaildates :asin
    validates :book_image_url
    validates :book_name
    validates :book_author
    validates :affiliate_link
  end
end
