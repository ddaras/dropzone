import * as React from 'react';

import Layout from '.';

export interface IProps {
	before?: React.ReactNode;
	children?: React.ReactNode;
}

const TwoColumnLayout: React.FC<IProps> = ({ before, children }) => {
	return <Layout before={before}>{children}</Layout>;
};

export default TwoColumnLayout;
