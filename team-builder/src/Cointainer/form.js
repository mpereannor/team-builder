import React from 'react';

export default function Form(props) {
const { onNameChange, onAgeChange, onNationalityChange, onMarketValueChange, onFormSubmit } = props;
const { name, age, nationality, marketValue } = props.form;

const isDisabled = () => {
  if(!name || !age || !nationality || !marketValue) {
    return true;
  }
  return false;
};

    return (
      <form>

        <label htmlFor='nameInput'>Name</label>
        <input
          value={name}
          onChange={onNameChange}
          id='nameInput'
          type='text'
        />
  
        <label htmlFor='ageInput'>Age</label>
        <input
          value={age}
          onChange={onAgeChange}
          id='ageInput'
          type='text'
        />

        <label htmlFor='nationalityInput'>Nationality</label>
        <input
            value={nationality}
            onChange={onNationalityChange}
            id='nationalityInput'
            type='text'
        />

        <label htmlFor='marketValueInput'>Market Value</label>
        <input
            value={marketValue}
            onChange={onMarketValueChange}
            id='marketValueInput'
            type='text'
        />

        <button
          disabled={isDisabled()}
          onClick={onFormSubmit}
        >
          submit
        </button>

      </form>
    );
  }