import React from 'react';

const PythonCodeDisplay = ({ code }) => {
  return (
    <div className="python-code">
      <pre>
        <code>{code}</code>
      </pre>
    </div>
  );
};

export default PythonCodeDisplay;
