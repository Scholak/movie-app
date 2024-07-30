// Library Imports
import ReactDOM from 'react-dom/client'

// Component Imports
import App from './App.tsx'
import RootProvider from '@/Providers'

// Asset Imports
import './index.scss'

ReactDOM.createRoot(document.getElementById('root')!).render(
	<RootProvider>
		<App />
	</RootProvider>,
)
