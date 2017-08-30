class Api::VideosController < ApplicationController
  # before_action require_logged_in, only: [:create]

  def index
    @filter = params[:video][:filter]
    if params[:video][:user_id]
      user = User.find(params[:video][:user_id])
      if @filter == "likes"
        user_video_likes = user.likes.select do |like|
          like.likeable_type == "Video" && like.value == 1
        end
      elsif @filter == "dislikes"
        user_video_likes = user.likes.select do |like|
          like.likeable_type == "Video" && like.value == -1
        end
      end
      @videos = user_video_likes.map { |like| like.likeable }
    elsif @filter == "all"
      @videos = Video.all
      @video_ids = @videos.map { |video| video.id }.shuffle!
      render :index
    elsif @filter == "hot"
      @videos = Video.order(views: :desc)
    elsif @filter == "recent"
      @videos = Video.order(created_at: :desc)
    elsif @filter.include?("search")
      @videos = Video.basic_search(params[:video][:search_query])
      if @filter.include?("hot")
        @videos = @videos.sort_by { |video| video.views }.reverse
      elsif @filter.include?("recent")
        @videos = @videos.sort_by { |video| video.created_at }.reverse
      end
    end
    @video_ids = @videos.map do |video|
      video.id
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
    @video.views += 1
    @video.save!
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
    params.require(:video).permit(:user_id, :title, :description, :views, :video, :add_view, :search_query)
  end

end
