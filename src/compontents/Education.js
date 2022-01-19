
import React, { useState } from 'react'
const Education = () => {
    const [formValues, setFormValues] = useState([{ institute: "", year: "", degree: "" }])

    let handleChange = (i, e) => {
        let newFormValues = [...formValues];
        newFormValues[i][e.target.name] = e.target.value;
        setFormValues(newFormValues);
      }
    
    let addFormFields = () => {
        setFormValues([...formValues, { institute: "", year: "", degree: "" }])
      }
    
    let removeFormFields = (i) => {
        let newFormValues = [...formValues];
        newFormValues.splice(i, 1);
        setFormValues(newFormValues)
    }
    
    return (
        <>
        
        {formValues.map((element, index) => (
            

            <div className="wrap-input100 validate-input m-b-26" data-validate="Username is required" key={index}>
                <div className="form-holder  col-md-4">
                    <span className="lnr lnr-lock"></span>
                    <p className="exp_h">Education { index ?  index+1 : null }</p>
                    <input required  style={{display: 'inline-block', width: '30%', padding: "3px 0px 0px",margin: "2px"}} name="institute" type="text" className="form-control" placeholder="Institute" value={element.institute || ""} onChange={e => handleChange(index, e)}/>
                    <input required  style={{display: 'inline-block', width: '30%', padding: "3px 0px 0px",margin: "2px"}} name="year" type="text" className="form-control" placeholder="Year" value={element.year || ""} onChange={e => handleChange(index, e)}/>
                    <input required  style={{display: 'inline-block', width: '30%', padding: "3px 0px 0px"}} name="degree" type="text" className="form-control" placeholder="Degree" value={element.degree || ""} onChange={e => handleChange(index, e)}/>
                </div>
              {
                index ? 
                  <button type="button"  className="remove" onClick={() => removeFormFields(index)}>Remove Education</button> 
                : null
              }
            </div>
            
          ))}
          <div className="button-section">
              <button className="add" type="button" onClick={() => addFormFields()}>Add Education</button>
          </div>
        </>
    )
}

export default Education
