import React from 'react';

import Text from '../../components/text';
import FormField from '../../components/form-field';
import Input from '../../components/input';
import Button from '../../components/button';

const Login = () => {
	return (
		<div>
			<div style={{ width: 440, margin: '4rem auto' }}>
				<FormField>
					<Text title1>Login</Text>
				</FormField>
				<FormField>
					<Input />
				</FormField>
				<FormField>
					<Input />
				</FormField>
				<FormField>
					<Button primary>Click me please!</Button>
				</FormField>
			</div>
		</div>
	);
};

export default Login;
