import * as React from 'react';
import classNames from 'classnames';

import IconButton from '../../components/icon-button';
import IconClose from '../../components/icon/close';

import { CardStyled } from './styled';

export interface IProps {
	children?: React.ReactNode;
	onRemove?: () => void;
	onClick?: (e: React.SyntheticEvent) => void;
}

const Input: React.FC<IProps> = ({ children, onRemove, onClick, ...rest }) => {
	return (
		<CardStyled
			className={classNames({
				hasRemove: !!onRemove,
				clickable: !!onClick
			})}
			onClick={onClick}
			{...rest}
		>
			{!!onRemove && (
				<div className="removeButton">
					<IconButton primary onClick={onRemove}>
						<IconClose />
					</IconButton>
				</div>
			)}

			{children}
		</CardStyled>
	);
};

export default Input;
