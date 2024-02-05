import React, { useState } from 'react';
import './CalorieTrackerApp.css'

const NutritionTracker = () => {
    const [foods, setFoods] = useState([]);
  const [totalCalories, setTotalCalories] = useState(0);
  const [cholesterol, setCholesterol] = useState(0);
  const [protein, setProtein] = useState(0);
  const [carbs, setCarbs] = useState(0);
  const [fat, setFat] = useState(0);
  const [sodium, setSodium] = useState(0);
  const [potassium, setPotassium] = useState(0);
  const [fiber, setFiber] = useState(0);
  const [query, setQuery] = useState('');

  const apiUrl = 'https://trackapi.nutritionix.com/v2/natural/nutrients';
  const headers = {
    'accept': 'application/json',
    'x-app-id': '4cb023ff',
    'x-app-key': 'cf27346e9415732ef1573138464eb4eb',
    'x-remote-user-id': '0',
    'Content-Type': 'application/json',
  };

  const exec = () => {
    const data = { query };

    fetch(apiUrl, {
      method: 'POST',
      headers,
      body: JSON.stringify(data),
    })
      .then(response => response.json())
      .then(data => {
        setFoods([...foods, ...data.foods]);
        updateTotals(data.foods);
      })
      .catch(error => console.error('Error:', error));
  };

  const updateTotals = (newFoods) => {
    let totalCalories = 0, cholesterol = 0, protein = 0, carbs = 0, fat = 0, sodium = 0, potassium = 0, fiber = 0;

    newFoods.forEach(food => {
      totalCalories += parseFloat(food.nf_calories);
      cholesterol += parseInt(food.nf_cholesterol);
      protein += parseInt(food.nf_protein);
      carbs += parseInt(food.nf_total_carbohydrate);
      fat += parseInt(food.nf_total_fat);
      sodium += parseInt(food.nf_sodium);
      potassium += parseInt(food.nf_potassium);
      fiber += parseInt(food.nf_dietary_fiber);
    });

    setTotalCalories(totalCalories);
    setCholesterol(cholesterol);
    setProtein(protein);
    setCarbs(carbs);
    setFat(fat);
    setSodium(sodium);
    setPotassium(potassium);
    setFiber(fiber);
  };

  const removeFood = (index) => {
    const removedFood = foods[index];
    const newFoods = foods.filter((_, i) => i !== index);
    setFoods(newFoods);
    updateTotals([removedFood].map(food => ({ ...food, nf_calories: `-${food.nf_calories}` })));
  };

  return (
    <div className='nutrition-tracker-container'>
        

    <div className='header-container'>
      <h1><b>Calorie Tracker</b></h1>
     
    </div>
    <div className='content-container'>
      <div className='query-input'>
        <p>Enter a query like "1 cup mashed potatoes and 2 tbsp gravy" or simply type the name of the dish for which you need to know the nutrition and Click on Track button.<br />This provides nutrition of more than ten thousands of foods, including international dishes.</p>
        <input
        className='mii'
          type="text"
          id="val"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <input className='tb' type="button" value="Track" onClick={exec} />
      </div>
      <div className='foods-table'>
        <table className='foods-table' id='t1'>
          <thead>
            <tr>
              <th></th>
              <th>Image</th>
              <th>Name</th>
              <th>Serving</th>
              <th>Unit</th>
              <th>Caloires</th>
              <th>Quantity</th>
            </tr>
          </thead>
          <tbody id='tab'>
            {foods.map((food, index) => (
              <tr key={index}>
                <td><img className='delete-icon' src="https://img.icons8.com/material/24/000000/filled-trash.png" onClick={() => removeFood(index)} alt="delete" /></td>
                <td><img className='food-image' src={food.photo.thumb} alt="food" /></td>
                <td>{food.food_name}</td>
                <td>{food.serving_qty}</td>
                <td>{food.serving_unit}</td>
                <td>{food.nf_calories}</td>
                <td>{food.serving_weight_grams}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <h1  className='tc' id='total-calories'>Total Calories: {totalCalories} Kcal</h1>
      </div>
      <div className='nutrition-facts'>
        <h1>Nutrition Facts</h1>
        <h6>All essential nutrition values will be displayed here.</h6>
        <h6>Calories: {totalCalories} Kcal</h6>
        <h6>Cholesterol: {cholesterol} mg</h6>
        <h6>Protein: {protein} g</h6>
        <h6>Carbohydrates: {carbs} g</h6>
        <h6>Fat: {fat} g</h6>
        <h6>Sodium: {sodium} mg</h6>
        <h6>Potassium: {potassium} mg</h6>
        <h6>Fiber: {fiber} g</h6>
      </div>
    </div>
  </div>
  );
};

export default NutritionTracker;
