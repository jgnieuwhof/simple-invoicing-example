import React, { Component } from 'react';
import { Grid } from 'react-bootstrap'

import Header from './Header'
import Main from './Main'

class App extends Component {
  render() {
    return (
      <div className="app-container">
        <Header showHeader={true} />
        <Grid>
          <Main />
        </Grid>
      </div>
    );
  }
}

export default App;
