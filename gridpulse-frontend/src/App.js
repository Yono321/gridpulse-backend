import React from 'react';
import LiveChart from './components/LiveChart';
import { useGridSocket } from './hooks/useGridSocket';

function App() {
  const readings = useGridSocket();

  return (
    <div style={{ backgroundColor: '#0f0f1e', minHeight: '100vh', padding: '40px' }}>
      <h1 style={{ color: 'white', textAlign: 'center' }}>⚡ GridPulse Dashboard</h1>
      <LiveChart data={readings} />
      <div style={{ marginTop: '20px', color: '#888', textAlign: 'center' }}>
        Status: {readings.length > 0 ? '🟢 Connected' : '🔴 Connecting to Java...'}
      </div>
    </div>
  );
}

export default App;