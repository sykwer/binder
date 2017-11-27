class Api::Users::PostsController < Api::ApplicationController
  before_action :set_user

  def index
    @posts = Post.published
                 .not_deleted
                 .where(user_id: @user.id)
                 .order(created_at: :desc)
                 .offset(offset_param)
                 .limit(count_param)
  end

  private

  def offset_param
    params[:offset] || 0
  end

  def count_param
    params[:count] || 5
  end

  def set_user
    @user = User.find(params[:user_id])
  end
end
