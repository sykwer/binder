class Api::MultiplePostsController < Api::ApplicationController
  before_action :set_posts

  def destroy
    @posts.each { |p| p.delete_logically! }
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
