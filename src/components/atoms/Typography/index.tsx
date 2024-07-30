// Library Imports
import { CSSProperties, MouseEventHandler, ReactNode } from 'react'

// Asset Imports
import styles from './Typography.module.scss'

type ITypographyProps = {
	/** Typography element. 'p' by default. */
	element?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span'
	/** Typography text color. 'white' by default. */
	color?: 'white' | 'dark'
	/** Typography text align. 'left' by default. */
	align?: 'left' | 'center' | 'right' | 'justify'
	/** Typography font size. 'md' by default. */
	size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl' | '4xl'
	/** Typography font weight. 'regular' by default. */
	weight?: 'thin' | 'regular' | 'medium' | 'semibold' | 'bold'
	/** Typography capitalize */
	capitalize?: boolean
	/** Typography additional class. */
	className?: string
	/** Typography additional styles. */
	style?: CSSProperties
	/** Typography click event handler. */
	onClick?: MouseEventHandler<HTMLElement>
	/** Typography content */
	children: ReactNode
}

const Typography = ({
	element = 'p',
	color = 'white',
	align = 'left',
	size = 'md',
	weight = 'regular',
	capitalize,
	className,
	style,
	onClick,
	children,
}: ITypographyProps) => {
	const Element = element

	let classNames = `${styles.typography}`

	classNames += ` ${styles[color ?? 'white']}`
	classNames += ` ${styles[align ?? 'left']}`
	classNames += ` ${styles[weight ?? 'regular']}`

	switch (size) {
		case '2xl':
			classNames += ` ${styles.xxl}`
			break

		case '3xl':
			classNames += ` ${styles.xxxl}`
			break

		case '4xl':
			classNames += ` ${styles.xxxxl}`
			break

		default:
			classNames += ` ${styles[size ?? 'md']}`
			break
	}

	if (capitalize) classNames += ` ${styles.capitalize}`

	if (className) classNames += ` ${className}`

	return (
		<Element
			style={style}
			className={classNames}
			onClick={onClick}
		>
			{children}
		</Element>
	)
}

export default Typography
