import * as React from 'react';
import { BoardState } from './GameState';

type LogProps = {
  history: BoardState[];
  jumpTo: (step: number) => void;
};

export function Log(props: LogProps) {
  return (
    <ol>
      {props.history.map((_, index) => {
        return (
          <li key={index}>
            <button onClick={() => props.jumpTo(index)}>
              Ir para o {index === 0 ? 'Começo' : `Movimento #${index}`}
            </button>
          </li>
        );
      })}
    </ol>
  );
}
