import React from 'react'
import { Link } from 'react-router-dom';
import PythonCodeDisplay from '../PythonCodeDisplay';
import OutputDisplay from '../OutputDisplay';

const One = () => {
    const pythonCode = `
import matplotlib.pyplot as plt
import time

def bubble_sort(arr):
    n = len(arr)
    for i in range(n):
        for j in range(0, n-i-1):
            if arr[j] > arr[j+1]:
                arr[j], arr[j+1] = arr[j+1], arr[j]

def generate_decreasing_list(n):
    return list(range(n, 0, -1))

sizes = [100, 200, 300, 400, 500]  
times = []

for size in sizes:
    arr = generate_decreasing_list(size)
    start_time = time.time()
    bubble_sort(arr)
    end_time = time.time()
    time_taken = end_time - start_time
    times.append(time_taken)
    print(f"List size: {size}, Time taken: {time_taken:.6f} seconds")

plt.figure(figsize=(10, 6))
plt.plot(sizes, times, marker='o', linestyle='-', color='b')
plt.title('Bubble Sort Time Complexity (Decreasing Order)')
plt.xlabel('List Size')
plt.ylabel('Time Taken (seconds)')
plt.xticks(sizes)
plt.grid(True)
plt.show()
  `;

    const output = `
  
  List size: 100, Time taken: 0.001040 seconds
  List size: 200, Time taken: 0.003370 seconds
  List size: 300, Time taken: 0.006828 seconds
  List size: 400, Time taken: 0.013537 seconds
  List size: 500, Time taken: 0.021694 seconds
  `;


    return (
        <div>
        <Link to='/twentythree'><button>Prev</button></Link>
            <Link to='/two'>
                <button>Next</button>
            </Link>
            <h3>Lab Program 1</h3>
            <h5>Python program to Use and demonstrate basic data structures </h5>
            <PythonCodeDisplay code={pythonCode} />
            <h3>Output</h3>
            <OutputDisplay code={output} />            
        </div>
    )
}

export default One
