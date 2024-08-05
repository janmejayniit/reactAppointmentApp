import React from 'react'

function Home() {
  return (
    <div className='container-fluid mt-2'>
      <div className='row'>
        <div className='col-md-3'>
            <div className='card'>
                <div className='card-body'>
                    <img src='701.jpg' style={{width:'100%'}}/>
                </div>
                <div className='card-footer'>
                    <div className='text'>Orthodontics</div>
                </div>
            </div>
            
        </div>

        <div className='col-md-3'>
            <div className='card'>
                <div className='card-body'>
                    <img src='2149152807.jpg' style={{width:'100%'}}/>
                </div>
                <div className='card-footer'>
                    <div className='text'>Trichologist</div>
                </div>
            </div>
            
        </div>

        <div className='col-md-3'>
            <div className='card'>
                <div className='card-body'>
                    <img src='2148878907.jpg' style={{width:'100%'}}/>
                </div>
                <div className='card-footer'>
                    <div className='text'>Dermatologist</div>
                </div>
            </div>
            
        </div>

        <div className='col-md-3'>
            <div className='card'>
                <div className='card-body'>
                    <img src='14509.jpg' style={{width:'100%'}}/>
                </div>
                <div className='card-footer'>
                    <div className='text'>Ophthalmologist</div>
                </div>
            </div>
            
        </div>

      </div>
    </div>
  )
}

export default Home
