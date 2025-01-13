import React from 'react'

const App = () => {

  const data = [
    {
      label: 'one',
      style: {
        width: '100%' ,
        height: '300px' ,
        background: 'gray'
      }
  }, {
    label: 'two',
    style: {
      width: '100%' ,
      height: '300px' ,
      background: 'blue'
    }
  },{
    label: 'three',
    style: {
      width: '100%' ,
      height: '300px' ,
      background: 'black'
    }
  }, {
    label: 'four',
    style: {
      width: '100%' ,
      height: '300px' ,
      background: 'red'
    }
  },
  {
    label: 'five',
    style: {
      width: '100%' ,
      height: '300px' ,
      background: 'green'
    }
  }
]

const handleClick = () => {

}

  return (
    <div className='flex flex-col item-center justify-center'>
    <h1 className='flex items-center justify-center'>Scroll to a certain section</h1>
    <button onClick={handleClick}>Click To Scroll</button>
    {
      data.map((item, index) => (
        <div key={index} style={item.style}>{item.label}</div>
      ))
    }
    </div>
  )
}

export default App