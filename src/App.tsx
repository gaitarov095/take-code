import { Route, Routes } from "react-router-dom";
import { MainLayout } from "./components/layout/MainLayout";
import { Home } from "./pages/Home";
import { Auth } from "./pages/Auth";
import { Profile } from "./pages/Profile";

export const App = () => {
	return (
		<Routes>
			<Route path='/auth' element={<Auth />} />

			<Route element={<MainLayout />}>
				<Route path='/' element={<Home />} />
				<Route path='/profile' element={<Profile />} />
				<Route path='/exploreHub' element={<Home />} />
				<Route path='/community' element={<Home />} />
			</Route>
		</Routes>
	);
};