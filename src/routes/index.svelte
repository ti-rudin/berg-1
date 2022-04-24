<script>
	//import { onMount } from 'svelte';
	//
	//onMount(() => {
	//	//window.location.href = '/concert/3'
	//	window.location.href = '/now';
	//});
</script>

<div class="flex">
	<span class="mx-auto" />
	<div class="flex  w-full max-w-5xl flex-col justify-center px-0 sm:flex-row lg:px-4">
		<div class="cursor-pointer rounded ring-blue-600 transition-all hover:ring-2 bg-blue-400/30 hover:bg-blue-400/50 focus:outline-none 
        mx-auto flex w-full p-2 text-center sm:w-1/4 sm:flex-col
        mb-2 sm:mr-2
        ">
			<span class="brick_oil__ico m-1 mx-auto mr-2 p-5 sm:mr-auto" />
			<h1 class=" mt-4 w-full text-left text-lg leading-4  sm:mt-0 sm:text-center  ">
				Масла и тех. жидкости
			</h1>
			<span class="mx-auto" />
		</div>

		<div class="cursor-pointer rounded ring-blue-600 transition-all hover:ring-2 bg-blue-400/30 hover:bg-blue-400/50 focus:outline-none 
        mx-auto flex w-full p-2 text-center sm:w-1/4 sm:flex-col
        mb-2 sm:mr-2
        ">
			<span class="brick_antis__ico m-1 mx-auto mr-2 p-5 sm:mr-auto" />
			<h1 class=" mt-4 w-full text-left text-lg leading-4  sm:mt-0 sm:text-center  ">
				Средства защиты
			</h1>
			<span class="mx-auto" />
		</div>
		<div class="cursor-pointer rounded ring-blue-600 transition-all hover:ring-2 bg-blue-400/30 hover:bg-blue-400/50 focus:outline-none 
        mx-auto flex w-full p-2 text-center sm:w-1/4 sm:flex-col
        mb-2 sm:mr-2
        ">
			<span class="brick_brushes__ico m-1 mx-auto mr-2 p-5 sm:mr-auto" />
			<h1 class="mt-4 w-full text-left text-lg leading-4  sm:mt-0 sm:text-center ">
				Щетки стеклоочистителя
			</h1>
		</div>
		<div class="cursor-pointer rounded ring-blue-600 transition-all hover:ring-2 bg-blue-400/30 hover:bg-blue-400/50 focus:outline-none 
        mx-auto flex w-full p-2 text-center sm:w-1/4 sm:flex-col
        mb-2
        ">
			<span class="brick_goffer__ico m-1 mx-auto mr-2 p-5 sm:mr-auto" />
			<h1 class=" mt-4 w-full text-left text-lg leading-4  sm:mt-0 sm:text-center  ">
				Гофры глушителя
			</h1>

			<span class="mx-auto" />
		</div>
	</div>

	<span class="mx-auto" />
</div>

<div class="flex">
	<span class="mx-auto  " />
	<div class="flex  w-full max-w-5xl flex-col justify-center px-0 sm:flex-row lg:px-4">
        <div class="cursor-pointer rounded ring-blue-600 transition-all hover:ring-2 bg-blue-400/30 hover:bg-blue-400/50 focus:outline-none 
        mx-auto flex w-full p-2 text-center sm:w-1/3 sm:flex-col
        mb-2 sm:mr-2
        ">
			<span class="brick_electronic__ico m-1 mx-auto mr-2 p-5  sm:mr-auto" />
			<h1 class=" mt-4 w-full text-left text-lg leading-4  sm:mt-0 sm:text-center  ">Электрика</h1>
			<span class="mx-auto" />
		</div>

        <div class="cursor-pointer rounded ring-blue-600 transition-all hover:ring-2 bg-blue-400/30 hover:bg-blue-400/50 focus:outline-none 
        mx-auto flex w-full p-2 text-center sm:w-1/3 sm:flex-col
        mb-2 sm:mr-2
        ">
			<span class="brick_accessories__ico  m-1 mx-auto mr-2 p-5  sm:mr-auto" />
			<h1 class=" mt-4 w-full text-left text-lg leading-4  sm:mt-0 sm:text-center  ">Аксессуары</h1>
			<span class="mx-auto" />
		</div>
        <div class="cursor-pointer rounded ring-blue-600 transition-all hover:ring-2 bg-blue-400/30 hover:bg-blue-400/50 focus:outline-none 
        mx-auto flex w-full p-2 text-center sm:w-1/3 sm:flex-col
        mb-2
        ">
			<span class="brick_chemistry__ico m-1 mx-auto mr-2 p-5 sm:mr-auto" />
			<h1 class=" mt-4 w-full text-left text-lg leading-4  sm:mt-0 sm:text-center">Автохимия</h1>
		</div>
	</div>
	<span class="mx-auto" />
