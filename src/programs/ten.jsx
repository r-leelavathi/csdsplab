import React from 'react'
import PythonCodeDisplay from '../PythonCodeDisplay'
import OutputDisplay from '../OutputDisplay'
import { Link } from 'react-router-dom'

const ten = () => {
  const pythonCode = `
class Node:
  def __init__(self, data):
      self.data = data
      self.Next = None

class LinkedList:
  def __init__(self):
      self.head = None

  def InsertAtBegin(self, data):
      new = Node(data)
      new.Next = self.head
      self.head = new

  def InsertAtEnd(self, data):
      new = Node(data)
      if self.head is None:
          self.head = new
          return
      cur = self.head
      while cur.Next is not None:
          cur = cur.Next
      cur.Next = new

  def delAtEnd(self):
      if self.head is None:
          return
      elif self.head.Next is None:
          self.head = None
          return
      else:
          temp = self.head
          while temp.Next.Next is not None:
              temp = temp.Next
          print('deleted item =', temp.Next.data)
          temp.Next = None

  def display(self):
      if self.head is None:
          print("list is empty")
          return
      cur = self.head
      while cur is not None:
          print(cur.data)
          cur = cur.Next

LL = LinkedList()
LL.InsertAtBegin(9)
LL.InsertAtBegin(98)
LL.InsertAtBegin('welcome')
LL.InsertAtBegin(23)
LL.InsertAtBegin(5)
print("contents of list:")
LL.display()
LL.delAtEnd()
LL.delAtEnd()
print("contents of list after deletions:")
LL.display()
    `;
  
      const output = `
      contents of list:
      5
      23
      welcome
      98
      9
      deleted item = 9
      deleted item = 98
      contents of list after deletions:
      5
      23
      welcome
    `;
  return (
    <div>     
    <Link to='/nine'><button>Prev</button></Link>
    <Link to = '/eleven'><button>Next</button></Link>
     
          <h3>Lab Program 10</h3>
          <h5>Implement Singly
linked list (Traversing
the Nodes, searching
for a Node,
Prepending Nodes,
Removing Nodes)
 </h5>
          <PythonCodeDisplay code={pythonCode} />
          <h3>Output</h3>
          <OutputDisplay code={output} />  
  </div>
  )
}

export default ten
