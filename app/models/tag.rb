class Tag < ApplicationRecord
  has_many :post_tags
  has_many :posts, through: :post_tags

  # Not case sensitive
  scope :search_by, lambda {
    |q| where("name COLLATE utf8mb4_unicode_ci LIKE ?", "#{q}%")
  }
end
