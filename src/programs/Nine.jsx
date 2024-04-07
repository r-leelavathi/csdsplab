import React from 'react'
import PythonCodeDisplay from '../PythonCodeDisplay'
import OutputDisplay from '../OutputDisplay'
import { Link } from 'react-router-dom'

const Nine = () => {
  const pythonCode = `
def fibonacci(n):
  a = [0, 1]
  for i in range(2, n + 1):
      a.append(a[i - 1] + a[i - 2])
  return a

n = 10
print("Fibonacci number at index", n, ":", fibonacci(n))
    `;
  
      const output = `
      Fibonacci number at index 10 : [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55]
    `;
  return (
    <div>     
    <Link to='/eight'><button>Prev</button></Link>
    <Link to = '/ten'><button>Next</button></Link>
     
          <h3>Lab Program 9</h3>
          <h5>Implement Fibonacci
sequence with
dynamic
programing</h5>
          <PythonCodeDisplay code={pythonCode} />
          <h3>Output</h3>
          <OutputDisplay code={output} />  
  </div>
  )
}

export default Nine
