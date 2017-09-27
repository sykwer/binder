class Api::Posts::TitleDraftsController < Api::ApplicationController
  before_action :set_post

  def update
    @post.title_draft = params[:title_draft]

    if @post.save
      head 200
    else
      render status: 400, json: {
        errors: {
          messages: @post.errors.messages,
        }
      }
    end
  end

  private

  def set_post
    @post = Post.find(params[:post_uuid])
  end
end
