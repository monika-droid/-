import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { closeMenu } from '../utils/AppSlice';
import { useSearchParams } from 'react-router-dom';

const Watchpage = () => {
  const [searchParams] = useSearchParams();
  console.log(searchParams.get('v'))
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(closeMenu())
  })
  return (
    <div>
      <div className='video'>
        <iframe width="1100" height="500" src={"https://www.youtube.com/embed/"+searchParams.get('v')} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
      </div>
    </div>
  )
}

export default Watchpage