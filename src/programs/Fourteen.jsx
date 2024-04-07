import React from 'react'
import PythonCodeDisplay from '../PythonCodeDisplay'
import OutputDisplay from '../OutputDisplay'
import { Link } from 'react-router-dom'

const Fourteen = () => {
  const pythonCode = `
  open_list = ["[","{","("]
  close_list = ["]","}",")"]
  
  def checkParanthesis(myStr):
     stack = []
     for i in myStr:
        if i in open_list:
           stack.append(i)
        elif i in close_list:
           pos = close_list.index(i)
           if ((len(stack) > 0) and
              (open_list[pos] == stack[len(stack)-1])):
              stack.pop()
           else:
              return "Unbalanced"
     if len(stack) == 0:
        return "Balanced"
     else:
        return "Unbalanced"
    
  string = "{[]{()}}"
  print(string,"-", checkParanthesis(string))
  string = "[{}{})(]"
  print(string,"-", checkParanthesis(string))
  string = "((()))"
  print(string,"-",checkParanthesis(string))
  
    `;
  
      const output = `
      {[]{()}} - Balanced
      [{}{})(] - Unbalanced
      ((())) - Balanced
    `;
  return (
    <div>     
      <Link to='/thirteen'><button>Prev</button></Link>
      <Link to = '/fifteen'><button>Next</button></Link>
       
            <h3>Lab Program 14</h3>
            <h5>Implement bracket
matching using stack. </h5>
            <PythonCodeDisplay code={pythonCode} />
            <h3>Output</h3>
            <OutputDisplay code={output} />  
    </div>
  )
}

export default Fourteen
