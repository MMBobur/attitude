import React, { useState } from 'react'
import Button from '@material-ui/core/Button'
const Navbar = () => {
    const [val, setval] = useState();
    function setinp() {
      setval("")
    }
    return (
        <div>
            <div className='Navbar_main'>
                <div className="logo_name">
                    <p className="text_at">Attitude</p>
                    <p className="text_at2">Free PSD Website Template</p>

                </div>
                <div className="left">
                    <div className="search_page">
                        <input value={val} type="text" name="" id="inpw" placeholder='Search this website...' />
                        <Button
                            onClick={setinp}
                            style={{
                                backgroundColor: '#96A50C',
                                width: '120px',
                                height: '35px',
                                border: '2px solid white',
                                borderRadius: 0,
                                fontSize: '19px',
                                marginLeft: '50px'
                            }} variant="contained" color="primary">
                            SEARCH
                        </Button>
                        <p style={{ justifyContent: 'space-around' }}></p>
                    </div>
                    <div className="bot_link">

                        <div className='mm'>
                            <a href="">Company</a>
                            <a href="">Services</a>
                            <a href="">Products</a>
                            <a href="">Gallery</a>
                            <a id='lasta' href="">Lonh Link Text</a>

                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar
