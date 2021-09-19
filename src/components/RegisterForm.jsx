import React, { useState } from 'react';
import Input from './Input';
import validate from './Validate';
import { useDispatch } from 'react-redux';
import { studentAdded } from './store/students';

const RegisterForm = () => {
	const dispatch = useDispatch();

	const [form, setForm] = useState({
		firstName: '',
		lastName: '',
		email: '',
		address: '',
		city: '',
		course: 'angular',
		gender: 'male',
		agree: false,
	});

	const [errors, setErrors] = useState({});

	const courses = ['angular', 'react', 'vue'];
	const genders = ['male', 'female'];

	const handleSubmit = (e) => {
		e.preventDefault();
		const errors = validate(form);
		if (!errors) {
			dispatch(studentAdded(form));
		} else {
			if (errors) setErrors(errors);
		}
	};

	const handleChange = (e) => {
		const { name, value } = e.target;

		setForm({
			...form,
			[name]: value,
		});
	};

	return (
		<div className="container">
			<form className="form" onSubmit={handleSubmit}>
				<h2 style={{ marginBottom: 40 }}>Student Register Form</h2>
				<Input
					name="firstName"
					value={form.firstName}
					label="First Name"
					onChange={handleChange}
				/>
				{errors.firstName && <p className="errors"> {errors.firstName} </p>}
				<Input
					name="lastName"
					value={form.lastName}
					label="Last Name"
					onChange={handleChange}
				/>
				{errors.lastName && <p className="errors"> {errors.lastName} </p>}
				<Input
					name="email"
					value={form.email}
					label="E-mail"
					onChange={handleChange}
				/>
				{errors.email && <p className="errors"> {errors.email} </p>}
				<Input
					name="address"
					value={form.address}
					label="Address"
					onChange={handleChange}
				/>
				<Input
					name="city"
					value={form.city}
					label="City"
					onChange={handleChange}
				/>
				<div className="gender">
					<legend>Choose Gender</legend>
					<select name="gender" id="genders" onChange={handleChange}>
						<option value={genders[0]}>{genders[0]}</option>
						<option value={genders[1]}>{genders[1]}</option>
					</select>
				</div>
				<div className="courses">
					<legend>Choose Course</legend>

					<select name="course" id="courses" onChange={handleChange}>
						<option value={courses[0]}>{courses[0]}</option>
						<option value={courses[1]}>{courses[1]}</option>
						<option value={courses[2]}>{courses[2]}</option>
					</select>
				</div>
				<div className="checkBoxes">
					<label htmlFor="newsLetter">Subscribe to newsletter</label>
					<input type="checkbox" name="newsLetter" />
				</div>
				<div className="checkBoxes">
					<label htmlFor="terms">Agree to terms</label>
					<input
						type="checkbox"
						name="agree"
						value={form.agree}
						checked={form.agree}
						onChange={handleChange}
					/>
					{errors.agree && <p className="errors"> {errors.agree} </p>}
				</div>
				<button type="submit">Register</button>
			</form>
		</div>
	);
};

export default RegisterForm;
