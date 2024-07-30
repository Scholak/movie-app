// Library Imports
import { ReactNode } from 'react'
import { Provider } from 'react-redux'

// Store Imports
import { store } from '@/store'

type IReduxProviderProps = {
	children: ReactNode
}

const ReduxProvider = ({ children }: IReduxProviderProps) => {
	return <Provider store={store}>{children}</Provider>
}

export default ReduxProvider
