import React from 'react';
import './App.css';
import Header from './Header.js';
import ImageList from './ImageList.js'
import { images} from './data.js';

let keywords = []
images.map(image => {

  if(!keywords.includes(`${image.keyword}`)) {
    keywords.push(`${image.keyword}`)
  }
  return keywords;
})

class App extends React.Component {
  state = {
    filter: ''
  }
  handleKeyword = (e) => {
    const keyword = e.target.value;
    this.setState({ filter: keyword })
  }
  render() {

    const filteredImages = images.filter(image => image.keyword === this.state.filter)

    return (
      <body>
        <Header />
        <main> 
          <select onChange={this.handleKeyword} name='' id=''>
            {
              keywords.map(keyword => <option key={keyword} value={keyword}>{keyword}</option>)
            }
          </select>
          <ImageList images={filteredImages} />
        </main>
      </body>
    );
  }
}

export default App;
