class ProductsController < ApplicationController
  before_action :find_product, only: [:show, :edit, :update, :destroy]
  #before_action :authenticate_user!, except: [:index, :show]
  before_action :authenticate, except: [:index, :show]

  def index
    @products = Product.all
    @categories= Category.all
  end

  def show
    @review = Review.new
  end

  def new
    @product = Product.new
  end

  def create
    @product = Product.new(product_params)
    @product.availability=true
    @product.average_rating=5
    if @product.save
      redirect_to product_path(@product)
    else
      render :new
    end
  end

  def edit; end

  def update
    if @product.update(product_params)
      redirect_to @product
    else
      render 'edit'
    end
  end

  def destroy
    @product.destroy
    redirect_to products_path
  end


  private

  def product_params
    params.require(:product).permit(:title, :description, :category_id, :price, :product_img)
  end

  def find_product
    @product = Product.find(params[:id])
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
