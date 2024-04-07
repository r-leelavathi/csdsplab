import React from 'react'
import PythonCodeDisplay from '../PythonCodeDisplay'
import OutputDisplay from '../OutputDisplay'
import { Link } from 'react-router-dom'

const Twentyone = () => {
  const pythonCode = `
  from queue import Queue
  graph = {'A': ['B', 'D', 'E', 'F'], 'D': ['A'], 'B': ['A', 'F', 'C'], 'F': ['B', 'A'], 'C': ['B'], 'E': ['A']}
  print("Given Graph is:")
  print(graph)
  
  
  def BFS(input_graph, source):
      Q = Queue()
      visited_vertices = list()
      Q.put(source)
      visited_vertices.append(source)
      while not Q.empty():
          vertex = Q.get()
          print(vertex, end= " ")
          for u in input_graph[vertex]:
              if u not in visited_vertices:
                  Q.put(u)
                  visited_vertices.append(u)
  
  print("BFS traversal of graph with source A is:")
  BFS(graph, "A")  
    `;
  
      const output = `
  Given Graph is:
  {'A': ['B', 'D', 'E', 'F'], 'D': ['A'], 'B': ['A', 'F', 'C'], 'F': ['B', 'A'], 'C': ['B'], 'E': ['A']}
  BFS traversal of graph with source A is:
  A B D E F C    `;
  return (
    <div>     
      <Link to='/twenty'><button>Prev</button></Link>
      <Link to = '/twentytwo'><button>Next</button></Link>
       
            <h3>Lab Program 21</h3>
            <h5>Program to demonstrate Implementations of
BFS
 </h5>
            <PythonCodeDisplay code={pythonCode} />
            <h3>Output</h3>
            <OutputDisplay code={output} />  
    </div>
  )
}

export default Twentyone
