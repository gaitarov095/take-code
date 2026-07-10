
import { Hero } from '../components/features/Hero';
import { Showcase } from '../components/features/Showcase';
import { TrendingActivites } from '../components/features/TrendingActivites';

export const Home = () => {
	return (
		<main>
			<Hero />
			<Showcase />
			<TrendingActivites />
		</main>
	);
};