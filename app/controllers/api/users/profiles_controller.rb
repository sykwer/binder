class Api::Users::ProfilesController < Api::ApplicationController
  before_action :set_user, only: %i(update)

  def update
    @user.assign_attributes(
      name: params[:name],
      bio: params[:bio],
    )

    if @user.save
      head :ok
    else
      render status: :bad_request, json: {
        error: {
          messages: @user.errors.messages
        }
      }
    end
  end

  private

  def set_user
    @user = User.find(params[:user_id])
  end
end
