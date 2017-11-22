class Api::Users::FollowersController < Api::ApplicationController
  before_action :set_user

  def index
    @followers = @user.followers.offset(page * counts).limit(counts)
  end

  private

  def set_user
    @user = User.find(params[:user_id])
  end

  def page
    params[:page].to_i || 0
  end

  def counts
    params[:counts].to_i || 20
  end
end
