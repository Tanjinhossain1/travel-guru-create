import React from 'react';
import { useNavigate } from 'react-router-dom';

const CoxbazarDetail = () => {
    const navigate = useNavigate();
    return (
        <div className='pb-[105px] '>
            <div className='grid grid-cols-2'>
                <div className='text-white mt-32 ml-32'>
                    <h1 className='text-8xl'>Cox's bazar</h1>
                    <p>Cox’s Bazar is a town on the southeast coast of Bangladesh. It’s known for its very long, sandy beachfront, stretching from Sea Beach in the north to Kolatoli Beach in the south. Aggameda Khyang monastery is home to bronze statues and centuries-old Buddhist manuscripts. South of town, the tropical rainforest of Himchari National Park has waterfalls and many birds. North, sea turtles breed on nearby Sonadia Island.</p>
                </div>
                <div className=''>
                    <div className='border rounded-3xl bg-white mx-40 my-32 p-4 flex justify-center'>
                        <div>
                            <label className='block text-gray-500' htmlFor="origin">Origin</label>
                            <input className='border py-2 px-12 bg-gray-100' placeholder='address' type="text" name="origin" id="" />

                            <label className='block text-gray-500' htmlFor="Destination">Destination</label>
                            <input className='border py-2 px-12 bg-gray-100' placeholder='Destination' type="text" name="origin" id="" />

                         <div className='flex'>
                             <div>
                             <label className='block text-gray-500' htmlFor="from">from</label>
                            <input className='border py-2 px-12 bg-gray-100' placeholder='Destination' type="date" name="origin" id="" />
                             </div>
                             <div>
                             <label className='block ml-4 text-gray-500' htmlFor="to">to</label>
                            <input className='border ml-4 py-2 px-12 bg-gray-100' placeholder='Destination' type="time" name="origin" id="" />
                             </div>
                         </div>
                         <div className='flex justify-center mt-2'>
                             <input onClick={()=>navigate('/bookindone')} className='border py-2 px-12 bg-orange-400' type="submit" value="Start Booking" />
                         </div>
                       
                        </div>
                    </div>
                </div>
                <button onClick={()=>navigate('/home')} className='mx-auto rounded-full hover:text-black hover:bg-white border py-3 px-32 bg-pink-800 font-bold text-xl text-white'>Back</button>
            </div>
        </div>
    );
};

export default CoxbazarDetail;