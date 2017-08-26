# ShareTube
Heroku Link ______
## Minimum Viable Product
ShareTube is a web application modeled after YouTube built using Ruby on Rails and React/Redux. By September 1st, ShareTube will at minimum satisfy the following criteria.
#### Major Features
- [ ] Hosted on Heroku
- [x] New Account creation, login, and guest/demo login
- [ ] Videos
  - Users will have the ability to upload and view videos
- [ ] Comments
  - Users will have the ability to make comments on videos
- [ ] Likes
  - Users will have the ability to "like" a video and/or comment
- [ ] Video Search
  - Users will have the ability to search for videos based on title/description
- [ ] Production README
- [ ] Adequate styling on all pages
- [ ] Smooth, bug-free navigation
- [ ] Adequate and appropriate seeds to demonstrate application features

#### Bonus Features
- [ ] Subscriptions
  - Users should have the ability to subscribe to subscribe to other users
- [ ] Scrolling
  - Lists videos sideways
- [ ] User specificity
  - Displays videos based on
    - [ ] Subscriptions
    - [ ] History
    - [ ] Recommended
- [ ] Video Playlists
- [ ] Google OmniAuth

## Design Docs
- [Wireframes](wireframes/)
- [API Endpoints](api-endpoints.md)
- [Component Hierachy](component-hierarchy.md)
- [Sample State](sample-state.md)
- [Schema](schema.md/)

## Implementation Timeline

### Phase 1: Backend Setup and Front End Authentication (1 Day)
#### Objective: Create functional user authentication
- [x] New Rails Project
- [x] User Model, Controllers
- [x] BackEnd Authentication
- [x] Hook to Root View
- [x] Redux cycle for frontend authentication
- [x] Session Components
- [x] Style Session components
- [x] User Seed

### Phase 2: Videos Back and Front End(Components) (2 Day)
#### Objective: Videos can be uploaded and viewed
- [x] Video Model, Controllers
- [x] Video Seed
- [x] JBuilder views for videos
- [x] Video Components on Front End
  - [x] Index
  - [x] Form
  - [x] Show

### Phase 3: Comments Back and Front End(Components) (1 Day)
#### Objective: Comments can be created and edited
- [ ] Comment Model, Controllers
- [ ] Comment Seed
- [ ] JBuilder views for comments
- [ ] Comment Components on Front End
  - [ ] Index
  - [ ] Form (create and edit)

### Phase 4: Likes Back and Front End(Components) (1 Day)
#### Objective: Likes can be created
- [ ] Like Model, Controllers
- [ ] Like Seed
- [ ] JBuilder views for likes
- [ ] Like Components on Front End
  - [ ] Video Likes
  - [ ] Comment Likes

### Phase 5: Search (2 Day)
#### Objective: Videos can be searched by title or description
- [ ] JBuilder views with search query
- [ ] Search page with video info


### Bonus Phase: Subscriptions, scrolling, OAuth
#### Objective: Users can subscribe, videos are displayed horizontally, implement 0Auth API
- [ ] Create association in users model for subscriptions
- [x] Develop sideways scrolling for video display on home page
- [ ] Utilize OAuth with google
