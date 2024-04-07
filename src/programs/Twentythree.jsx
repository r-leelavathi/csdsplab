import React from 'react'
import PythonCodeDisplay from '../PythonCodeDisplay'
import OutputDisplay from '../OutputDisplay'
import { Link } from 'react-router-dom'

const Twentythree = () => {
  const pythonCode = `
class HashTable:

  def __init__(self, size):
      self.size = size
      self.hash_table = self.create_buckets()

  def create_buckets(self):
      return [[] for _ in range(self.size)]

  def set_val(self, key, val):
      hashed_key = hash(key) % self.size
      bucket = self.hash_table[hashed_key]
      found_key = False
      for index, record in enumerate(bucket):
          record_key, record_val = record
          if record_key == key:
              found_key = True
              break
      if found_key:
          bucket[index] = (key, val)
      else:
          bucket.append((key, val))

  def get_val(self, key):
      hashed_key = hash(key) % self.size
      bucket = self.hash_table[hashed_key]
      found_key = False
      for index, record in enumerate(bucket):
          record_key, record_val = record
          if record_key == key:
              found_key = True
              break
      if found_key:
          return record_val
      else:
          return "No record found"

  def delete_val(self, key):
      hashed_key = hash(key) % self.size
      bucket = self.hash_table[hashed_key]
      found_key = False
      for index, record in enumerate(bucket):
          record_key, record_val = record
          if record_key == key:
              found_key = True
              break
      if found_key:
          bucket.pop(index)
      return

  def __str__(self):
      return "".join(str(item) for item in self.hash_table)

hash_table = HashTable(10)
hash_table.set_val(1, 'mon')
print(hash_table)
hash_table.set_val(4, 'thur')
print(hash_table)
hash_table.set_val(7, 'sun')
print(hash_table)
print("Search result : ")
print(hash_table.get_val(1))
hash_table.delete_val(1)
print("After deleting item from hash table:")
print(hash_table)


    `;
  
      const output = `
      [][(1, 'mon')][][][][][][][][]
      [][(1, 'mon')][][][(4, 'thur')][][][][][]
      [][(1, 'mon')][][][(4, 'thur')][][][(7, 'sun')][][]
      Search result : 
      mon
      After deleting item from hash table:
      [][][][][(4, 'thur')][][][(7, 'sun')][][]
    `;
  return (
    <div>     
      <Link to='/twentytwo'><button>Prev</button></Link>
      <Link to = '/'><button>Next</button></Link>
       
            <h3>Lab Program 23</h3>
            <h5>Program to demonstrate Implementation of Hash
functions.
 </h5>
            <PythonCodeDisplay code={pythonCode} />
            <h3>Output</h3>
            <OutputDisplay code={output} />  
    </div>
  )
}

export default Twentythree
