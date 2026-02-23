import React from 'react';
function Stats () {
    return ( 
        <div className='container p-5 '>
            <div className='row p-5'>
    <div className='col-6 p-5'>
        <h1 className='fs-2 mb-5'>Trust with Confidence</h1>
        <h2 className='fs-4'>Customer-first always </h2>
        <p className='text-muted'>That's why 1.3+ crore trust Zerodha with 3.5+ crore</p>
        <h2 className='fs-4'>No spam of gimmicks </h2>
        <p className='text-muted'>No gimmicks , spam, or annoying push notification , high Quality. High Quality apps that you use at your pace .</p>
        <h2 className='fs-4'>the Zeodha universe </h2>
        <p className='text-muted'> Not just an apps ,but a whole ecosytem Our investments in 30+ crore service specific to needs</p>
        <h2 className='fs-4'>Do better with money </h2>
        <p className='text-muted'>with initaitives like nudge and kill switch , we dont just facilities transaction ,but actively help you to better your money</p>
    </div>
    <div className='col-6 p-5'>

        <img src ='media/images/ecosystem.png' style={{width:"90%"}}/>
               <div className='text-center'></div>
        <div>
            <a href=''className='mx-5' style ={{textDecoration:"none"}}>Explore our products  <i class="fa fa-arrow-right" aria-hidden="true"></i></a>
            <a href='' style ={{textDecoration:"none"}}>Try Kite demo <i class="fa fa-arrow-right" aria-hidden="true"></i></a>
        </div>
    </div>

            </div>
        </div>
     );
}

export default Stats ;
