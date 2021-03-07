class Order < ApplicationRecord
  belongs_to :deliveryType
  belongs_to :paymentType
end
