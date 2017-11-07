class StreamsController < ApplicationController
  def from_followings
    @stream_name = "From your followings"
    render template: "streams/show"
  end
end
