class ReviewsController < ApplicationController
  before_action :find_product
  before_action :authenticate_user!, only: :create
  before_action :authenticate, only: [:destroy]


  def show; end

  def index; end

  def create
    @review = Review.new(review_params)
    @review.product_id = @product.id
    @review.user_id = current_user.id

    if @review.save
      @product.update_rating
      redirect_to product_path(@product)
    else
      render 'new'
    end
  end

  def destroy
    @review = Review.find(params[:id])
    @review.destroy
    @product.update_rating

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
    if authenticate_user!
      unless current_user.has_role? :admin
        render 'errors/401'
      end
    else
      render 'errors/401'
    end
  end

end
