import React, { useCallback, useRef, useState } from 'react'
import ReactTags from 'react-tag-autocomplete'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheckSquare, faCoffee } from '@fortawesome/fontawesome-free-solid'
// import Experience from './Experience'
// import Education from './Education'
import rimg from './images/image-1.png';
import limg from './images/image-2.png';

const Resume = (props) => {
  const [formValuesed, setFormValuesed] = useState([{ Education :[{ institute: "", year: "", degree: "" }]}])

    let handleChangeed = (i, e) => {
        let newFormValues = [...formValuesed];
        newFormValues[i][e.target.name] = e.target.value;
        setFormValuesed(newFormValues);
      }
    
    let addFormFieldsed = () => {
      setFormValuesed([...formValuesed, [{ Education :[{ institute: "", year: "", degree: "" }]}]])
      }
    
    let removeFormFieldsed = (i) => {
        let newFormValues = [...formValuesed];
        newFormValues.splice(i, 1);
        setFormValuesed(newFormValues)
    }
  const [formValues, setFormValues] = useState([{ Experience :[{ company: "", year: "", designation: ""}]}])

    let handleChangeexp = (i, e) => {
        let newFormValues = [...formValues];
        newFormValues[i][e.target.name] = e.target.value;
        setFormValues(newFormValues);
      }
    
    let addFormFields = () => {
        setFormValues([...formValues, [{ Experience :[{ company: "", year: "", designation: "" }]}]])
      }
    
    let removeFormFields = (i) => {
        let newFormValues = [...formValues];
        newFormValues.splice(i, 1);
        setFormValues(newFormValues)
    }  
  // const setExpi = (formValues) => {
  //   const usersexp = formValues;
  //   console.log(JSON.stringify(usersexp));
  //   const [inputs, setInputs] = useState({});
  // }
  
  const [inputs, setInputs] = useState({});

  // const [experienceInfo, setExp] = useState({});

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs(values => ({...values, [name]: value}))
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(inputs);
    console.log(formValues);
    console.log(formValuesed);
    console.log(tags);
  }

    const [tags, setTags] = useState([])

    const [suggestions, setSuggestions] = useState([
      { id: 1, name: "PHP" },
      { id: 2, name: "Javascript" },
      { id: 3, name: "jQuery" },
      { id: 4, name: "Python" },
      { id: 5, name: "HTML" },
      { id: 6, name: "C" },
      { id: 7, name: "C++" }
    ])
  
    const reactTags = useRef()
  
    const onDelete = useCallback((tagIndex) => {
      setTags(tags.filter((_, i) => i !== tagIndex))
    }, [tags])
  
    const onAddition = useCallback((newTag) => {
      setTags([...tags, newTag])
    }, [tags])
  
    return (
        <div className='wrapper'>
			  <div className='inner'>
                <img src={rimg} alt="image-1" class="image-1"/>
                <form  onSubmit={handleSubmit}>
					<h3>Create Resume</h3>
					<div className="form-holder">
						<span className="lnr lnr-user"></span>
						<input value={inputs.name || ""} onChange={handleChange} name="name" type="text" className="form-control" placeholder="Name" />
					</div>
					<div className="form-holder">
						<span className="lnr lnr-phone-handset"></span>
						<input value={inputs.phone || ""} onChange={handleChange} name="phone" type="text" className="form-control" placeholder="Phone Number"/>
					</div>
					<div className="form-holder">
						<span className="lnr lnr-envelope"></span>
						<input value={inputs.email || ""} onChange={handleChange} name="email" type="text" className="form-control" placeholder="Mail"/>
					</div>
					<div className="form-holder">
						<span className="lnr lnr-lock"></span>
						<textarea value={inputs.address || ""} onChange={handleChange} name="address" className="form-control" placeholder="Address"/>
					</div>
          {formValuesed.map((element, index) => (
            

            <div className="wrap-input100 validate-input m-b-26" data-validate="Username is required" key={index}>
                <div className="form-holder  col-md-4">
                    <span className="lnr lnr-lock"></span>
                    <p className="exp_h">Education { index ?  index+1 : null }</p>
                    <input required  style={{display: 'inline-block', width: '30%', padding: "3px 0px 0px",margin: "2px"}} name="institute" type="text" className="form-control" placeholder="Institute" value={element.institute || ""} onChange={e => handleChangeed(index, e)}/>
                    <input required  style={{display: 'inline-block', width: '30%', padding: "3px 0px 0px",margin: "2px"}} name="year" type="text" className="form-control" placeholder="Year" value={element.year || ""} onChange={e => handleChangeed(index, e)}/>
                    <input required  style={{display: 'inline-block', width: '30%', padding: "3px 0px 0px"}} name="degree" type="text" className="form-control" placeholder="Degree" value={element.degree || ""} onChange={e => handleChangeed(index, e)}/>
                </div>
              {
                index ? 
                <span className='rembtn' onClick={() => removeFormFieldsed(index)}><FontAwesomeIcon icon="trash" /></span>
                : null
              }
            </div>
            
          ))}
          <div className="button-section">
          <span className='addbtn' onClick={() => addFormFieldsed()}><FontAwesomeIcon icon="plus" /></span>
          </div>
                    {/* <Education/> */}
                    
              {formValues.map((element, index) => (
                  

                  <div style={{ width: '100%'}} className="wrap-input100 validate-input m-b-26" data-validate="Username is required" key={index}>
                      <div className="form-holder  col-md-4">
                          <span className="lnr lnr-lock"></span>
                          <p className="exp_h">Experience  { index ?  index+1 : null }</p>
                          <input required style={{display: 'inline-block', width: '30%', padding: "3px 0px 0px",margin: "5px"}} name="company" type="text" className="form-control" placeholder="Company" value={element.company || ""} onChange={e => handleChangeexp(index, e)}/>
                          <input required style={{display: 'inline-block', width: '20%', padding: "3px 0px 0px",margin: "5px"}} name="year" type="text" className="form-control" placeholder="Year" value={element.year || ""} onChange={e => handleChangeexp(index, e)}/>
                          <input required style={{display: 'inline-block', width: '30%', padding: "3px 0px 0px",margin: "5px"}} name="designation" type="text" className="form-control" placeholder="Designation" value={element.designation || ""} onChange={e => handleChangeexp(index, e)}/>
                      </div>
                    {
                      index ? 
                        <span className='rembtn' onClick={() => removeFormFields(index)}><FontAwesomeIcon icon="trash" /></span>
                      : null
                    }
                  </div>
                  
                ))}
                <div className="button-section">
                  <span className='addbtn' onClick={() => addFormFields()}><FontAwesomeIcon icon="plus" /></span>
                    {/* <button className="add" type="button" onClick={() => addFormFields()}>Add Experience</button> */}
                </div>
                    {/* <Experience setExp={setExpi}/> */}
                    <div style={{margin: "20px 0"}}>
                        <ReactTags
                            ref={reactTags}
                            tags={tags}
                            suggestions={suggestions}
                            onDelete={onDelete}
                            onAddition={onAddition}
                            placeholderText  ={'Add skill sets'}
                        />
                    </div>
					<button>
						<span>Submit</span>
					</button>
				</form>
                <img src={limg} alt="image-2" class="image-2"/>
                
			</div>
		  </div>
    )
}

export default Resume;