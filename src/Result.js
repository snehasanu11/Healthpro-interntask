import React from 'react'

const Result = () => {
  return (
    <div style={{backgroundColor:"#303030",color:"white"}}>
        {/*1*/}

        <div class="container text-center">
  <div class="row">
    <div class="col-lg-12  col-xs-12 mt-4 text-start " style={{marginRight:"280px"}}>
      <p>Home / <span  class="fs-6 text ">IVF Success Rate Calculator / Result</span> </p>

    <div style={{display:"flex"}}> <div id="circle"></div> <p class="fs-2  col-lg-12 col-xs-12 fw-normal">Your Estimated IVF Success Rate is</p></div>
    </div>
    </div>


    

    
    
    
    
    
  
  <div class="container mt-4">
  <div class="row">
    
    <div class="col-md-6 col-sm-12 text-center mb-4">
      <div id="bg">
        <img src="spinner.png" alt="spinner" class="img-fluid" />
        <p id="per" class="mt-3">64%</p>
        <p>With one IVF Cycle</p>
      </div>
    </div>
    
    
    <div class="col-md-6 col-sm-12 text-center">
      <div id="bg1">
        <img src="image.png" class="img-fluid" alt="IVF Image" />
      </div>
    </div>
  </div>
  </div>




    </div>


    </div>
  )
}

export default Result