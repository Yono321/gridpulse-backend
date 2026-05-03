import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const LiveChart = ({ data }) => {
  const formatXAxis = (timestamp) => {
    return new Date(timestamp).toLocaleTimeString([], { minute: '2-digit', second: '2-digit' });
  };

  return (
    <div style={{ width: '100%', height: 400, backgroundColor: '#1a1a2e', padding: '20px', borderRadius: '10px' }}>
      <h2 style={{ color: '#00ff88', fontFamily: 'monospace' }}>SECTOR A - LIVE POWER (kW)</h2>
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={data} margin={{ top: 20, right: 30, left: 0, bottom: 0 }}>
          <CartesianGrid strokeDasharray="3 3" stroke="#333" />
          <XAxis dataKey="timestamp" tickFormatter={formatXAxis} stroke="#888" />
          <YAxis domain={[0, 150]} stroke="#888" />
          <Tooltip labelFormatter={formatXAxis} contentStyle={{ backgroundColor: '#222', border: '1px solid #00ff88' }} />
          <Line type="monotone" dataKey="power" stroke="#00ff88" strokeWidth={3} dot={false} isAnimationActive={false} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default LiveChart;