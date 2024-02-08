import React from 'react' 
import { useParams } from 'react-router-dom'

function User() {
    const {userid} = useParams();
  return (
    <div className='flex bg-gray-500 text-white text-3xl justify-center' >User: {userid}</div>
  )
}

export default User