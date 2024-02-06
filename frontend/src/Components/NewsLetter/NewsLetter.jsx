import React from 'react'
import './NewsLetter.css'


function NewsLetter() {
  return (
    <div className='newsLetter'>
        <h1>Get Exclusive Ofeers On Your Email</h1>
        <p>Subscribe to our newletter and stay updated</p>
        <div>
            <input type="email" placeholder='E-Mail' />
            <button>Subscribe</button>
        </div>
    </div>
  )
}

export default NewsLetter