import React from 'react'
import OutputDisplay from '../OutputDisplay'
import PythonCodeDisplay from '../PythonCodeDisplay'
import { Link } from 'react-router-dom'

const Thirteen = () => {
  const pythonCode = `
class Stack:
  def __init__(self):
      self.items = []

  def push(self, item):
      self.items.append(item)

  def pop(self):
      if len(self.items) == 0:
          print("empty list")
      else:
          print("deleted item = ", self.items.pop())

  def peek(self):
      
      if len(self.items) == 0:
          print("empty list")
      else:
          print("item = ", self.items[-1])

  def size(self):
      print("Length of stack =", len(self.items))
      
  def display(self):
      if len(self.items) == 0:
          print("empty list")
      else:
          print("deleted item = ", self.items)

stack = Stack()
stack.push(1)
stack.push(2)
stack.push(3)
stack.size()
stack.peek()
stack.pop()
stack.display()

    `;
  
      const output = `
      Length of stack = 3
      item =  3
      deleted item =  3
      deleted item =  [1, 2]
    `;
  return (
    <div>     
      <Link to='/twelve'><button>Prev</button></Link>
      <Link to = '/fourteen'><button>Next</button></Link>
       
            <h3>Lab Program 13</h3>
            <h5>Implement Stack Data
Structure.   </h5>
            <PythonCodeDisplay code={pythonCode} />
            <h3>Output</h3>
            <OutputDisplay code={output} />  
    </div>
  )
}

export default Thirteen
