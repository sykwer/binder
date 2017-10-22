class Api::TagsController < Api::ApplicationController
  def search
    @tags = Tag.search_by(params[:q])
  end
end
