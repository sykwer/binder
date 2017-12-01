class Api::StreamsController < Api::ApplicationController
  def from_followings
    t = FollowingsTimeline.new(user: current_user, count_per_page: count_param)
    post_uuids = offset_param.eql?(0) ?
      t.fetch_head! : t.fetch(page: offset_param / count_param) # == page
    posts = Post.where(uuid: post_uuids).not_deleted # orderless

    # workaround
    @posts = []
    post_uuids.each do |uuid|
      post = posts.select { |p| p.uuid == uuid }[0]
      @posts << post if post.present? # post of the uuid may not be present
    end

    render template: "api/streams/show"
  end

  def world_timeline

    posts = Post.not_deleted
                .published
                .order(first_published_at: :desc)
                .limit(count_param)

    if params[:oldest_unixtime].present?
      @posts = posts.where("first_published_at < ?", Time.zone.at(params[:oldest_unixtime].to_i))
    else
      @posts = posts
    end

    @oldest_unixtime = @posts.present? ? @posts.last.first_published_at.to_i  : nil

    render template: "api/streams/show"
  end

  private

  def offset_param
    params[:offset].present? ? params[:offset].to_i : 0
  end

  def count_param
    params[:count].present? ? params[:count].to_i : 5
  end
end
