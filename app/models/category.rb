class Category < ApplicationRecord
  has_many :products

  has_attached_file :category_img
  validates_attachment_content_type :category_img, content_type: /\Aimage\/.*\z/
end
