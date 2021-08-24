import React from 'react'

function footer() {
    return (
        <div className="footer" style={{ width: '100%', height: '270px', background: '#393636', }} >
            <div style={{ marginLeft: '30px', marginTop: '40px' }} className='footer1'>
                <text style={{ color: '#9C9B9B' }}> <h2>Stay in the know !</h2> </text><br></br>
                <hr width='300px'></hr><br></br>
                <h4 style={{ color: "#9C9B9B" }} >Plase enter your email to join our mailling list</h4><br />
                <input style={{ border: '2px solid white', width: '250px', height: '30px' }} type="text" name="name" />
                <button style={{ width: '50px', height: '30px', marginLeft: '20px', backgroundColor: '#90DF43' }}> <h3 Color='white'>Go</h3> </button><br /> <br />
                <h4 style={{ color: "#9C9B9B" }}>To unsubsiribe plase click here </h4>
            </div>
            <div style={{ marginLeft: '30px', marginTop: '40px' }} className='footer1'>
                <text style={{ color: '#9C9B9B' }}> <h2>Servisec</h2> </text><br></br>
                <hr width='300px'></hr><br></br>
                <p style={{ color: '#9FD16E' }}>
                    Lorem, ipsum dolor sit amet
                    <br /> adipisicing elit.Eveniet
                    <br />corporis, commodi quasbr ut
                    <br /> voluptatibusexplicabo ea m
                    <br />aut iure sapiente vel dolor
                </p>
            </div>
            <div style={{ marginLeft: '30px', marginTop: '40px' }} className='footer1'>
                <text style={{ color: '#9C9B9B' }}> <h2>Tittle Text</h2> </text><br></br>
                <hr width='300px'></hr><br></br>
                <p style={{ color: '#9FD16E' }}>
                    Lorem, ipsum dolor sit amet
                    <br /> adipisicing elit.Eveniet
                    <br />corporis, commodi quasbr u
                    <br /> voluptatibusexplicabo ea
                    <br />aut iure sapiente vel dolo
                </p>            </div>
            <div style={{ marginLeft: '30px', marginTop: '40px' }} className='footer1'>
                <text style={{ color: '#9C9B9B' }}> <h2>Tittle Text</h2> </text><br></br>
                <hr width='300px'></hr><br></br>
                <p style={{ color: '#9FD16E' }}>
                    Lorem, ipsum dolor sit amet co
                    <br /> adipisicing elit.Eveniet
                    <br />corporis, commodi quasbr ut
                    <br /> voluptatibusexplicabo ea m
                    <br />aut iure sapiente vel dolor
                </p>
            </div>



        </div>

    )
}

export default footer
