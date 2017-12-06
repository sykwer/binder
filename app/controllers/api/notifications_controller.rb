class Api::NotificationsController < Api::ApplicationController
  def index
    @notifications = current_user.notifications.order(updated_at: :desc).limit(count_param)
    if params[:oldest_unixtime].present?
      @notifications = @notifications.where("updated_at < ?", Time.zone.at(params[:oldest_unixtime].to_i))
    end

    if @notifications.present?
      @oldest_unixtime = @notifications.last.updated_at.to_i
    else
      @oldest_unixtime = params[:oldest_unixtime].to_i
    end
  end

  private

  def count_param
    params[:count].present? ? params[:count] : 10
  end
end
