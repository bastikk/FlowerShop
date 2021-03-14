class AddPriceAndAvailabilityToProducts < ActiveRecord::Migration[6.1]
  def change
    add_column :products, :price, :numeric
    add_column :products, :availability, :boolean
  end
end
