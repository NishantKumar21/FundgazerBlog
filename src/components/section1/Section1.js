import React from 'react'
import './section1.css';

function Section1() {
  return (
    <div className='section1-wrap'>
        <div className="sect1-left">
        <img src="/images/pic1.jpg" alt="error" className='sect1-pic1' />
        </div>  


        <div className="sect1-right">

        <div className="para-head">
        <p className="heading1">#Economy</p>
        <p className="heading1">#Crypto</p>
        </div>

        <div className="main-head">
        <h1 className="main-heading">7 Best Investing Blogs <br /> 2022: Think Like an <br /> Investor</h1>
        </div>

        <div className="main-items">
        <div className="main-item">
        In this segment of our Think Like an Investor' <br /> series, were going to look at another resource <br /> which proves invaluable to the modern investor: <br /> blogs.
        </div>
        </div>

        <div className="sect-foot-items">
        <div className="sect-foot-item">
        <p>Shahank Gupta</p>
        <p>11 March 2023</p>
        </div>
        </div>
       
        </div>


    </div>
  )
}

export default Section1
