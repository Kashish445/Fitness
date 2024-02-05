import React, { useState } from 'react';
import './nutri.css';

function App() {
  const [diet, setDiet] = useState({
    Monday: '',
    Tuesday: '',
    Wednesday: '',
    Thursday: '',
    Friday: '',
    Saturday: '',
    Sunday: '',
  });

  const handleInputChange = (day, value) => {
    setDiet((prevDiet) => ({
      ...prevDiet,
      [day]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Simulate saving data to a fake API (JSONPlaceholder)
      const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(diet),
      });

      if (response.ok) {
        alert('Data saved successfully!');
      } else {
        alert('Failed to save data');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div className="app-container">
      <div className="input-container">
        <h1 className="title">Diet Tracker</h1>
        <form className="diet-form" onSubmit={handleSubmit}>
          {Object.keys(diet).map((day) => (
            <div key={day} className="day-input">
              <label htmlFor={day} className="day-label">{day}:</label>
              <input
                type="text"
                id={day}
                value={diet[day]}
                onChange={(e) => handleInputChange(day, e.target.value)}
                className="day-input-field"
              />
            </div>
          ))}
          <button type="submit" className="submit-button">Save Diet</button>
        </form>
      </div>

      <div className="output-container">
        <div className="weekly-diet">
          <h2 className="weekly-diet-title">Weekly Diet</h2>
          <ul className="diet-list">
            {Object.keys(diet).map((day) => (
              <li key={day} className="diet-item">
                <strong className="day-name">{day}: {diet[day]}</strong> 
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default App;
