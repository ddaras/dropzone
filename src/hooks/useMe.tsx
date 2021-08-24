import * as React from 'react';
import { useQuery, ApolloError } from '@apollo/client';

import ME from '../graphql/me';

interface User {
	id?: string;
	email?: string;
	accessToken?: string;
	picture?: string;
	firstName?: string;
	shopName?: string;
	shopDescription?: string;
}

type Token = string;

interface AuthContextType {
	me: User | null;
	loading: boolean;
	called?: boolean;
	error?: ApolloError;
	login: (args?: Token) => void;
	logout: () => void;
	refetch: () => void;
}

export const AuthContext = React.createContext<AuthContextType>({
	me: null,
	loading: false,
	login: () => {},
	logout: () => {},
	refetch: () => {}
});

export const AuthProvider = ({ children }: any) => {
	const { data, loading, error, called, refetch } = useQuery(ME);

	const login = (token: string) => {
		localStorage.setItem('token', token);
	};

	const logout = () => {
		localStorage.removeItem('token');
	};

	if (error) {
		logout();
	}

	const value = {
		me: data ? data.me : null,
		called,
		loading,
		error,
		refetch,
		login,
		logout
	} as AuthContextType;

	return (
		<AuthContext.Provider
			value={
				{
					me: data ? data.me : null,
					called,
					loading,
					error,
					refetch,
					login,
					logout
				} as AuthContextType
			}
		>
			{children}
		</AuthContext.Provider>
	);
};

const useMe = () => React.useContext(AuthContext);

export default useMe;
