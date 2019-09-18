import React, {useState} from 'react';

export default function Form(props) {
    // what data does the form need to populate itself?
    // what callbacks does the form need to perform
    // its basic functions of updating fields and submitting?
    
    //IMPORTANT 

    // const { onNameChange, onAgeChange, onFormSubmit } = props;
    // const { name, age } = props.friendForm;
    // const isDisabled = () => {
    //   if (!name || !age) {
    //     return true;
    //   }
    //   return false;
    // };

    //IMPORTANT 
  
    return (
      <form>

        <label htmlFor='nameInput'>Name</label>
        <input
          value={name}
          id='nameInput'
          type='text'
        />
  
        <label htmlFor='ageInput'>Age</label>
        <input
          value={age}
          id='ageInput'
          type='number'
        />

        <label htmlFor='nationalityInput'></label>
        <input
            value={nationality}
            id='nationalityInput'
            type='text'
        />

        <label htmlFor='marketValueInput'></label>
        <input
            value={marketValue}
            id='marketValueInput'
            type='text'
        />

        <button
          disabled={false}
        >
          submit
        </button>

      </form>
    );
  }