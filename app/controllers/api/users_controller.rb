class Api::UsersController < ApplicationController

  def create
    @user = User.new(user_params)
    if @user.save
      login(@user)
      render :show
    else
      render json: @user.errors.full_messages, status: 422
    end
  end

  def show
  end

  def find
    user = User.find_by(username: params[:user][:username])
    verify = params[:user][:action]
    if (user && verify == "verify") || (!user && verify == "check")
      render json: {}
    elsif (user && verify == "check")
      render json: ["Username already exists"], status: 422
    elsif (!user && verify == "verify")
      render json: ["Couldn't find your account"], status: 422
    end
  end


  private

  def user_params
    params.require(:user).permit(:username, :password)
  end


end
