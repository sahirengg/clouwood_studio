import React from 'react';
import Checkbox from './containers/checkboxContainer'


class App extends React.Component{
    




    render(){
        return(
          <div className='ui container'>
          <Router>
          <Switch>
          <Route exact path="/" component={Checkbox} />
         
          
          </Switch>
            </Router>
        </div>
        )
    }
}

export default App;