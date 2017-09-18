class PagesController < ApplicationController
  before_action :authenticate_user!, only: [:top]

  def top
  end

  def about
  end
end
