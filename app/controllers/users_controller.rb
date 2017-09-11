class UsersController < ApplicationController
  before_action :set_user, only: %i(show)

  def show
    if @user.blank?
      render status: 404, file: "/public/404" and return
    end
  end

  def set_user
    @user = User.find_by(username: params[:username])
  end
end
