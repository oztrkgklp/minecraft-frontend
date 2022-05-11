import React from 'react';
import Header from '../Header';
import Footer from '../Footer';
import MainPageSlider from './MainPageSlider';
import MainPageNews from './MainPageNews';

// Exports the default MainPage.
const MainPage = () => {
  
  return <div>
      <Header/>
      <MainPageSlider/>
      <MainPageNews/>
      <Footer/>
  </div>;
};

export default MainPage;
