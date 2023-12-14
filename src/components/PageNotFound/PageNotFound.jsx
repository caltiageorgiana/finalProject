import React from 'react'
import { Link } from 'react-router-dom'
import './PageNotFound.css';

function PageNotFound() {
  return (
    <div className='pageNotFound'>
        <div className='pNf'>
           <h3 className='h3-pnf'>Avem o știre nu tocmai grozavă... pagina pe care ai încercat să o accesezi nu există.</h3>
           <h1 className='h1-pnf'>404 :(</h1>
           <h3 className='h3-pnf2'>Hai <Link to='/' style={{'text-decoration': 'none', color: 'green' }}>înapoi pe site</Link> să vezi o nouă știre!</h3>
           <img className='error-image' src='/img/error.jpg' alt='error'/>
        </div>
    </div>
  )
}

export default PageNotFound
