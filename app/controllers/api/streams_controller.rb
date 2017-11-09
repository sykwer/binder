class Api::StreamsController < Api::ApplicationController
  def from_followings
    t = FollowingsTimeline.new(user: current_user, count_per_page: count_param)
    post_uuids = offset_param.eql?(0) ?
      t.fetch_head! : t.fetch(page: offset_param / count_param) # == page
    posts = Post.where(uuid: post_uuids) # orderless

    # workaround
    @posts = []
    post_uuids.each do |uuid|
      @posts << posts.select { |p| p.uuid == uuid }[0]
    end

    render template: "api/streams/show"
  end

  def world_timeline
    t = WorldTimeline.new(count_per_page: count_param)
    post_uuids = params[:oldest_unixtime_nano].present? ?
      t.fetch(oldest_unixtime_nano: params[:oldest_unixtime_nano].to_i) : t.fetch
    posts = Post.where(uuid: post_uuids) # orderless

    # workaround
    @posts = []
    post_uuids.each do |uuid|
      @posts << posts.select { |p| p.uuid == uuid }[0]
    end

    @oldest_unixtime_nano = t.oldest_unixtime_nano

    render template: "api/streams/show"
  end

  private

  def offset_param
    params[:offset].to_i || 0
  end

  def count_param
    params[:count].to_i || 5
  end
end
