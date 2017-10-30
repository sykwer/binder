class Api::PostsController < Api::ApplicationController
  before_action :set_post

  def show
  end

  def destroy
    @post.destroy!
    head 200
  end

  private

  def set_post
    @post = Post.find(params[:uuid])
  end
end
