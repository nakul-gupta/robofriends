import React from 'react';
import Card from './Card';

const CardList = ({robots}) => {
    return (
        <div>
        {
            robots.map((robot,i) => {
            return <Card 
                    key={i} 
                    email={robot.email} 
                    name={robot.name} 
                    id={robot.id} 
                    />
            })
        }
        </div>
    )
}

export default CardList;