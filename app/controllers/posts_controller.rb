class PostsController < ApplicationController
  before_action :set_post, only: %i(show edit destroy)

  def show
  end

  def create
    post = current_user.posts.create
    redirect_to edit_post_path(post)
  end

  def edit
  end

  def destroy
    @post.destroy!
    redirect_to "/@#{current_user.username}/drafts"
  end

  private

  def set_post
    @post = Post.find(params[:uuid])
  end
end
