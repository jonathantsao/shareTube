class Api::CommentsController < ApplicationController

  def index
    @comments = Comment.all.where(video_id: params[:video_id]).order(created_at: :desc)
  end

  def create
    @comment = Comment.new(comment_params)
    if @comment.save
      render :show
    else
      render json: @comment.errors.full_messages, status: 422
    end
  end

  def show
  end

  def update
    @comment = Comment.find(params[:id])
    if @comment.update(comment_params)
      render :show
    else
      render json: @comment.errors.full_messages, status: 422
    end
  end

  def destroy
    @comment = Comment.find(params[:id])
    if @comment.destroy!
      render :show
    else
      render json: @comment.errors.full_messages, status: 401
    end
  end

  private

  def comment_params
    params.require(:comment).permit(:body, :user_id, :video_id)
  end


end
