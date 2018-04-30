class StreamsController < ApplicationController
  def from_followings
    @stream_title = "From your followings"
    @stream_id = "followings"
    render template: "streams/show"
  end

  def world_timeline
    @stream_title = "All posts"
    @stream_id = "timeline"
    render template: "streams/show"
  end
end
