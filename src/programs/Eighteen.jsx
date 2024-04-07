import React from 'react'
import PythonCodeDisplay from '../PythonCodeDisplay'
import OutputDisplay from '../OutputDisplay'
import { Link } from 'react-router-dom'

const Eighteen = () => {
  const pythonCode = `
class queue:
  def __init__(self):
      self.queue_ds = []
      self.Front = -1
      self.Rear = -1

  def enqueue(self, val):
      self.queue_ds.append(val)
      if self.Front == -1:
          self.Front += 1
          self.Rear += 1
          print(val," is successfully inserted")
      else:
          self.Rear += 1
          print(val," is successfully inserted")

  def dequeue(self):
      if len(self.queue_ds) == 0:
          print("Queue is empty")
          return
      else:
          temp = self.queue_ds.pop(self.Front)
          print("Deleted item = ", temp)
          self.Rear -= 1
          if len(self.queue_ds) == 0:
              self.Front = -1
              self.Rear = -1
          return 

  def display(self):
      if len(self.queue_ds) == 0:
          print("Queue empty")
          return
      print("The contents of Queue are")
      if self.Front == self.Rear:
          print(self.queue_ds[self.Front], "<== Front <== Rear")
          return
      print(self.queue_ds[self.Front], "<== FRONT")
      i = self.Front + 1
      while i < self.Rear:
          print(self.queue_ds[i])
          i += 1
      print(self.queue_ds[self.Rear], "<== REAR")

a = queue()
a.enqueue(1)
a.enqueue(2)
a.display()
a.dequeue()
a.display()
a.dequeue()

    `;
  
      const output = `
      1  is successfully inserted
      2  is successfully inserted
      The contents of Queue are
      1 <== FRONT
      2 <== REAR
      Deleted item =  1
      The contents of Queue are
      2 <== Front <== Rear
      Deleted item =  2
    `;
  return (
    <div>     
      <Link to='/seventeen'><button>Prev</button></Link>
      <Link to = '/nineteen'><button>Next</button></Link>
       
            <h3>Lab Program 18</h3>
            <h5>Program to demonstrate Implementation of Queue.
 </h5>
            <PythonCodeDisplay code={pythonCode} />
            <h3>Output</h3>
            <OutputDisplay code={output} />  
    </div>
  )
}

export default Eighteen
