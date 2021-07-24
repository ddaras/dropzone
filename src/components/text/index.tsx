import * as React from 'react';
import classNames from 'classnames';

import { TextStyled } from './styled';

export interface IProps {
	as?: any;
	children?: React.ReactNode;
	title1?: boolean;
	title2?: boolean;
	title3?: boolean;
}

const Text: React.FC<IProps> = ({
	as,
	children,
	title1,
	title2,
	title3,
	...rest
}) => {
	if (title1) as = 'h1';
	if (title2) as = 'h2';
	if (title3) as = 'h3';

	return (
		<TextStyled
			as={as}
			className={classNames({
				title1,
				title2,
				title3
			})}
			{...rest}
		>
			{children}
		</TextStyled>
	);
};

export default Text;
