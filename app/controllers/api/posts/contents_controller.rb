class Api::Posts::ContentsController < Api::ApplicationController
  before_action :set_post

  def update
    new_tags = params[:created_tag_names].map do |name|
      Tag.create!(name: name)
    end
    attached_tags = Tag.where(id: params[:attached_tag_ids])

    @post.detach_tags(@post.tags - attached_tags)
    @post.attatch_tags!(new_tags.concat(attached_tags))

    @post.publish_or_update_content!

    PostFanoutService.new(
      target_user_ids: [current_user.id] + current_user.follower_ids,
      post_uuid: @post.uuid,
    ).fanout

    SharePostOnTwitterService.new(
      user: current_user,
      post: @post,
    ).share if params[:share_on_twitter] && current_user.twitter_connected?

    SharePostOnFacebookService.new(
      user: current_user,
      post: @post,
    ).share if params[:share_on_facebook] && current_user.facebook_connected?

    head 200
  end

  private

  def set_post
    @post = Post.find(params[:post_uuid])
  end
end
