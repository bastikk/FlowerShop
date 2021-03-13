class Order < ApplicationRecord
  belongs_to :deliveryType
  belongs_to :paymentType
  has_and_belongs_to_many :products
end
