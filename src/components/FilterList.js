import React from 'react'
import Button from './Button'

const  list = ['All', 'SitCom', 'Gaming','Music','History','Technology','Laptops','Movies','Soccer', 'News']

const FilterList = () => {
  return (
    <div className='flex'>
     {list.map((item, index)=>(<Button key={index} name={item}/>))}
    </div>
  )
}

export default FilterList