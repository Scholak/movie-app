// Library Imports
import { ReactNode } from 'react'

// Component Imports
import ReduxProvider from '@/Providers/ReduxProvider'
import ToastProvider from '@/Providers/ToastProvider'

type IRootProviderProps = {
	children: ReactNode
}

const RootProvider = ({ children }: IRootProviderProps) => {
	return (
		<ReduxProvider>
			<ToastProvider>{children}</ToastProvider>
		</ReduxProvider>
	)
}

export default RootProvider
