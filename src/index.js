import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';
import GameBoard from './components/GameBoard';
import * as serviceWorker from './serviceWorker';

// NOTE: Create a standard renderable DOM element that will hold the game "canvas"
// this element will inturn use a game board component that will display the
// clickable cells. All the model is just going to be included in the components
// and the components will just either just be functions with props or classes.
class GameCanvas extends React.Component {
  state = {
    bombs: 10,
    height: 10,
    width: 10,
  };

  render() {
    const {bombs, height, width} = this.state
    return (
      <div className = "gameboard">
        <GameBoard height={height} width={width} bombs={bombs}/>
      </div>
    )
  }
}

ReactDOM.render(
  <GameCanvas/>,
  document.getElementById('root')
);

// NOTE: I'm not going to worry about offline first progressive apps here.

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
