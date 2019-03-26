class Api::SessionsController < ApplicationController

    def create
        @user = User.find_by_credentials(params[:user][:username], params[:user][:password])
        if @user.nil?
            flash.now[:errors] = ['Invalid username or password.']
            render status_code: 422
        else
            login_user(@user)
            render :show
        end
    end

    def destroy
        if current_user
            logout!
            render json: {}
        else
            render status_code: 404
        end
    end

end