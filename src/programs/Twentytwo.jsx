import React from 'react'
import PythonCodeDisplay from '../PythonCodeDisplay'
import OutputDisplay from '../OutputDisplay'
import { Link } from 'react-router-dom'

const Twentytwo = () => {
  const pythonCode = `
  graph = {'A': ['B', 'D', 'E', 'F'], 'D': ['A'], 'B': ['A', 'F', 'C'], 'F': ['B', 'A'], 'C': ['B'], 'E': ['A']}
  print("Given Graph is:")
  print(graph)
  
  def dfs(g, source):
      stack = list()
      vis = list()
      stack.append(source)
      vis.append(source)
      while stack:
          vertex = stack.pop()
          print(vertex, end=" ")
          for u in g[vertex]:
              if u not in vis:
                  stack.append(u)
                  vis.append(u)
  
  print("DFS traversal of graph with source A is:")
  dfs(graph, "A")
    `;
  
      const output = `
  Given Graph is:
  {'A': ['B', 'D', 'E', 'F'], 'D': ['A'], 'B': ['A', 'F', 'C'], 'F': ['B', 'A'], 'C': ['B'], 'E': ['A']}
  DFS traversal of graph with source A is:
  A F E D B C
    `;
  return (
    <div>     
      <Link to='/twentyone'><button>Prev</button></Link>
      <Link to = '/twentythree'><button>Next</button></Link>
       
            <h3>Lab Program 22</h3>
            <h5>Program to demonstrate Implementation of
DFS.
 </h5>
            <PythonCodeDisplay code={pythonCode} />
            <h3>Output</h3>
            <OutputDisplay code={output} />  
    </div>
  )
}

export default Twentytwo
