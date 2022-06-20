import React from 'react'

import { Helmet } from 'react-helmet'

import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>Future Assurance Technician</title>
        <meta property="og:title" content="Future Assurance Technician" />
      </Helmet>
    </div>
  )
}

export default Home
