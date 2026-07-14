import { useEffect, useState } from 'react';

import { supabase } from '../utils/supabase';
import type { User } from '@supabase/supabase-js';

import { ProfileAbout } from '../components/features/ProfileAbout';
import { ProfileMySetup } from '../components/features/ProfileMySetup';

import { ProflieAboutLoader } from '../components/ui/Loaders/ProflieAboutLoader';
import { ProfileMySetupLoader } from '../components/ui/Loaders/ProfileMySetupLoader';
import { Bookmark, Code2, FolderClosed } from 'lucide-react';

export interface UserProfile {
	id: string,
	avatar_url: string,
	username: string,
	dispay_name: string,
	about: string,
	speciality: string,
	tag: string,
	social_medias: string[]
}

export const Profile = () => {
	const [user, setUser] = useState<User | null>(null);
	const [userProfile, setUserProfile] = useState<UserProfile | null>(null);
	const [loading, setLoading] = useState<boolean>(true);

	useEffect(() => {
		supabase.auth.getSession().then(({ data: { session } }) => {
			setUser(session?.user || null);
			setLoading(false);
		});

		const {
			data: { subscription },
		} = supabase.auth.onAuthStateChange((_event, session) => {
			setUser(session?.user ?? null);
		});

		return () => subscription.unsubscribe();
	}, []);

	useEffect(() => {
		if (user?.id) {
			async function fetchUser() {
				setLoading(true);
				try {
					const { data } = await supabase
						.from('profiles')
						.select('*')
						.eq('id', user?.id);

					if (data) {
						setUserProfile(data[0]);
					}
				} catch (error) {
					console.log(error);
				} finally {
					setLoading(false);
				}
			}
			fetchUser();
		}
	}, [user?.id]);

	return (
		<section className='w-full mx-auto py-6 px-10'>
			<div className='flex gap-4 w-full h-auto bg-[#0c1321] border border-[#252d3c] rounded-4xl px-4.5 py-4.5 max-[965px]:flex-col'>
				<div className='w-1/2 h-auto bg-[#080e1d] border border-[#19202f] rounded-3xl flex flex-col gap-5 px-8 py-9 max-[965px]:w-full'>
					{loading ? (
						<ProflieAboutLoader />
					) : (
						<ProfileAbout userProfile={userProfile} />
					)}
				</div>
				<div className='w-1/2 h-auto bg-[#080e1d] border border-[#19202f] rounded-4xl px-8 py-8 max-[965px]:w-full'>
					{loading ? <ProfileMySetupLoader /> : <ProfileMySetup />}
				</div>
			</div>
			<div className='bg-[#090f22] border border-[#20273b] mt-8 rounded-3xl px-4 py-4'>
				<div className='flex items-center justify-between'>
					<div className='flex'>
						<ul className='flex gap-3'>
							<li className='flex items-center bg-[#13182b] border border-[#20273a] px-4 py-3 gap-3 text-[#94a3b8] text-lg rounded-2xl cursor-pointer'>
								<Code2 />
								My Snippets
							</li>
							<li className='flex items-center bg-[#13182b] border border-[#20273a] px-4 py-3 gap-3 text-[#94a3b8] text-lg rounded-2xl cursor-pointer'>
								<Bookmark />
								Saved / Bookmarks
							</li>
							<li className='flex items-center bg-[#13182b] border border-[#20273a] px-4 py-3 gap-3 text-[#94a3b8] text-lg rounded-2xl cursor-pointer'>
								<FolderClosed />
								Collections
							</li>
						</ul>
					</div>
					<div>
						<span className='text-[#64748b] font-mono text-lg'>128 published</span>
					</div>
				</div>
			</div>
			<div className='flex items-center justify-center mt-25 text-2xl text-gray-400'>
				Сниппеты
			</div>
		</section>
	);
};