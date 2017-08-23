class Api::VideosController < ApplicationController
  # before_action require_logged_in, only: [:create]

  def index
    @videos = Video.all
    @video_ids = []
    @videos.each do |video|
      @video_ids << video.id
    end
  end

  def create
    @video = Video.new(video_params)
    if @video.save
      render :show
    else
      render json: @video.errors.full_messages, status: 422
    end
  end

  def show
    @video = Video.find(params[:id])
  end

  def update
    @video = Video.find(params[:id])
    if @video.update(video_params)
      render :show
    else
      render json: @video.errors.full_messages, status: 422
    end
  end

  def destroy
    @video = Video.find(params[:id])
    if @video.destroy!
      render json: {}
    else
      render json: @video.errors.full_messages, status: 401
    end
  end

  private

  def video_params
    params.require(:video).permit(:user_id, :title, :description, :video)
  end



end
