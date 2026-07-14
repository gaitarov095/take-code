import { Github, Telegram, Instagram, X, AzureEntraGlobalSecureAccess } from '@thesvg/react';
import type { UserProfile } from '../../pages/Profile';

const socialIconsMap: Record<
    string,
    React.ComponentType<{ className?: string }>
> = {
    GitHub: Github,
    Telegram: Telegram, // В Lucide иконка бумажного самолетика — это Send
    Instagram: Instagram, // В Lucide иконка бумажного самолетика — это Send
    XTwitter: X,
    Website: AzureEntraGlobalSecureAccess, // На случай, если будет личный сайт
};

interface ProfileLeftSideProps {
    userProfile: UserProfile | null;
}

export const ProfileAbout = ({ userProfile }: ProfileLeftSideProps) => {
	return (
		<>
			<div className='flex gap-4'>
				<div className='w-25 h-25'>
					{userProfile?.avatar_url === null ? (
						<img
							className='rounded-3xl'
							src='https://img.magnific.com/premium-vector/default-avatar-profile-icon-social-media-user-image-gray-avatar-icon-blank-profile-silhouette-vector-illustration_561158-3407.jpg?semt=ais_hybrid&w=740&q=80'
							alt=''
						/>
					) : (
						<img
							className='rounded-3xl'
							src={`${userProfile?.avatar_url}`}
							alt='avatar'
						/>
					)}
				</div>
				<div className='mt-2'>
					<h2 className='font-extrabold text-4xl text-white'>
						{userProfile?.username || userProfile?.dispay_name}
					</h2>
					<div className='text-[#94a3b8] flex items-center gap-2 mt-1'>
						<span>@{userProfile?.tag || userProfile?.username}</span>
						<span className='text-[#94a3b8]'>•</span>
						<span>{userProfile?.speciality || 'Developer'}</span>
					</div>
				</div>
			</div>
			<p className='text-[#94A3B8] text-lg'>
				Sharing pragmatic UI patterns, API helpers, and infrastructure snippets
				that make production code easier to ship and maintain.
			</p>
			<div>
				<ul className='flex items-center gap-2'>
					{userProfile?.social_medias.map((socialMedia, index) => {
						// 1. Находим нужную иконку в словаре
						const IconComponent =
							socialIconsMap[socialMedia] || AzureEntraGlobalSecureAccess;

						return (
							<li
								className='flex items-center gap-2 text-[#CBD5E1] text-sm font-semibold bg-[#151a29] border border-[#2a3040] rounded-3xl px-4 py-2 cursor-pointer transition-colors hover:bg-[#1c2336]'
								key={index}
							>
								{/* 2. Рендерим иконку и задаем ей размер/цвет через Tailwind */}
								<IconComponent className='w-5 h-5 text-[#38BDF8]' />

								{/* 3. Оставляем текстовое название (или можешь удалить, если нужны только иконки) */}
								<span>{socialMedia}</span>
							</li>
						);
					})}
				</ul>
			</div>
			<div className='w-full h-auto flex items-center gap-4 mt-2'>
				<div className='w-full bg-[#0b1c2e] border border-[#12354f] rounded-2xl px-4 py-4'>
					<h3 className='text-[#38BDF8] text-3xl font-extrabold'>128</h3>
					<p className='text-[#94A3B8] font-medium'>snippets shared</p>
				</div>
				<div className='w-full bg-[#0b1e27] border border-[#113b3a] rounded-2xl px-4 py-4'>
					<h3 className='text-[#34D399] text-3xl font-extrabold'>24.7k</h3>
					<p className='text-[#94A3B8] font-medium'>upvotes received</p>
				</div>
			</div>
		</>
	);
};