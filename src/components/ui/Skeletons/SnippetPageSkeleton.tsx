import { CommentSkeleton } from './CommentSkeleton';

export const SnippetPageSkeleton = () => {
	return (
		<div className='w-full py-6 px-10 animate-pulse'>
			<section className='flex justify-between items-start gap-8'>
				{/* Левая колонка (Заголовок, автор, код) */}
				<aside className='flex flex-1 flex-col min-w-0'>
					{/* Хедер страницы */}
					<div className='flex items-center gap-5'>
						<div className='h-5 w-32 bg-[#1e293b] rounded-md' />
						<div className='flex items-center gap-2'>
							<div className='w-8 h-8 rounded-full bg-[#1e293b]' />
							<div className='h-4 w-40 bg-[#1e293b] rounded-md' />
						</div>
					</div>

					{/* Заголовок и описание */}
					<div className='w-full flex flex-col mt-4 gap-3'>
						<div className='h-9 w-2/3 bg-[#1e293b] rounded-lg' />
						<div className='h-5 w-full max-w-xl bg-[#1e293b] rounded-md' />
					</div>

					{/* Блок кода */}
					<div className='mt-6 w-full'>
						<div className='w-full h-96 bg-[#0f172a] rounded-3xl border border-[#1e2639] p-5 flex flex-col gap-4'>
							<div className='flex justify-between items-center border-b border-[#1e2639] pb-4'>
								<div className='h-5 w-36 bg-[#1e293b] rounded-md' />
								<div className='flex gap-2'>
									<div className='h-9 w-20 bg-[#1e293b] rounded-2xl' />
									<div className='h-9 w-20 bg-[#1e293b] rounded-2xl' />
								</div>
							</div>
							<div className='w-full flex-1 bg-[#090d16] rounded-2xl p-4 space-y-3'>
								<div className='h-4 w-1/3 bg-[#1e293b] rounded' />
								<div className='h-4 w-2/3 bg-[#1e293b] rounded' />
								<div className='h-4 w-1/2 bg-[#1e293b] rounded' />
								<div className='h-4 w-3/4 bg-[#1e293b] rounded' />
								<div className='h-4 w-1/4 bg-[#1e293b] rounded' />
								<div className='h-4 w-1/3 bg-[#1e293b] rounded' />
							</div>
						</div>
					</div>
				</aside>

				{/* Правая колонка / Сайдбар */}
				<aside className='w-96 shrink-0 flex flex-col gap-5'>
					{/* Dependencies Skeleton */}
					<div className='p-5 bg-[#0f172a] border border-[#1e2639] rounded-3xl flex flex-col gap-4'>
						<div className='flex justify-between items-center'>
							<div className='h-6 w-28 bg-[#1e293b] rounded-md' />
							<div className='h-5 w-20 bg-[#1e293b] rounded-md' />
						</div>
						<div className='h-16 w-full bg-[#151c29] rounded-2xl' />
						<div className='h-16 w-full bg-[#151c29] rounded-2xl' />
					</div>

					{/* Readme Skeleton */}
					<div className='p-5 bg-[#0f172a] border border-[#1e2639] rounded-3xl flex flex-col gap-3'>
						<div className='h-6 w-24 bg-[#1e293b] rounded-md' />
						<div className='h-4 w-full bg-[#1e293b] rounded-md' />
						<div className='h-4 w-4/5 bg-[#1e293b] rounded-md' />
					</div>

					{/* Tags Skeleton */}
					<div className='p-5 bg-[#0f172a] border border-[#1e2639] rounded-3xl flex flex-col gap-3'>
						<div className='h-6 w-32 bg-[#1e293b] rounded-md' />
						<div className='flex gap-2'>
							<div className='h-8 w-16 bg-[#1e293b] rounded-3xl' />
							<div className='h-8 w-20 bg-[#1e293b] rounded-3xl' />
							<div className='h-8 w-24 bg-[#1e293b] rounded-3xl' />
						</div>
					</div>
				</aside>
			</section>

			{/* Секция комментариев */}
			<section className='mt-12 w-full'>
				<div className='h-7 w-36 bg-[#1e293b] rounded-md mb-2' />
				<div className='h-4 w-96 bg-[#1e293b] rounded-md mb-6' />
				<CommentSkeleton />
			</section>
		</div>
	);
};