class Api::Users::BookmarkedPostsController < Api::ApplicationController
  before_action :set_user

  POSTS_COUNT_PER_PAGE = 20

  def index
    @posts = Post.bookmarked_by(@user)

    if params[:oldest_unixtime].present?
      @posts = @posts.where("bookmarks.created_at < ?", Time.zone.at(params[:oldest_unixtime].to_i))
    end

    @posts = @posts.order("bookmarks.created_at DESC").limit(POSTS_COUNT_PER_PAGE)

    if @posts.last.present?
      @oldest_unixtime = Bookmark.where(
        user_id: @user.id,
        post_uuid: @posts.last.id,
      ).last.created_at.to_i
    else
      @oldest_unixtime = nil
    end
  end

  private

  def set_user
    @user = User.find(params[:user_id])
  end
end
