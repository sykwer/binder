class UsersController < ApplicationController
  before_action :set_user, only: %i(show)
  before_action :set_menu, only: %i(show)

  def show
    if @user.blank?
      render status: 404, file: "/public/404" and return
    end

    if !["latest", "bookshelf", "likes", "drafts"].include?(@menu) && @menu.present?
      render status: 404, file: "/public/404" and return
    end
  end

  def set_user
    @user = User.find_by(username: params[:username])
  end

  def set_menu
    @menu = params[:menu]
  end
end