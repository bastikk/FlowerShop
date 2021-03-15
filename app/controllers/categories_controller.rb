class CategoriesController < ApplicationController
  before_action :authenticate, only: [:new,:create]

  def index
    @categories = Category.all
  end

  def new
    @category=Category.new
  end

  def create
    @category = Category.new(category_params)
    if @category.save
      redirect_to categories_path
    else
      render :new
    end
  end

  def edit; end

  def update
    if @category.update(category_params)
      redirect_to root_path
    else
      render 'edit'
    end
  end

  private
  def category_params
    params.require(:category).permit(:name, :category_img)
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
