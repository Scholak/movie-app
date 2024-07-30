// Library Imports
import { HTMLInputTypeAttribute } from 'react'
import { UseFormRegister } from 'react-hook-form'

// Type Imports
import { IFilterForm } from '@/types/formTypes'

// Asset Imports
import styles from './Input.module.scss'

type IInputProps = {
	/** Input type. */
	type?: HTMLInputTypeAttribute
	/** Input name. */
	name: any
	/** Input register function. */
	register: UseFormRegister<IFilterForm>
	/** Input placeholder. */
	placeholder?: string
}

const Input = ({ type = 'text', register, name, placeholder }: IInputProps) => {
	return (
		<input
			type={type}
			{...register(name)}
			placeholder={placeholder}
			className={styles.input}
		/>
	)
}

export default Input
