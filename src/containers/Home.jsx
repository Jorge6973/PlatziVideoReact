import React from 'react';
import PropTypes from 'prop-types';
import Header from '../components/Header';
import Search from '../components/Search';
import Categories from '../components/Categories';
import Carousel from '../components/Carousel';
import CarouselItem from '../components/CarosuelItem';
import Footer from '../components/Footer';
import useInitialState from '../hooks/useInitialState';
import '../assets/styles/App.scss';

const API = 'http://localhost:3000/initialState';

const Home = () => {
  const initialState = useInitialState(API);
  return (
    <div className='app'>
      <Header />
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

      <Footer />
    </div>
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
