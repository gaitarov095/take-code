import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import { supabase } from '../utils/supabase';
import { AuthLoader } from '../components/ui/Loaders/AuthLoader';

import { cn } from '../utils/cn';

import { Braces } from 'lucide-react'
import { Github, Google } from '@thesvg/react'

export const Auth = () => {
	const navigate = useNavigate()

	const [email, setEmail] = useState<string>('')
	const [password, setPassword] = useState<string>('')
	const [username, setUsername] = useState('');
	const [isCreateMode, setIsCreateMode] = useState<boolean>(false);
	const [isLoading, setIsLoading] = useState(false);

	const handleAuth = async (e: React.FormEvent) => {
		e.preventDefault();
		setIsLoading(true);

		try {
			if (!isCreateMode) {
				const { data, error } = await supabase.auth.signInWithPassword({
					email,
					password,
				});
				if (error) throw error;

				console.log('Success', data.user);
				// Тут можно сделать редирект на главную страницу, например: window.location.href = '/'
				navigate('/')
			} else {
				const { error } = await supabase.auth.signUp({
					email,
					password,
					options: {
						data: {
							username: username,
							display_name: username,
						},
					},
				});

				if (error) throw error;

				console.log('Регистрация успешна!');
				navigate('/')
			}
		} catch (error) {
			console.log(error);
		} finally {
			setIsLoading(false);
		}
	};

	const authWithGitHub = async () => {
		setIsLoading(true)
		try {
			await supabase.auth.signInWithOAuth({
				provider: 'github',
				options: {
					redirectTo:
						'https://uhzqqqcvugfwcolpgagv.supabase.co/auth/v1/callback',
				},
			});
		} catch (error) {
			console.log(error)
		} finally {
			setIsLoading(false)
		}
	}

	const authWithGoogle = async () => {
		setIsLoading(true);
		try {
			await supabase.auth.signInWithOAuth({
				provider: 'google',
				options: {
					redirectTo:
						'https://uhzqqqcvugfwcolpgagv.supabase.co/auth/v1/callback',
				},
			});
		} catch (error) {
			console.log(error);
		} finally {
			setIsLoading(false);
		}
	}

	return (
		<div className='w-full h-dvh flex items-center justify-center gap-15'>
			<div>
				<div className='flex items-center gap-2 max-w-60 w-full h-auto px-4 py-2 bg-[#0e1d2a] border border-[#163d54] rounded-3xl'>
					<Braces className='text-[#67e8f9]' size={18} />
					<span className='text-[#baf2ff] text-[14px]'>
						AUTHENTICATION FLOW
					</span>
				</div>
				<div className='flex flex-col gap-4.5 mt-4'>
					<h1 className='font-bold text-6xl text-white'>
						Developer-first <br /> access, wrapped in a <br /> calm dark
						interface.
					</h1>
					<p className='text-[16px] text-[#94a3b8c7]'>
						A reusable TakeCode sign-in/sign-up component with priority OAuth
						actions, <br /> precise focus states, gradient primary action, and
						low-noise account switching.
					</p>
					<ul className='text-[#c4c9d1] flex flex-col gap-2'>
						<ol>• OAuth-first layout for GitHub and Google</ol>
						<ol>• Animated focus ring styling on email fields</ol>
						<ol>• Sign In and Sign Up variants ready to reuse</ol>
					</ul>
				</div>
			</div>
			<form
				className='w-110 h-auto bg-[#0a111f] border border-[#242c3b] rounded-3xl flex flex-col items-center justify gap-4 py-8 shadow-[0_0_50px_0_rgba(56,189,248,0.15)]'
				onSubmit={handleAuth}
			>
				<div className='flex flex-col items-center gap-4'>
					<Link to={'/'}>
						<div className='flex items-center gap-3'>
							<div className='flex items-center justify-center w-9 h-9 rounded-xl bg-linear-to-br from-[#38BDF8] to-[#34D399] shadow-[0px_0px_15px_0px_#38BDF8] max-lg:w-9 max-lg:h-9'>
								<Braces className='text-[#03111F] scale-85 max-lg:scale-90' />
							</div>
							<h1 className='text-xl font-bold text-[#e0f2fe] max-lg:text-2xl'>
								TAKECODE
							</h1>
						</div>
					</Link>
					<div className='flex flex-col items-center justify-center text-center gap-2'>
						<h2 className='font-bold text-4xl text-white'>
							{isCreateMode ? 'Join the developer collective' : 'Welcome back'}
						</h2>
						<p className='text-[16px] text-[#94a3b8c7] text-center'>
							Access community snippets and production-ready recipes.
						</p>
					</div>
				</div>
				<div className='flex flex-col gap-5 w-full px-5'>
					<div className='flex gap-5'>
						<button
							onClick={() => authWithGitHub()}
							disabled={isLoading}
							className='flex items-center justify-center gap-2 text-[18px] text-white font-semibold bg-[#0b1220] border border-[#222b3e] w-full py-3 rounded-2xl cursor-pointer'
						>
							{isLoading ? (
								<AuthLoader />
							) : (
								<>
									<Github variant='dark' className='w-5 h-5' />
									<span>GitHub</span>
								</>
							)}
						</button>
						<button
							onClick={() => authWithGoogle()}
							disabled={isLoading}
							className='flex items-center justify-center gap-2 text-[18px] text-white font-semibold bg-[#0b1220] border border-[#222b3e] w-full py-3 rounded-2xl cursor-pointer'
						>
							<>
								<Google className='w-5 h-5' />
								Google
							</>
						</button>
					</div>
					<div className='flex items-center'>
						<div className='grow border-t border-slate-700/50'></div>
						<span className='mx-4 text-sm text-slate-400 font-medium'>
							or continue with email
						</span>
						<div className='grow border-t border-slate-700/50'></div>
					</div>
					<div className='flex flex-col gap-4'>
						{isCreateMode && (
							<div className='flex flex-col gap-3'>
								<span className='text-white font-semibold text-sm'>
									User Name
								</span>
								<input
									value={username}
									onChange={e => setUsername(e.target.value)}
									className='bg-[#070d19] border border-[#222b3e] text-[#5f6a7c] px-4 py-3 rounded-2xl'
									placeholder='Your Name'
									type='text'
								/>
							</div>
						)}
						<div className='flex flex-col gap-3'>
							<span className='text-white font-semibold text-sm'>
								Email Address
							</span>
							<input
								value={email}
								onChange={e => setEmail(e.target.value)}
								className='bg-[#070d19] border border-[#222b3e] text-[#5f6a7c] px-4 py-3 rounded-2xl'
								placeholder='you@takecode.dev'
								type='text'
							/>
						</div>
						<div className='flex flex-col gap-3'>
							<div className='flex justify-between'>
								<span className='text-white font-semibold text-sm'>
									Password
								</span>
								<span className='text-[#38BDF8] font-semibold text-sm'>
									Forgot password?
								</span>
							</div>
							<input
								value={password}
								onChange={e => setPassword(e.target.value)}
								className='bg-[#070d19] border border-[#222b3e] text-[#5f6a7c] px-4 py-3 rounded-2xl'
								placeholder='your password'
								type='password'
							/>
						</div>
					</div>
					<div className='flex flex-col gap-4'>
						<div className='flex flex-col gap-3'>
							<button
								type='submit' // Явно указали тип
								disabled={isLoading} // Блокируем кнопку физически
								className={cn(
									'flex items-center justify-center w-full h-12 rounded-2xl bg-linear-to-br from-[#38BDF8] to-[#34D399] shadow-[0px_0px_15px_0px_#38BDF8] font-semibold cursor-pointer max-[640px]:w-full max-sm:w-75 transition-all duration-200',
									isLoading && 'opacity-70 pointer-events-none', // Добавили прозрачности при загрузке
								)}
							>
								{isLoading ? (
									<AuthLoader />
								) : isCreateMode ? (
									'Create account' // Поменяли местами текст
								) : (
									'Log In' // Поменяли местами текст
								)}
							</button>
						</div>
						<p className='font-normal text-sm text-center text-slate-400'>
							{isCreateMode
								? 'Already have an account?'
								: 'Don’t have an account?'}
							<span
								className='text-[#38BDF8] font-bold cursor-pointer ml-1'
								onClick={() => setIsCreateMode(prev => !prev)}
							>
								{isCreateMode ? 'Sign In' : 'Sign Up'}
							</span>
						</p>
					</div>
				</div>
			</form>
		</div>
	);
};