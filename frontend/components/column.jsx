import React from 'react';
import Tile from './tile';

class Column extends React.Component {

  render () {
    const tiles = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16];
    const column = tiles.map(idx => <Tile x={this.props.idx} y={idx} key={[this.props.idx, idx]} />);
    return (
      <div className="column" key={this.props.idx} id={this.props.idx}>
        { column }
      </div>
    );
  }
}

export default Column;
