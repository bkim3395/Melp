class Api::ReviewsController < ApplicationController

  def create
    @review = Review.new(reviews_params)
    if @review.save
        render :show
    else
        render json: @review.errors.full_messages, status: 422
    end
  end

  def reviews_params
      params.require(:review).permit(:author_id, :business_id, :body, :rating, photos: [])
  end


end