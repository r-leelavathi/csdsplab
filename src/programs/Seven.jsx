import React from 'react'
import OutputDisplay from '../OutputDisplay'
import PythonCodeDisplay from '../PythonCodeDisplay'
import { Link } from 'react-router-dom'

const Seven = () => {
  const pythonCode = `
  import matplotlib.pyplot as plt
  import time
  
  def merge_sort(arr):
      if len(arr) > 1:
          mid = len(arr) // 2 
          b = arr[:mid]       
          c  = arr[mid:]
          merge_sort(b)       
          merge_sort(c)      
          i = j = k = 0
          while i < len(b) and j < len(c):
              if b[i] < c[j]:
                  arr[k] = b[i]
                  i += 1
              else:
                  arr[k] = c[j]
                  j += 1
              k += 1
          while i < len(b):
              arr[k] = b[i]
              i += 1
              k += 1
          while j < len(c):
              arr[k] = c[j]
              j += 1
              k += 1
          
  def generate_decreasing_list(n):
      return list(range(n, 0, -1))
  
  sizes = [100, 200, 300, 400, 500]  
  times = []
  
  for size in sizes:
      arr = generate_decreasing_list(size)
      start_time = time.time()
      merge_sort(arr)
      end_time = time.time()
      time_taken = end_time - start_time
      times.append(time_taken)
      print(f"List size: {size}, Time taken: {time_taken:.6f} seconds")
  
  plt.figure(figsize=(10, 6))
  plt.plot(sizes, times, marker='o', linestyle='-', color='b')
  plt.title('Merge Sort Time Complexity (Decreasing Order)')
  plt.xlabel('List Size')
  plt.ylabel('Time Taken (seconds)')
  plt.xticks(sizes)
  plt.grid(True)
  plt.show()
  `;

    const output = `
    List size: 100, Time taken: 0.000000 seconds
    List size: 200, Time taken: 0.001064 seconds
    List size: 300, Time taken: 0.001063 seconds
    List size: 400, Time taken: 0.000000 seconds
    List size: 500, Time taken: 0.001089 seconds
  `;
  return (
    <div>     
    <Link to='/six'><button>Prev</button></Link>
    <Link to = '/eight'><button>Next</button></Link>
     
          <h3>Lab Program 7</h3>
          <h5>Implement Merge
sorting
algorithms compute
space and time
complexities, plot
graph using
asymptomatic
notations and
compare all
solutions  </h5>
          <PythonCodeDisplay code={pythonCode} />
          <h3>Output</h3>
          <OutputDisplay code={output} />  
  </div>
  )
}

export default Seven
