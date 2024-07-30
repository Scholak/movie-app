// Library Imports
import { MouseEventHandler, ReactNode } from 'react'

// Asset Imports
import styles from './Button.module.scss'

type IButtonProps = {
	/** Button click event handler. */
	onClick: MouseEventHandler<HTMLButtonElement>
	/** Button additional class. */
	className?: string
	/** Button disabled state. */
	disabled?: boolean
	/** Button content. */
	children: ReactNode
}

const Button = ({ onClick, className, disabled, children }: IButtonProps) => {
	let classNames = `${styles.button}`

	if (className) classNames += ` ${className}`

	if (disabled) classNames += ` ${styles.disabled}`

	return (
		<button
			onClick={onClick}
			className={classNames}
			disabled={disabled}
		>
			{children}
		</button>
	)
}

export default Button
