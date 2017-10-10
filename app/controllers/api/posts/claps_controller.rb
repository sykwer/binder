class Api::Posts::ClapsController < Api::ApplicationController
  before_action :set_post

  def create
    clap = Clap.find_or_create_by(user: current_user, post: @post)
    clap.countup!
    head 200
  end

  private

  def set_post
    @post = Post.find(params[:post_uuid])
  end
end
