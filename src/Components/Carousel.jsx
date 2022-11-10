import React from 'react';
import {
  MDBCarousel,
  MDBCarouselItem,
} from 'mdb-react-ui-kit';

export default function Carousel() {
  return (
    <MDBCarousel showIndicators showControls fade>
      <MDBCarouselItem
        className='w-100 d-block'
        itemId={1}
        src='https://www.musicstore.com/INTERSHOP/static/WFS/MusicStore-Site/MusicStoreShop/MusicStore-MusicStoreShop/en_US/static-pages/Abteilungsinfos/Header/EGIT_Header.jpg'
        alt='...'
      >
        
      </MDBCarouselItem>

      <MDBCarouselItem
        className='w-100 d-block'
        itemId={2}
        src='https://www.musicstore.com/INTERSHOP/static/WFS/MusicStore-Site/MusicStoreShop/MusicStore-MusicStoreShop/en_US/static-pages/Abteilungsinfos/Header/DJ_Header.jpg'
        alt='...'
      >
        
      </MDBCarouselItem>

      <MDBCarouselItem
        className='w-100 d-block'
        itemId={3}
        src='https://upload.wikimedia.org/wikipedia/commons/c/c2/Music_Store_-_K%C3%B6ln-Kalk-5790.jpg'
        alt='...'
      >
        
      </MDBCarouselItem>
    </MDBCarousel>
  );
}