import { useEffect, useState } from 'react'

import { cn } from '../utils/cn';
import { supabase } from '../utils/supabase';

import { Filter, Search, X } from 'lucide-react';

import { SmartSnippetsFilters } from '../components/features/SmartSnippetsFilters';
import { SortDropdown } from '../components/features/SortDropDown';

import type { snippetCard } from '../components/features/Showcase';
import { Snippets } from '../components/features/Snippets';
import { useSnippetStars } from '../hooks/useSnippetStars';


export type languagesT = {
    id: string,
    name: string
    icon: string
}

export type frameworksT = {
    id: string,
    name: string
}

export type tagsT = {
	id: string;
	name: string;
};

const sortingFiltersT = ['Trending', 'Most Copied', 'Recent'];

export const ExploreHub = () => {
	const [snippets, setSnippets] = useState<snippetCard[] | null>([]);
	const { handleToggleStar } = useSnippetStars(setSnippets);

	const [selectedLanguage, setSelectedLanguage] = useState<string>('');
	const [selectedFramework, setSelectedFramework] = useState<string>('');
	const [selectedTag, setSelectedTag] = useState<string>('');
	const [selectedFilter, setSelectedFilter] = useState<string>(
		sortingFiltersT[0],
	);

	const [reset, setReset] = useState<boolean>(false);

	const [loading, setLoading] = useState<boolean>(false);
	const [languages, setLanguages] = useState<languagesT[] | null>([]);
	const [frameworks, setFrameworks] = useState<frameworksT[] | null>([]);
	const [tags, setTags] = useState<tagsT[] | null>([]);

	const currentLang = languages?.find(lang => lang.id === selectedLanguage);
	const currentFramework = frameworks?.find(fw => fw.id === selectedFramework);
	const currentTag = tags?.find(t => t.id === selectedTag);

	const [searchQuery, setSearchQuery] = useState<string>('');

	const isActive = searchQuery?.length > 0;
	const pageSize = 6

	const handleSearchSubmit = () => {
		if (!searchQuery.trim()) return;
		console.log(`Searching for: ${searchQuery}`);
		// Тут будет логика перехода или фильтрации
	};

	const toggleReset = () => {
		setReset(!reset);
		setSelectedLanguage('');
		setSelectedFramework(''); // Сбрасываем фреймворк
		setSelectedTag('');
	};

	useEffect(() => {
		async function fetchData() {
			setLoading(true);
			try {
				const [languagesResponce, libsFrameworkdResponce, tagsResponce] =
					await Promise.all([
						supabase.from('languages').select('*'),
						supabase.from('frameworks').select('*'),
						supabase.from('tags').select('*'),
					]);

				setLanguages(languagesResponce.data);
				setFrameworks(libsFrameworkdResponce.data);
				setTags(tagsResponce.data);
			} catch (error) {
				console.log(error);
			} finally {
				setLoading(false);
			}
		}

		fetchData();
	}, []);

	useEffect(() => {
		const fetchSnippets = async () => {
			setSnippets([]); // Сбрасываем в пустой массив для показа скелетонов/загрузки

			try {
				const {
					data: { user },
				} = await supabase.auth.getUser();
				const currentUserId = user?.id;

				// 1. Формируем базовый запрос
				let query = supabase.from('snippets').select(`
                *,
                languages(name, color, background, borderColor, icon),
                profiles:user_id(tag, avatar_url),
                snippets_stars(user_id)
            `);

				// 2. Фильтрация (НЕ ИСПОЛЬЗУЕМ .eq по snippets_stars!)
				if (selectedLanguage) {
					query = query.eq('language_id', selectedLanguage);
				}

				if (selectedFramework) {
					query = query.eq('framework_id', selectedFramework);
				}

				if (selectedTag && currentTag) {
					query = query.contains('tags', [currentTag.name]);
				} // <-- ЗДЕСЬ ТЕПЕРЬ ЕСТЬ ЗАКРЫВАЮЩАЯ СКОБКА!

				// 3. Сортировка
				if (selectedFilter === 'Trending') {
					query = query.order('stars_count', { ascending: false }).limit(6);
				} else if (selectedFilter === 'Most Copied') {
					query = query.order('copied_count', { ascending: false }).limit(6);
				} else if (selectedFilter === 'Recent') {
					query = query.order('created_at', { ascending: false }).limit(6);
				}

				// 4. Выполнение запроса
				const { data, error } = await query;

				if (error) {
					console.error('Ошибка Supabase:', error);
					return;
				}

				if (data) {
					const formattedData = data.map(item => {
						// Проверяем, есть ли среди всех лайков этого сниппета лайк от currentUserId
						const hasStarred =
							Array.isArray(item.snippets_stars) &&
							item.snippets_stars.some(
								(star: { user_id: string }) => star.user_id === currentUserId,
							);

						return {
							...item,
							is_starred_by_user: Boolean(hasStarred),
						};
					});

					setSnippets(formattedData);
				}
			} catch (err) {
				console.error('Ошибка при загрузке:', err);
			}
		};

		fetchSnippets();
	}, [
		selectedLanguage,
		selectedFramework,
		selectedTag,
		currentTag,
		selectedFilter,
	]);

	const getFilterText = () => {
		if (!selectedLanguage) return 'Filter';
		if (selectedLanguage && !selectedFramework) return currentLang?.name;
		if (selectedLanguage && selectedFramework && !selectedTag)
			return `${currentLang?.name} -> ${currentFramework?.name}`;
		return `${currentLang?.name} -> ${currentFramework?.name} -> ${currentTag?.name}`;
	};

	return (
		<section className='w-full py-6 px-10'>
			<div>
				<div className='flex flex-col gap-3'>
					<h3 className='text-[16px] text-[#38BDF8] font-bold font-mono'>
						Explore Hub
					</h3>
					<h2 className='text-5xl text-white font-extrabold'>
						Browse code by stack, <br /> task, and momentum.
					</h2>
					<div className='flex items-end justify-between'>
						<p className='text-lg text-[#94A3B8]'>
							Narrow from language to framework to exact intent, then take the
							snippet that fits your <br /> build.
						</p>
						<div className='flex items-center justify-center gap-2 w-auto h-auto rounded-3xl bg-[#34d3992e] border border-[#34d39952] text-[#A7F3D0] font-bold text-[16px] px-4 py-2 max-[460px]:py-2'>
							<Filter color='#34D399' size={18} />
							{getFilterText()}
						</div>
					</div>
				</div>
			</div>
			<div className='mt-7 flex items-start gap-5'>
				<div className='w-120 h-auto px-5 py-5 bg-[#0B1220] border border-[#94a3b838] rounded-3xl'>
					<SmartSnippetsFilters
						languages={languages}
						frameworks={frameworks}
						tags={tags}
						selectedLanguage={selectedLanguage}
						setSelectedLanguage={langId => {
							setSelectedLanguage(langId);
							setSelectedFramework('');
							setSelectedTag('');
						}}
						selectedFramework={selectedFramework}
						setSelectedFramework={fwId => {
							setSelectedFramework(fwId);
							setSelectedTag('');
						}}
						selectedTag={selectedTag}
						setSelectedTag={setSelectedTag}
						toggleReset={toggleReset}
						loading={loading}
					/>
				</div>
				<div className='w-full'>
					<div className='bg-[#0c1321] border border-[#252d3c] px-4 py-4 rounded-3xl'>
						<div className='flex items-center justify-between gap-2 max-[640px]:flex-col'>
							<div className='relative flex items-center w-full'>
								<input
									value={searchQuery}
									onChange={e => setSearchQuery(e.target.value)}
									className='w-full bg-[#060b1b] border border-[#22293d] text-white text-[16px] px-4 py-2.5 pl-11 pr-11 rounded-xl focus:outline-none focus:ring-[#343a4c] focus:border-[#343a4c] max-lg:text-[14px]'
									type='text'
									placeholder='Search snippets...'
								/>

								<div className='absolute left-4 flex items-center justify-center'>
									<Search
										className='cursor-pointer text-[#38BDF8] hover:text-white transition-colors'
										size={18}
									/>
								</div>

								<div className='absolute right-4 flex items-center justify-center'>
									<X
										className={cn(
											'text-[#64748b] cursor-pointer hover:text-white transition-colors',
											isActive ? 'visible opacity-100' : 'invisible opacity-0',
										)}
										size={18}
										onClick={() => setSearchQuery('')}
									/>
								</div>
							</div>
							<SortDropdown
								filtersList={sortingFiltersT}
								selectedFilter={selectedFilter}
								setSelectedFilter={setSelectedFilter}
							/>
						</div>
					</div>
					<div className='flex items-center justify-between mt-4'>
						<h2 className='text-2xl text-[#F8FAFC] font-bold'>
							Count matching snippets
						</h2>
						<p className='text-[#64748B] font-mono font-semibold'>
							Sorted by: {selectedFilter.toLocaleLowerCase()}
						</p>
					</div>
					<div className='mt-4'>
						<Snippets
							snippets={snippets}
							onToggleStar={handleToggleStar}
							activeSnippetCategory={selectedFilter}
						/>
					</div>
				</div>
			</div>
		</section>
	);
};