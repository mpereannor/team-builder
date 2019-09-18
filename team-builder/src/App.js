import React, {useState} from 'react';
import uuid from 'uuid';
import Form from './Cointainer/form';
import ReactDOM from 'react-dom';

//declaration of initial values 
const initTeamList = 

[
{id: uuid(), name: 'Leo Messi', age:'32', nationality: 'Argentina', marketValue: '150 million'},
{id: uuid(), name: 'Sergio Busquets', age: '31', nationality: 'Spain', marketValue: '50 million'}
]

const initFormValue = 
{
    name: '',
    age: '',
    nationality: '',
    marketValue: ''
};

const App = () => {

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
          nationality: e.target.value,
          marketValue: form.marketValue
      })
  }

  const onMarketValueChange = e => {
      setForm({
          name: form.name,
          age: form.age,
          nationality: form.nationality,
          marketValue: e.target.value
      });
  };

  const onFormSubmit = e => { 
    e.preventDefault();

    const newMember = {
      id: uuid(),
      name: form.name,
      age: form.age,
      nationality: form.nationality,
      marketValue: form.marketValue
    };

    const newTeamList = teamList.concat(newMember);
    setTeamList(newTeamList);
    setForm(initFormValue);
    }

  return(
    <>
      <Form

      // handlers that can change app state

      onNameChange={onNameChange}
      onAgeChange={onAgeChange}
      onNationalityChange={onNationalityChange}
      onMarketValueChange={onMarketValueChange} 
      onFormSubmit={onFormSubmit}

      // data we need to hydrate the form inputs

      form={form}

      />
      {
        teamList.map(member =>( 
        <h5 key={member.id}>
        {member.name} {member.age} {member.nationality} {member.marketValue}
        </h5>
        ))
      }
    
    </>
  )
}
export default App;
