import React from 'react';
import './Home.css';
import cox from '../../images/cox.jpg';
import martin from '../../images/martin.jpg';
import sundorbon from '../../images/sundorbon.jpg';
import { useNavigate } from 'react-router-dom';
const Home = () => {
    const navigate = useNavigate();
    return (
        <div className='   mt-36'>
         <div>
            <div className='grid grid-cols-2 m-12 '>
                <div className='text-white'>
                        <h1 className='text-6xl text-white font-semibold'>Cox's bazar</h1>
                        <p className='w-3/4'>Cox's Bazar is a city, fishing port, tourism centre and district headquarters in southeastern Bangladesh. It is famous mostly for its long natural sandy beach, and it ...</p>
                        <button className='border-0 rounded-full py-2 px-6 bg-orange-500 font-semibold'>Booking</button>
                </div>
                <div>
                    <div className='grid grid-cols-3 m-6'>
                      {/* <h1 className='images w-100 pt-80'>Cox's  Bazar</h1>
                      <h1 className='mongol'>Sreemangal</h1>
                      <h1 className='sundorbon'>Sundarbans</h1> */}
                      <img onClick={()=>navigate('/coxbazar')} className='h-[390px] mt-4 rounded-lg hover:shadow-2xl hover:h-[405px]' src={cox} alt="" />
                      <img onClick={()=>navigate('/sreemangledetail')} className='h-[400px] rounded-lg m-4 hover:h-[410px] hover:shadow-2xl' src={martin} alt="" />
                      <img onClick={()=>navigate('/sundorbon')} className='h-[400px] rounded-lg m-4 hover:shadow-2xl hover:h-[410px]' src={sundorbon} alt="" />
                    </div>
                </div>
            </div>
         </div>
          
        </div>
    );
};

export default Home;