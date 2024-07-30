// Library Imports
import { useState } from 'react'
import { FaChevronDown } from 'react-icons/fa'

// Asset Imports
import styles from './SelectBox.module.scss'

type ISelectBoxProps = {
	/** Select box default value. */
	defaultValue?: string
	/** Select box possible options. */
	options: string[]
	/** Select change event handler. */
	onChange: (option: string) => void
}

const SelectBox = ({ options, defaultValue, onChange }: ISelectBoxProps) => {
	const [toggleOptions, setToggleOptions] = useState<boolean>(false)
	const [value, setValue] = useState<string>(defaultValue ?? options[0])

	const handleChange = (value: string) => {
		setValue(value)
		onChange(value)
	}

	return (
		<div className={styles.selectBox}>
			<div
				onClick={() => setToggleOptions(!toggleOptions)}
				className={styles.defaultValue}
			>
				<p>{value}</p>
				<FaChevronDown className={toggleOptions ? styles.active : ''} />
			</div>
			<div
				onClick={() => setToggleOptions(false)}
				className={`${styles.options} ${toggleOptions ? styles.active : ''}`}
			>
				{options.map(option => (
					<div
						key={option}
						onClick={() => handleChange(option)}
						className={`${styles.option} ${value === option ? styles.selected : ''}`}
					>
						{option}
					</div>
				))}
			</div>
		</div>
	)
}

export default SelectBox
