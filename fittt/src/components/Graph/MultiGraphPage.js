// RunningGraph.js
import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import './mm.css';
const RunningGraph = ({ data, title }) => {
  // Styles for the graph container
  const graphStyle = {
    backgroundColor: 'rgba(255, 255, 255, 0.9)',
    padding: '20px',
    borderRadius: '10px',
    boxShadow: '0 0 20px rgba(0, 0, 0, 0.2)',
    marginBottom: '20px',
  };

  return (
    <div className="graph-container">
      <h2 className="graph-title">{title}</h2>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="day" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="distance" stroke="#6600cc" fill="rgba(102, 0, 204, 0.5)" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default RunningGraph;
