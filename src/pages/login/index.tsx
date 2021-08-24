import React from 'react';
import { RouteComponentProps } from 'react-router-dom';
import { useGoogleLogin } from 'react-google-login';

import Text from '../../components/text';
import FormField from '../../components/form-field';
import Card from '../../components/card';
import Button from '../../components/button';
import Col from '../../components/col';

import useApi from '../../hooks/useApi';
import useMe from '../../hooks/useMe';

import SING_IN from '../../graphql/signIn';

interface SignInProps {
	provider?: string;
	response: any;
}

const Login = ({ history }: RouteComponentProps) => {
	const { call: mutateSignIn, loading } = useApi(SING_IN);
	const { login } = useMe();

	const handleLogin = async ({
		provider = 'google',
		response
	}: SignInProps) => {
		const res = await mutateSignIn({
			variables: {
				provider,
				token: response.tokenId
			}
		});

		if (!res.data) {
			// error
		} else {
			login(res.data.signIn.token);
			history.push('/');
		}
	};

	const handleFailure = async (response: any) => {
		console.log(response);
	};

	const { signIn } = useGoogleLogin({
		clientId: `${process.env.GOOGLE_CLIENT_ID}`,
		onSuccess: response => handleLogin({ response }),
		onFailure: handleFailure,
		cookiePolicy: 'single_host_origin'
		// isSignedIn: true
	});

	return (
		<div>
			<div style={{ width: 440, margin: '4rem auto' }}>
				<Card>
					<Col padded>
						<FormField>
							<Text title1>Login</Text>
						</FormField>
						<FormField>
							<Button primary block onClick={signIn} loading={loading}>
								Continue with Google
							</Button>
						</FormField>
					</Col>
				</Card>
			</div>
		</div>
	);
};

export default Login;
