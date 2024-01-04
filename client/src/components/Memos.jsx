import { useState,useEffect } from "react";

const Memos=({state})=>{
    const [memos,setMemos]=useState([]);
    const {contract}=state;
    useEffect(()=>{
        const memosMessage = async()=>{
          const memos = await contract.getRecords();
          setMemos(memos)
        }
        contract && memosMessage()
    },[contract])
    return (
        <div className="bg-black h-screen text-white">
          <h1 className="text-center text-3xl py-6 font-bold">List of Token Holders</h1>           
            <table className="border-collapse m-2 text-xl text-semibold mx-auto">
            <tbody>
            {memos.map((memo) => {
                return (
                        <tr className="border-4 border-green-500 h-20" key={memo}>
                        <td className="p-3">{memo.name}</td>
                        <td className="p-3 ">{memo.message}</td>
                        <td className="p-3 ">{new Date(memo.timestamp * 1000).toLocaleString()}</td>
                        <td className="p-3 ">{memo.from}</td>
                        </tr>
                );
            })}
               </tbody>
                </table>
        </div>
      );
}
export default Memos;