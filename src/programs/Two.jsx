import React from 'react'
import { Link } from 'react-router-dom';
import PythonCodeDisplay from '../PythonCodeDisplay';
import OutputDisplay from '../OutputDisplay';

const Two = () => {
  const pythonCode = `
  import matplotlib.pyplot as plt
  import time
  
  def linear_search(arr,key):
      for i in range(len(arr)):
          if arr[i] == key:
              print(f"Element {key} is present at index {i+1}")
      print(f"Element {key} is not present in the array")  
  
      
  def generate_decreasing_list(n):
      return list(range(n, 0, -1))
  
  sizes = [100, 200, 300, 400, 500]  
  times = []
  
  for size in sizes:
      arr = generate_decreasing_list(size)
      start_time = time.time()
      linear_search(arr, 10)
      end_time = time.time()
      time_taken = end_time - start_time
      times.append(time_taken)    
      print(f"List size: {size}, Time taken: {time_taken:.6f} seconds")
  
  plt.figure(figsize=(10, 6))
  plt.plot(sizes, times, marker='o', linestyle='-', color='b')
  plt.title('Linear Search Time Complexity')
  plt.xlabel('List Size')
  plt.ylabel('Time Taken (seconds)')
  plt.xticks(sizes)
  plt.grid(True)
  plt.show()
  
      `;

  const output = `
  Element 10 is present at index 91
  Element 10 is not present in the array
  List size: 100, Time taken: 0.000000 seconds
  Element 10 is present at index 191
  Element 10 is not present in the array
  List size: 200, Time taken: 0.000000 seconds
  Element 10 is present at index 291
  Element 10 is not present in the array
  List size: 300, Time taken: 0.000000 seconds
  Element 10 is present at index 391
  Element 10 is not present in the array
  List size: 400, Time taken: 0.000000 seconds
  Element 10 is present at index 491
  Element 10 is not present in the array
  List size: 500, Time taken: 0.007015 seconds
      `;
  return (
    <div>
      <Link to='/'><button>Prev</button></Link>
      <Link to='/three'><button>Next</button></Link>

      <h3>Lab Program 2</h3>
      <h5>Implement Linear Search compute space and time complexities, plot graph using
        asymptomatic
        notations.</h5>
      <PythonCodeDisplay code={pythonCode} />
      <h3>Output</h3>
      <OutputDisplay code={output} />
    </div>
  )
}

export default Two
