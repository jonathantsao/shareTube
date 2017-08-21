# Component Hierarchy

## SessionFormContainer:
  - Session Form (login/signup)

## HeaderContainer:
  - Header
    - Search bar
      - Search Form
    - Hamburger Menu
    - Link to upload
  - Hamburger dropdown

## HomeContainer:
  - Home
    - Video index of "trending", "random", "subscriptions"

## SearchContainer:
  - Search results
    -Video index with search query

## VideoFormContainer:
  - VideoForm
    - Video portion
    - Video details portion

## VideoShowContainer:
  - Video portion
  - Video index
    - Related videos only
  - Video Detail
    - Likes
  - Comment Form Container
    - Comment Form
  - Comment Index
    - Likes

## ChannelContainer:
  - User header
  - Video player of most recent video
  - Video Detail
    - Likes
  - Video index
    - Only videos from this user

## Front End Routes

Path | Component
---- | ---------
/ | HomeContainer
/signup | SessionFormContainer
/login | SessionFormContainer
/search | SearchContainer
/video/:videoId | VideoShowContainer
/user/:userId | ChannelContainer
/upload | VideoFormContainer


Note: HeaderContainer will always be present.
