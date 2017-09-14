class Api::SubscriptionsController < ApplicationController

  def create
    @subscription = Subscription.new(subscription_params)
    if @subscription.save!
      render json: {}
    else
      render json: @subscription.errors.full_messages, status: 422
    end
  end

  def destroy
    @subscription = Subscription.find(params[:id])
    if @subscription.destroy!
      render json: {}
    else
      render json: @subscription.errors.full_messages, status: 422
    end
  end

  def index
    @subscriptions = Subscription.where(subscriber_id: params[:user_id]).order(created_at: :desc).map do |sub|
      sub.subscribed
    end
  end


  private

  def subscription_params
    params.require(:subscription).permit(:subscribed_id, :subscriber_id)
  end

end
