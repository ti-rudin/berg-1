<script>
	import { isDarkFlag, isAdmin, screenmode } from '$lib/siteConfig';

	import MobileMenu from './MobileMenu.svelte';
	import NavLink from './NavLink.svelte';
	import { isAuthenticated, user } from '$lib/stores/auth';

	import { browser } from '$app/env';
	$isAuthenticated = browser ? window.localStorage.getItem('isAuthenticated') ?? false : false;
	$user = browser ? JSON.parse(window.localStorage.getItem('user')) ?? {} : {};
	$isAdmin = browser ? JSON.parse(window.localStorage.getItem('isad')) ?? false : false;

	let isDark = false;
	$isDarkFlag = false;
	if (typeof localStorage !== 'undefined') {
		if (
			localStorage.theme === 'dark' ||
			(!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)
		) {
			isDark = true;
			$isDarkFlag = true;
		}
	}
	function toggleDarkMode() {
		if (isDark) {
			document.documentElement.classList.remove('dark');
			localStorage.theme = 'light';
			isDark = false;
			$isDarkFlag = false;
		} else {
			document.documentElement.classList.add('dark');
			localStorage.theme = 'dark';
			isDark = true;
			$isDarkFlag = true;
		}
	}
	//import { createPopperActions } from 'svelte-popperjs';
	//const [popperRef, popperContent] = createPopperActions();
	//const popperOptions = {
	//	modifiers: [{ name: 'offset', options: { offset: [0, 8] } }]
	//};

	let showTooltip1 = false;
	let showTooltip2 = false;
	let showTooltip3 = false;
	let showTooltip4 = false;
	let showTooltip5 = false;
</script>

<nav
	class="relative mx-auto flex w-full max-w-5xl items-center justify-between bg-opacity-60 px-4 pt-3 
	 pb-3 text-gray-900 dark:text-gray-100 sm:px-0 
	 lg:px-4"
