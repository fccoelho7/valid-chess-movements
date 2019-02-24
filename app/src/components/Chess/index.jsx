import React, { Component } from "react";
import cs from "classnames";

import "./styles.css";

class Chess extends Component {
  state = {
    knightPosition: null,
    availableMoviments: [],
    loading: false
  };

  isActive(x, y) {
    const { knightPosition } = this.state;
    return knightPosition && knightPosition.x === x && knightPosition.y === y;
  }

  isMoviment(x, y) {
    return this.state.availableMoviments.some(
      item => item[0] === x && item[1] === y
    );
  }

  moveKnight = position => this.setState({ knightPosition: position });

  showMoviments = () =>
    // this.setState({ loading: true }, () => {
    //   setTimeout(() => {
    //     this.setState({
    //       availableMoviments: [[2, 3], [4, 5], [1, 7]],
    //       loading: false
    //     });
    //   }, 1000);
    // });
    this.setState({ availableMoviments: [[2, 3], [4, 5], [1, 7]] });

  renderChess = () => {
    const { loading } = this.state;
    const positions = [];

    for (let y = 1; y < 9; y++) {
      let children = [];

      for (let x = 1; x < 9; x++) {
        const coords = `${x}, ${y}`;
        const active = this.isActive(x, y);
        const moviment = this.isMoviment(x, y);

        children.push(
          <div
            className={cs(`item item-${x}-${y}`, {
              active,
              moviment
            })}
            key={coords}
            onClick={() => this.moveKnight({ x, y })}
          >
            {coords}
          </div>
        );
      }

      positions.push(
        <div key={`row-${y}`} className="row">
          {children}
        </div>
      );
    }

    return (
      <div className={cs("chess-board-main", { loading })}>{positions}</div>
    );
  };

  render() {
    return (
      <div className="chess-board">
        <button className="show-moviments" onClick={this.showMoviments}>
          Show Moviments (?)
        </button>
        {this.renderChess()}
      </div>
    );
  }
}

export default Chess;
