import React from 'react'
import PythonCodeDisplay from '../PythonCodeDisplay'
import OutputDisplay from '../OutputDisplay'
import { Link } from 'react-router-dom'

const Twenty = () => {
  const pythonCode = `
class BSTNode:
  def __init__(self, data):
      self.leftChild = None
      self.rightChild = None
      self.data = data

def insertNode(root_node, node_value):
  if root_node.data == None:
      root_node.data = node_value
  elif node_value <= root_node.data:
      if root_node.leftChild is None:
          root_node.leftChild = BSTNode(node_value)
      else:
          insertNode(root_node.leftChild, node_value)
  else:
      if root_node.rightChild is None:
          root_node.rightChild = BSTNode(node_value)
      else:
          insertNode(root_node.rightChild, node_value)
  return "The node has been successfully inserted."

def minValueNode(bstNode):
  current = bstNode
  while (current.leftChild is not None):
      current = current.leftChild
  return current

def deleteNode(root_node, node_value):
  if root_node is None:
      print(node_value, "Can't be deleted as its not found")
      return root_node
  if node_value < root_node.data:
      root_node.leftChild = deleteNode(root_node.leftChild, node_value)
  elif node_value > root_node.data:
      root_node.rightChild = deleteNode(root_node.rightChild, node_value)
  else:
      if root_node.leftChild is None:
          temp = root_node.rightChild
          print("Element deleted successfully")
          root_node = None
          return temp
      if root_node.rightChild is None:
          temp = root_node.leftChild
          print("Element deleted successfully")
          root_node = None
          return temp
      temp = minValueNode(root_node.rightChild)
      root_node.data = temp.data
      root_node.rightChild = deleteNode(root_node.rightChild, temp.data)
  return root_node

def searchNode(root_node, node_value):
  if root_node.leftChild is None:
      print("The element has not found.")
      return
  elif root_node.data == node_value:
      print("The element has been found.")
  elif node_value < root_node.data:
      if root_node.leftChild.data == node_value:
          print("The element has been found.")
      else:
          searchNode(root_node.leftChild, node_value)
  else:
      if root_node.rightChild.data == node_value:
          print(node_value,"  element has been found.")
      else:
          searchNode(root_node.rightChild, node_value)

def inOrderTraversal(root_node):
  if not root_node:
      return
  inOrderTraversal(root_node.leftChild)
  print(root_node.data)
  inOrderTraversal(root_node.rightChild)


r = BSTNode(50)
insertNode(r, 30)
insertNode(r, 20)
insertNode(r, 40)
insertNode(r, 70)
insertNode(r, 60)
insertNode(r, 80)
print("inorder traversal of tree : ")
inOrderTraversal(r)
searchNode(r, 20)
deleteNode(r, 50)
print("inorder traversal of tree : ")
inOrderTraversal(r)
deleteNode(r,50)

    `;
  
      const output = `
      inorder traversal of tree : 
      20
      30
      40
      50
      60
      70
      80
      The element has been found.
      Element deleted successfully
      inorder traversal of tree :
      20
      30
      40
      60
      70
      80
      50 Can't be deleted as its not found
    `;
  return (
    <div>     
      <Link to='/nineteen'><button>Prev</button></Link>
      <Link to = '/twentyone'><button>Next</button></Link>
       
            <h3>Lab Program 20</h3>
            <h5>Implement Binary
search tree and its
operations using list
 </h5>
            <PythonCodeDisplay code={pythonCode} />
            <h3>Output</h3>
            <OutputDisplay code={output} />  
    </div>
  )
}

export default Twenty
