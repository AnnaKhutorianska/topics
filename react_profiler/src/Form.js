import React, { useState } from 'react';

const Form = (props) => {
	const { labelname, ...rest } = props;
	const [text, setText] = useState("");

	return <div>
		<label {...rest}>
			{labelname} :
			<input
				type="text"
				value={text}
				onChange={e => setText(e.target.value)}
			/>
		</label>
	</div>;
};

export default Form;
