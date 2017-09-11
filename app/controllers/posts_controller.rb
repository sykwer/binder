class PostsController < ApplicationController
  before_action :set_post, only: [:edit]

  def create
    post = current_user.posts.create
    redirect_to edit_post_path(post)
  end

  def edit
  end

  def set_post
    @post = Post.find(params[:uuid])
  end
end
