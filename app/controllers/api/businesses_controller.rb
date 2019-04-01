class Api::BusinessesController < ApplicationController

  def index
    @businesses = Business.with_attached_photos.all
    render :index
  end

  def show
    @business = Business.with_attached_photos.find_by(id: params[:id])
    @reviews = @business.reviews.with_attached_photos
    render :show
  end


end