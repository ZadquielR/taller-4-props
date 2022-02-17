import React from 'react';
import Table from './Table';

class App extends React.Component{
    render(){
      const characters = [
        {
          name: "John",
          job: "Smithery"
        },
        {
          name: "Clide",
          job: "Carpenter"
        },
        {
          name: "Wanda",
          job: "Enginner"
        },
        {
          name: "Claudia",
          job: "Manager"
        },
      ];

      return (
      <div className='container'>
        <Table characters={characters} />
      </div>
      );
    }
  }

  export default App;
