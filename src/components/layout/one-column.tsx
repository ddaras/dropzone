import * as React from 'react';

import Layout from '.';

export interface IProps {
	children?: React.ReactNode;
}

const OneColumnLayout: React.FC<IProps> = ({ children }) => {
	return <Layout>{children}</Layout>;
};

export default OneColumnLayout;
