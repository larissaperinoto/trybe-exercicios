import React from 'react';

class Email extends React.Component {
	render() {
		const { value, handleChange } = this.props;
		return (
			<label>
				E-mail:
				<input
					type="string"
					name="email"
					value={ value }
					onChange={ handleChange }
					required
				/>
			</label>
		);
	}
}

export default Email;
