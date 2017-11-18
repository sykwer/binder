class Api::MultiplePostsController < Api::ApplicationController
  before_action :set_posts, only: %i(unpublish)

  def destroy
    Post.delete!(params[:post_uuids])
    head 200
  end

  def unpublish
    @posts.each { |p| p.unpublish! }
    head 200
  end

  private

  def set_posts
    @posts = Post.where(uuid: params[:post_uuids])
  end
end
