class Api::UsersController < ApplicationController

  def index
    @user = User.all 
    render :index
  end

  def create
    @user = User.new(user_params)
    # Manually feeding same position (App Academy) for now.
    @user.update(latitude: 40.751369, longitude: -73.983927)
    if @user.save
      login_user(@user)
      render :show
    else
      render json: @user.errors.full_messages, status: 422
    end
  end

  def user_params
      params.require(:user).permit(:username, :password, :email)
  end


end