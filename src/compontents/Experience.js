import React, { useState } from 'react'
const Experience = (props) => {
    const [formValues, setFormValues] = useState([{ company: "", year: "", designation: ""}])

    let handleChange = (i, e) => {
        let newFormValues = [...formValues];
        newFormValues[i][e.target.name] = e.target.value;
        setFormValues(newFormValues);
        props.setExp(formValues)
      }
    
    let addFormFields = () => {
        setFormValues([...formValues, { company: "", year: "", designation: "" }])
        props.setExp(formValues)
      }
    
    let removeFormFields = (i) => {
        let newFormValues = [...formValues];
        newFormValues.splice(i, 1);
        setFormValues(newFormValues)
        props.setExp(formValues)
    }
    // let handleSubmit = (event) => {
        // event.preventDefault();
        // alert(JSON.stringify(formValues));
        // props.setExp(formValues)
        // console.log(props);
    // }
    return (
        <>
        
        {formValues.map((element, index) => (
            

            <div className="wrap-input100 validate-input m-b-26" data-validate="Username is required" key={index}>
                <div className="form-holder  col-md-4">
                    <span className="lnr lnr-lock"></span>
                    <p className="exp_h">Experience  { index ?  index+1 : null }</p>
                    <input required style={{display: 'inline-block', width: '30%', padding: "3px 0px 0px",margin: "5px"}} name="company" type="text" className="form-control" placeholder="Company" value={element.company || ""} onChange={e => handleChange(index, e)}/>
                    <input required style={{display: 'inline-block', width: '30%', padding: "3px 0px 0px",margin: "5px"}} name="year" type="text" className="form-control" placeholder="Year" value={element.year || ""} onChange={e => handleChange(index, e)}/>
                    <input required style={{display: 'inline-block', width: '30%', padding: "3px 0px 0px",margin: "5px"}} name="designation" type="text" className="form-control" placeholder="Designation" value={element.designation || ""} onChange={e => handleChange(index, e)}/>
                </div>
              {
                index ? 
                  <button type="button"  className="remove" onClick={() => removeFormFields(index)}>Remove Experience</button> 
                : null
              }
            </div>
            
          ))}
          <div className="button-section">
              <button className="add" type="button" onClick={() => addFormFields()}>Add Experience</button>
          </div>
          
          {/* <div className="button-section">
              <button className="add" type="button" onClick={() => handleSubmit()}>Add</button>
          </div> */}
        </>
    )
}

export default Experience
