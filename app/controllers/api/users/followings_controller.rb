class Api::Users::FollowingsController < Api::ApplicationController
  before_action :set_user

  def index
    @followings = @user.followings.offset(counts * page).limit(counts)
  end

  private

  def set_user
    @user = User.find(params[:user_id])
  end

  def counts
    params[:counts].to_i || 20
  end

  def page
    params[:page].to_i || 0
  end
end
