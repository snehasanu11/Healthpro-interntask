import React from 'react'

const Input = () => {
  return (
    
        <div class="container text-center">
  <div class="row">
    <div class="col-6 mt-4 text-start col-xxs-12">
      <p>Home /<span  class="fw-semibold" id="text">IVF Success Rate Calculator</span> </p>
    </div>
    </div>

    <div class="container text-center">
  <div class="row">
    <div class="col-12">
    <p class="fw-bolder fs-4 text ">Which age range applies to you?</p>
    <div class="form-check form-check-inline">
  <input class="form-check-input " type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1"/>
  <label class="form-check-label" for="inlineRadio1">Under 30</label>
</div>
<div class="form-check form-check-inline ">
  <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2"/>
  <label class="form-check-label" for="inlineRadio2">Between 30-34</label>
</div>
<div class="form-check form-check-inline ">
  <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio3" value="option3" />
  <label class="form-check-label" for="inlineRadio3">Between 35-37 </label>
</div>
   

   

    </div>
    
    </div>
    <div class="form-check form-check-inline">
  <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1"/>
  <label class="form-check-label" for="inlineRadio1">Between 38-40</label>
</div>
<div class="form-check form-check-inline">
  <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2"/>
  <label class="form-check-label" for="inlineRadio2">Between 41-43</label>
</div>
<div class="form-check form-check-inline">
  <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio3" value="option3" />
  <label class="form-check-label" for="inlineRadio3">Above 43 </label>
</div>
    </div>
    <div>
    <p class="fw-bold fs-5 text mt-4">Number  Of IVF Cycles?</p>

    <label for="customRange2" class="form-label"></label>
<input type="range" class="form-range" min="0" max="5" id="customRange2" style={{width:"200px"}}></input>
    </div>


    {/* 3*/ }
    <p class="fw-bolder fs-4 text mt-2">Which age range applies to you?</p>
    <label class="fw-semibold">ICSI Procedure :</label>
    <div class="form-check form-check-inline">
  <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1"/>
  <label class="form-check-label" for="inlineRadio1">Yes</label>
</div>
<div class="form-check form-check-inline">
  <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2"/>
  <label class="form-check-label" for="inlineRadio2">No</label>
</div>

<label class="fw-semibold">PGT Testing :</label>
    <div class="form-check form-check-inline">
  <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1"/>
  <label class="form-check-label" for="inlineRadio1">Yes</label>
</div>
<div class="form-check form-check-inline">
  <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2"/>
  <label class="form-check-label" for="inlineRadio2">No</label>
</div>

{/*4*/}
<div class="row rows-cols-xs-1">
  <div class="col-xxl-12 col-xs-12">
<p class="fw-bold fs-5 text mt-5">Do you have any these of medical conditions?</p>
<div class="form-check form-check-inline">
  <input class="form-check-input" type="checkbox" id="inlineCheckbox1" value="option1" />
  <label class="form-check-label" for="inlineCheckbox1">PCOS</label>
</div>

<div class="form-check form-check-inline">
  <input class="form-check-input" type="checkbox" id="inlineCheckbox2" value="option2" />
  <label class="form-check-label" for="inlineCheckbox2">Endometriosis</label>
</div>

<div class="form-check form-check-inline">
  <input class="form-check-input" type="checkbox" id="inlineCheckbox3" value="option3" />
  <label class="form-check-label" for="inlineCheckbox3">Low Overian Reserve</label>
</div>

<div class="form-check form-check-inline">
  <input class="form-check-input" type="checkbox" id="inlineCheckbox3" value="option3"  />
  <label class="form-check-label" for="inlineCheckbox3">Male Factor Infertility</label>
</div>
</div>
</div> 


{/*5 */}
<div className="row mb-4 mt-4">
        <div className="col">
          <button type="button" className="btn btn-danger">
            Calculate
          </button>
        </div>
      </div>

      


     
   
    </div>
  )
}

export default Input;