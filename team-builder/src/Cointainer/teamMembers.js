import React, { useState } from 'react';
import uuid from 'uuid';

//declaration of initial values 
const initTeamList = 
[
{id: uuid(), name: 'Leo Messi', age:'32', nationality: 'Argentina', marketValue: '150 million'}
]

const initFormValue = {
    name: '',
    age: '',
    nationality: '',
    marketValue: ''
}

export default function  EntireTeam () {

//declaration of slices of state
const [teamList, setTeamList] = useState(initTeamList);
const [formState, setFormState] = useState(initFormValue);


}