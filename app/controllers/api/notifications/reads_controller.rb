class Api::Notifications::ReadsController < Api::ApplicationController
  before_action :set_notification

  def update
    @notification.read!
    head 200
  end

  private

  def set_notification
    @notification = Notification.find(params[:notification_id])
  end
end
