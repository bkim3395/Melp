class Api::BusinessesController < ApplicationController

  def index
    if(params[:bounds])
      @businesses = Business.bounds_search(params[:search], params[:bounds])
    else
      @businesses = Business.search(params[:search])
    end
    render :index
  end

  def show
    @business = Businesboundss.with_attached_photos.find_by(id: params[:id])
    @reviews = @business.reviews.with_attached_photos
    render :show
  end
end