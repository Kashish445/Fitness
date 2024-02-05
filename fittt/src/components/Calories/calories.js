import React, { useState } from 'react';
import './cal.css'
const CalorieCalculator = () => {
  const [height, setHeight] = useState('');
  const [weight, setWeight] = useState('');
  const [age, setAge] = useState('');
  const [gender, setGender] = useState('male');
  const [activityLevel, setActivityLevel] = useState('sedentary');
  const [calories, setCalories] = useState(null);

  const calculateCalories = () => {
    // Harris-Benedict equation for TDEE
    // For males: BMR = 88.362 + (13.397 * weight in kg) + (4.799 * height in cm) - (5.677 * age in years)
    // For females: BMR = 447.593 + (9.247 * weight in kg) + (3.098 * height in cm) - (4.330 * age in years)
    
    const bmr = gender === 'male'
      ? 88.362 + (13.397 * parseFloat(weight)) + (4.799 * parseFloat(height)) - (5.677 * parseFloat(age))
      : 447.593 + (9.247 * parseFloat(weight)) + (3.098 * parseFloat(height)) - (4.330 * parseFloat(age));

    // Adjust BMR based on activity level
    let tdeeMultiplier = 1.2; // Sedentary
    if (activityLevel === 'lightlyActive') {
      tdeeMultiplier = 1.375;
    } else if (activityLevel === 'moderatelyActive') {
      tdeeMultiplier = 1.55;
    } else if (activityLevel === 'veryActive') {
      tdeeMultiplier = 1.725;
    } else if (activityLevel === 'extraActive') {
      tdeeMultiplier = 1.9;
    }

    const totalCalories = Math.round(bmr * tdeeMultiplier);
    setCalories(totalCalories);
  };

  return (
    <div className='aa'>
    <div className='call'>
      <h2>Calorie Calculator</h2>
      <form>
        <label>
          Height (cm):
          <input type="number" value={height} onChange={(e) => setHeight(e.target.value)} />
        </label>
        <br />
        <label>
          Weight (kg):
          <input type="number" value={weight} onChange={(e) => setWeight(e.target.value)} />
        </label>
        <br />
        <label>
          Age (years):
          <input type="number" value={age} onChange={(e) => setAge(e.target.value)} />
        </label>
        <br />
        <label>
          Gender (Male/Female):
          <select value={gender} onChange={(e) => setGender(e.target.value)}>
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
        </label>
        <br />
        <label>
          Activity  Level:
          <select value={activityLevel} onChange={(e) => setActivityLevel(e.target.value)}>
            <option value="sedentary">Sedentary</option>
            <option value="lightlyActive">Lightly Active</option>
            <option value="moderatelyActive">Moderately Active</option>
            <option value="veryActive">Very Active</option>
            <option value="extraActive">Extra Active</option>
          </select>
        </label>
        <br />
        <button type="button" onClick={calculateCalories}>
          Calculate Calories
        </button>
      </form>
      {calories !== null && (
        <div>
          <h3>Calories per day: {calories}</h3>
        </div>
      )}
    </div>
    </div>
  );
};

export default CalorieCalculator;
