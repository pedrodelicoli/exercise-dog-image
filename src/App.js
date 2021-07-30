import React from 'react';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      dog: {},
    };
    this.fechtDog = this.fechtDog.bind(this);
  }

  componentDidMount() {
    this.fechtDog();
  }

  fechtDog() {
    fetch('https://dog.ceo/api/breeds/image/random')
      .then((response) => response.json())
      .then((data) => this.setState({ dog: data }));
  }

  render() {
    const { dog } = this.state;
    if (dog === '') return 'loading...';
    return (
      <div>
        <div className="App">
          <img alt="Ramdom dog" src={ dog.message } />
        </div>
        <div>
          <button type="submit" onClick={ this.fechtDog }>
            Novo Dog
          </button>
        </div>
      </div>
    );
  }
}

export default App;
