class Api::SessionsController < ApplicationController

    def create
        @user = User.find_by_credentials(params[:user][:email], params[:user][:password])
        debugger
        if @user.nil?
            render json: ['Invalid email or password.'], status: 422
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