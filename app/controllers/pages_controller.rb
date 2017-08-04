class PagesController < ApplicationController
  before_action :authenticate_user!, only: [:top]

  def top
  end

  # FIXME: Temporary method
  def profile
  end
end
