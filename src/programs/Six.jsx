import React from 'react'
import PythonCodeDisplay from '../PythonCodeDisplay'
import OutputDisplay from '../OutputDisplay'
import { Link } from 'react-router-dom'

const Six = () => {
  const pythonCode = `
  import matplotlib.pyplot as plt
  import time
  
  def binary_search(arr, low, high, key):
      mid = int((low + high) / 2)
      if high < low:
          print("Element is not present in array")
          return
      if arr[mid] < key:
          return binary_search(arr, mid + 1, high, key)
      elif arr[mid] > key:
          return binary_search(arr, low, mid - 1, key)
      else:
          print("Element is present at index", result)
          return 
  
  
  def generate_decreasing_list(n):
      return list(range(n, 0, -1))
  
  sizes = [100, 200, 300, 400, 500]  
  times = []
  
  for size in sizes:
      arr = generate_decreasing_list(size)
      start_time = time.time()
      binary_search(arr,0,size-1, 10)
      end_time = time.time()
      time_taken = end_time - start_time
      times.append(time_taken)
      print(f"List size: {size}, Time taken: {time_taken:.6f} seconds")
  
  plt.figure(figsize=(10, 6))
  plt.plot(sizes, times, marker='o', linestyle='-', color='b')
  plt.title('Binary Search Time Complexity (Decreasing Order)')
  plt.xlabel('List Size')
  plt.ylabel('Time Taken (seconds)')
  plt.xticks(sizes)
  plt.grid(True)
  plt.show()
  
    `;
  
      const output = `
      Element is not present in array
      List size: 100, Time taken: 0.000000 seconds
      Element is not present in array
      List size: 200, Time taken: 0.000000 seconds
      Element is not present in array
      List size: 300, Time taken: 0.000000 seconds
      Element is not present in array
      List size: 400, Time taken: 0.000000 seconds
      Element is not present in array
      List size: 500, Time taken: 0.010027 seconds
    `;
  return (
    <div>     
    <Link to='/five'><button>Prev</button></Link>
    <Link to = '/seven'><button>Next</button></Link>
     
          <h3>Lab Program 6</h3>
          <h5>Implement Binary
Search using
recursion Compute
space and time
complexities, plot
graph using
asymptomatic
notations and
compare two.</h5>
          <PythonCodeDisplay code={pythonCode} />
          <h3>Output</h3>
          <OutputDisplay code={output} />  
  </div>
  )
}

export default Six
