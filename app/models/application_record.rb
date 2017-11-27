class ApplicationRecord < ActiveRecord::Base
  self.abstract_class = true

  EMAIL_REGREX = /\A([\w+\-].?)+@[a-z\d\-]+(\.[a-z]+)*\.[a-z]+\z/i
end
