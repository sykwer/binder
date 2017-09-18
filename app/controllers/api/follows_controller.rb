class Api::FollowsController < Api::ApplicationController
  def create
    follow = Follow.new(
      destination_id: params[:opponent_user_id],
      source_id: current_user.id,
    )

    if follow.save
      head 200
    else
      head :bad_request
    end
  end

  def destroy
    follow = Follow.find_by(
      destination_id: params[:opponent_user_id],
      source_id: current_user.id,
    )

    if follow.present? && follow.destroy
      head 200
    else
      head :bad_request
    end
  end
end
