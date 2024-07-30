export const moveFromLeft = {
	initial: {
		x: -25,
		opacity: 0,
	},
	animate: {
		x: 0,
		opacity: 1,
	},
	exit: {
		x: -25,
		opacity: 0,
	},
}

export const moveFromRight = {
	initial: {
		x: 25,
		opacity: 0,
	},
	animate: {
		x: 0,
		opacity: 1,
	},
	exit: {
		x: 25,
		opacity: 0,
	},
}

export const moveFromBottom = {
	initial: {
		y: 25,
		opacity: 0,
	},
	animate: {
		y: 0,
		opacity: 1,
	},
	exit: {
		y: 25,
		opacity: 0,
	},
}
