class DemandsController < ApplicationController

  def new
    @demand = Demand.new
  end

  def create
    demand = Demand.new(demand_params)

    if demand.save
      @demand = Demand.new
      @success = true
    else
      @demand = demand
      @success = false
    end

    render :new
  end

  private

  def demand_params
    params.require(:demand).permit(:content)
  end
end
