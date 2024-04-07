import React from 'react'
import PythonCodeDisplay from '../PythonCodeDisplay'
import OutputDisplay from '../OutputDisplay'
import { Link } from 'react-router-dom'

const Four = () => {
  const pythonCode = `
  import matplotlib.pyplot as plt
  import time
  
  def selectionsort(a):
      for i in range(0,len(a)):
          min=i
          for j in range(i+1,len(a)):
              if a[j]<a[min]:
                  min=j
          if min!=i:
              a[min],a[i]=a[i],a[min]
  
  def generate_decreasing_list(n):
      return list(range(n, 0, -1))
  
  sizes = [100, 200, 300, 400, 500]  
  times = []
  
  for size in sizes:
      arr = generate_decreasing_list(size)
      start_time = time.time()
      selectionsort(arr)
      end_time = time.time()
      time_taken = end_time - start_time
      times.append(time_taken)
      print(f"List size: {size}, Time taken: {time_taken:.6f} seconds")
  
  plt.figure(figsize=(10, 6))
  plt.plot(sizes, times, marker='o', linestyle='-', color='b')
  plt.title('Selection Sort Time Complexity (Decreasing Order)')
  plt.xlabel('List Size')
  plt.ylabel('Time Taken (seconds)')
  plt.xticks(sizes)
  plt.grid(True)
  plt.show()  
    `;
  
      const output = `
      List size: 100, Time taken: 0.000000 seconds
      List size: 200, Time taken: 0.001143 seconds
      List size: 300, Time taken: 0.001930 seconds
      List size: 400, Time taken: 0.002403 seconds
      List size: 500, Time taken: 0.011691 seconds
    `;
  return (
    <div>     
    <Link to='/three'><button>Prev</button></Link>
    <Link to = '/five'><button>Next</button></Link>
     
          <h3>Lab Program 4</h3>
          <h5>Implement Selection sorting algorithms compute space and time complexities, plot graph using asymptomatic notations
          </h5>
          <PythonCodeDisplay code={pythonCode} />
          <h3>Output</h3>
          <OutputDisplay code={output} />  
  </div>
  )
}

export default Four
