class Product < ApplicationRecord
  has_attached_file :product_img, style: { medium: "300x300>", thumb: "100x100>" }
  validates_attachment_content_type :product_img, content_type: /\Aimage\/.*\z/
end
