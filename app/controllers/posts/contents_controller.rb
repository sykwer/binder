class Posts::ContentsController < ApplicationController
  before_action :set_post, only: %i(update)

  def update
    @post.publish_or_update_content!
    PostFanoutService.new(target_user_ids: current_user.follower_ids,
                          post_uuid: @post.uuid).fanout

    redirect_to root_path
  end

  private

  def set_post
    @post = Post.find(params[:post_uuid])
  end
end
