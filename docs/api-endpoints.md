# API Endpoints

## HTML API

## Root
- GET / - loads React web app

## JSON API

### Users
- POST /api/users
- PATCH /api/users

### Session
- POST /api/session
- DELETE /api/session

### Videos
- POST /api/videos
- GET /api/videos
  - video index with search with potential search query
- GET /api/videos/:videoId
- PATCH /api/videos/:videoId
- DELETE /api/videos/:videoId

### Comments
- POST /api/videos/:videoId/comments
  - post comment on particular video
- GET /api/videos/:videoId/comments
  - video index for particular video
- PATCH /api/comments/:commentId
- DELETE /api/comments/:commentId

### Likes
- POST /api/videos/:videoId/likes
  - like/dislike a particular video
  - only allow for max 1
- POST /api/comment/:commentId/likes
  -like/dislike a particular comment
  - only allow for max 1
- DELETE /api/likes/:likeId
