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
    if (this.state.selected) {
      return "tile-selected";
    } else {
      return "tile";
    }
  }

  render () {
    return (
      <div className={this.className()}
           key={`Tile ${this.props.x}, ${this.props.y}`}
           onClick={this.handleClick}
           id={`Tile ${this.props.y}`}>
      </div>
    );
  }
}

export default Tile;
