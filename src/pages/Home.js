import React from 'react';

import Form from '../components/Form.js';
import Results from '../components/Results.js';
import History from '../components/History.js';



class App extends React.Component {

    render() {
        return (
            <div>
                <Form />
                <History />
                <Results />
            </div>
        );
    }
}

export default App;






// import React from 'react';

// // import axios from 'axios';

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
    
//     // Happens after every subsequent render
//     componentDidUpdate () {
//       console.log('updated');
//     }
    
//     // Happens second and then after any setState
//     render() {

//         const creatures = this.state.creatures.map((creature, idx) => 
//         <li key={idx}>{creature.name}</li>
//         );

//       console.log('rendering ... ');
      
      
//       return (
//         <div>
// <h2>{this.state.title}</h2>
//         </div>
//         )
//     } 

  
    
//     export default App;
