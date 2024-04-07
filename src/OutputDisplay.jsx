import React from 'react'

const OutputDisplay = ({code}) => {
  return (
    <div className='output-code'>
      <pre>
        <code>{code}</code>
      </pre>
    </div>
  )
}

export default OutputDisplay
