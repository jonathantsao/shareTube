class Api::VideosController < ApplicationController
  # before_action require_logged_in, only: [:create]

  def index
    @filter = params[:video][:filter]
    if @filter == "all"
      @videos = Video.all.limit(12)
    elsif @filter == "hot"
      @videos = Video.order(views: :desc).limit(12)
    elsif @filter == "recent"
      @videos = Video.order(created_at: :desc).limit(12)
    end
    @video_ids = @videos.map do |video|
      video.id
    end
    @video_ids.shuffle!
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
    debugger
  end

  def update
    @video = Video.find(params[:id])
    if params[:video][:add_view]
      @video[:views] += 1
      @video.save!
      render :show
    elsif @video.update(video_params)
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
    params.require(:video).permit(:user_id, :title, :description, :views, :video, :add_view)
  end



end
