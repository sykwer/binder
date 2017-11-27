class PagesController < ApplicationController
  def top
    if user_signed_in?
      ft = FollowingsTimeline.new(user: current_user, count_per_page: 4)
      @posts_from_followings = Post.where(uuid: ft.fetch_head!)
                                   .not_deleted
                                   .order(first_published_at: :desc)
    end

    wt = WorldTimeline.new(count_per_page: 4)
    @posts_from_timeline = Post.where(uuid: wt.fetch)
                               .not_deleted
                               .order(first_published_at: :desc)
  end

  def about
  end

  def terms
  end

  def privacy
  end
end
