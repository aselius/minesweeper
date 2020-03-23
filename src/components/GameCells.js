import React from 'react';
import PropTypes from 'prop-types';

// NOTE: Leftclick opens up a cell, Rightclick flags a cell - onclick, oncontextmenu
// Update the value rendered once one of those two events happen.
// The possible values rendered on the cell include empty values for cells
// that havent been opened yet as well as cells that dont have any mines in
// cells nearby. The cell with the bomb will show the bomb if clicked on.
// The cell that is rightclicked will show a flag.
export default class Cell extends React.Component {
  current_cell_state() {
    const {value} = this.props

    if (!value.revealed) {
      if (value.flagged) {
        return "F";
      } else {
        return null;
      }
    }
    if (value.is_bomb) {
      return "*";
    }
    // Neighbor logic here
    if (value.number === 0) {
      return null
    }
    return value.number
  }

  render() {
    const {value, onClick, onContextMenu} = this.props
    // onClick={} oncontextmenu={} in the div element.

    let className =
      "cell" +
      (value.revealed ? "" : " hidden") +
      (value.is_bomb ? " is-mine" : "") +
      (value.flagged ? " is-flag" : "");

    return(
      <div
        className={className}
        onClick={onClick}
        onContextMenu={onContextMenu}
      >
        {this.current_cell_state()}
      </div>
    );
  }
}

Cell.propTypes = {
  value: PropTypes.object,
  onClick: PropTypes.func,
  onContextMenu: PropTypes.func
}