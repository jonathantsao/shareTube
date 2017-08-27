import * as CommentUtil from '../util/comment_util.js';
import { receiveErrors } from './ui_actions';
export const RECEIVE_COMMENTS = 'RECEIVE_COMMENTS';



export const receiveComments = (comments) => {
  return {
    type: RECEIVE_COMMENTS,
    comments: comments.comments_list
  };
};

export const getComments = (videoId) => (dispatch) => {
  return CommentUtil.getComments(videoId)
    .then((comments) => {
      return dispatch(receiveComments(comments));}
    );
};

export const createComment = (comment) => (dispatch) => {
  return CommentUtil.createComment(comment)
    .then((newComment) => {
     return dispatch(getComments(newComment.video_id));
     },
    (errors) => dispatch(receiveErrors(errors.responseJSON)));
};

export const deleteComment = (comment) => (dispatch) => {
  return CommentUtil.deleteComment(comment)
    .then((newComment) => {
      return dispatch(getComments(newComment.video_id));
    });
};

export const editComment = (comment) => (dispatch) => {
  return CommentUtil.editComment(comment)
    .then((newComment) => {
      return dispatch(getComments(newComment.video_id));
    });
};
