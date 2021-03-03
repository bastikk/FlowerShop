class ReviewsController < ApplicationController
  before_action :find_product
  before_action :authenticate

  def show

  end

  def index
  end

  def create
    @review = Review.new(review_params)
    @review.product_id = @product.id
    @review.user_id = current_user.id

    if @review.save
      redirect_to product_path(@product)
    else
      render 'new'
    end
  end

  def destroy
    @review = Review.find(params[:id])
    @review.destroy

    redirect_to product_path(@product)
  end

  private

  def review_params
    params[:review].permit(:comment, :rating)
  end

  def find_product
    @product = Product.find(params[:product_id])
  end

  def authenticate
    render 'errors/401' unless authenticate_user!
  end
end
