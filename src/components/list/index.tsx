import * as React from 'react';
import classNames from 'classnames';

import { ListStyled } from './styled';

export interface IProps {
	as?: any;
	children?: React.ReactNode;
	horizontal?: boolean;
	middleAlign?: boolean;
	gutter?: boolean;
}

const List: React.FC<IProps> = ({
	children,
	horizontal,
	middleAlign,
	gutter,
	...rest
}) => {
	let as = 'ul';

	return (
		<ListStyled
			as={as}
			className={classNames({
				horizontal,
				middleAlign,
				gutter
			})}
			{...rest}
		>
			{children}
		</ListStyled>
	);
};

export default List;
