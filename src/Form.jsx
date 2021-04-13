import React, { useState } from 'react'
function Form() {

	let [name,setName] = useState()
	let [fullname,setFullName] = useState()
	let [lastname,setLastName] = useState()
	let [lastnamenew,setLastNamenew] = useState()

	const InputEvent = (event) => {
		setName(event.target.value)
	}
	const InputEventtwo = (event) => {
		setLastName(event.target.value)
	}
	
	const submit = (e) => {
		e.preventDefault()
		setFullName(name)
		setLastNamenew(lastname)
	}
 
	return (
		<div className="App">
			<form className="form" onSubmit = {submit}>
			<h1>Hello {fullname}{lastnamenew}</h1>

			<input type="text" placeholder="Enter Your Name" onChange={InputEvent} />
			<input type="text" placeholder="Enter Your Password" onChange={InputEventtwo} />

			<button className="btn"> Submit</button>
			</form>
		</div>
	)
}

export default Form
