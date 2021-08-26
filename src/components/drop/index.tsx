import * as React from 'react';

import Text from '../text';
import Col from '../col';
import Row from '../row';
import List from '../list';
import ListItem from '../list/item';
import Button from '../button';
import Divider from '../divider';
import Slider from '../slider';
import IconImage from '../icon/image';

import useTheme from '../../hooks/useTheme';

interface DropProps {
	onDrop?: (
		files: FileList | null,
		event: React.DragEvent<HTMLDivElement> | React.ChangeEvent<HTMLInputElement>
	) => any;
	data?: any[];
	placeholder?: string;
	renderItem?: (item: any) => void;
}

const Drop: React.FC<DropProps> = ({
	data = [],
	renderItem = () => {},
	onDrop,
	placeholder = 'Drag & drop images'
}) => {
	const [compressionRateValue, setCompressionRateValue] = React.useState<
		number | undefined
	>(90);

	const [entered, setEntered] = React.useState<boolean>(false);
	const fileRef = React.useRef<HTMLInputElement | null>(null);
	const theme = useTheme();

	const handleDrop: React.DragEventHandler<HTMLDivElement> = event => {
		event.preventDefault();

		const files = event.dataTransfer ? event.dataTransfer.files : null;
		onDrop && onDrop(files, event);

		setEntered(false);
	};

	const onFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		onDrop && onDrop(event.target.files, event);
	};

	return (
		<div
			onDrop={handleDrop}
			onDragOver={event => {
				event.preventDefault();
				setEntered(true);
			}}
			onDragLeave={event => {
				event.preventDefault();
				setEntered(false);
			}}
			style={{
				backgroundColor: entered ? theme.color.core.neutral[1] : undefined,
				border: entered
					? `1px dashed ${theme.color.core.neutral[3]}`
					: '1px solid transparent',
				borderRadius: theme.ui.borderRadius
				// padding: theme.unit
			}}
		>
			<input
				ref={fileRef}
				type="file"
				multiple
				onChange={onFileChange}
				style={{ display: 'none' }}
			/>

			<List horizontal gutter middleAlign>
				{data.length > 0 && data.map(item => renderItem(item))}

				<ListItem>
					<div
						style={{
							border: !entered
								? `1px dashed ${theme.color.core.neutral[3]}`
								: '1px solid transparent',
							borderRadius: theme.ui.borderRadius
						}}
					>
						<Button onClick={() => fileRef.current && fileRef.current.click()}>
							<Col centered padded>
								<IconImage size="2em" color="#929292" />
								<Text>{placeholder}</Text>
							</Col>
						</Button>
					</div>

					<Divider hidden />

					<Text>Compression Rate</Text>

					<Slider
						value={compressionRateValue}
						onChange={setCompressionRateValue}
					/>
				</ListItem>
			</List>
		</div>
	);
};

export default Drop;
