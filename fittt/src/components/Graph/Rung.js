import React from 'react';
import RunningGraph from './MultiGraphPage';
import './Rung.css';
const Rung = () => {
  
  const runningData = [
    { day: 'Day 1', distance: 5 },
    { day: 'Day 2', distance: 7 },
    { day: 'Day 3', distance: 8 },
    { day: 'Day 4', distance: 6 },
    { day: 'Day 5', distance: 10 },
    { day: 'Day 6', distance: 9 },
    { day: 'Day 7', distance: 11 },
  ];

  const swimmingData = [
    { day: 'Day 1', distance: 1.5 },
    { day: 'Day 2', distance: 2 },
    { day: 'Day 3', distance: 1 },
    { day: 'Day 4', distance: 2.5 },
    { day: 'Day 5', distance: 1.8 },
    { day: 'Day 6', distance: 2.2 },
    { day: 'Day 7', distance: 2.8 },
  ];

  const cyclingData = [
    { day: 'Day 1', distance: 10 },
    { day: 'Day 2', distance: 15 },
    { day: 'Day 3', distance: 12 },
    { day: 'Day 4', distance: 18 },
    { day: 'Day 5', distance: 14 },
    { day: 'Day 6', distance: 20 },
    { day: 'Day 7', distance: 22 },
  ];

  // Styles for the page
  const pageStyle = {
    background: 'linear-gradient(to bottom right, #9f4dff, #6600cc)',
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '20px',
    color: '#fff',
  };

  return (
    <div style={pageStyle}>
      <h1>Multi-Sport Data for 7 Days</h1>

      {/* Running Graph */}
      <RunningGraph data={runningData} title="Running Graph" />

      {/* Swimming Graph */}
      <RunningGraph data={swimmingData} title="Swimming Graph" />

      {/* Cycling Graph */}
      <RunningGraph data={cyclingData} title="Cycling Graph" />
    </div>
  );
};

export default Rung;
