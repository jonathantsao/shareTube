class Api::LikesController < ApplicationController

  def create
    likeable_set = find_likeable
    likeable = likeable_set[0].find(likeable_set[1])
    likeable.likes << Like.create(user_id: params[:like][:user_id], value: params[:like][:value])
    likeable.likes.first.save!
    @like = likeable.likes.first

    render :show
  end

  def destroy
    @like = Like.find(params[:id])
    @like.destroy!
    render :show
  end


  private

  def like_params
    params.require(:like).permit(:user_id, :video_id, :comment_id, :value)
  end

  def find_likeable
    params[:like].each do |name, value|
      if name =~ /(.+)_id$/ && name != "user_id"
        likeable = name.split("_")[0].capitalize.constantize
        return [likeable, value]
      end
    end
    nil
  end


end
