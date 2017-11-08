class PagesController < ApplicationController
  before_action :authenticate_user!, only: [:top]

  def top
    t = FollowingsTimeline.new(user: current_user, count_per_page: 4)
    post_uuids = t.fetch_head!
    @posts_in_timeline = Post.where(uuid: post_uuids).order(first_published_at: :desc)
  end

  def about
  end
end
