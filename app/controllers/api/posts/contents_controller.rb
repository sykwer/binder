class Api::Posts::ContentsController < Api::ApplicationController
  before_action :set_post

  def update
    @post.publish_or_update_content!
    PostFanoutService.new(
      target_user_ids: [current_user.id] + current_user.follower_ids,
      post_uuid: @post.uuid,
    ).fanout

    head 200
  end

  private

  def set_post
    @post = Post.find(params[:post_uuid])
  end
end