</div>

<div class="row__with_cols flex flex-col">
	<div class="catalogue_bricks__block">
		<div class="col-md-18" style="padding: 0px;">
			<div class="" />
			<div class="" />
		</div>

		<div class="col-md-6">
			<div class="right_bricks_border">
				<a class="brick_service__item" href="/catalogues#service">
					<span class="ico brick_service__ico" />
					<span class="brick_title">Автозапчасти для ТО</span>
					<span class="hover_bg" />
				</a>

				<a class="brick_selection__item" href="/catalogues#manufacturers">
					<span class="ico brick_selection__ico" />
					<span class="brick_title">Подбор по марке авто</span>
					<span class="hover_bg" />
				</a>
				<a class="brick_brands__item" href="/catalogues#brands">
					<span class="ico brick_brands__ico" />
					<span class="brick_title">Каталоги брендов</span>
					<span class="hover_bg" />
				</a>
			</div>
		</div>
	</div>
</div>

<style>
	.heromenu {
		width: 100%;
	}
	.brick_oil__ico {
		background-image: url('https://berg.ru/bundles/bergsite/new/images/main_sprite.png?v8');
		background-repeat: no-repeat;
		background-size: 850px;
		background-position: 3px -133px;
		width: 50px;
		height: 40px;
	}
	.brick_chemistry__ico {
		background-image: url('https://berg.ru/bundles/bergsite/new/images/main_sprite.png?v8');
		background-repeat: no-repeat;
		width: 50px;
		height: 40px;
		background-position: -140px -153px;
	}
	.brick_tires__ico {
		background-image: url('https://berg.ru/bundles/bergsite/new/images/main_sprite.png?v8');
		background-repeat: no-repeat;
		background-position: -189px -153px;
	}
	.brick_antis__ico {
		background-image: url('https://berg.ru/bundles/bergsite/new/images/main_sprite.png?v8');
		background-repeat: no-repeat;
		background-position: -640px -130px;
		background-size: 850px;
		width: 50px;
		height: 40px;
	}
	.brick_electronic__ico {
		background-image: url('https://berg.ru/bundles/bergsite/new/images/main_sprite.png?v8');
		background-repeat: no-repeat;
		background-position: -52px -153px;
		width: 50px;
		height: 40px;
	}
	.brick_brushes__ico {
		background-image: url('https://berg.ru/bundles/bergsite/new/images/main_sprite.png?v8');
		background-repeat: no-repeat;
		width: 50px;
		height: 40px;
		background-size: 900px;
		background-position: -297px -142px;
	}
	.brick_tools__ico {
		background-image: url('https://berg.ru/bundles/bergsite/new/images/main_sprite.png?v8');
		background-repeat: no-repeat;
		width: 40px;
		height: 40px;
		background-position: -102px -153px;
	}
	.brick_accessories__ico {
		background-image: url('https://berg.ru/bundles/bergsite/new/images/main_sprite.png?v8');
		background-repeat: no-repeat;
		width: 50px;
		height: 40px;
		background-position: -228px -152px;
	}
	.brick_goffer__ico {
		background-image: url('https://berg.ru/bundles/bergsite/new/images/main_sprite.png?v8');
		background-repeat: no-repeat;
		width: 50px;
		height: 40px;
		background-position: -659px -146px;
	}
	.brick_service__ico {
		background-image: url('https://berg.ru/bundles/bergsite/new/images/main_sprite.png?v8');
		background-repeat: no-repeat;
		width: 40px;
		height: 40px;

		background-position: 0 -210px;
	}
	.brick_selection__ico {
		background-image: url('https://berg.ru/bundles/bergsite/new/images/main_sprite.png?v8');
		background-repeat: no-repeat;

		width: 51px;
		height: 20px;

		background-position: -45px -210px;
	}
	.brick_brands__ico {
		background-image: url('https://berg.ru/bundles/bergsite/new/images/main_sprite.png?v8');
		background-repeat: no-repeat;

		width: 41px;
		height: 41px;

		background-position: -100px -210px;
	}
</style>
