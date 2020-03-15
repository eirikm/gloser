import React from 'react';

interface IProps {
    streak: number
}

function Streak(props: IProps) {
    const {streak} = props;
    const threshold = 2;

    return (
        <div className="Streak">
            {props.streak > threshold ? (streak + " riktige på rad") : null }
        </div>
    );
}

export default Streak;
