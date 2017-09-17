class Api::Posts::BookInfosController < Api::ApplicationController
  before_action :set_post, only: %i(update)

  def update
    @post.assign_attributes(book_info_params)

    if @post.save
      head :ok
    else
      render state: :bad_request, json: {
        error: {
          messages: @post.errors.messages
        }
      }
    end
  end

  def set_post
    @post = Post.find(params[:post_uuid])
  end

  def book_info_params
    params.permit(
      :asin,
      :book_image_url,
      :book_title,
      :book_author,
      :book_publisher,
    )
  end
end
