class Api::Users::TimelinesController < Api::ApplicationController
  before_action :set_user

  def index
    t = Timeline.new(user: @user)
    post_uuids = page.eql?(0) ? t.fetch_head! : t.fetch(page: page)
    @posts = Post.where(uuid: post_uuids)
  end

  private

  def set_user
    @user = User.find(params[:user_id])
  end

  def page
    params[:page] || 0
  end
end
