import * as React from 'react';
import { render } from 'react-dom';
import { ApolloProvider } from '@apollo/client';

import { App } from './App';

import { client } from './apollo';

import { AuthProvider } from './hooks/useMe';

const renderApp = (Application: any) => {
	render(
		<ApolloProvider client={client}>
			<AuthProvider>
				<Application />
			</AuthProvider>
		</ApolloProvider>,
		document.getElementById('root')
	);
};

renderApp(App);

if (process.env.NODE_ENV === 'development') {
	if (module.hot) {
		module.hot.accept();
	}
}
