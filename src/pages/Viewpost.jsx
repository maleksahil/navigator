import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Viewpost = () => {
    const navigate = useNavigate();
    const [record, setRecord] = useState(JSON.parse(localStorage.getItem('post')) || [])    

    //login check karo
    useEffect(()=>{
      let login = JSON.parse(localStorage.getItem('userlogin'));
      if(!login){
        navigate('/')
      }
    },[])

  return (
    <div className='flex'>
        {
            record.map((val)=>{
              return  <div className='bg-slate-200 m-5 p-8 rounded-lg shadow-lg space-y-5 text-3xl'>
                    <img src={val.image}/>
                    <p>{val.title}</p>
                    <p>{val. description}</p>
                    <button className='bg-white w-full rounded-lg p-2' onClick={()=>navigate('/editpost', {state:val})}>Edit</button>
                </div>
            })
        }
    </div>
  )
}

export default Viewpost
