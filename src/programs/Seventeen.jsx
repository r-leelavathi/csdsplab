import React from 'react'
import PythonCodeDisplay from '../PythonCodeDisplay'
import OutputDisplay from '../OutputDisplay'
import { Link } from 'react-router-dom'

const Seventeen = () => {
  const pythonCode = `
def tower(disks, source, auxiliary, target):
  if (disks == 1):
      print('Move disk 1 from rod {} to rod {}.'.format(source, target))
      return
  tower(disks - 1, source, target, auxiliary)
  print('Move disk {} from rod {} to rod {}.'.format(disks, source, target))
  tower(disks - 1, auxiliary, source, target)

disks = int(input('Enter the number of disks: '))
tower(disks, 'A', 'B', 'C')  

    `;
  
      const output = `
      Enter the number of disks: 3
      Move disk 1 from rod A to rod C.
      Move disk 2 from rod A to rod B.
      Move disk 1 from rod C to rod B.
      Move disk 3 from rod A to rod C.
      Move disk 1 from rod B to rod A.
      Move disk 2 from rod B to rod C.
      Move disk 1 from rod A to rod C.
    `;
  return (
    <div>     
      <Link to='/Sixteen'><button>Prev</button></Link>
      <Link to = '/eighteen'><button>Next</button></Link>
       
            <h3>Lab Program 17</h3>
            <h5>Implement solution for Towers of Hanoi </h5>
            <PythonCodeDisplay code={pythonCode} />
            <h3>Output</h3>
            <OutputDisplay code={output} />  
    </div>
  )
}

export default Seventeen
