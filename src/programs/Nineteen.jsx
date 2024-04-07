import React from 'react'
import PythonCodeDisplay from '../PythonCodeDisplay'
import OutputDisplay from '../OutputDisplay'
import { Link } from 'react-router-dom'

const Nineteen = () => {
  const pythonCode = `
class Node:
  def __init__(self, info, priority):
      self.info = info
      self.priority = priority
  
class PriorityQueue:

def __init__(self):
  self.queue = list()
  
def insert(self, node):
  if self.size() == 0:
    self.queue.append(node)
  else:
    for x in range(0, self.size()):
      if node.priority >= self.queue[x].priority:
        if x == (self.size()-1):
          self.queue.insert(x+1, node)
        else:
          continue
      else:
        self.queue.insert(x, node)
        return True

def delete(self):
  return self.queue.pop(0)
  
def show(self):
  for x in self.queue:
    print(str(x.info)+" - "+str(x.priority))

def size(self):
  return len(self.queue)

pQueue = PriorityQueue()
node1 = Node("C", 3)
node2 = Node("B", 2)
node3 = Node("A", 1)
node4 = Node("Z", 26)
node5 = Node("Y", 25)
node6 = Node("L", 12)

pQueue.insert(node1)
pQueue.insert(node2)
pQueue.insert(node3)
pQueue.insert(node4)
pQueue.insert(node5)
pQueue.insert(node6)
pQueue.show()
pQueue.delete()
pQueue.show()

    `;
  
      const output = `
      A - 1
      B - 2
      C - 3
      L - 12
      Y - 25
      Z - 26
      B - 2
      C - 3
      L - 12
      Y - 25
      Z - 26
          `;
  return (
    <div>     
      <Link to='/eighteen'><button>Prev</button></Link>
      <Link to = '/twenty'><button>Next</button></Link>
       
            <h3>Lab Program 19</h3>
            <h5>Program to demonstrate Implementation of priority
queue
 </h5>
            <PythonCodeDisplay code={pythonCode} />
            <h3>Output</h3>
            <OutputDisplay code={output} />  
    </div>
  )
}

export default Nineteen
