class AddAvarageRatingToProducts < ActiveRecord::Migration[6.1]
  def change
    add_column :products, :average_rating, :numeric
  end
end
