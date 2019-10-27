import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import '../style.css';
import {
    Carousel,
    CarouselItem,
    CarouselControl,
    CarouselIndicators} from 'reactstrap';
  
class Slides extends Component {
    constructor(props){
        super(props);
        this.state = { activeIndex: 0 };
        this.next = this.next.bind(this);
        this.previous = this.previous.bind(this);
        this.goToIndex = this.goToIndex.bind(this);
        this.onExiting = this.onExiting.bind(this);
        this.onExited = this.onExited.bind(this);
    }
    onExiting() {
      this.animating = true;
    }
  
    onExited() {
      this.animating = false;
    }
  
    next() {
      if (this.animating) return;
      const nextIndex = this.state.activeIndex === this.props.photos.length - 1 ? 0 : this.state.activeIndex + 1;
      this.setState({ activeIndex: nextIndex });
    }
  
    previous() {
      if (this.animating) return;
      const nextIndex = this.state.activeIndex === 0 ? this.props.photos.length - 1 : this.state.activeIndex - 1;
      this.setState({ activeIndex: nextIndex });
    }
  
    goToIndex(newIndex) {
      if (this.animating) return;
      this.setState({ activeIndex: newIndex });
    } 
    render(){
        const { activeIndex } = this.state;
        const slides = this.props.photos.map((item,index) => {
          return (
            <CarouselItem className="custom-tag"
          onExiting={this.onExiting}
          onExited={this.onExited}
          key={item.key}>
          <img id="place_image" src={item.image}/>
        </CarouselItem>
          );
        });
        return (
          <Carousel
            activeIndex={activeIndex}
            next={this.next}
            previous={this.previous}
          >
            <CarouselIndicators id="slides" items={slides} activeIndex={activeIndex} onClickHandler={this.goToIndex} />
            {slides}
            <CarouselControl  id="slides" direction="prev" directionText="Previous" onClickHandler={this.previous} />
            <CarouselControl  id="slides" direction="next" directionText="Next" onClickHandler={this.next} />
          </Carousel>
        );
     }

 }

export default Slides;