class Api::Users::TimelinesController < Api::ApplicationController
  before_action :set_user

  COUNT_PER_PAGE = 50

  def index
    t = Timeline.new(user: @user, count_per_page: COUNT_PER_PAGE)
    post_uuids = page.eql?(0) ? t.fetch_head! : t.fetch(page: page)
    posts = Post.where(uuid: post_uuids)

    # workaround...
    @posts = []
    post_uuids.each do |uuid|
      @posts << posts.select { |p| p.uuid == uuid }[0]
    end
  end

  private

  def set_user
    @user = User.find(params[:user_id])
  end

  def page
    params[:page].to_i || 0
  end
end
