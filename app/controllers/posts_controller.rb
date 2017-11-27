class PostsController < ApplicationController
  before_action :set_post, only: %i(show edit destroy)

  def show
    if @post.deleted?
      render :show_deleted and return
    end

    @prior_post = Post.created_prior_to(@post)
    @posterior_post = Post.created_posterior_to(@post)
  end

  def create
    post = current_user.posts.create
    redirect_to edit_post_path(post)
  end

  def edit
    redirect_to post_path(@post) unless current_user == @post.user
  end

  def destroy
    @post.delete_logically!
    redirect_to "/@#{current_user.username}/drafts"
  end

  private

  def set_post
    @post = Post.find(params[:uuid])
  end
end
