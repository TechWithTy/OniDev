import './carousel.scss'
import Carousel from 'react-multi-carousel';
import { ProductContext } from '../../pages/oniContext';
import { CardComp } from '../cards/card';
import Button from '../../components/common/button';

import 'react-multi-carousel/lib/styles.css';
import React, {useState,useEffect,useContext} from 'react'

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

export const PackageCarousel = (props) => {
  const productConsumer = useContext(ProductContext);
 
    return (
      <Carousel
        swipeable={true}
        responsive={responsive}
        showDots={true}
        infinite={true}
        ssr={true}
        removeArrowOnDeviceType={['tablet', 'mobile']}
        dotListClass="custom-dot-list-style"
        itemClass="carousel-item-padding-40-px"
        arrows={true}
        // dotListClass="custom-dot-list-style"
      >
        {productConsumer.activePackage.map((service, index) => (
          <CardComp
            key={index}
            title={service.title}
            text={service.content}
            addOns={service.addOns}
            
          />
        ))}
      </Carousel>
    );

}