class Api::UsersController < ApplicationController

  def index
    @user = User.all 
    render :index
  end

  def create
    @user = User.new(user_params)
    if @user.save
      @user.assign_avatar
      login_user(@user)
      render :show
    else
      render json: @user.errors.full_messages, status: 422
    end
  end

  def user_params
      params.require(:user).permit(:first_name, :last_name, :password, :email, :photo, :longitude, :latitude)
  end


end