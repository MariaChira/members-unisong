import React from 'react';
import './card-list.css';

import { Card } from '../card/card';


export const CardList = (props) => {
    return (
        <div className="card-list">
            {props.members.map(member => (
                <Card key={member.id} member={member}/>
            ))}
        </div>
    );
}