import React from 'react';
import Counter from './Counter';

const Player = (props) => {
        const { 
            name,
            id,
            score,
            index,
            removePlayer,
            changeScore
        } = this.props;
        return (
            <div className="player">
                <span className="player-name">
                    <button className="remove-player" onClick={() => removePlayer(id)}>✖</button>
                    { name }
                </span>

                <Counter 
                    score={score}
                    index={index}
                    changeScore={changeScore} 
                />
            </div>
        );
    }
}

export default Player;