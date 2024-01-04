import { useState,useEffect } from 'react'
import './App.css'
import abi from './contractJSON/Carbon.json'
import {ethers} from "ethers"
import Memos from './components/Memos'
import Buy from './components/Buy'
import Home from './components/Home'
import Navbar from './components/Navbar'
import { BrowserRouter as Router,Routes,Route,Link } from 'react-router-dom'

function App() {
  const [account,setAccount]=useState('No Account')
  const [state,setState]=useState({
    provider:null,
    signer:null,
    contract:null
  })
   useEffect(()=>{
    const template =async()=>{
      const contractAddress="0x9aC462427deaa876f61F45Fe918a9d6091a3A264";
      const contractABI=abi.abi;
      //Metamask Integration

      try{
      const {ethereum}= window;
      const account = await ethereum.request({
        method:"eth_requestAccounts"
      }) 
      setAccount(account);
      window.ethereum.on("accountsChanged",()=>{
        window.location.reload()
      })
      const provider = new ethers.providers.Web3Provider(ethereum);
      const signer = provider.getSigner();

      const contract = new ethers.Contract(
        contractAddress,
        contractABI,
        signer
      )
      setState({provider,signer,contract})
      }catch(error){
        console.log(error);
      }
    }
    template();
   },[])
  return (
    <Router>
      <Navbar state={state}/>
      <h1 className='p-2 text-center bg-black text-white font-semibold text-lg'>Metamask Wallet : <span className='text-green-400'>{account}</span></h1>
      <Routes>
        <Route path="/" element={<Home state={state}/>}  />
        <Route path="/buy" element={<Buy state={state}/>} />
        <Route path="/list" element={<Memos state={state}/>} />
      </Routes>
    </Router>
  )
}

export default App
