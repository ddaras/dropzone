import * as React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import Sidebar from './components/layout/sidebar';
import Menu, { MenuItem } from './components/menu';

import darkTheme from './themes/dark';
import lightTheme from './themes/light';

import ResetCss from '@/themes/ResetCss';

import { routes, AsyncPage, IRoute } from './routes';

export const App = () => {
	const theme = lightTheme(
		'-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"'
	);

	return (
		<ThemeProvider theme={theme}>
			<ResetCss />
			<Router>
				<Switch>
					{routes.map(
						({
							path,
							component: Component,
							layout: Layout,
							...rest
						}: IRoute) => (
							<Route
								key={path}
								path={path}
								{...rest}
								render={(props: any) => {
									return (
										<Layout
											before={
												<Sidebar>
													<Menu borderLess>
														<MenuItem to="/" active={location.pathname === '/'}>
															Home
														</MenuItem>
														<MenuItem
															to="/login"
															active={location.pathname === '/login'}
														>
															Login
														</MenuItem>
														<MenuItem
															to="/orders"
															active={location.pathname === '/orders'}
														>
															Orders
														</MenuItem>
													</Menu>
												</Sidebar>
											}
											{...props}
										>
											<Component {...props} />
										</Layout>
									);
								}}
							/>
						)
					)}
					<Route component={() => <AsyncPage page="not-found" />} />
				</Switch>
			</Router>
		</ThemeProvider>
	);
};
