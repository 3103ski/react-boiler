import React from 'react';

export default function FormContainer({ children, ...props }) {
	const radius = '15px';
	const mainContainerStyle = {
		borderRadius: radius,
	};
	const titleStyle = {
		borderTopLeftRadius: radius,
		borderTopRightRadius: radius,
		padding: '20px',
		display: 'flex',
		justifyContent: 'center',
	};
	const formContainerStyle = {
		padding: '40px 20px',
	};

	return (
		<div style={mainContainerStyle}>
			<div style={titleStyle}>
				<h1>{props.formTitle}</h1>
			</div>
			<div style={formContainerStyle}>{children}</div>
		</div>
	);
}
