class CategoriesController < ApplicationController
  before_action :authenticate_user!, only: [:new,:create]

  def index
    @categories = Category.all
  end

  def new
    @category=Category.new
  end

  def create
    @category = Category.new(category_params)
    if @category.save
      redirect_to root_path
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
    params.require(:category).permit(:name)
  end
end
