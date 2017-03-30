import React from 'react';

class Tile extends React.Component {
  constructor (props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.className = this.className.bind(this);
    this.state = { selected: false };
  }


  handleClick () {
    this.setState({ selected: !this.state.selected });
  }

  className () {
    return this.state.selected ? "tile-selected" : "tile";
  }

  deltas () {
    let delts = [[1,0], [-1,0], [0,-1], [0, 1]];
    let relativeDelts;
    delts.forEach(delt => {
      let x, y;
      x = delt[0] + this.props.x;
      y = delt[1] + this.props.y;
      if (x > 0 && x <= 16 && y > 0 && y <= 16) {
        relativeDelts.push([x, y]);
      }
    });
  }

  primaryHit () {
    this.deltas.forEach(delta => {
      let delt = document.getElementById(`${delta[0]},${delta[1]}`);
      delt.style.backgroundColor = 'white';
    });
  }

  secondaryHit () {

  }

  render () {
    return (
      <div className={this.className()}
           key={`Tile ${this.props.x}, ${this.props.y}`}
           onClick={this.handleClick}
           id={[this.props.x, this.props.y]}>
      </div>
    );
  }
}

export default Tile;
