import React from "react";
import { MDBCarousel, MDBCarouselItem } from "mdb-react-ui-kit";

export default function Carousel() {
  return (
    <MDBCarousel showIndicators showControls fade className="carousel">
      <MDBCarouselItem
        className="w-100d-block"
        itemId={1}
        src="https://media.blogto.com/articles/20180912-thetwelfthfret-07.jpg?w=2048&cmd=resize_then_crop&height=1365&quality=70"
        alt="..."
      ></MDBCarouselItem>

      <MDBCarouselItem
        className="w-100d-block"
        itemId={3}
        src="https://upload.wikimedia.org/wikipedia/commons/c/c2/Music_Store_-_K%C3%B6ln-Kalk-5790.jpg"
        alt="..."
      ></MDBCarouselItem>
    </MDBCarousel>
  );
}
