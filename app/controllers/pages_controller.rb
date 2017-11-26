class PagesController < ApplicationController
  def top
    if user_signed_in?
      ft = FollowingsTimeline.new(user: current_user, count_per_page: 4)
      f_post_uuids = ft.fetch_head!
      @posts_from_followings = Post.where(uuid: f_post_uuids).order(first_published_at: :desc)
    end

    wt = WorldTimeline.new(count_per_page: 4)
    w_post_uuids = wt.fetch
    @posts_from_timeline = Post.where(uuid: w_post_uuids).order(first_published_at: :desc)
  end

  def about
  end

  def terms
  end

  def privacy
  end
end
