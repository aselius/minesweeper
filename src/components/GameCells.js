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
    if (value.bomb) {
      return "*";
    }
    // Neighbor logic here
  }

  render() {
    // onClick={} oncontextmenu={} in the div element.
    return(
      <div>
        {this.current_cell_state()}
      </div>
    );
  }
}

const cell_item_status = {
  revealed: PropTypes.bool,
  bomb: PropTypes.bool,
  flagged: PropTypes.bool
}

Cell.propTypes = {
  value: PropTypes.objectOf(PropTypes.shape(cell_item_status)),
  click: PropTypes.func,
  ctxmenu: PropTypes.func
}