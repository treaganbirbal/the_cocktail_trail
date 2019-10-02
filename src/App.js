import React from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios'


class App extends React.Component {
  constructor(){
    super()
  this.state = {
    drinks: []
  }
}
  componentDidMount(){
    axios.get('https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=Cocktail')
    .then(res => {
      this.setState({
        drinks: res.data.drinks
      })
    })
  }
  render(){
  return (
    <div className="App">
      {this.state.drinks.map(drink => {
        return(
          <>
          <h1>{drink.strDrink}</h1>
          <img src={drink.strDrinkThumb} alt=""/>
          </>
        )
      })
      }
    </div>
  );
  }
}

export default App;
