import React from 'react';
import Carousel from 'nuka-carousel';
import ViewbarIndexItem from './viewbar_index_item';
import createReactClass from 'create-react-class';


class ViewBarCarousel extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      width: $(window).width()
    };

    this.updateWidth = this.updateWidth.bind(this);
    this.slidesCount = this.slidesCount.bind(this);

  }

  componentDidMount() {
    window.addEventListener("resize", this.updateWidth);
  }

  updateWidth() {
    this.setState({
      width: $(window).width()
    });
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.updateWidth);
  }

  slidesCount() {
    let count;
    if (this.state.width > 1500) {
      count = 6;
    } else if (this.state.width > 1350 && this.state.width <= 1500) {
      count = 5;
    } else if (this.state.width > 1000 && this.state.width <= 1350) {
      count = 4;
    }
    return count;
  }


  render() {

    const videos = this.props.videos.map((video) => {
      return (
        <ViewbarIndexItem key={`${video.id}`} video={video}/>
      );
    });

    const slidesCount = this.slidesCount();

    return (
      <Carousel
        slidesToShow={slidesCount}
        slidesToScroll={slidesCount}
        dragging={true}
        decorators={[{
          component: createReactClass({
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
          component: createReactClass({
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
