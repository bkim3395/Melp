class ApplicationController < ActionController::Base

  helper_method :current_user, :logged_in?

  def current_user
    @current_user ||= User.find_by(session_token: session[:session_token])
  end

  def logged_in?
    !!current_user
  end

  def logout!
    current_user.session_token = User.generate_session_token
    current_user.save!
    session[:session_token] = nil
  end

  def login_user(user)
    user.reset_session_token!
    session[:session_token] = user.session_token
  end


end
