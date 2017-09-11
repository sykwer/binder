class Posts::ContentsController < ApplicationController
  before_action :set_post, only: %i(update)

  def update
    @post.publish_or_update_content!
    redirect_to root_path
  end

  private

  def set_post
    @post = Post.find(params[:post_uuid])
  end
end
