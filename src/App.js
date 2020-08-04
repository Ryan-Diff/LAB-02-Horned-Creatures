import React from 'react';
import './App.css';
import Header from './Header.js';
import ImageList from './ImageList.js'
import { images} from './data.js';


class App extends React.Component {
  render() {

    return (
      <>
      <Header />
      <ImageList images={images} />
      </>
    );
  }
}

export default App;
