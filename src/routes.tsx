import React from 'react';
import { RouteComponentProps } from 'react-router-dom';
import loadable from '@loadable/component';

import { default as TwoColumnLayout } from './components/layout/two-column';
import { default as OneColumnLayout } from './components/layout/one-column';

interface IAsyncPageProps {
	page: string;
}

export interface IRoute {
	path: string;
	exact?: boolean;
	component: any; // main part of layout
	layout?: any;
	isPrivate: boolean;
}

export const AsyncPage: any = loadable(
	(props: IAsyncPageProps): any =>
		import(/* webpackPrefetch: true */ `@/pages/${props.page}`)
);

export const routes: IRoute[] = [
	{
		path: '/',
		exact: true,
		component: (props: RouteComponentProps) => (
			<AsyncPage page="home" {...props} />
		),
		layout: TwoColumnLayout,
		isPrivate: true
	},
	{
		path: '/login',
		exact: true,
		component: (props: RouteComponentProps) => (
			<AsyncPage page="login" {...props} />
		),
		layout: OneColumnLayout,
		isPrivate: false
	}
];

export const router = [{ routes }];
