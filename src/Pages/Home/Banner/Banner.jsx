import React from 'react';

import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import BannerItems from './BannerItems';
import bg1 from '../../../assets/images/banner/bg1.jpg'
const Banner = () => {
      const [index, setIndex] = useState(0);

      const handleSelect = (selectedIndex) => {
            setIndex(selectedIndex);
      };
      const number = [
            { _id: 1, slideName: 'First Slide', img: bg1, description: 'jkashf asdfbasdjh sdafbnasdf sdafnhjkas sdfhjask hasdjka hsdf aadf amkjhadsf ' },
            { _id: 2, slideName: 'Second Slide', img: bg1, description: 'jkashf asdfbasdjh sdafbnasdf sdafnhjkas sdfhjask hasdjka hsdf aadf amkjhadsf ' },
            { _id: 3, slideName: 'Third Slide', img: bg1, description: 'jkashf asdfbasdjh sdafbnasdf sdafnhjkas sdfhjask hasdjka hsdf aadf amkjhadsf ' }

      ]
      return (
            <Carousel  className=' container ' activeIndex={index} onSelect={handleSelect}>
                  {
                        number.map(n =>
                              <Carousel.Item className='position-relative' key={n._id}>
                                    <img
                                          className="d-block w-100 rounded"
                                          src={n.img}
                                          alt={n.slideName}
                                    />
                                    <Carousel.Caption className='position-absolute top-50 start-0 translate-middle-y text-start bg-dark opacity-75 ps-5 '>
                                          <div>
                                                <h2>{n.slideName}</h2>
                                                <p>{n.description}</p>
                                          </div>
                                    </Carousel.Caption>
                              </Carousel.Item>)
                  }
            </Carousel>
      );
};

export default Banner;