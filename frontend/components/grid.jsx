import React from 'react';
import Column from './column';

class Grid extends React.Component {

  render () {
    let cols = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16];
    let grid = cols.map(idx => <Column idx={idx} key={idx} />);
    return (
      <div id="grid">
        { grid }
      </div>
    );
  }
}

export default Grid;
