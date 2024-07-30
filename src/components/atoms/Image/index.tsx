// Library Imports
import { CSSProperties, useState } from 'react'

// Asset Imports
import styles from './Image.module.scss'
import fallbackImg from '@/assets/fallback.jpeg'

type IImageProps = {
	/** Image source. */
	src: string
	/** Image alternative text. */
	alt: string
	/** Image mode. */
	mode?: 'contain' | 'cover'
	/** Image border radius. */
	rounded?: boolean
	/** Image width. */
	width?: number
	/** Image height. */
	height?: number
	/** Image additional class. */
	className?: string
	/** Image additional styles. */
	style?: CSSProperties
}

const Image = ({ src, alt, rounded, mode = 'cover', width, height, className, style }: IImageProps) => {
	let classNames = `${styles.image} ${mode === 'cover' ? styles.cover : styles.contain}`

	if (rounded) classNames += ` ${styles.rounded}`

	if (className) classNames += ` ${className}`

	const [isError, setIsError] = useState<boolean>(false)

	return (
		<img
			src={isError ? fallbackImg : src}
			alt={alt}
			style={{ width: `${width}px`, height: `${height}px`, ...style }}
			className={classNames}
			onError={() => setIsError(true)}
		/>
	)
}

export default Image
