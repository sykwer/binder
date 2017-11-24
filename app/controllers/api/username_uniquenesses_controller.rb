class Api::UsernameUniquenessesController < Api::ApplicationController
  before_action :set_username

  def show
    user = User.find_by(username: @username)

    if user.present?
      render status: 200, json: {
        isUnique: false,
      }
    else
      render status: 200, json: {
        isUnique: true,
      }
    end
  end

  private

  def set_username
    @username = params[:username]
  end
end
