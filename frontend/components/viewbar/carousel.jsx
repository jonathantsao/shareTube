import React from 'react';
import Carousel from 'nuka-carousel';
import ViewbarIndexItem from './viewbar_index_item';


class ViewBarCarousel extends React.Component {

  constructor(props) {
    super(props);
  }


  render() {

    const videos = this.props.videos.map((video) => {
      return (
        <ViewbarIndexItem key={`${video.id}`} video={video}/>
      );
    });

    return (
      <Carousel
        slidesToShow={5}
        slidesToScroll={5}
        dragging={true}
        decorators={[{
          component: React.createClass({
            render() {
              return (
                <button className={this.buttonFunction(this.props.currentSlide === 0)}
                onClick={this.props.previousSlide}>
                  {"<"}
                </button>
              );
            },

            buttonFunction(bool) {
              return bool ? "disabled" : "";
            }
          }),
        position: 'CenterLeft'
      }, {
          component: React.createClass({
            render() {
              return (
                <button className={this.buttonFunction(this.props.currentSlide + this.props.slidesToScroll >= this.props.slideCount)}
                onClick={this.props.nextSlide}>
                  {">"}
                </button>
              );
            },

            buttonFunction(bool) {
              return bool ? "disabled" : "";
            }
          }), position: 'CenterRight' }]}
          >
          {videos}
        </Carousel>
      );
  }

}

export default ViewBarCarousel;
