import React from 'react';
import Carousel from 'nuka-carousel';
import ViewbarIndexItem from './viewbar_index_item';
import createReactClass from 'create-react-class';
import { slidesCount } from '../../util/functions';


class ViewBarCarousel extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      width: $(window).width()
    };

    this.updateWidth = this.updateWidth.bind(this);
    this.count = this.count.bind(this);

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

  count() {
    return slidesCount(this.state.width);
  }


  render() {

    const videos = this.props.videos.map((video) => {
      return (
        <ViewbarIndexItem key={`${video.id}`} video={video}/>
      );
    });

    const count = this.count();

    return (
      <Carousel
        slidesToShow={count}
        slidesToScroll={count}
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
