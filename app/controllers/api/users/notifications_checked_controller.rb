class Api::Users::NotificationsCheckedController < Api::ApplicationController
  before_action :set_user

  def update
    unless @user == current_user
      head 401 and return
    end

    @user.check_notifications!
    head 200
  end

  private

  def set_user
    @user = User.find(params[:user_id])
  end
end
