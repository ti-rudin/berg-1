<script>
	import { SITE_TITLE } from '$lib/siteConfig';

	import '../tailwind.css';
	import Nav from '../components/Nav.svelte';

	import { isAuthenticated, user } from '$lib/stores/auth';
	import { onMount } from 'svelte';

	import { browser } from '$app/env';
</script>

<svelte:head />

<div class="flex flex-col justify-center bg-white/70 px-4 dark:bg-gray-400/10 ">
	<Nav />
</div>
<main
	class=" flex flex-col justify-center bg-gray-100/50 px-4 pb-4 pt-3 transition-all dark:bg-gray-900 "
>
	<slot />
</main>

<footer
	class="z-20 mb-4 flex w-full   flex-col  items-start justify-center podval-bg text-white dark:bg-black/20"
>
	<div class="mx-auto flex  w-full max-w-5xl">
		<div class="hidden sm:block  ">
			<div class="ml-4 flex flex-col"> 
				<a sveltekit:prefetch href="/" class="pt-4"> Продукция </a>
				<a sveltekit:prefetch href="/" class="pt-4"> Автозапчасти </a>
				<a sveltekit:prefetch href="/" class="pt-4"> Масла и технические жидкости </a>
				<a sveltekit:prefetch href="/" class="pt-4"> Оборудование для автосервиса </a>
				<a sveltekit:prefetch href="/" class="pt-4"> Бренды </a>
				<a sveltekit:prefetch href="/" class="pt-4"> Журнал BERG MAGAZINE </a>
				<a sveltekit:prefetch href="/" class="pt-4"> Акции </a>
				<a sveltekit:prefetch href="/" class="pt-4"> Катаоги брендов </a>
			</div>
		</div>
		<div class="hidden sm:block">
			<div class="ml-4  flex flex-col  ">
				<a sveltekit:prefetch href="/" class="pt-4"> Компания </a>
				<a sveltekit:prefetch href="/" class="pt-4"> О компании </a>
				<a sveltekit:prefetch href="/" class="pt-4"> Новости </a>
				<a sveltekit:prefetch href="/" class="pt-4"> Вакансии </a>
				<a sveltekit:prefetch href="/" class="pt-4"> Контакты </a>
				<a sveltekit:prefetch href="/" class="pt-4"> Сертификация </a>
				<a sveltekit:prefetch href="/" class="pt-4"> Web-сервисы (BERG API) </a>
				<a sveltekit:prefetch href="/" class="pt-4"> Маркетинговая поддержка</a>
			</div>
		</div>
		<div class="hidden sm:block">
			<div class="ml-4  flex flex-col  ">
				<a sveltekit:prefetch href="/" class="pt-4"> Оптовым покупателям </a>
				<a sveltekit:prefetch href="/" class="pt-4"> Как стать клиентом </a>
				<a sveltekit:prefetch href="/" class="pt-4"> Заказ продукции </a>
				<a sveltekit:prefetch href="/" class="pt-4"> Гарантии и возврат </a>
				<a sveltekit:prefetch href="/" class="pt-4"> Документы </a>
				<a sveltekit:prefetch href="/" class="pt-4"> Способы оплаты </a>
				<a sveltekit:prefetch href="/" class="pt-4"> Поставщикам </a>
				<a sveltekit:prefetch href="/" class="pt-4"> Поддержка клиентов</a>
			</div>
		</div>
		<div class=" hidden sm:block mx-auto" />
		<div>
			<div class="ml-4 mt-2 flex flex-col  ">
				<h3>Центральный операционный офис</h3>
				<address>Москва, 117623</address>
				<address>ул. 2-я Мелитопольская, вл.4А, стр.40</address>
			</div>
			<div class="ml-4  mt-4 flex flex-col  ">
				<h3>Главный офис</h3>
				<h3>Юридический адрес</h3>
				<address>Москва, 115093, 1-й Щипковский переулок,</address>
				<address>дом 1, этаж 3, пом. I, ком.8,9</address>
				<address>+7 (495) 788-95-97</address>
				<address>пн-пт: 08:00 - 20:00</address>
				<address>сб, вс: 10:00 - 18:00</address>
			</div>
			<a
				class="ring-white-400 ml-4 mt-3 w-52 flex h-11 rounded-lg p-2 text-center text-black ring-2
			transition-all  dark:text-white"
				href="https://che-tver.timepad.ru/event/1900315/"
			>
				<svg
					class="h-7 w-7 mr-2"
					fill="none"
					stroke="currentColor"
					viewBox="0 0 24 24"
					xmlns="http://www.w3.org/2000/svg"
					><path
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
						d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
					/></svg
				>
				<div class="mt-1">
				Сообщить о проблеме
			</div>
			</a>
		</div>
	</div>

	<div class="mt-5 flex w-full  flex-col">
		<div class="mx-auto mt-2 flex">
			<div class="lblock  text-right">
				ООО БЕРГ Холдинг<a class="px-1" href="/rights">©</a>2006-2022
			</div>
		</div>
	</div>
</footer>

<style>
	footer a{
		color: white;
	}
	.firmblue {
		color: #2c4594;
	}
	.firmblue-bg {
		background-color: #2c4594;
	}
	.podval-bg{
		background-color: #162145;
	}
	.feedback {
		color: orange;
	}
	.lblock {
		width: auto;
	}
	address {
		font-style: normal;
		font-weight: 200;
	}
</style>
