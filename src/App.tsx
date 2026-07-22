import { Route, Routes } from "react-router-dom";

import { Home } from "./pages/Home";
import { Auth } from "./pages/Auth";
import { Profile } from "./pages/Profile";
import { ExploreHub } from "./pages/ExploreHub";
import { Snippet } from "./pages/Snippet";

import { MainLayout } from "./components/layout/MainLayout";

export const App = () => {
	return (
		<Routes>
			<Route path='/auth' element={<Auth />} />

			<Route element={<MainLayout />}>
				<Route path='/' element={<Home />} />
				<Route path='/profile' element={<Profile />} />
				<Route path='/exploreHub' element={<ExploreHub />} />
				<Route path='/snippet/:id' element={<Snippet />} />
			</Route>
		</Routes>
	);
};