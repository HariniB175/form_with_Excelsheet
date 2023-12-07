import axios from 'axios'
import { useState } from 'react'

function Form(){
    const [name,setName]=useState('');
    const[clname,setClname]=useState('');
    const[department,setDepartment]=useState('');
    const[year,setYear]=useState('');
    const[phone,setPhone]=useState('');
    const[email,setEmail]=useState('');
    const[feedback,setFeedback]=useState('');
    const[Interest,setInterest]=useState('');
    const[course,setCourse]=useState('');

    const handleSubmit=(e)=>{
        e.preventDefault();
        // console.log(name,clname,depart,year,phone,email,feedback,Intrest,course)
      const data={
        Name:name,
        Clname:clname,
        Depart:department,
        Year:year,
        Phone:phone,
        Email:email,
        Feedback:feedback,
        Interest:Interest,
        Course:course

        }  
        axios.post('https://sheet.best/api/sheets/608fcc04-9b2e-47b0-9475-3ea6b36f7037',data)
        // .then((response)=>{
    // console.log(response);
    setName('');
    setClname('');
    setDepartment('');
    setYear('');
    setPhone('');
    setEmail('');
    setFeedback('');
    setInterest('');
    setCourse('');

// })
    }
    const onOptionChanges=e=>{
        setYear(e.target.value)
    }
    const onOptionChange=e=>{
        setCourse(e.target.value)
    }
    const Option=e=>{
        setInterest(e.target.value)
    }
    return(
        <div className='container'>
           <form onSubmit={handleSubmit} className='second'>
           <h1>Feedback Form</h1>
            <div className='first'>
            <input type="text" value={name} placeholder='First name' onChange={(e)=>setName(e.target.value)} ></input>
            <h5>College Name *</h5>
            <input type="text" value={clname} placeholder='Add answer here' onChange={(e)=>setClname(e.target.value)} ></input>
            <h5>Department *</h5>
            <input type="text" value={department} placeholder='Add answer here' onChange={(e)=>setDepartment(e.target.value)} ></input>
            <h5>Year of Study *</h5>
            
            <div className='year'>
            <input type="radio" name='year' value={"I"} onChange={onOptionChanges} checked={year === "I"} ></input>
            I Year<br></br>
            <input type="radio" name='year' value={"II"} onChange={onOptionChanges} checked={year === "II"}  ></input>
            II Year<br></br>
            <input type="radio" name='year' value={'III'} onChange={onOptionChanges} checked={year === "III"} ></input>
            III year<br></br>
            <input type="radio" name='year' value={'IV'} onChange={onOptionChanges} checked={year === "IV"}  ></input>
            IV Year<br></br>
            </div>
            
             <h5>Phone *</h5>
            <input type="number" name="phone" placeholder='Phone' value={phone} onChange={(e)=>setPhone(e.target.value)}/> 
            <h5>Email *</h5>
            <input type="text" placeholder='Email' onChange={(e)=>setEmail(e.target.value)} value={email}/>
            <h5>Give Your Feedback About Workshop *</h5>
            <textarea cols={40} rows={5} onChange={(e)=>setFeedback(e.target.value)} value={feedback} placeholder='Add answer here'/>
            <h5>Do You Have Interest to Join Courses in Idm Techpark *</h5>

            <div className='in'>
            <input type="radio" onChange={Option} value={"yes"} checked={Interest==="yes"}/>Yes i want to Join<br></br>
            <input type="radio" onChange={Option} value={"no"} checked={Interest==="no"}/>No, i have no idea to Join
            </div>
            <h5>Which Course you are looking for?</h5>
            <div className='hi'>
            <input type="radio" onChange={onOptionChange} value={"java"} checked={course==="java"}/>java<br></br>
            <input type="radio" onChange={onOptionChange} value={"python"} checked={course==="python"}/>Python<br></br>
            <input type="radio" onChange={onOptionChange} value={"web development"} checked={course==="web development"}/>Web Development<br></br>
            <input type="radio" onChange={onOptionChange} value={"web designing"} checked={course==="web designing"}/>Web Designing<br></br>
            <input type="radio" onChange={onOptionChange} value={"ui/ux"} checked={course==="ui/ux"}/>UI/UX<br></br>
            <input type="radio" onChange={onOptionChange} value={"data science"} checked={course==="data science"}/>Data Science<br></br>
            <input type="radio" onChange={onOptionChange} value={"digital marketing"} checked={course==="digital marketing"}/>Digital Marketing<br></br>
            </div>
            <div>
            <button>Submit Your Answer</button>
            </div>

</div>
           </form>
        </div>
    )
}
export default Form;