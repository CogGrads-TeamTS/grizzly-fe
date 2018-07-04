import React, { Component } from 'react';
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
} from 'reactstrap';
import noimage from '../../../Assets/noimage.jpg';

let items = [];

const urladdition="http://ts.ausgrads.academy/images/"

const sortImages = (images) => {
  images.sort((x, y) => x.sort - y.sort);
  return images;
}


// Build the slides for the caruosel using images parsed images
const buildImages = (images) => {
  items = []; // Item array
  const size = images == null ? 0 : images.length;
  let i;

  // IF no images show default no-show image
  if(size === 0){
    items.push({
      src: noimage,
      captionText: "Image Caption"
    })
  } else {
    // Sort the images based on their sort values
    images = sortImages(images);
    // Arrange slides by order
    for(i = 0; i < size; i++){
      items.push({
        src: urladdition + images[i].url,
        captionText: "Image Caption"
      })
    }
  }
};


class ProductViewCarousel extends Component {
  constructor(props) {
    super(props);
    this.state = { activeIndex: 0 };
    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
    this.goToIndex = this.goToIndex.bind(this);
    this.onExiting = this.onExiting.bind(this);
    this.onExited = this.onExited.bind(this);
  }

  componentDidMount(){
    
  }

  onExiting() {
    this.animating = true;
  }

  onExited() {
    this.animating = false;
  }

  next() {
    if (this.animating) return;
    const nextIndex = this.state.activeIndex === items.length - 1 ? 0 : this.state.activeIndex + 1;
    this.setState({ activeIndex: nextIndex });
  }

  previous() {
    if (this.animating) return;
    const nextIndex = this.state.activeIndex === 0 ? items.length - 1 : this.state.activeIndex - 1;
    this.setState({ activeIndex: nextIndex });
  }

  goToIndex(newIndex) {
    if (this.animating) return;
    this.setState({ activeIndex: newIndex });
  }

  render() {
    const { activeIndex } = this.state;

    // addItems();
    buildImages(this.props.images)

    const slides = items.map((item) => {
      return (
        <CarouselItem
          onExiting={this.onExiting}
          onExited={this.onExited}
          key={item.src}>
        <div className="carousel-item-img-contain">
          <img src={item.src} alt={item.altText}/>
        </div>
        </CarouselItem>
      );
    });
    
    return (
      <Carousel
        activeIndex={activeIndex}
        next={this.next}
        previous={this.previous}
        interval={10000}
      >
        <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={this.goToIndex} />
        {slides}
        <CarouselControl direction="prev" directionText="Previous" onClickHandler={this.previous} />
        <CarouselControl direction="next" directionText="Next" onClickHandler={this.next} />
      </Carousel>
    );
  }
}


export default ProductViewCarousel;