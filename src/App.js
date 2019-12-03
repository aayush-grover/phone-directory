import React, { Component } from 'react';
import { enumDeclaration } from '@babel/types';


class App extends Component {
  render()
  {
  return (
   <div>
           <div className="header">
             Phone Directory
           </div>
           <button>Add</button>
           <div>
             <span>Name</span><br />
             <span>Phone</span>
           </div>
   </div>
          
        
  );
}
}


export default App;