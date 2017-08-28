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

  def update
    @user = User.find(params[:id])
    if @user.update(user_params)
      render :show
    else
      render json: @user.errors.full_messages, status: 422
    end
  end

  def find
    user = User.find_by(username: params[:user][:username])
    verify = params[:user][:action]
    if params[:user][:username].length == 0
      render json: ["Username can't be blank"], status: 422
    elsif (user && verify == "verify") || (!user && verify == "check")
      render json: {}
    elsif (user && verify == "check")
      render json: ["Username already exists"], status: 422
    elsif (!user && verify == "verify")
      render json: ["Couldn't find your account"], status: 422
    end
  end


  private

  def user_params
    params.require(:user).permit(:username, :password, :image)
  end


end
