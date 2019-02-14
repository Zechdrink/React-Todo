import React from 'react';

class App extends React.Component {
  //constructor
 
  //render is a lifecycle method => returns our jsx
  render() {
    return (
      <div className = "App">
          Testing.
      </div>
    );
  }
}

export default App;

  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state