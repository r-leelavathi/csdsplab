import React from 'react'
import PythonCodeDisplay from '../PythonCodeDisplay'
import OutputDisplay from '../OutputDisplay'
import { Link } from 'react-router-dom'

const twelve = () => {
  const pythonCode = `
I will update soon
    `;
  
      const output = `
---------------    `;
  return (
    <div>     
      <Link to='/eleven'><button>Prev</button></Link>
      <Link to = '/thirteen'><button>Next</button></Link>
       
            <h3>Lab Program 12</h3>
            <h5>Implement CDLL</h5>
            <PythonCodeDisplay code={pythonCode} />
            <h3>Output</h3>
            <OutputDisplay code={output} />  
    </div>
  )
}

export default twelve
