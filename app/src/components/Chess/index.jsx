import React, { Component } from "react";
import cs from "classnames";
import KnightService from "../../services/KnightService";
import formatPosition from "./utils/formatPosition";

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

  moveKnight = position =>
    this.setState({ knightPosition: position, availableMoviments: [] });

  showMoviments = () => {
    const { knightPosition } = this.state;

    if (!knightPosition) return;

    const formatedPosition = formatPosition(knightPosition);

    this.setState({ loading: true }, async () => {
      try {
        const availableMoviments = await KnightService.getMoviment(
          formatedPosition
        );
        this.setState({ availableMoviments, loading: false });
      } catch {
        this.setState({ loading: false });
      }
    });
  };

  renderChess = () => {
    const positions = [];

    for (let y = 1; y < 9; y++) {
      let children = [];

      for (let x = 1; x < 9; x++) {
        const coords = `${x}, ${y}`;
        const active = this.isActive(x, y);
        const moviment = this.isMoviment(x, y);

        children.push(
          <div
            className={cs(`square square-${x}-${y}`, {
              active,
              moviment
            })}
            key={coords}
            onClick={() => this.moveKnight({ x, y })}
          />
        );
      }

      positions.push(
        <div key={`row-${y}`} className="row">
          {children}
        </div>
      );
    }

    return <div className="chess-board-main">{positions}</div>;
  };

  render() {
    return (
      <div className="chess-board">
        <button className="btn show-moviments" onClick={this.showMoviments}>
          {this.state.loading ? "Loading.." : "Show Moviments (?)"}
        </button>
        {this.renderChess()}
      </div>
    );
  }
}

export default Chess;
