class Api::TagsController < Api::ApplicationController
  def search
    @tags = Tag.search_by(params[:q])
               .where.not(name: params[:excluded_names])
               .limit(5)
  end
end
