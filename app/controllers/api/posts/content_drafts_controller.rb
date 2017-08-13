class Api::Posts::ContentDraftsController < Api::ApplicationController
  before_action :set_post, only: %i(update)

  def update
    @post.content_draft = params.permit(:content_draft)
    if @post.save
      head :ok
    else
      render status: :bad_request, json: {
        error: {
          messages: @post.errors.messages
        }
      }
    end
  end

  def set_post
    @post = Post.find(param[:post_id])
  end
end
