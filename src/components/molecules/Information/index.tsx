// Component Imports
import Typography from '@/components/atoms/Typography'

type IInformationProps = {
	/** Information key. It's displayed on the left side. */
	info: string | undefined
	/** Information value. It's displayed on the right side. */
	value: string | undefined
}

const Information = ({ info, value }: IInformationProps) => {
	return (
		<Typography>
			{info}:{' '}
			<Typography
				element='span'
				weight='bold'
			>
				{value ?? '-'}
			</Typography>
		</Typography>
	)
}

export default Information
