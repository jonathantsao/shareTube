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
    @user = User.find(params[:id])
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

  def subscribe
    @subscription = Subscription.new(
    subscriber_id: params[:id],
    subscribed_id: params[:user][:subscribed_id]
  )
    if @subscription.save!
      @user = User.find(params[:id])
      @subscribed_channel = User.find(params[:user][:subscribed_id])
      @subscriptions = @user.subscribed_channels.map do |sub|
        sub.id
      end
      @new_subscribers = @subscribed_channel.subscribers.map do |sub|
        sub.id
      end
      render json: { subscribers: @new_subscribers, subscriptions: @user.subscriptions_to, subscribed_channels: @subscriptions }
    else
      render json: @subscription.errors.full_messages, status: 422
    end
  end

  def unsubscribe
    @subscription = Subscription.find_by(
    subscriber_id: params[:id],
    subscribed_id: params[:user][:subscribed_id]
  )
    if @subscription.destroy
      @user = User.find(params[:id])
      @subscribed_channel = User.find(params[:user][:subscribed_id])
      @subscriptions = @user.subscribed_channels.map do |sub|
        sub.id
      end
      @new_subscribers = @subscribed_channel.subscribers.map do |sub|
        sub.id
      end
      render json: { subscribers: @new_subscribers, subscriptions: @user.subscriptions_to, subscribed_channels: @subscriptions }
    else
      render json: @subscription.errors.full_messages, status: 422
    end
  end


  private

  def user_params
    params.require(:user).permit(:username, :password, :image, :subscribed_id)
  end


end
