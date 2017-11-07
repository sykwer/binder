class StreamsController < ApplicationController
  def from_followings
    render template: "streams/show"
  end
end
