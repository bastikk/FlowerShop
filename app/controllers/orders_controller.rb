class OrdersController < ApplicationController
  before_action :authenticate, only: [:index, :show]

  def index
    @orders = Order.all
  end


  def show
    @order = Order.find(params[:id])
  end

  def new
    @order = Order.new
    @orders_products = {Product.last => 2}

    @delivery_types = DeliveryType.all
    @payment_types = PaymentType.all
  end

  def create
    @orders_products = {Product.last => 2}
    begin
      ActiveRecord::Base.transaction do
        @order = Order.create!(order_params)
        @orders_products.each { |key, value| OrdersProduct.create!({:order_id => @order.id, :product_id => key.id, :amount => value}) }
        redirect_to root_path
      end
    rescue => e
      flash[:warning] = 'Something went wrong.'
      redirect_to orders_new_path
    end
  end


  private

  def order_params
    params.require(:order).permit(:name, :surname, :phoneNumber, :address, :delivery_type_id, :payment_type_id)
  end

  def authenticate
    if authenticate_user!
      unless current_user.has_role? :admin
        render 'errors/401'
      end
    else
      render 'errors/401'
    end
  end
end
