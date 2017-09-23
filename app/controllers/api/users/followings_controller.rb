class Api::Users::FollowingsController < Api::ApplicationController
  before_action :set_user
  before_action :set_observer

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

  def set_observer
    @observer = User.find(params[:my_user_id])
  end
end
