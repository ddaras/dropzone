import * as React from 'react';
import classNames from 'classnames';

import { LoaderStyled } from './styled';

export interface LoaderProps {
	inline?: boolean;
	small?: boolean;
}

const Loader: React.FC<LoaderProps> = ({ inline, small }) => {
	return (
		<LoaderStyled
			className={classNames({
				inline,
				small
			})}
		></LoaderStyled>
	);
};

export default Loader;
