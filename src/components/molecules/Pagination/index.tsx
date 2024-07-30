// Component Imports
import Button from '@/components/atoms/Button'

// Asset Imports
import styles from './Pagination.module.scss'

type IPaginationProps = {
	/** Current page. */
	currentPage: number
	/** Previous page is available or not. */
	hasPrevPage: boolean
	/** Next page is available or not. */
	hasNextPage: boolean
	/** Pagination additional class. */
	className?: string
	/** Page change event handler */
	onPageChange: (page: number) => void
}

const Pagination = ({ currentPage, hasPrevPage, hasNextPage, className, onPageChange }: IPaginationProps) => {
	let classNames = `${styles.container}`

	if (className) classNames += ` ${className}`

	return (
		<div className={classNames}>
			<Button
				onClick={() => hasPrevPage && onPageChange(Number(currentPage) - 1)}
				disabled={!hasPrevPage}
			>
				Previous Page
			</Button>
			<Button
				onClick={() => hasNextPage && onPageChange(Number(currentPage) + 1)}
				disabled={!hasNextPage}
			>
				Next Page
			</Button>
		</div>
	)
}

export default Pagination
