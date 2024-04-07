import React from 'react'
import PythonCodeDisplay from '../PythonCodeDisplay'
import OutputDisplay from '../OutputDisplay'
import { Link } from 'react-router-dom'

const Sixteen = () => {
  const pythonCode = `
def fib(n):
  if n < 0 or int(n) != n:
      return "Not defined"
  elif n == 0 or n == 1 :
      return n
  else:
      return fib(n-1) + fib(n-2)

n = int(input('Enter the number: '))
print("Fibonacci series :")
for i in range(0, n):
  print(fib(i))

    `;
  
      const output = `
      Enter the number: 
      7
      Fibonacci series :
      0 1 1 2 3 5 8
    `;
  return (
    <div>     
      <Link to='/fifteen'><button>Prev</button></Link>
      <Link to = '/seventeen'><button>Next</button></Link>
       
            <h3>Lab Program 16</h3>
            <h5>Program to demonstrate recursive operations (Fibonacci) </h5>
            <PythonCodeDisplay code={pythonCode} />
            <h3>Output</h3>
            <OutputDisplay code={output} />  
    </div>
  )
}

export default Sixteen
