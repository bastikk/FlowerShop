class CreateOrders < ActiveRecord::Migration[6.1]
  def change
    create_table :orders do |t|
      t.string :name
      t.string :surname
      t.string :phone_number
      t.string :address
      t.references :delivery_type, null: false, foreign_key: true
      t.references :payment_type, null: false, foreign_key: true

      t.timestamps
    end
  end
end
