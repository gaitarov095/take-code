import { Routes, Route } from 'react-router-dom';

import { Home } from './pages/Home';
import { Auth } from './pages/Auth';

import { Header } from './components/layout/Header';
import { Footer } from './components/layout/Footer';

export const App = () => {
	return (
		<div className='flex flex-col min-h-screen'>
			<Header />

			{/* Страница занимает всё свободное пространство */}
			<div className='grow'>
				<Routes>
					<Route path='/' element={<Home />} />
					<Route path='/auth' element={<Auth />}></Route>
					<Route path='/exploreHub' element={<Home />} />
					<Route path='/community' element={<Home />} />
				</Routes>
			</div>

			<Footer />
		</div>
	);
};