import * as React from 'react';
import classNames from 'classnames';

import { LoaderStyled } from './styled';

export interface LoaderProps {
	inline?: boolean;
}

const Text: React.FC<LoaderProps> = ({ inline }) => {
	return (
		<LoaderStyled
			className={classNames({
				inline
			})}
		></LoaderStyled>
	);
};

export default Text;
