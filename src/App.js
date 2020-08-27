import React, { Component, lazy, Suspense } from 'react';
import Loader from './components/Loader';
const PageDefault = lazy( () => import('./components/PageDefault'));

class App extends Component{
  render(){

    return (
      <Suspense fallback={<Loader/>}>
        <div className="Container">
          <PageDefault/>
        </div>
      </Suspense>
    );
  }
}

export default App;
