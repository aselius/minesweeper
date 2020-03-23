import React from 'react';
import PropTypes from 'prop-types';

export default class GameBoard extends React.Component {
  gamestate = {
    board_data: this.getBoardData(this.props.width, this.props.height, this.props.bombs),
    status: "Playing"
  }

  initialize_matrix(width, heght) {
    return 1
  }

  initialize_random_bombs(data, bombs) {
    return 1
  }

  calculate_cell_numbers(data) {
    return 1
  }

  getBoardData(width, height, bombs) {
    let data = this.initialize_matrix(width, height);
    data = this.initialize_random_bombs(data, bombs);
    data = this.calculate_cell_numbers(data);
    return data;
  }

  render_game(data) {
    return data
  }

  render() {
    return (
      <div className="gameboard">
        <div className="gameinfo">
          <span className="gamestatus">
            {this.gamestate.status}
          </span>
        </div>
        {this.render_game(this.gamestate.board_data)}
      </div>
    )
  };
}

GameBoard.propTypes = {
  bombs: PropTypes.number,
  height: PropTypes.number,
  width: PropTypes.number
}