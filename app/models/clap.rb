class Clap < ApplicationRecord
  belongs_to :user
  belongs_to :post, foreign_key: :post_uuid
end
