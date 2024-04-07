import React from 'react'
import PythonCodeDisplay from '../PythonCodeDisplay'
import OutputDisplay from '../OutputDisplay'
import { Link } from 'react-router-dom'

const Five = () => {
  const pythonCode = `
  import matplotlib.pyplot as plt
  import time
  
  def insertionsort(a):
      for i in range(1,len(a)):
          key=a[i]
          j=i-1
          while j>=0 and key<a[j]:
              a[j+1]=a[j]
              j=j-1
          a[j+1]=key
  
  def generate_decreasing_list(n):
      return list(range(n, 0, -1))
  
  sizes = [100, 200, 300, 400, 500]  
  times = []
  
  for size in sizes:
      arr = generate_decreasing_list(size)
      start_time = time.time()
      insertionsort(arr)
      end_time = time.time()
      time_taken = end_time - start_time
      times.append(time_taken)
      print(f"List size: {size}, Time taken: {time_taken:.6f} seconds")
  
  plt.figure(figsize=(10, 6))
  plt.plot(sizes, times, marker='o', linestyle='-', color='b')
  plt.title('Insertion Sort Time Complexity (Decreasing Order)')
  plt.xlabel('List Size')
  plt.ylabel('Time Taken (seconds)')
  plt.xticks(sizes)
  plt.grid(True)
  plt.show()
  
    `;
  
      const output = `
      List size: 100, Time taken: 0.000518 seconds
      List size: 200, Time taken: 0.002008 seconds
      List size: 300, Time taken: 0.002302 seconds
      List size: 400, Time taken: 0.009799 seconds
      List size: 500, Time taken: 0.011221 seconds
    `;
  return (
    <div>     
    <Link to='/four'><button>Prev</button></Link>
    <Link to = '/six'><button>Next</button></Link>
     
          <h3>Lab Program 5</h3>
          <h5>Implement insertion sorting algorithms compute space and time complexities, plot graph using asymptomatic notations
          </h5>
          <PythonCodeDisplay code={pythonCode} />
          <h3>Output</h3>
          <OutputDisplay code={output} />  
  </div>
  )
}

export default Five
