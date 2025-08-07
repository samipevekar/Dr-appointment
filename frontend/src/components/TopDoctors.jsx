import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import App from '../App'
import { AppContext } from '../context/AppContext'

const TopDoctors = () => {
    const navigate = useNavigate()
    const {doctors} = useContext(AppContext)
  return (
    <div className='flex flex-col items-center gap-4  my-16 text-gray-900 md:mx-10'>
      <h1 className='text-3xl font-medium'>Top Doctors to Book</h1>
      <p className='sm:w-1/3 text-center text-sm'>Simply browse through our extensive list of trusted doctors.</p>
     <div className="w-full grid gap-4 gap-y-6 px-3 sm:px-0 
  [grid-template-columns:repeat(auto-fill,_minmax(160px,_1fr))] 
  md:[grid-template-columns:repeat(4,_1fr)] pt-5">

        {doctors.slice(0, 10).map((itme, index)=>(
            <div onClick={()=>{navigate(`/appointment/${itme._id}`); scrollTo(0,0)}} className='border border-blue-200 rounded-xl overflow-hidden cursor-pointer hover:translate-y-[-10px] transition-all duration-500' key={index}>
                <img className='bg-blue-50' src={itme.image} alt="" />
                <div className='p-4'>
                    <div className={`flex items-center gap-2 text-sm text-center ${itme.available ? 'text-green-500' : 'text-red-500'}`}>
                        <p className={`w-2 h-2 ${itme.available ? 'bg-green-500': 'bg-red-500'} rounded-full`}></p><p>{itme.available ? 'Available' : 'Not available'}</p>
                    </div>
                    <p className='text-gray-900 text-lg font-medium'>{itme.name}</p>
                    <p className='text-gray-600 text-sm'>{itme.speciality}</p>
                </div>
            </div>
        ))}
      </div>
      <button onClick={()=>{navigate('/doctors') ; scrollTo(0,0)}} className='bg-blue-50 text-gray-600 px-12 py-3 rounded-full mt-10 cursor-pointer'>more</button>
    </div>
  )
}

export default TopDoctors
