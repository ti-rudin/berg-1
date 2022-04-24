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
	<div class="flex  w-full max-w-5xl px-0 lg:px-4 flex-col justify-center sm:flex-row">
		<div class="mx-auto flex w-60 border border-red-700 p-2 text-center sm:w-1/4 sm:flex-col">
			<span class="mx-auto" />
			<span class="brick_oil__ico m-1 mx-auto p-5" />
			<h1 class="m-1 text-lg leading-4 ">Масла и тех. жидкости</h1>
			<span class="mx-auto" />
		</div>

		<div class="mx-auto flex w-60 border border-red-700 p-2 text-center sm:w-1/4 sm:flex-col">
			<span class="mx-auto" />
			<span class="brick_antis__ico m-1 mx-auto p-5" />
			<h1 class="m-1 text-lg leading-4 ">Средства защиты</h1>
			<span class="mx-auto" />
		</div>
		<div class="mx-auto flex w-60 border border-red-700 p-2 text-center sm:w-1/4 sm:flex-col">
			<span class="mx-auto" />
			<span class="brick_brushes__ico m-1 mx-auto p-5" />
			<h1 class="m-1  text-lg leading-4 ">Щетки стеклоочистителя</h1>

			<span class="mx-auto" />
		</div>
		<div class="mx-auto flex w-60 border border-red-700 p-2 text-center sm:w-1/4 sm:flex-col">
			<span class="mx-auto" />
			<span class="brick_goffer__ico m-1 mx-auto p-5" />
			<h1 class="m-1 text-lg leading-4 ">Гофры глушителя</h1>

			<span class="mx-auto" />
		</div>
	</div>

	<span class="mx-auto" />
</div>


<div class="flex">
	<span class="mx-auto  " />
    <div class="flex  w-full max-w-5xl px-0 lg:px-4 flex-col justify-center sm:flex-row">
        <div class="mx-auto  flex w-60 sm:w-1/3 border border-red-700 p-2 text-center  sm:flex-col">
            <span class="mx-auto" />
            <span class="brick_electronic__ico m-1 mx-auto  p-5" />
            <h1 class="m-1 text-lg leading-4 ">Электрика</h1>
            <span class="mx-auto" />
        </div>
    
        <div class="mx-auto  flex w-60 sm:w-1/3 border border-red-700 p-2 text-center  sm:flex-col">
            <span class="mx-auto" />
            <span class="brick_accessories__ico  m-1 mx-auto  p-5" />
            <h1 class="m-1 text-lg leading-4 "> Аксессуары </h1>
            <span class="mx-auto" />
        </div>
        <div class="mx-auto  flex w-60 sm:w-1/3 border border-red-700 p-2 text-center  sm:flex-col">
            <span class="mx-auto" />
    
            <span class="brick_chemistry__ico m-1 mx-auto p-5" />
            <h1 class="m-1 text-lg leading-4 ">Автохимия</h1>
            <span class="mx-auto" />
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
		background-position: -7px -153px;
		width: 40px;
		height: 40px;
	}
	.brick_chemistry__ico {
		background-image: url('https://berg.ru/bundles/bergsite/new/images/main_sprite.png?v8');
		background-repeat: no-repeat;
		width: 40px;
		height: 40px;
		background-position: -150px -153px;
	}
	.brick_tires__ico {
		background-image: url('https://berg.ru/bundles/bergsite/new/images/main_sprite.png?v8');
		background-repeat: no-repeat;
		background-position: -189px -153px;
	}
	.brick_antis__ico {
		background-image: url('https://berg.ru/bundles/bergsite/new/images/main_sprite.png?v8');
		background-repeat: no-repeat;
		background-position: -720px -150px;
		width: 80px;
		height: 40px;
	}
	.brick_electronic__ico {
		background-image: url('https://berg.ru/bundles/bergsite/new/images/main_sprite.png?v8');
		background-repeat: no-repeat;
		background-position: -58px -153px;
		width: 40px;
		height: 40px;
	}
	.brick_brushes__ico {
		background-image: url('https://berg.ru/bundles/bergsite/new/images/main_sprite.png?v8');
		background-repeat: no-repeat;
		width: 80px;
		height: 40px;
		background-position: -317px -152px;
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
		width: 30px;
		height: 40px;
		background-position: -238px -152px;
	}
	.brick_goffer__ico {
		background-image: url('https://berg.ru/bundles/bergsite/new/images/main_sprite.png?v8');
		background-repeat: no-repeat;
		width: 47px;
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
