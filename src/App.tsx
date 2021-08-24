import * as React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import PrivateRoute from './PrivateRoute';

import AppSidebar from './components/app/sidebar';
import Row from './components/row';
import Loader from './components/loader';

import darkTheme from './themes/dark';
import lightTheme from './themes/light';

import ResetCss from '@/themes/ResetCss';

import { routes, AsyncPage, IRoute } from './routes';

import useMe from './hooks/useMe';

export const App = () => {
	const { loading } = useMe();

	const theme = lightTheme(
		'-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"'
	);

	return (
		<ThemeProvider theme={theme}>
			<ResetCss />

			{loading ? (
				<div style={{ height: '100vh' }}>
					<Row fill centered>
						<Loader />
					</Row>
				</div>
			) : (
				<Router>
					<Switch>
						{routes.map(
							({
								path,
								component: Component,
								layout: Layout,
								isPrivate,
								...rest
							}: IRoute) => {
								const AppRoute = isPrivate ? PrivateRoute : Route;

								return (
									<AppRoute
										key={path}
										path={path}
										{...rest}
										render={(props: any) => {
											return (
												<Layout before={<AppSidebar />} {...props}>
													<Component {...props} />
												</Layout>
											);
										}}
									/>
								);
							}
						)}

						<Route component={() => <AsyncPage page="not-found" />} />
					</Switch>
				</Router>
			)}
		</ThemeProvider>
	);
};
