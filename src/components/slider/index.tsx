import * as React from 'react';
import classNames from 'classnames';

import { SliderStyled, SliderRangeStyled, SliderTooltipStyled } from './styled';

import Divider from '../divider';
import Text from '../text';

export interface IProps {
	value?: number;
	min?: number;
	max?: number;
	step?: number;
	onChange?: (value?: number) => void;
}

const Slider: React.FC<IProps> = ({
	value,
	min = 0,
	max = 100,
	step = 1,
	onChange = () => {}
}) => {
	const [showTooltip, setShowTooltip] = React.useState(false);

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		onChange(Number(e.currentTarget.value));
	};

	const handleMouseEnter = () => {
		setShowTooltip(true);
	};

	const handleMouseLeave = () => {
		setShowTooltip(false);
	};

	const getLeftOffset = React.useCallback(() => {
		return (Number(value) / (Number(max) - Number(min))) * 100;
	}, [value]);

	return (
		<SliderStyled className={classNames({})}>
			<SliderRangeStyled
				value={value}
				min={min}
				max={max}
				step={step}
				type="range"
				onChange={handleChange}
				onMouseEnter={handleMouseEnter}
				onMouseLeave={handleMouseLeave}
				leftOffset={getLeftOffset()}
			/>

			{showTooltip && (
				<SliderTooltipStyled leftOffset={getLeftOffset()}>
					<div className="tooltipContent">
						<Text>{value}%</Text>
					</div>
				</SliderTooltipStyled>
			)}
		</SliderStyled>
	);
};

export default Slider;
