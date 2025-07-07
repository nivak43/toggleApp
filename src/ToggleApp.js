import React, { useState } from 'react';

function ToggleApp() {
  const [isOn, setIsOn] = useState(false);

  const toggleHandler = () => {
    setIsOn(prevState => !prevState); // Flip true/false
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h2>Status: {isOn ? 'ON' : 'OFF'}</h2>

      <button onClick={toggleHandler}>
        {isOn ? 'Turn OFF' : 'Turn ON'}
      </button>

      <div
        style={{
          width: '100px',
          height: '100px',
          margin: '20px auto',
          backgroundColor: isOn ? 'green' : 'gray',
          borderRadius: '10px',
          transition: 'background-color 0.3s ease',
        }}
      />
    </div>
  );
}

export default ToggleApp;