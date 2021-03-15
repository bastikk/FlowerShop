class Order < ApplicationRecord
  belongs_to :delivery_type
  belongs_to :payment_type

  has_many :orders_products
  has_many :products, through: :orders_products
end
