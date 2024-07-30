// Library Imports
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

// Component Imports
import ListPage from '@/pages/ListPage'
import DetailPage from '@/pages/DetailPage'

const App = () => {
	return (
		<Router>
			<Routes>
				<Route
					path='/'
					element={<ListPage />}
				/>
				<Route
					path='/:id'
					element={<DetailPage />}
				/>
			</Routes>
		</Router>
	)
}

export default App
