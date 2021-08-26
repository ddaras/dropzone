import * as React from 'react';
import { useHistory } from 'react-router-dom';

import Sidebar from '../../layout/sidebar';
import Text from '../../text';
import Menu, { MenuItem } from '../../menu';

import useMe from '../../../hooks/useMe';

export interface IProps {}

const AppSidebar: React.FC<IProps> = ({}) => {
	const history = useHistory();
	const { logout } = useMe();

	const handleLogout = () => {
		logout();
		history.push('/');
	};

	return (
		<Sidebar>
			<Menu borderLess>
				<MenuItem to="/">
					<Text title3>Headless</Text>
				</MenuItem>
				<MenuItem to="/" active={location.pathname === '/'}>
					Home
				</MenuItem>
				{/* <MenuItem to="/login" active={location.pathname === '/login'}>
					Login
				</MenuItem>
				<MenuItem to="/orders" active={location.pathname === '/orders'}>
					Orders
				</MenuItem>
				<MenuItem>Categories</MenuItem> */}
				<MenuItem
					onClick={() => {
						handleLogout();
					}}
				>
					Logout
				</MenuItem>
			</Menu>
		</Sidebar>
	);
};

export default AppSidebar;
