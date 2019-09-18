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
const [form, setForm] = useState(initFormValue);

//declaration of functions  *state setters*

const onNameChange = e => {
    setForm({
      name: e.target.value,
      age: form.age,
      nationality: form.nationality,
      marketValue: form.marketValue
    });
  };

const onAgeChange = e => {
    setForm({
        name: form.name,
        age: e.target.value,
        nationality: form.nationality,
        marketValue: form.marketValue
    })
}

const onNationalityChange = e => {
    setForm({
        name: form.name, 
        age: form.age, 
        nationality: e.target.nationality,
        marketValue: form.marketValue
    })
}

const onMarketValueChange = e => {
    setForm({
        name: form.name,
        age: form.age,
        nationality: form.nationality,
        marketValue: e.target.marketValue
    })
}


}