>
	<MobileMenu />
	{#if isDark}
	<div class="logo-dark"></div>
	{:else}
	<div class="logo"></div>
	{/if}
	
	<ul class="ml-[-0.60rem] flex">
		<li>
			<NavLink href="/">Главная</NavLink>
		</li>
		<li>
			<NavLink href="/">Опт</NavLink>
		</li>
		<li>
			<NavLink href="/">Акции</NavLink>
		</li>
		<li>
			<NavLink href="/">Помощь</NavLink>
		</li>
		<li>
			<NavLink href="/">Контакты</NavLink>
		</li>
	</ul>

	<div class="flex items-center space-x-4">
		<a
			class="flex h-9 items-center justify-center rounded-lg px-1  text-gray-700 hover:no-underline  dark:ring-blue-400 ring-blue-600 transition-all hover:ring-2
			dark:text-gray-200
			"
			href="/"
			aria-label="lang"
		>
			РУС
		</a>

		{#if $isAuthenticated}
			<a href="/kabinet">
				<img class="h-10 w-10 rounded-full" src={$user.photo} alt={$user.name} id={$user.id} />
			</a>
		{:else}
			<a
				sveltekit:prefetch
				class="ml-1 flex h-9 items-center justify-center rounded-lg firmblue-bg px-1 dark:ring-blue-400 ring-blue-600 transition-all
	hover:ring-2"
				href="/kabinet"
			>
				{#if isDark}
					<svg
						width="32px"
						height="32px"
						viewBox="0 0 24 24"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							d="M12.0001 6C10.3433 6 9.00012 7.34315 9.00012 9C9.00012 10.6569 10.3433 12 12.0001 12C13.657 12 15.0001 10.6569 15.0001 9C15.0001 7.34315 13.657 6 12.0001 6Z"
							fill="white"
						/>
						<path
							d="M17.8948 16.5528C18.0356 16.8343 18.0356 17.1657 17.8948 17.4473C17.9033 17.4297 17.8941 17.4487 17.8941 17.4487L17.8933 17.4502L17.8918 17.4532L17.8883 17.46L17.8801 17.4756C17.874 17.4871 17.8667 17.5004 17.8582 17.5155C17.841 17.5458 17.8187 17.5832 17.7907 17.6267C17.7348 17.7138 17.6559 17.8254 17.5498 17.9527C17.337 18.208 17.0164 18.5245 16.555 18.8321C15.623 19.4534 14.1752 20 12.0002 20C8.31507 20 6.76562 18.4304 6.26665 17.7115C5.96476 17.2765 5.99819 16.7683 6.18079 16.4031C6.91718 14.9303 8.42247 14 10.0691 14H13.7643C15.5135 14 17.1125 14.9883 17.8948 16.5528Z"
							fill="white"
						/>
					</svg>
				{:else}
					<svg
						width="32px"
						height="32px"
						viewBox="0 0 24 24"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							d="M12.0001 6C10.3433 6 9.00012 7.34315 9.00012 9C9.00012 10.6569 10.3433 12 12.0001 12C13.657 12 15.0001 10.6569 15.0001 9C15.0001 7.34315 13.657 6 12.0001 6Z"
							fill="white"
						/>
						<path
							d="M17.8948 16.5528C18.0356 16.8343 18.0356 17.1657 17.8948 17.4473C17.9033 17.4297 17.8941 17.4487 17.8941 17.4487L17.8933 17.4502L17.8918 17.4532L17.8883 17.46L17.8801 17.4756C17.874 17.4871 17.8667 17.5004 17.8582 17.5155C17.841 17.5458 17.8187 17.5832 17.7907 17.6267C17.7348 17.7138 17.6559 17.8254 17.5498 17.9527C17.337 18.208 17.0164 18.5245 16.555 18.8321C15.623 19.4534 14.1752 20 12.0002 20C8.31507 20 6.76562 18.4304 6.26665 17.7115C5.96476 17.2765 5.99819 16.7683 6.18079 16.4031C6.91718 14.9303 8.42247 14 10.0691 14H13.7643C15.5135 14 17.1125 14.9883 17.8948 16.5528Z"
							fill="white"
						/>
					</svg>
				{/if}
			</a>
		{/if}

		<button
			aria-label="Toggle Dark Mode"
			class="firmblue-bg ml-1 flex h-9 w-9 items-center justify-center rounded-lg ring-blue-400
			transition-all hover:ring-2 dark:bg-blue-800"
			on:click={toggleDarkMode}
		>
			{#if isDark}
				<svg
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 24 24"
					fill="none"
					stroke="white"
					class="h-5 w-5 text-gray-800 dark:text-yellow-100"
				>
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
						d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728
						0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
					/>
				</svg>
			{:else}
				<svg
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 24 24"
					fill="none"
					stroke="white"
					class="w-5 h-5 text-gray-800 dark:text-gray-200"
				>
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
						d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
					/>
				</svg>
			{/if}
		</button>
	</div>
</nav>

<style>
	.logo{
		background: transparent url("berg_logo.png") 50% 50% no-repeat;
		width: 130px;
		height: 35px;
	}
	.logo-dark{
		background: transparent url("berg_logo_dark.png") 50% 50% no-repeat;
		width: 130px;
		height: 35px;
	}
	
	.firmblue {
		color: #2c4594;
	}
	.firmblue-bg {
		background-color: #2c4594;
	}
	#tooltip1 {
		background: #333;
		color: white;
		font-weight: bold;
		padding: 4px 8px;
		font-size: 13px;
		border-radius: 4px;
		z-index: 900;
	}
	#tooltip2 {
		background: #333;
		color: white;
		font-weight: bold;
		padding: 4px 8px;
		font-size: 13px;
		border-radius: 4px;
		z-index: 900;
	}
	#tooltip3 {
		background: #333;
		color: white;
		font-weight: bold;
		padding: 4px 8px;
		font-size: 13px;
		border-radius: 4px;
		z-index: 900;
	}
	#tooltip4 {
		background: #333;
		color: white;
		font-weight: bold;
		padding: 4px 8px;
		font-size: 13px;
		border-radius: 4px;
		z-index: 900;
	}
	#tooltip5 {
		background: #333;
		color: white;
		font-weight: bold;
		padding: 4px 8px;
		font-size: 13px;
		border-radius: 4px;
		z-index: 900;
	}
</style>
