const Input = ({ name, label, value, onChange }) => {
	return (
		<div className="form-control">
			<label htmlFor={name}>{label} </label>
			<input
				type="text"
				name={name}
				id="firstName"
				value={value}
				onChange={onChange}
			/>
		</div>
	);
};

export default Input;
