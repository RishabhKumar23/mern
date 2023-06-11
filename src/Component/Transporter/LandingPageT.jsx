import React from 'react'

const LandingPageT = ({messages}) => {
  return (
     <div>
      <h2>Transporter Component</h2>
      <table>
        <thead>
          <tr>
            <th>Order ID</th>
            <th>To</th>
            <th>From</th>
            <th>Quantity</th>
            <th>Address</th>
            <th>Transporter</th>
          </tr>
        </thead>
        <tbody>
          {messages.map((message, index) => (
            <tr key={index}>
            <td>{message.orderId}</td>
            <td>{message.to}</td>
            <td>{message.from}</td>
            <td>{message.quantity}</td>
            <td>{message.address}</td>
            <td>{message.transporter}</td>
          </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default LandingPageT