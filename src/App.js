import React from 'react';

import {BrowserRouter, Route} from "react-router-dom";

import Header from './components/Header.js';
import Footer from './components/Footer.js';
import Home from './pages/Home.js';
import History from './pages/History.js';
import Help from './pages/Help.js';
// import Results from './components/Results.js';
// import Form from './components/Form.js';

import './design/design.scss';

class App extends React.Component {

  render() {
    return (
      <BrowserRouter>
        <Header />
        <main>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/history">
            <History />
          </Route>
          <Route exact path="/help">
            <Help />
          </Route>
        </main>
        <Footer />
      </BrowserRouter>
    );
  }
}

export default App;








// import React from 'react';
// // import './design/App.scss';
// // import axios from 'axios';
// import Home from './pages/Home.js';

//   class App extends React.Component {
    
//     constructor (props) {
//       super(props) 
//       console.log('constructing ....')
//       this.state = {
//         title: 'Fetching...',
//         creatures: []
//       }
//     }
    
//     componentDidMount () {
//       console.log ('mounted ...');
//     }
    
//     componentDidUpdate () {
//       console.log('updated');
//     }
    
//     render() {
      
//       console.log('rendering ... ');
      
      
//       return (
//         <div>
//         <Home/>
//         {/* <ul>
//           <li> Hello Moto </li>
//           <li> I need help </li>
          
//         </ul> */}
//         </div>
//         )
//       } 
//     }
  
    
    
//     export default App;
