import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const LandingPage = (onSubmit) => {

  const [orderID, setOrderID] = useState('');
  const [to, setTo] = useState('');
  const [from, setFrom] = useState('');
  const [quantity, setQuantity] = useState('1');
  const [address, setAddress] = useState(''); 
  const [transporter, setTransporter] = useState('');

  const navigate = useNavigate();

  function handleSubmitLogout(){
    navigate('/');
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    // Create a message object to be sent to the transporter
    const message = {
      orderID,
      to,
      from,
      quantity,
      address,
      transporter,
    };

    onSubmit(message);

    // Reset the form fields
    setOrderID('');
    setTo('');
    setFrom('');
    setQuantity('');
    setAddress('');
    setTransporter('');

    // history.push('/dashboadT')
  };


  return (
    <>
      <div className='flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8'>
        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form onSubmit={handleSubmit}>
            <label>
              Order ID:
              <input className='className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
              type="text" value={orderID} onChange={(e) => setOrderID(e.target.value)} />
            </label>
            <br />
            <label>
              To:
              <input className='className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
               type="date" value={to} onChange={(e) => setTo(e.target.value)} />
            </label>
            <br />
            <label>
              From:
              <input className='className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
              type="date" value={from} onChange={(e) => setFrom(e.target.value)} />
            </label>
            <br />
            <label>
              Quantity:
              <select className='className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6' 
              value={quantity} onChange={(e) => setQuantity(e.target.value)}>
                <option value="1">1 ton</option>
                <option value="2">2 ton</option>
                <option value="3">3 ton</option>
              </select>
            </label>
            <br />
            <label>
              Address:
              <input className='className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
              type="text" value={address} onChange={(e) => setAddress(e.target.value)} />
            </label>
            <br />
            <label>
              Transporter:
              <select className='className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6' 
              value={transporter} onChange={(e) => setTransporter(e.target.value)}>
                <option value="">Select a transporter</option>
                <option value="Transporter A">Transporter A</option>
                <option value="Transporter B">Transporter B</option>
                <option value="Transporter C">Transporter C</option>
              </select>
            </label>
            <br />
            <button className='mt-3 flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'
            type="submit">Send</button>
            <br></br>
            <button onClick={handleSubmitLogout}
            className='mt-3 flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'
            type="submit">log out</button>
          </form>
        </div>
      </div>
    </>
  )
}

export default LandingPage