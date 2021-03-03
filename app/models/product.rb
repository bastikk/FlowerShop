class Product < ApplicationRecord
  has_attached_file :product_img
  validates_attachment_content_type :product_img, content_type: /\Aimage\/.*\z/
end
