import React from "react";

const Carousel = () => {
  return (
    <div
      id="carouselExampleIndicators"
      class="carousel slide"
      data-mdb-ride="carousel"
    >
      <div class="carousel-indicators">
        <button
          type="button"
          data-mdb-target="#carouselExampleIndicators"
          data-mdb-slide-to="0"
          class="active"
          aria-current="true"
          aria-label="Slide 1"
        ></button>
        <button
          type="button"
          data-mdb-target="#carouselExampleIndicators"
          data-mdb-slide-to="1"
          aria-label="Slide 2"
        ></button>
      </div>
      <div class="carousel-inner">
        <div class="carousel-item active">
          <img
            src="https://media.istockphoto.com/id/1323859203/photo/music-shop-interior-and-large-collection-of-classic-acoustics-guitars-for-sale.jpg?b=1&s=170667a&w=0&k=20&c=T07ILI43_t_ALyuVvQ42VvGaBI0gyu_k8PbRgkV6yQg="
            class="d-block w-100"
            alt="Wild Landscape"
          />
        </div>
        <div class="carousel-item">
          <img
            src="https://www.parkgrandkensington.co.uk/blog/wp-content/uploads/2017/09/Guitar-shop.jpg"
            class="d-block w-100"
            alt="Camera"
          />
        </div>
      </div>
      <button
        class="carousel-control-prev"
        type="button"
        data-mdb-target="#carouselExampleIndicators"
        data-mdb-slide="prev"
      >
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button
        class="carousel-control-next"
        type="button"
        data-mdb-target="#carouselExampleIndicators"
        data-mdb-slide="next"
      >
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>
    </div>
  );
};

export default Carousel;
