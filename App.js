import React from 'react';
import { BrowserRouter as Router,Switch,Route } from 'react-router-dom';
import Beranda from './pages/homePage/Beranda'
import ProfileDesa from './pages/ProfileDesa/ProfileDesa';
import Galeri from './pages/Galeri/Galeri';

function App() {
  
 
  return (
    <Router>
      <globalStyle/>
        <Switch>
          <Route path="/" exact component = {Beranda} />
          <Route path="/ProfileDesa" exact component = {ProfileDesa}/>
          <Route path ="/Galeri" exact component={Galeri}/>
        </Switch> 
    </Router>
  );
}

export default App;
