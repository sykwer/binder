class UsersController < ApplicationController
  before_action :set_user, only: %i(show)

  def show
    if @user.blank?
      render status: 404, file: "/public/404" and return
    end

    @posts = Post.where(user_id: @user.id).published.order(created_at: :desc)
  end

  def set_user
    @user = User.find_by(username: params[:username])
  end
end
