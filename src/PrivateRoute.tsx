import React from 'react';
import { Route, useHistory } from 'react-router-dom';

interface IPrivateRoute {
	path: string;
	exact?: boolean;
	children?: React.ReactNode;
	render?: any;
}

export const PrivateRoute: React.FC<IPrivateRoute> = ({
	children,
	...props
}) => {
	const history = useHistory();

	if (!localStorage.getItem('token')) {
		history.push('/login');
	}

	return <Route {...props}>{children}</Route>;
};

export default PrivateRoute;
