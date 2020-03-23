import React from 'react';
import PropTypes from 'prop-types';

export default class GameBoard extends React.Component {
  state = {
    board_data: this.getBoardData(),
    status: "Playing"
  }

  render() {
    return (
      <div className="gameboard">
        <div className="gameinfo">
          <span className="gamestatus">
            {this.gamestate.status}
          </span>
        </div>
        {this.renderGame(this.state.board_data)}
      </div>
    )
  };
}

GameBoard.propTypes = {
  bombs: PropTypes.number,
  height: PropTypes.number,
  width: PropTypes.number
}