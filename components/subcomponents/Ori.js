import React from 'react'
import styles from '../../styles/Main.module.css'
import Image from 'next/image'
import collect from '../../assets/Images/collect.svg'
import monetize from '../../assets/Images/monetize.svg'

function Ori() {
  return (
    <div className={styles.minisOri}>
      <div>
        <h2>Origins <span style={{color: '#cf012d'}}>Vision</span></h2>
        <p> Origins architects and executes growth marketing strategies by leveraging internal and key strategic partners to achieve scalability via influencers, creators, and investors.</p>
      </div>
      <div className={styles.minisRight}>
        <div>
          <ul>
            <li>Campaign Design</li>
            <li>Web3 Campaign Architecture</li>
            <li>Monetization Strategy</li>
            <li>Branding</li>
            <li>Social Media Management</li>
            <li>Community Management</li>
            <li>Influencer Outreach and Management</li>
            <li>Content Creation</li>
            <li>Digital Memberships and Collectibles</li>
          </ul>
          <button><a href="/Origins"> Explore ➢</a></button>
        </div>
        <div>
          <Image height={200} width={200} src={collect}></Image>
        </div>
      </div>
      <div className={styles.minisLeft}>
        <div>
          <Image height={200} width={200} src={monetize}></Image>
        </div>
        <div>
          <ul>
            <li>Airdrops</li>
            <li>Email Marketing</li>
            <li>Search Engine Optimization (SEO)</li>
            <li>Website Design and Development</li>
            <li>Landing Page Design and Development</li>
            <li>Customer Behavior Analysis</li>
            <li>Financial Modelling & Forecasting</li>
            <li>CLTV Optimization</li>
            <li>Incentive Structures</li>
            <li>A/B Testing</li>
          </ul>
          <button><a href="/Origins"> Explore ➢</a></button>
        </div>
      </div>
    </div>
  )
}

export default Ori