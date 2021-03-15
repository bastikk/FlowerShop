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
    @products = {}
  end

  def create
    @order = Order.new(order_params)
    # @products.each { |key, value| OrderProduct.new({:order_id => @order.id, :product_id => key.id, :amount => value}) }
    if @order.save
      redirect_to root_path
    else
      render :new
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
