import React from 'react'
import OutputDisplay from '../OutputDisplay'
import PythonCodeDisplay from '../PythonCodeDisplay'
import { Link } from 'react-router-dom'

const Eight = () => {
  const pythonCode = `
  import matplotlib.pyplot as plt
  import time
  
  def partition(arr, low, high):
      pivot = arr[high] 
      i = low - 1 
      for j in range(low, high):
          if arr[j] <= pivot:
              i += 1
              arr[i], arr[j] = arr[j], arr[i]
      arr[i+1], arr[high] = arr[high], arr[i+1]
      return i+1
  
  def quick_sort(arr, low, high):
      if low < high:
          p = partition(arr, low, high)
          quick_sort(arr, low, p-1)
          quick_sort(arr, p+1, high)
          
  def generate_decreasing_list(n):
      return list(range(n, 0, -1))
  
  sizes = [100, 200, 300, 400, 500]  
  times = []
  
  for size in sizes:
      arr = generate_decreasing_list(size)
      start_time = time.time()
      quick_sort(arr,0,size-1)
      end_time = time.time()
      time_taken = end_time - start_time
      times.append(time_taken)
      print(f"List size: {size}, Time taken: {time_taken:.6f} seconds")
  
  plt.figure(figsize=(10, 6))
  plt.plot(sizes, times, marker='o', linestyle='-', color='b')
  plt.title('Quick Sort Time Complexity (Decreasing Order)')
  plt.xlabel('List Size')
  plt.ylabel('Time Taken (seconds)')
  plt.xticks(sizes)
  plt.grid(True)
  plt.show()
  `;

    const output = `
    List size: 100, Time taken: 0.000000 seconds
    List size: 200, Time taken: 0.008397 seconds
    List size: 300, Time taken: 0.003606 seconds
    List size: 400, Time taken: 0.012532 seconds
    List size: 500, Time taken: 0.009861 seconds
  `;
  return (
    <div>     
    <Link to='/seven'><button>Prev</button></Link>
    <Link to = '/nine'><button>Next</button></Link>
     
          <h3>Lab Program 8</h3>
          <h5>Implement Quick
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

export default Eight
