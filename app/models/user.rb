require 'role_model'

class User < ApplicationRecord
  include RoleModel
  after_initialize :init

  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable, :trackable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :validatable

  roles :admin, :customer

  def init
    self.roles = [:customer]
  end
end
