import { Link } from "react-router-dom"


const Home = ({state}) => {
    return (
        <div>
            <div className='bg-black h-full py-12 flex flex-col align-center px-10'>
            <p className='mb-10 font-bold text-6xl text-center text-white'>Welcome to <span className='text-green-400 text-7xl animate-pulse delay-300 '>Pulse Token</span></p>
            <p className="text-green-500 text-center text-lg px-40 mb-8 font-semibold">"Empowering tomorrow's pulse to become carbon neutral today"</p>
            <p className='text-white text-md text-center px-40 mb-10'>Carbon Token is a digital asset promoting environmental responsibility, allowing users to invest in sustainable initiatives. Carbon offsetting involves compensating for carbon emissions by supporting eco-friendly projects. Introducing Pulse, a token designed to pulse life into green ventures, fostering a sustainable future. Join us in mitigating carbon footprints and shaping a planet-friendly tomorrow with our carbon token Pulse.
            </p>
            <div className="flex px-16 justify-evenly">
                <div className="p-4 mx-2 w-3/5 border-2 border-green-500 rounded-lg text-white text-lg font-semibold text-center shadow-md shadow-green-400"><Link to='/buy'>Buy our token Pulse today itself at just 0.0001 ethers and be a part of our vision</Link></div>
                <div className="p-4 mx-2 w-3/5 border-2 border-green-500 rounded-lg text-white text-lg font-semibold text-center shadow-md shadow-green-400"><Link to="/list">Browse through our prestigious list of token holders who have pledged thier support to Pulse.</Link></div>
            </div>
    </div>
        </div>
    )
}

export default Home