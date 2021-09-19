export default function validate({ firstName, lastName, email, agree }) {
	let errors = {};

	if (!firstName.trim()) errors.firstName = 'required field';
	if (!lastName.trim()) errors.lastName = 'required field';
	if (!email) {
		errors.email = 'required field';
	} else if (!/\S+@\S+\.\S+/.test(email)) {
		errors.email = 'Email address is invalid';
	}
	if (Number(firstName))
		errors.firstName = 'must be with alphabetic characters';
	if (Number(lastName)) errors.lastName = 'must be with alphabetic characters';
	if (!agree) errors.agree = 'Must agree with the terms and conditions ';

	return Object.keys(errors).length === 0 ? null : errors;
}
