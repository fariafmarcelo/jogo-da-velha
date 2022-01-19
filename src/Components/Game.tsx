import * as React from 'react';
import { Board } from './Board';
import { useGameState } from './GameState';
import { Row, Column } from './Layout';
import { Log } from './Log';

function Game() {
  const {
    gameState,
    current,
    xIsNext,
    jumpTo,
    winner,
    handleClick,
  } = useGameState();

  return (
    <Row gap={20}>
      <Column gap={20}>
        <div>{
          winner ? `Vencedor ${winner}` : `Próximo Jogador ${xIsNext ? 'X' : 'O'}` 
        }</div>
        <Board board={current} onClick={handleClick} />
      </Column>
      <Log history={gameState.history} jumpTo={jumpTo} />
    </Row>
  );
}

export default Game;