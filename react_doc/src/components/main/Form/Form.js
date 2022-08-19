import React, {useState} from "react";

function Form() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    comments: '',
    isFriendly: true,
    employment: '',
    favColor: ''
  });

  function handleChange(event) {
    const {name, value, type, checked} = event.target;
    setFormData((prevFormData) => {
      return {
        ...prevFormData,
        [name]: type === 'checkbox' ? checked : value
      };
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    console.log(formData);
  }

  return (
    <form onSubmit={handleSubmit}>
      <input 
        type="text" 
        placeholder="first name" 
        onChange={handleChange} 
        name="firstName"
        value={formData.firstName}
        />
      <input
        type="text"
        placeholder="last 
        name"
        onChange={handleChange}
        name="lastName"
        value={formData.lastName}
      />
      <input 
        type="email" 
        placeholder="email" 
        onChange={handleChange} 
        name="email" 
        value={formData.email}
        />-
      <textarea 
        placeholder="comments"
        onChange={handleChange} 
        value={formData.comments}
        name="comments"
      />
      <input 
        type="checkbox"
        id='isFriendly'
        checked={formData.isFriendly}
        onChange={handleChange}
        name='isFriendly'
      />
      <label htmlFor='isFriendly'>are u single?</label>
      <fieldset>
        <input
          type='radio'
          id='unemployed'
          name='employment'
          value='unemployed'
          checked={formData.employment === 'unemployed'}
          onChange={handleChange}
        />
        <label htmlFor='unemployed'> unemployed</label>
        <br/>

        <input
          type='radio'
          id='part-time'
          name='employment'
          value='part-time'
          checked={formData.employment === 'part-time'}
          onChange={handleChange}
        />
        <label htmlFor='part-time'> part-time</label>
        <br/>

        <input
          type='radio'
          id='full-time'
          name='employment'
          value='full-time'
          checked={formData.employment === 'full-time'}
          onChange={handleChange}
        />
        <label htmlFor='full-time'> full-time</label>
        <br/>
      </fieldset>
      <br/>
      <label htmlFor='favColor'>Color?</label>
      <br/>
      <select
        id='favColor'
        value={formData.favColor}
        onChange={handleChange}
        name='favColor'
      >
        <option value='red'>red</option>
        <option value='orange'>orange</option>
        <option value='green'>green</option>
        <option value='blue'>blue</option>
      </select>
      <br/>
      <button>send</button>
    </form>
  );
}

export default Form;