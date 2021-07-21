import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Search from '../components/Search';
import Categories from '../components/Categories';
import Carousel from '../components/Carousel';
import CarouselItem from '../components/CarosuelItem';
import useInitialState from '../hooks/useInitialState';
import '../assets/styles/App.scss';

const API = 'http://localhost:3000/initialState';

const Home = () => {
  const initialState = useInitialState(API);
  return (
    <>
      <Search />

      {
        initialState.mylist.length > 0 && (
          <Categories title='Mi Lista'>
            <Carousel>
              {
                // eslint-disable-next-line react/jsx-props-no-spreading
                initialState.mylist.map((item) => <CarouselItem key={item.id} {...item} />)
              }
            </Carousel>
          </Categories>
        )
      }

      <Categories title='Tendencias'>
        <Carousel>
          {
            // eslint-disable-next-line react/jsx-props-no-spreading
            initialState.trends.map((item) => <CarouselItem key={item.id} {...item} />)
          }
        </Carousel>
      </Categories>

      <Categories title='Originales de Platzi'>
        <Carousel>
          {
            // eslint-disable-next-line react/jsx-props-no-spreading
            initialState.originals.map((item) => <CarouselItem key={item.id} {...item} />)
          }
        </Carousel>
      </Categories>
    </>
  );
};

CarouselItem.propTypes = {
  cover: PropTypes.string,
  title: PropTypes.string,
  year: PropTypes.number,
  contentRaiting: PropTypes.string,
  duration: PropTypes.number,
};

export default Home;
