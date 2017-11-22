class Api::Posts::BookmarksController < Api::ApplicationController
  before_action :set_post, only: %i(create)

  def create
    bookmark = @post.bookmarks.build(user: current_user)

    if bookmark.save
      head :ok
    else
      render status: :bad_request, json: {
        error: {
          messages: bookmark.errors.messages,
        }
      }
    end
  end

  def destroy
    bookmark = Bookmark.find_by(
      post_uuid: params[:post_uuid],
      user_id: current_user.id,
    )

    if bookmark.present? && bookmark.destroy
      head 200
    else
      head :bad_request
    end
  end

  private

  def set_post
    @post = Post.find(params[:post_uuid])
  end
end
