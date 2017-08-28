class Api::LikesController < ApplicationController

  def create
    likeable_set = find_likeable
    likeable = likeable_set[0].find(likeable_set[1])
    likeable.likes << Like.new(user_id: params[:like][:user_id])
    @like = Like.last
    render :show
  end

  private

  def like_params
    params.require(:like).permit(:user_id, :video_id, :comment_id)
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
