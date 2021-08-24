import * as React from 'react';
import classNames from 'classnames';

import { CardStyled } from './styled';

export interface IProps {
	children?: React.ReactNode;
}

const Input: React.FC<IProps> = ({ children, ...rest }) => {
	return (
		<CardStyled className={classNames({})} {...rest}>
			{children}
		</CardStyled>
	);
};

export default Input;
