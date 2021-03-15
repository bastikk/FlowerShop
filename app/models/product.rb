class Product < ApplicationRecord
  has_many :reviews
  belongs_to :category

  has_many :orders_products
  has_many :orders, through: :orders_products

  has_attached_file :product_img
  validates_attachment_content_type :product_img, content_type: /\Aimage\/.*\z/


  def update_rating
    if self.reviews.blank?
      average_review = 0
    else
      average_review = self.reviews.average(:rating).round(2)
    end
    self.average_rating = average_review
    self.save
  end
end
