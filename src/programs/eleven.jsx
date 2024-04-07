import React from 'react'
import PythonCodeDisplay from '../PythonCodeDisplay'
import OutputDisplay from '../OutputDisplay'
import { Link } from 'react-router-dom'

const eleven = () => {
  const pythonCode = `
class Node:
  def __init__(self, data):
      self.data = data
      self.next = None
      self.prev = None

class DoublyLinkedList:
  def __init__(self):
      self.head = None

  def insertAtBegin(self, data):
      if self.head == None:
          new = Node(data)
          self.head = new
          return
      else:
          new = Node(data)
          new.next = self.head
          self.head.prev = new
          self.head = new

  def insertAtEnd(self, data):
      if self.head is None:
          new = Node(data)
          self.head = new
          return
      cur = self.head
      while cur.next is not None:
          cur = cur.next
      new = Node(data)
      cur.next = new

  def display(self):
      if self.head == None:
          print("The list is empty")
          return
      else:
          cur = self.head
          while cur is not None:
              print(cur.data)
              cur = cur.next

  def deleteAtEnd(self):
      if self.head == None:
          print("List is empty")
          return
      elif self.head.next == None:
          print("Element", self.head.data)
          self.head = None
      else:
          cur = self.head
          while cur.next is not None:
              cur = cur.next
          print("Deleted", cur.data)
          cur.prev.next = None

  def deleteAtBegin(self):
      if self.head == None:
          print("List is empty")
          return
      elif self.head.next == None:
          print("Deleted", self.head.data)
          self.head = None
      else:
          print("Deleted", self.head.data)
          self.head = self.head.next
          self.head.prev = None

dll = DoublyLinkedList()
dll.insertAtBegin(9)
dll.insertAtBegin(34)
dll.insertAtBegin(98)
dll.insertAtBegin("welcome")
dll.insertAtBegin(23)
print("Contents of list:")
dll.display()
dll.insertAtBegin(5)
print("Contents of list:")
dll.display()
dll.deleteAtEnd()
dll.deleteAtBegin()
print("Contents of list:")
dll.display()
    `;
  
      const output = `
      Contents of list:
      23
      welcome
      98
      34
      9
      Contents of list:
      5
      23
      welcome
      98
      34
      9
      Deleted 9
      Deleted 5
      Contents of list:
      23
      welcome
      98
      34
    `;
  return (
    <div>     
    <Link to='/ten'><button>Prev</button></Link>
    <Link to = '/twelve'><button>Next</button></Link>
     
          <h3>Lab Program 11</h3>
          <h5>Implement DLL. </h5>
          <PythonCodeDisplay code={pythonCode} />
          <h3>Output</h3>
          <OutputDisplay code={output} />  
  </div>
  )
}

export default eleven
