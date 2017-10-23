class Api::TagsController < Api::ApplicationController
  def search
    @tags = Tag.search_by(params[:q]).limit(5)
  end
end
