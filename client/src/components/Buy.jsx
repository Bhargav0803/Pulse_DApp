import React from 'react'
import {ethers} from 'ethers';

const Buy = ({state}) => {
    const topics = [
    'Reforestation',
    'Livestock',
    'Waste Management',
    'River Forests',
    'Agriculture'
    ];
    const buyCarbonCredit =async(e)=>{
        e.preventDefault();
        const {contract}=state;
        const name = document.getElementById("name").value;
        const message = document.getElementById("message").value;
        const amount = {value:ethers.utils.parseEther("0.0001")}
        try{
        const transaction = await contract.buyCarbonCredit(name,message,amount)
        await transaction.wait();
        alert("Transaction is Successful");
        windows.location.reload();
        }
        catch(error){
            alert("yaha kaise",error);
        }
    }  

  return (
    <div className='w-full h-screen bg-black'>
    <form onSubmit={buyCarbonCredit} className='w-5/6 h-5/6 mx-auto border-dashed shadow-xl shadow-green-500 border-2 border-green-500 text-white flex flex-col justify-center items-center py-4 '>
        <h1 className='text-3xl text-green-500 font-bold'>Get your Pulse now!</h1>
        <p className='text-center text-md py-3 px-8' >Secure your spot in our vision for a greener future! Purchase Pulse today at only 0.0001 ethers. Join us in fostering sustainability through blockchain technology and environmental initiatives.</p>
        <label className='font-semibold ' htmlFor="buy">Name</label>
        <input className='bg-black border-2 shadow-md shadow-green-400 border-green-400 rounded
         m-6 p-2 my-4 w-1/2' id='name'/>
        <label htmlFor="buy">Choose Project Domain</label>
        <select className='bg-black border-2 shadow-md shadow-green-400 border-green-400 rounded
         m-6 p-2 my-4 w-1/2' id="message">
            {topics.map((topic) => (
            <option key={topic} value={topic}>
                {topic}
            </option>
            ))}
        </select>
        <button className='p-2 w-1/4 h-16 m-6 text-white hover:text-black bg-black shadow-lg shadow-green-400 border-2 border-green-500 rounded-lg font-bold text-xl hover:bg-green-500'>Buy Token</button>
        <p>Note: Please wait for atleast 10 secs while we register you after your purchase.</p>
    </form>
    </div>
  )
}

export default Buy