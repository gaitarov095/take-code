import { Settings } from "lucide-react";

export const ProfileMySetup = () => {

	return (
		<div className='flex flex-col w-full max-w-5xl'>
			{/* Заголовок блока */}
			<div className='flex items-center gap-3'>
				<div className='p-2.5 bg-[#f8fafc05] border border-[#1e2533] rounded-2xl text-[#aeb5c0]'>
					<Settings className='w-7 h-7' />
				</div>
				<h2 className='text-3xl text-white font-semibold'>My setup</h2>
			</div>

			{/* Сетка Кнопок-Карточек (Grid) */}
			<div className='flex flex-col gap-4 mt-5'>
				{/* Кнопка 1: Editor & Workspace */}
				<button className='flex items-center gap-4 p-5 rounded-2xl border text-left cursor-pointer transition-all duration-300 ease-in-out bg-[#0b1c2e]/40 border-[#12354f]/50 hover:border-[#12354f] hover:scale-[1.01]'>
					<span className='text-4xl filter drop-shadow-[0_0_8px_rgba(56,189,248,0.3)]'>
						⚙️
					</span>
					<div>
						<h3 className='text-xl font-medium transition-colors duration-300 text-[#38BDF8]'>
							Editor & Workspace
						</h3>
						<p className='text-xs text-gray-500 mt-0.5'>
							VS Code, themes & fonts
						</p>
					</div>
				</button>

				{/* Кнопка 2: Extensions & Tools */}
				<button className='flex items-center gap-4 p-5 rounded-2xl border text-left cursor-pointer transition-all duration-300 ease-in-out bg-[#0b1e27]/40 border-[#113b3a]/50 hover:border-[#113b3a] hover:scale-[1.01]'>
					<span className='text-4xl filter drop-shadow-[0_0_8px_rgba(52,211,153,0.3)]'>
						🛠️
					</span>
					<div>
						<h3 className='text-xl font-medium transition-colors duration-300 text-[#34D399]'>
							Extensions & Tools
						</h3>
						<p className='text-xs text-gray-500 mt-0.5'>
							Plugins & CLI environment
						</p>
					</div>
				</button>

				{/* Кнопка 3: Hardware & Environment */}
				<button className='flex items-center gap-4 p-5 rounded-2xl border text-left cursor-pointer transition-all duration-300 ease-in-out bg-[#1b1936]/40 border-[#342359]/50 hover:border-[#342359] hover:scale-[1.01]'>
					<span className='text-4xl filter drop-shadow-[0_0_8px_rgba(124,58,237,0.3)]'>
						💻
					</span>
					<div>
						<h3 className='text-xl font-medium transition-colors duration-300 text-[#ddd6fe]'>
							Hardware & Gear
						</h3>
						<p className='text-xs text-gray-500 mt-0.5'>
							PC, OS & physical devices
						</p>
					</div>
				</button>
			</div>
		</div>
	);
};
