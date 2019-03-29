class Api::BusinessesController < ApplicationController

  def index
    @businesses = Business.all
    render :index
  end

  def show
    @business = Business.find_by(id: params[:id])
    @reviews = @business.reviews
    render :show
  end

#   def business_params
#     params.require(:business).permit(:first_name, :last_name, :password, :email, :photo)
#   end


end