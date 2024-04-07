import React from 'react'
import PythonCodeDisplay from '../PythonCodeDisplay'
import OutputDisplay from '../OutputDisplay'
import { Link } from 'react-router-dom'

const Fifteen = () => {
  const pythonCode = `
def factorial(n):
  if (n < 0 or int(n) != n): 
      return "Not defined"  
  if (n == 1 or n == 0):  
      return 1
  else:
      return n * factorial(n - 1)  

f = int(input('Enter the number: '))
print("factorial of a given number = ",factorial(f))
    `;
  
      const output = `
      Enter the number: 
      4
      factorial of a given number =  24
    `;
  return (
    <div>     
      <Link to='/fourteen'><button>Prev</button></Link>
      <Link to = '/sixteen'><button>Next</button></Link>
       
            <h3>Lab Program 15</h3>
            <h5>Program to
demonstrate
recursive operations
(factorial) </h5>
            <PythonCodeDisplay code={pythonCode} />
            <h3>Output</h3>
            <OutputDisplay code={output} />  
    </div>
  )
}

export default Fifteen
