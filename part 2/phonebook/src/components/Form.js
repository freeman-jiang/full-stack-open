import React from 'react';

const Form = ({
  handleSubmit,
  handleNameChange,
  handlePhoneChange,
  newName,
  newNumber,
}) => {
  return (
    <form onSubmit={handleSubmit}>
      <div>
        name: <input onChange={(e) => handleNameChange(e)} value={newName} />
      </div>
      <div>
        number:{' '}
        <input onChange={(e) => handlePhoneChange(e)} value={newNumber} />
      </div>
      <div>
        <button type='submit'>add</button>
      </div>
    </form>
  );
};

export default Form;
