class StreamsController < ApplicationController
  def from_followings
    @stream_name = "From your followings"

    t = FollowingsTimeline.new(user: current_user, count_per_page: 10)
    post_uuids = t.fetch_head!
    @posts = Post.where(uuid: post_uuids).order(first_published_at: :desc)

    render template: "streams/show"
  end
end
