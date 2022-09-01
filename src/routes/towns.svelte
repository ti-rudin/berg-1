<script>
	import { getTowns } from '../components/api.js';
	import { isDarkFlag, isAdmin, localTown, screenmode } from '$lib/siteConfig';

	async function towns() {
		rawtowns = await getTowns();
	}
	export let rawtowns;
	export let qqcolor;
	import { onMount } from 'svelte';
	import { each } from 'svelte/internal';
	//
	
	onMount(async () => {
		let r = document.querySelector(':root');
		
		let timerId = setInterval(() => {
			r.style.setProperty('--cell-MU0Fsv9c0_hi0CxBfKlq-7','red');
			setTimeout(() => {
				
				r.style.setProperty('--cell-MU0Fsv9c0_hi0CxBfKlq-7','grey');
				isred = false;
			}, 2000);
			

	}, 4000);



	
		//myFunction_set()
	});
let isred = false;
	
	function selectTown(town) {
		$localTown = town;
	}
	qqcolor = 'green';
	$: qqcolor = qqcolor;

	//var r = document.querySelector(':root');

// Create a function for getting a variable value


// Create a function for setting a variable value


</script>



<svg 
	xmlns="http://www.w3.org/2000/svg"
	xmlns:xlink="http://www.w3.org/1999/xlink"
	version="1.1"
	width="1488px"
	height="936px"
	viewBox="-0.5 -0.5 1488 936"	
	><defs /><g
		><g id="cell-MU0Fsv9c0_hi0CxBfKlq-3"
			><path
				d="M 152 182 L 152 355.63"
				
				stroke="rgb(0, 0, 0)"
				stroke-miterlimit="10"
				pointer-events="stroke"
			/><path
				d="M 152 360.88 L 148.5 353.88 L 152 355.63 L 155.5 353.88 Z"
				fill="rgb(0, 0, 0)"
				stroke="rgb(0, 0, 0)"
				stroke-miterlimit="10"
				pointer-events="all"
			/></g
		><g
			id="cell-MU0Fsv9c0_hi0CxBfKlq-4"
			content="&lt;object label=&quot;&amp;lt;p style=&amp;quot;line-height: 0.2;&amp;quot;&amp;gt;&amp;lt;font style=&amp;quot;font-size: 14px;&amp;quot; color=&amp;quot;#007fff&amp;quot;&amp;gt;&amp;amp;nbsp; driver.berg.ru&amp;lt;/font&amp;gt;&amp;lt;/p&amp;gt;&quot;/&gt;"
			data-label="&lt;p style=&quot;line-height: 0.2;&quot;&gt;&lt;font style=&quot;font-size: 14px;&quot; color=&quot;#007fff&quot;&gt;&amp;nbsp; driver.berg.ru&lt;/font&gt;&lt;/p&gt;"
			><g transform="translate(-0.5 -0.5)"
				><switch
					><foreignObject
						pointer-events="none"
						width="100%"
						height="100%"
						requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility"
						style="overflow: visible; text-align: left;"
						><div
							xmlns="http://www.w3.org/1999/xhtml"
							style="display: flex; align-items: unsafe center; justify-content: unsafe center; width: 1px; height: 1px; padding-top: 273px; margin-left: 152px;"
						>
							<div
								data-drawio-colors="color: #00CC00; background-color: rgb(255, 255, 255); "
								style="box-sizing: border-box; font-size: 0px; text-align: center;"
							>
								<div
									style="display: inline-block; font-size: 11px; font-family: Helvetica; color: rgb(0, 204, 0); line-height: 1.2; pointer-events: all; background-color: rgb(255, 255, 255); white-space: nowrap;"
								>
									<p style="line-height: 0.2;">
										<font color="#007fff" style="font-size: 14px;"> driver.berg.ru</font>
									</p>
								</div>
							</div>
						</div></foreignObject
					><text
						x="152"
						y="276"
						fill="#00CC00"
						font-family="Helvetica"
						font-size="11px"
						text-anchor="middle"
					>
						driver.berg.ru</text
					></switch
				></g
			></g
		><g
			id="cell-MU0Fsv9c0_hi0CxBfKlq-5"
			content="&lt;object placeholders=&quot;1&quot; c4Name=&quot;Водитель&quot; c4Type=&quot;Person&quot; c4Description=&quot;Сотрудник BERG&quot; label=&quot;&amp;lt;font style=&amp;quot;font-size: 16px&amp;quot;&amp;gt;&amp;lt;b&amp;gt;%c4Name%&amp;lt;/b&amp;gt;&amp;lt;/font&amp;gt;&amp;lt;div&amp;gt;[%c4Type%]&amp;lt;/div&amp;gt;&amp;lt;br&amp;gt;&amp;lt;div&amp;gt;&amp;lt;font style=&amp;quot;font-size: 11px&amp;quot;&amp;gt;&amp;lt;font color=&amp;quot;#cccccc&amp;quot;&amp;gt;%c4Description%&amp;lt;/font&amp;gt;&amp;lt;/div&amp;gt;&quot;/&gt;"
			data-placeholders="1"
			data-c4Name="Водитель"
			data-c4Type="Person"
			data-c4Description="Сотрудник BERG"
			data-label="&lt;font style=&quot;font-size: 16px&quot;&gt;&lt;b&gt;%c4Name%&lt;/b&gt;&lt;/font&gt;&lt;div&gt;[%c4Type%]&lt;/div&gt;&lt;br&gt;&lt;div&gt;&lt;font style=&quot;font-size: 11px&quot;&gt;&lt;font color=&quot;#cccccc&quot;&gt;%c4Description%&lt;/font&gt;&lt;/div&gt;"
			><ellipse
				cx="152"
				cy="42.5"
				rx="40.5"
				ry="40.5"
				fill="#083f75"
				stroke="#06315c"
				pointer-events="all"
			/><path
				d="M 52 107.3 C 52 84.93 70.13 66.8 92.5 66.8 L 211.5 66.8 C 233.87 66.8 252 84.93 252 107.3 L 252 141.5 C 252 163.87 233.87 182 211.5 182 L 92.5 182 C 70.13 182 52 163.87 52 141.5 Z"
				fill="#083f75"
				stroke="#06315c"
				stroke-miterlimit="10"
				pointer-events="all"
			/><ellipse
				cx="152"
				cy="42.5"
				rx="40.5"
				ry="40.5"
				fill="#083f75"
				stroke="#06315c"
				pointer-events="all"
			/><g transform="translate(-0.5 -0.5)"
				><switch
					><foreignObject
						pointer-events="none"
						width="100%"
						height="100%"
						requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility"
						style="overflow: visible; text-align: left;"
						><div
							xmlns="http://www.w3.org/1999/xhtml"
							style="display: flex; align-items: unsafe center; justify-content: unsafe center; width: 1px; height: 1px; padding-top: 125px; margin-left: 152px;"
						>
							<div
								data-drawio-colors="color: #ffffff; "
								style="box-sizing: border-box; font-size: 0px; text-align: center;"
							>
								<div
									style="display: inline-block; font-size: 11px; font-family: Helvetica; color: rgb(255, 255, 255); line-height: 1.2; pointer-events: all; white-space: nowrap;"
								>
									<font style="font-size: 16px"><b>Водитель</b></font>
									<div>[Person]</div>
									<br />
									<div>
										<font style="font-size: 11px"><font color="#cccccc">Сотрудник BERG</font></font>
									</div>
								</div>
							</div>
						</div></foreignObject
					><text
						x="152"
						y="128"
						fill="#ffffff"
						font-family="Helvetica"
						font-size="11px"
						text-anchor="middle">Водитель[Person]...</text
					></switch
				></g
			></g
		><g
			id="cell-MU0Fsv9c0_hi0CxBfKlq-6"
			content="&lt;object placeholders=&quot;1&quot; c4Type=&quot;БД&quot; c4Container=&quot;vs-dc1-ws-db04.net.berg.ru&quot; c4Technology=&quot;MySQL 8&quot; c4Description=&quot;Хранит информация о пользователях, чеки.&quot; label=&quot;&amp;lt;font style=&amp;quot;font-size: 16px&amp;quot;&amp;gt;&amp;lt;b&amp;gt;%c4Type%&amp;lt;/font&amp;gt;&amp;lt;div&amp;gt;[%c4Container%:&amp;amp;nbsp;%c4Technology%]&amp;lt;/div&amp;gt;&amp;lt;br&amp;gt;&amp;lt;div&amp;gt;&amp;lt;font style=&amp;quot;font-size: 11px&amp;quot;&amp;gt;&amp;lt;font color=&amp;quot;#E6E6E6&amp;quot;&amp;gt;%c4Description%&amp;lt;/font&amp;gt;&amp;lt;/div&amp;gt;&quot;/&gt;"
			data-placeholders="1"
			data-c4Type="БД"
			data-c4Container="vs-dc1-ws-db04.net.berg.ru"
			data-c4Technology="MySQL 8"
			data-c4Description="Хранит информация о пользователях, чеки."
			data-label="&lt;font style=&quot;font-size: 16px&quot;&gt;&lt;b&gt;%c4Type%&lt;/font&gt;&lt;div&gt;[%c4Container%:&amp;nbsp;%c4Technology%]&lt;/div&gt;&lt;br&gt;&lt;div&gt;&lt;font style=&quot;font-size: 11px&quot;&gt;&lt;font color=&quot;#E6E6E6&quot;&gt;%c4Description%&lt;/font&gt;&lt;/div&gt;"
			><path
				d="M 532 707 C 532 698.72 585.73 692 652 692 C 683.83 692 714.35 693.58 736.85 696.39 C 759.36 699.21 772 703.02 772 707 L 772 797 C 772 805.28 718.27 812 652 812 C 585.73 812 532 805.28 532 797 Z"
				fill="#23a2d9"
				stroke="#0e7dad"
				stroke-miterlimit="10"
				pointer-events="all"
			/><path
				d="M 772 707 C 772 715.28 718.27 722 652 722 C 585.73 722 532 715.28 532 707"
				fill="none"
				stroke="#0e7dad"
				stroke-miterlimit="10"
				pointer-events="all"
			/><g transform="translate(-0.5 -0.5)"
				><switch
					><foreignObject
						pointer-events="none"
						width="100%"
						height="100%"
						requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility"
						style="overflow: visible; text-align: left;"
						><div
							xmlns="http://www.w3.org/1999/xhtml"
							style="display: flex; align-items: unsafe center; justify-content: unsafe center; width: 238px; height: 1px; padding-top: 765px; margin-left: 533px;"
						>
							<div
								data-drawio-colors="color: #ffffff; "
								style="box-sizing: border-box; font-size: 0px; text-align: center;"
							>
								<div
									style="display: inline-block; font-size: 12px; font-family: Helvetica; color: rgb(255, 255, 255); line-height: 1.2; pointer-events: all; white-space: normal; word-wrap: normal;"
								>
									<font style="font-size: 16px"><b>БД</b></font>
									<div><b>[vs-dc1-ws-db04.net.berg.ru: MySQL 8]</b></div>
									<b
										><br />
										<div>
											<font style="font-size: 11px"
												><font color="#E6E6E6">Хранит информация о пользователях, чеки.</font></font
											>
										</div></b
									>
								</div>
							</div>
						</div></foreignObject
					><text
						x="652"
						y="768"
						fill="#ffffff"
						font-family="Helvetica"
						font-size="12px"
						text-anchor="middle">БД[vs-dc1-ws-db04.net.berg.ru: MySQL 8]...</text
					></switch
				></g
			></g
		><g
			id="cell-MU0Fsv9c0_hi0CxBfKlq-7"
			content="&lt;object label=&quot;&quot; forH=&quot;1&quot;/&gt;"
			data-label=""
			data-forH="1"
			><path
				d="M 288.37 442.04 L 526.59 442.04"
				fill="none"
				stroke="rgb(0, 0, 0)"
				stroke-miterlimit="10"
				pointer-events="stroke"
			/><path
				d="M 283.12 442.04 L 290.12 438.54 L 288.37 442.04 L 290.12 445.54 Z"
				fill="rgb(0, 0, 0)"
				stroke="rgb(0, 0, 0)"
				stroke-miterlimit="10"
				pointer-events="all"
			/><path
				d="M 531.84 442.04 L 524.84 445.54 L 526.59 442.04 L 524.84 438.54 Z"
				fill="rgb(0, 0, 0)"
				stroke="rgb(0, 0, 0)"
				stroke-miterlimit="10"
				pointer-events="all"
			/></g
		><g
			id="cell-MU0Fsv9c0_hi0CxBfKlq-8"
			content="&lt;object placeholders=&quot;1&quot; c4Type=&quot;SPA&quot; c4Container=&quot;10.11.16.27&quot; c4Technology=&quot;JS, Vuetify&quot; c4Description=&quot;Автоматизация документоборота&amp;#10;Сканирование камерой смартфона и поиск в базе - Чеки, УПД&quot; label=&quot;&amp;lt;font style=&amp;quot;font-size: 16px&amp;quot;&amp;gt;&amp;lt;b&amp;gt;%c4Type%&amp;lt;/font&amp;gt;&amp;lt;div&amp;gt;[%c4Container%:&amp;amp;nbsp;%c4Technology%]&amp;lt;/div&amp;gt;&amp;lt;br&amp;gt;&amp;lt;div&amp;gt;&amp;lt;font style=&amp;quot;font-size: 11px&amp;quot;&amp;gt;&amp;lt;font color=&amp;quot;#E6E6E6&amp;quot;&amp;gt;%c4Description%&amp;lt;/font&amp;gt;&amp;lt;/div&amp;gt;&quot;/&gt;"
			data-placeholders="1"
			data-c4Type="SPA"
			data-c4Container="10.11.16.27"
			data-c4Technology="JS, Vuetify"
			data-c4Description="Автоматизация документоборота&#10;Сканирование камерой смартфона и поиск в базе - Чеки, УПД"
			data-label="&lt;font style=&quot;font-size: 16px&quot;&gt;&lt;b&gt;%c4Type%&lt;/font&gt;&lt;div&gt;[%c4Container%:&amp;nbsp;%c4Technology%]&lt;/div&gt;&lt;br&gt;&lt;div&gt;&lt;font style=&quot;font-size: 11px&quot;&gt;&lt;font color=&quot;#E6E6E6&quot;&gt;%c4Description%&lt;/font&gt;&lt;/div&gt;"
			><path
				d="M 42 370 C 42 365.58 45.58 362 50 362 L 274 362 C 278.42 362 282 365.58 282 370 L 282 514 C 282 518.42 278.42 522 274 522 L 50 522 C 45.58 522 42 518.42 42 514 Z"
				fill="#118acd"
				stroke="#0e7dad"
				stroke-miterlimit="10"
				pointer-events="all"
			/><path
				d="M 47 370 C 47 368.34 48.34 367 50 367 L 223 367 C 224.66 367 226 368.34 226 370 L 226 376 C 226 377.66 224.66 379 223 379 L 50 379 C 48.34 379 47 377.66 47 376 Z M 231 370 C 231 368.34 232.34 367 234 367 L 240 367 C 241.66 367 243 368.34 243 370 L 243 376 C 243 377.66 241.66 379 240 379 L 234 379 C 232.34 379 231 377.66 231 376 Z M 248 370 C 248 368.34 249.34 367 251 367 L 257 367 C 258.66 367 260 368.34 260 370 L 260 376 C 260 377.66 258.66 379 257 379 L 251 379 C 249.34 379 248 377.66 248 376 Z M 265 370 C 265 368.34 266.34 367 268 367 L 274 367 C 275.66 367 277 368.34 277 370 L 277 376 C 277 377.66 275.66 379 274 379 L 268 379 C 266.34 379 265 377.66 265 376 Z M 47 392 C 47 387.58 50.58 384 55 384 L 269 384 C 273.42 384 277 387.58 277 392 L 277 509 C 277 513.42 273.42 517 269 517 L 55 517 C 50.58 517 47 513.42 47 509 Z"
				fill="#23a2d9"
				stroke="none"
				pointer-events="all"
			/><g transform="translate(-0.5 -0.5)"
				><switch
					><foreignObject
						pointer-events="none"
						width="100%"
						height="100%"
						requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility"
						style="overflow: visible; text-align: left;"
						><div
							xmlns="http://www.w3.org/1999/xhtml"
							style="display: flex; align-items: unsafe center; justify-content: unsafe center; width: 238px; height: 1px; padding-top: 442px; margin-left: 43px;"
						>
							<div
								data-drawio-colors="color: #ffffff; "
								style="box-sizing: border-box; font-size: 0px; text-align: center;"
							>
								<div
									style="display: inline-block; font-size: 12px; font-family: Helvetica; color: rgb(255, 255, 255); line-height: 1.2; pointer-events: all; white-space: normal; word-wrap: normal;"
								>
									<font style="font-size: 16px"><b>SPA</b></font>
									<div><b>[10.11.16.27: JS, Vuetify]</b></div>
									<b
										><br />
										<div>
											<font style="font-size: 11px"
												><font color="#E6E6E6"
													>Автоматизация документоборота<br />Сканирование камерой смартфона и поиск
													в базе - Чеки, УПД</font
												></font
											>
										</div></b
									>
								</div>
							</div>
						</div></foreignObject
					><text
						x="162"
						y="446"
						fill="#ffffff"
						font-family="Helvetica"
						font-size="12px"
						text-anchor="middle">SPA...</text
					></switch
				></g
			></g
		><g
			id="cell-MU0Fsv9c0_hi0CxBfKlq-9"
			content="&lt;object placeholders=&quot;1&quot; c4Name=&quot;Berg.Driver&quot; c4Type=&quot;ContainerScopeBoundary&quot; c4Application=&quot;ИТ система&quot; label=&quot;&amp;lt;font style=&amp;quot;font-size: 16px&amp;quot;&amp;gt;&amp;lt;b&amp;gt;&amp;lt;div style=&amp;quot;text-align: left&amp;quot;&amp;gt;%c4Name%&amp;lt;/div&amp;gt;&amp;lt;/b&amp;gt;&amp;lt;/font&amp;gt;&amp;lt;div style=&amp;quot;text-align: left&amp;quot;&amp;gt;[%c4Application%]&amp;lt;/div&amp;gt;&quot;/&gt;"
			data-placeholders="1"
			data-c4Name="Berg.Driver"
			data-c4Type="ContainerScopeBoundary"
			data-c4Application="ИТ система"
			data-label="&lt;font style=&quot;font-size: 16px&quot;&gt;&lt;b&gt;&lt;div style=&quot;text-align: left&quot;&gt;%c4Name%&lt;/div&gt;&lt;/b&gt;&lt;/font&gt;&lt;div style=&quot;text-align: left&quot;&gt;[%c4Application%]&lt;/div&gt;"
			><rect
				x="2"
				y="332"
				width="910"
				height="570"
				rx="10"
				ry="10"
				fill="none"
				stroke="#666666"
				stroke-dasharray="8 4"
				pointer-events="none"
			/><g transform="translate(-0.5 -0.5)"
				><switch
					><foreignObject
						pointer-events="none"
						width="100%"
						height="100%"
						requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility"
						style="overflow: visible; text-align: left;"
						><div
							xmlns="http://www.w3.org/1999/xhtml"
							style="display: flex; align-items: unsafe flex-end; justify-content: unsafe flex-start; width: 892px; height: 1px; padding-top: 891px; margin-left: 12px;"
						>
							<div
								data-drawio-colors="color: #333333; "
								style="box-sizing: border-box; font-size: 0px; text-align: left;"
							>
								<div
									style="display: inline-block; font-size: 11px; font-family: Helvetica; color: rgb(51, 51, 51); line-height: 1.2; pointer-events: none; white-space: normal; word-wrap: normal;"
								>
									<font style="font-size: 16px"
										><b><div style="text-align: left">Berg.Driver</div></b></font
									>
									<div style="text-align: left">[ИТ система]</div>
								</div>
							</div>
						</div></foreignObject
					><text x="12" y="891" fill="#333333" font-family="Helvetica" font-size="11px"
						>Berg.Driver...</text
					></switch
				></g
			></g
		><g id="cell-MU0Fsv9c0_hi0CxBfKlq-10"
			><path
				d="M 652 488.37 L 652 685.63"
				fill="none"
				stroke="rgb(0, 0, 0)"
				stroke-miterlimit="10"
				pointer-events="none"
			/><path
				d="M 652 483.12 L 655.5 490.12 L 652 488.37 L 648.5 490.12 Z"
				fill="rgb(0, 0, 0)"
				stroke="rgb(0, 0, 0)"
				stroke-miterlimit="10"
				pointer-events="none"
			/><path
				d="M 652 690.88 L 648.5 683.88 L 652 685.63 L 655.5 683.88 Z"
				fill="rgb(0, 0, 0)"
				stroke="rgb(0, 0, 0)"
				stroke-miterlimit="10"
				pointer-events="none"
			/></g
		><g
			id="cell-MU0Fsv9c0_hi0CxBfKlq-11"
			content="&lt;object placeholders=&quot;1&quot; c4Name=&quot;BackEnd&quot; c4Type=&quot;10.11.16.26&quot; c4Technology=&quot;Symfony, API Platform &quot; c4Description=&quot;Авторизация, бизнес-логика &quot; label=&quot;&amp;lt;font style=&amp;quot;font-size: 16px&amp;quot;&amp;gt;&amp;lt;b&amp;gt;%c4Name%&amp;lt;/b&amp;gt;&amp;lt;/font&amp;gt;&amp;lt;div&amp;gt;[%c4Type%: %c4Technology%]&amp;lt;/div&amp;gt;&amp;lt;br&amp;gt;&amp;lt;div&amp;gt;&amp;lt;font style=&amp;quot;font-size: 11px&amp;quot;&amp;gt;&amp;lt;font color=&amp;quot;#E6E6E6&amp;quot;&amp;gt;%c4Description%&amp;lt;/font&amp;gt;&amp;lt;/div&amp;gt;&quot;/&gt;"
			data-placeholders="1"
			data-c4Name="BackEnd"
			data-c4Type="10.11.16.26"
			data-c4Technology="Symfony, API Platform "
			data-c4Description="Авторизация, бизнес-логика "
			data-label="&lt;font style=&quot;font-size: 16px&quot;&gt;&lt;b&gt;%c4Name%&lt;/b&gt;&lt;/font&gt;&lt;div&gt;[%c4Type%: %c4Technology%]&lt;/div&gt;&lt;br&gt;&lt;div&gt;&lt;font style=&quot;font-size: 11px&quot;&gt;&lt;font color=&quot;#E6E6E6&quot;&gt;%c4Description%&lt;/font&gt;&lt;/div&gt;"
			><rect
				x="532"
				y="362"
				width="240"
				height="120"
				rx="12"
				ry="12"
				fill="#23a2d9"
				stroke="#0e7dad"
				pointer-events="none"
			/><g transform="translate(-0.5 -0.5)"
				><switch
					><foreignObject
						pointer-events="none"
						width="100%"
						height="100%"
						requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility"
						style="overflow: visible; text-align: left;"
						><div
							xmlns="http://www.w3.org/1999/xhtml"
							style="display: flex; align-items: unsafe center; justify-content: unsafe center; width: 238px; height: 1px; padding-top: 422px; margin-left: 533px;"
						>
							<div
								data-drawio-colors="color: #ffffff; "
								style="box-sizing: border-box; font-size: 0px; text-align: center;"
							>
								<div
									style="display: inline-block; font-size: 11px; font-family: Helvetica; color: rgb(255, 255, 255); line-height: 1.2; pointer-events: none; white-space: normal; word-wrap: normal;"
								>
									<font style="font-size: 16px"><b>BackEnd</b></font>
									<div>[10.11.16.26: Symfony, API Platform ]</div>
									<br />
									<div>
										<font style="font-size: 11px"
											><font color="#E6E6E6">Авторизация, бизнес-логика </font></font
										>
									</div>
								</div>
							</div>
						</div></foreignObject
					><text
						x="652"
						y="425"
						fill="#ffffff"
						font-family="Helvetica"
						font-size="11px"
						text-anchor="middle">BackEnd...</text
					></switch
				></g
			></g
		><g
			id="cell-MU0Fsv9c0_hi0CxBfKlq-14"
			content="&lt;object placeholders=&quot;1&quot; c4Name=&quot;ТБ&quot; c4Type=&quot;Software System&quot; c4Description=&quot;Description of external software system.&quot; label=&quot;&amp;lt;font style=&amp;quot;font-size: 16px&amp;quot;&amp;gt;&amp;lt;b&amp;gt;%c4Name%&amp;lt;/b&amp;gt;&amp;lt;/font&amp;gt;&amp;lt;div&amp;gt;[%c4Type%]&amp;lt;/div&amp;gt;&amp;lt;br&amp;gt;&amp;lt;div&amp;gt;&amp;lt;font style=&amp;quot;font-size: 11px&amp;quot;&amp;gt;&amp;lt;font color=&amp;quot;#cccccc&amp;quot;&amp;gt;%c4Description%&amp;lt;/font&amp;gt;&amp;lt;/div&amp;gt;&quot;/&gt;"
			data-placeholders="1"
			data-c4Name="ТБ"
			data-c4Type="Software System"
			data-c4Description="Description of external software system."
			data-label="&lt;font style=&quot;font-size: 16px&quot;&gt;&lt;b&gt;%c4Name%&lt;/b&gt;&lt;/font&gt;&lt;div&gt;[%c4Type%]&lt;/div&gt;&lt;br&gt;&lt;div&gt;&lt;font style=&quot;font-size: 11px&quot;&gt;&lt;font color=&quot;#cccccc&quot;&gt;%c4Description%&lt;/font&gt;&lt;/div&gt;"
			><rect
				x="1032"
				y="362"
				width="240"
				height="120"
				rx="12"
				ry="12"
				fill="#8c8496"
				stroke="#736782"
				pointer-events="none"
			/><g transform="translate(-0.5 -0.5)"
				><switch
					><foreignObject
						pointer-events="none"
						width="100%"
						height="100%"
						requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility"
						style="overflow: visible; text-align: left;"
						><div
							xmlns="http://www.w3.org/1999/xhtml"
							style="display: flex; align-items: unsafe center; justify-content: unsafe center; width: 238px; height: 1px; padding-top: 422px; margin-left: 1033px;"
						>
							<div
								data-drawio-colors="color: #ffffff; "
								style="box-sizing: border-box; font-size: 0px; text-align: center;"
							>
								<div
									style="display: inline-block; font-size: 12px; font-family: Helvetica; color: rgb(255, 255, 255); line-height: 1.2; pointer-events: none; white-space: normal; word-wrap: normal;"
								>
									<font style="font-size: 16px"><b>ТБ</b></font>
									<div>[Software System]</div>
									<br />
									<div>
										<font style="font-size: 11px"
											><font color="#cccccc">Description of external software system.</font></font
										>
									</div>
								</div>
							</div>
						</div></foreignObject
					><text
						x="1152"
						y="426"
						fill="#ffffff"
						font-family="Helvetica"
						font-size="12px"
						text-anchor="middle">ТБ[Software System]...</text
					></switch
				></g
			></g
		><g id="cell-MU0Fsv9c0_hi0CxBfKlq-15"
			><path
				d="M 432 182 L 432 302 L 240 302 L 240 355.63"
				fill="none"
				stroke="rgb(0, 0, 0)"
				stroke-miterlimit="10"
				pointer-events="none"
			/><path
				d="M 240 360.88 L 236.5 353.88 L 240 355.63 L 243.5 353.88 Z"
				fill="rgb(0, 0, 0)"
				stroke="rgb(0, 0, 0)"
				stroke-miterlimit="10"
				pointer-events="none"
			/></g
		><g id="cell-MU0Fsv9c0_hi0CxBfKlq-16"
			><g transform="translate(-0.5 -0.5)"
				><switch
					><foreignObject
						pointer-events="none"
						width="100%"
						height="100%"
						requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility"
						style="overflow: visible; text-align: left;"
						><div
							xmlns="http://www.w3.org/1999/xhtml"
							style="display: flex; align-items: unsafe center; justify-content: unsafe center; width: 1px; height: 1px; padding-top: 273px; margin-left: 433px;"
						>
							<div
								data-drawio-colors="color: #007FFF; background-color: rgb(255, 255, 255); "
								style="box-sizing: border-box; font-size: 0px; text-align: center;"
							>
								<div
									style="display: inline-block; font-size: 13px; font-family: Helvetica; color: rgb(0, 127, 255); line-height: 1.2; pointer-events: none; background-color: rgb(255, 255, 255); white-space: nowrap;"
								>
									<font style="font-size: 14px; line-height: 1.7;">driver.berg.ru/admin</font>
								</div>
							</div>
						</div></foreignObject
					><text
						x="433"
						y="276"
						fill="#007FFF"
						font-family="Helvetica"
						font-size="13px"
						text-anchor="middle">driver.berg.ru/admin</text
					></switch
				></g
			></g
		><g
			id="cell-MU0Fsv9c0_hi0CxBfKlq-17"
			content="&lt;object placeholders=&quot;1&quot; c4Name=&quot;Админ&quot; c4Type=&quot;Person&quot; c4Description=&quot;Сотрудник BERG&quot; label=&quot;&amp;lt;font style=&amp;quot;font-size: 16px&amp;quot;&amp;gt;&amp;lt;b&amp;gt;%c4Name%&amp;lt;/b&amp;gt;&amp;lt;/font&amp;gt;&amp;lt;div&amp;gt;[%c4Type%]&amp;lt;/div&amp;gt;&amp;lt;br&amp;gt;&amp;lt;div&amp;gt;&amp;lt;font style=&amp;quot;font-size: 11px&amp;quot;&amp;gt;&amp;lt;font color=&amp;quot;#cccccc&amp;quot;&amp;gt;%c4Description%&amp;lt;/font&amp;gt;&amp;lt;/div&amp;gt;&quot;/&gt;"
			data-placeholders="1"
			data-c4Name="Админ"
			data-c4Type="Person"
			data-c4Description="Сотрудник BERG"
			data-label="&lt;font style=&quot;font-size: 16px&quot;&gt;&lt;b&gt;%c4Name%&lt;/b&gt;&lt;/font&gt;&lt;div&gt;[%c4Type%]&lt;/div&gt;&lt;br&gt;&lt;div&gt;&lt;font style=&quot;font-size: 11px&quot;&gt;&lt;font color=&quot;#cccccc&quot;&gt;%c4Description%&lt;/font&gt;&lt;/div&gt;"
			><ellipse
				cx="432"
				cy="42.5"
				rx="40.5"
				ry="40.5"
				fill="#083f75"
				stroke="#06315c"
				pointer-events="none"
			/><path
				d="M 332 107.3 C 332 84.93 350.13 66.8 372.5 66.8 L 491.5 66.8 C 513.87 66.8 532 84.93 532 107.3 L 532 141.5 C 532 163.87 513.87 182 491.5 182 L 372.5 182 C 350.13 182 332 163.87 332 141.5 Z"
				fill="#083f75"
				stroke="#06315c"
				stroke-miterlimit="10"
				pointer-events="none"
			/><ellipse
				cx="432"
				cy="42.5"
				rx="40.5"
				ry="40.5"
				fill="#083f75"
				stroke="#06315c"
				pointer-events="none"
			/><g transform="translate(-0.5 -0.5)"
				><switch
					><foreignObject
						pointer-events="none"
						width="100%"
						height="100%"
						requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility"
						style="overflow: visible; text-align: left;"
						><div
							xmlns="http://www.w3.org/1999/xhtml"
							style="display: flex; align-items: unsafe center; justify-content: unsafe center; width: 1px; height: 1px; padding-top: 125px; margin-left: 432px;"
						>
							<div
								data-drawio-colors="color: #ffffff; "
								style="box-sizing: border-box; font-size: 0px; text-align: center;"
							>
								<div
									style="display: inline-block; font-size: 11px; font-family: Helvetica; color: rgb(255, 255, 255); line-height: 1.2; pointer-events: none; white-space: nowrap;"
								>
									<font style="font-size: 16px"><b>Админ</b></font>
									<div>[Person]</div>
									<br />
									<div>
										<font style="font-size: 11px"><font color="#cccccc">Сотрудник BERG</font></font>
									</div>
								</div>
							</div>
						</div></foreignObject
					><text
						x="432"
						y="128"
						fill="#ffffff"
						font-family="Helvetica"
						font-size="11px"
						text-anchor="middle">Админ[Person]...</text
					></switch
				></g
			></g
		><g
			id="cell-MU0Fsv9c0_hi0CxBfKlq-18"
			content="&lt;object placeholders=&quot;1&quot; c4Type=&quot;БД&quot; c4Container=&quot;Container &quot; c4Technology=&quot;MS SQL&quot; c4Description=&quot;&quot; label=&quot;&amp;lt;font style=&amp;quot;font-size: 16px&amp;quot;&amp;gt;&amp;lt;b&amp;gt;%c4Type%&amp;lt;/font&amp;gt;&amp;lt;div&amp;gt;[%c4Container%:&amp;amp;nbsp;%c4Technology%]&amp;lt;/div&amp;gt;&amp;lt;br&amp;gt;&amp;lt;div&amp;gt;&amp;lt;font style=&amp;quot;font-size: 11px&amp;quot;&amp;gt;&amp;lt;font color=&amp;quot;#E6E6E6&amp;quot;&amp;gt;%c4Description%&amp;lt;/font&amp;gt;&amp;lt;/div&amp;gt;&quot;/&gt;"
			data-placeholders="1"
			data-c4Type="БД"
			data-c4Container="Container "
			data-c4Technology="MS SQL"
			data-c4Description=""
			data-label="&lt;font style=&quot;font-size: 16px&quot;&gt;&lt;b&gt;%c4Type%&lt;/font&gt;&lt;div&gt;[%c4Container%:&amp;nbsp;%c4Technology%]&lt;/div&gt;&lt;br&gt;&lt;div&gt;&lt;font style=&quot;font-size: 11px&quot;&gt;&lt;font color=&quot;#E6E6E6&quot;&gt;%c4Description%&lt;/font&gt;&lt;/div&gt;"
			><path
				d="M 1032 577 C 1032 568.72 1085.73 562 1152 562 C 1183.83 562 1214.35 563.58 1236.85 566.39 C 1259.36 569.21 1272 573.02 1272 577 L 1272 667 C 1272 675.28 1218.27 682 1152 682 C 1085.73 682 1032 675.28 1032 667 Z"
				fill="#8c8496"
				stroke="#0e7dad"
				stroke-miterlimit="10"
				pointer-events="none"
			/><path
				d="M 1272 577 C 1272 585.28 1218.27 592 1152 592 C 1085.73 592 1032 585.28 1032 577"
				fill="none"
				stroke="#0e7dad"
				stroke-miterlimit="10"
				pointer-events="none"
			/><g transform="translate(-0.5 -0.5)"
				><switch
					><foreignObject
						pointer-events="none"
						width="100%"
						height="100%"
						requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility"
						style="overflow: visible; text-align: left;"
						><div
							xmlns="http://www.w3.org/1999/xhtml"
							style="display: flex; align-items: unsafe center; justify-content: unsafe center; width: 238px; height: 1px; padding-top: 635px; margin-left: 1033px;"
						>
							<div
								data-drawio-colors="color: #ffffff; "
								style="box-sizing: border-box; font-size: 0px; text-align: center;"
							>
								<div
									style="display: inline-block; font-size: 12px; font-family: Helvetica; color: rgb(255, 255, 255); line-height: 1.2; pointer-events: none; white-space: normal; word-wrap: normal;"
								>
									<font style="font-size: 16px"><b>БД</b></font>
									<div><b>[Container : MS SQL]</b></div>
									<b
										><br />
										<div><font style="font-size: 11px"><font color="#E6E6E6" /></font></div></b
									>
								</div>
							</div>
						</div></foreignObject
					><text
						x="1152"
						y="638"
						fill="#ffffff"
						font-family="Helvetica"
						font-size="12px"
						text-anchor="middle">БД[Container : MS SQL]...</text
					></switch
				></g
			></g
		><g
			id="cell-MU0Fsv9c0_hi0CxBfKlq-19"
			content="&lt;object placeholders=&quot;1&quot; c4Name=&quot;1C&quot; c4Type=&quot;ContainerScopeBoundary&quot; c4Application=&quot;&quot; label=&quot;&amp;lt;font style=&amp;quot;font-size: 16px&amp;quot;&amp;gt;&amp;lt;b&amp;gt;&amp;lt;div style=&amp;quot;text-align: left&amp;quot;&amp;gt;%c4Name%&amp;lt;/div&amp;gt;&amp;lt;/b&amp;gt;&amp;lt;/font&amp;gt;&amp;lt;div style=&amp;quot;text-align: left&amp;quot;&amp;gt;[%c4Application%]&amp;lt;/div&amp;gt;&quot;/&gt;"
			data-placeholders="1"
			data-c4Name="1C"
			data-c4Type="ContainerScopeBoundary"
			data-c4Application=""
			data-label="&lt;font style=&quot;font-size: 16px&quot;&gt;&lt;b&gt;&lt;div style=&quot;text-align: left&quot;&gt;%c4Name%&lt;/div&gt;&lt;/b&gt;&lt;/font&gt;&lt;div style=&quot;text-align: left&quot;&gt;[%c4Application%]&lt;/div&gt;"
			><rect
				x="1012"
				y="743"
				width="280"
				height="190"
				rx="10"
				ry="10"
				fill="none"
				stroke="#666666"
				stroke-dasharray="8 4"
				pointer-events="none"
			/><g transform="translate(-0.5 -0.5)"
				><switch
					><foreignObject
						pointer-events="none"
						width="100%"
						height="100%"
						requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility"
						style="overflow: visible; text-align: left;"
						><div
							xmlns="http://www.w3.org/1999/xhtml"
							style="display: flex; align-items: unsafe flex-end; justify-content: unsafe flex-start; width: 262px; height: 1px; padding-top: 922px; margin-left: 1022px;"
						>
							<div
								data-drawio-colors="color: #333333; "
								style="box-sizing: border-box; font-size: 0px; text-align: left;"
							>
								<div
									style="display: inline-block; font-size: 11px; font-family: Helvetica; color: rgb(51, 51, 51); line-height: 1.2; pointer-events: none; white-space: normal; word-wrap: normal;"
								>
									<font style="font-size: 16px"><b><div style="text-align: left">1C</div></b></font>
									<div style="text-align: left">[]</div>
								</div>
							</div>
						</div></foreignObject
					><text x="1022" y="922" fill="#333333" font-family="Helvetica" font-size="11px"
						>1C...</text
					></switch
				></g
			></g
		><g
			id="cell-MU0Fsv9c0_hi0CxBfKlq-20"
			content="&lt;object placeholders=&quot;1&quot; c4Name=&quot;1C&quot; c4Type=&quot;Software System&quot; c4Description=&quot;Description of external software system.&quot; label=&quot;&amp;lt;font style=&amp;quot;font-size: 16px&amp;quot;&amp;gt;&amp;lt;b&amp;gt;%c4Name%&amp;lt;/b&amp;gt;&amp;lt;/font&amp;gt;&amp;lt;div&amp;gt;[%c4Type%]&amp;lt;/div&amp;gt;&amp;lt;br&amp;gt;&amp;lt;div&amp;gt;&amp;lt;font style=&amp;quot;font-size: 11px&amp;quot;&amp;gt;&amp;lt;font color=&amp;quot;#cccccc&amp;quot;&amp;gt;%c4Description%&amp;lt;/font&amp;gt;&amp;lt;/div&amp;gt;&quot;/&gt;"
			data-placeholders="1"
			data-c4Name="1C"
			data-c4Type="Software System"
			data-c4Description="Description of external software system."
			data-label="&lt;font style=&quot;font-size: 16px&quot;&gt;&lt;b&gt;%c4Name%&lt;/b&gt;&lt;/font&gt;&lt;div&gt;[%c4Type%]&lt;/div&gt;&lt;br&gt;&lt;div&gt;&lt;font style=&quot;font-size: 11px&quot;&gt;&lt;font color=&quot;#cccccc&quot;&gt;%c4Description%&lt;/font&gt;&lt;/div&gt;"
			><rect
				x="1032"
				y="763"
				width="240"
				height="120"
				rx="12"
				ry="12"
				fill="#8c8496"
				stroke="#736782"
				pointer-events="none"
			/><g transform="translate(-0.5 -0.5)"
				><switch
					><foreignObject
						pointer-events="none"
						width="100%"
						height="100%"
						requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility"
						style="overflow: visible; text-align: left;"
						><div
							xmlns="http://www.w3.org/1999/xhtml"
							style="display: flex; align-items: unsafe center; justify-content: unsafe center; width: 238px; height: 1px; padding-top: 823px; margin-left: 1033px;"
						>
							<div
								data-drawio-colors="color: #ffffff; "
								style="box-sizing: border-box; font-size: 0px; text-align: center;"
							>
								<div
									style="display: inline-block; font-size: 12px; font-family: Helvetica; color: rgb(255, 255, 255); line-height: 1.2; pointer-events: none; white-space: normal; word-wrap: normal;"
								>
									<font style="font-size: 16px"><b>1C</b></font>
									<div>[Software System]</div>
									<br />
									<div>
										<font style="font-size: 11px"
											><font color="#cccccc">Description of external software system.</font></font
										>
									</div>
								</div>
							</div>
						</div></foreignObject
					><text
						x="1152"
						y="827"
						fill="#ffffff"
						font-family="Helvetica"
						font-size="12px"
						text-anchor="middle">1C...</text
					></switch
				></g
			></g
		><g
			id="cell-MU0Fsv9c0_hi0CxBfKlq-21"
			content="&lt;object placeholders=&quot;1&quot; c4Name=&quot;ТБ&quot; c4Type=&quot;ContainerScopeBoundary&quot; c4Application=&quot;&quot; label=&quot;&amp;lt;font style=&amp;quot;font-size: 16px&amp;quot;&amp;gt;&amp;lt;b&amp;gt;&amp;lt;div style=&amp;quot;text-align: left&amp;quot;&amp;gt;%c4Name%&amp;lt;/div&amp;gt;&amp;lt;/b&amp;gt;&amp;lt;/font&amp;gt;&amp;lt;div style=&amp;quot;text-align: left&amp;quot;&amp;gt;[%c4Application%]&amp;lt;/div&amp;gt;&quot;/&gt;"
			data-placeholders="1"
			data-c4Name="ТБ"
			data-c4Type="ContainerScopeBoundary"
			data-c4Application=""
			data-label="&lt;font style=&quot;font-size: 16px&quot;&gt;&lt;b&gt;&lt;div style=&quot;text-align: left&quot;&gt;%c4Name%&lt;/div&gt;&lt;/b&gt;&lt;/font&gt;&lt;div style=&quot;text-align: left&quot;&gt;[%c4Application%]&lt;/div&gt;"
			><rect
				x="1012"
				y="332"
				width="280"
				height="390"
				rx="10"
				ry="10"
				fill="none"
				stroke="#666666"
				stroke-dasharray="8 4"
				pointer-events="none"
			/><g transform="translate(-0.5 -0.5)"
				><switch
					><foreignObject
						pointer-events="none"
						width="100%"
						height="100%"
						requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility"
						style="overflow: visible; text-align: left;"
						><div
							xmlns="http://www.w3.org/1999/xhtml"
							style="display: flex; align-items: unsafe flex-end; justify-content: unsafe flex-start; width: 262px; height: 1px; padding-top: 711px; margin-left: 1022px;"
						>
							<div
								data-drawio-colors="color: #333333; "
								style="box-sizing: border-box; font-size: 0px; text-align: left;"
							>
								<div
									style="display: inline-block; font-size: 11px; font-family: Helvetica; color: rgb(51, 51, 51); line-height: 1.2; pointer-events: none; white-space: normal; word-wrap: normal;"
								>
									<font style="font-size: 16px"><b><div style="text-align: left">ТБ</div></b></font>
									<div style="text-align: left">[]</div>
								</div>
							</div>
						</div></foreignObject
					><text x="1022" y="711" fill="#333333" font-family="Helvetica" font-size="11px"
						>ТБ&#xa;[]</text
					></switch
				></g
			></g
		><g
			id="cell-MU0Fsv9c0_hi0CxBfKlq-22"
			content="&lt;object placeholders=&quot;1&quot; c4Type=&quot;Relationship&quot; c4Technology=&quot;SMTP&quot; c4Description=&quot;отправка письма&quot; label=&quot;&amp;lt;div style=&amp;quot;text-align: left&amp;quot;&amp;gt;&amp;lt;div style=&amp;quot;text-align: center&amp;quot;&amp;gt;&amp;lt;b&amp;gt;%c4Description%&amp;lt;/b&amp;gt;&amp;lt;/div&amp;gt;&amp;lt;div style=&amp;quot;text-align: center&amp;quot;&amp;gt;[%c4Technology%]&amp;lt;/div&amp;gt;&amp;lt;/div&amp;gt;&quot;/&gt;"
			data-placeholders="1"
			data-c4Type="Relationship"
			data-c4Technology="SMTP"
			data-c4Description="отправка письма"
			data-label="&lt;div style=&quot;text-align: left&quot;&gt;&lt;div style=&quot;text-align: center&quot;&gt;&lt;b&gt;%c4Description%&lt;/b&gt;&lt;/div&gt;&lt;div style=&quot;text-align: center&quot;&gt;[%c4Technology%]&lt;/div&gt;&lt;/div&gt;"
			><path
				d="M 1272 853 L 1442 853 L 1442 212 L 732 212 L 732 198.12"
				fill="none"
				stroke="#828282"
				stroke-miterlimit="10"
				pointer-events="none"
			/><path
				d="M 732 183.12 L 737 198.12 L 727 198.12 Z"
				fill="#828282"
				stroke="#828282"
				stroke-miterlimit="10"
				pointer-events="none"
			/><g transform="translate(-0.5 -0.5)"
				><switch
					><foreignObject
						pointer-events="none"
						width="100%"
						height="100%"
						requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility"
						style="overflow: visible; text-align: left;"
						><div
							xmlns="http://www.w3.org/1999/xhtml"
							style="display: flex; align-items: unsafe center; justify-content: unsafe center; width: 1px; height: 1px; padding-top: 599px; margin-left: 1442px;"
						>
							<div
								data-drawio-colors="color: #404040; background-color: rgb(255, 255, 255); "
								style="box-sizing: border-box; font-size: 0px; text-align: center;"
							>
								<div
									style="display: inline-block; font-size: 10px; font-family: Helvetica; color: rgb(64, 64, 64); line-height: 1.2; pointer-events: none; background-color: rgb(255, 255, 255); white-space: nowrap;"
								>
									<div style="text-align: left">
										<div style="text-align: center"><b>отправка письма</b></div>
										<div style="text-align: center">[SMTP]</div>
									</div>
								</div>
							</div>
						</div></foreignObject
					><text
						x="1442"
						y="602"
						fill="#404040"
						font-family="Helvetica"
						font-size="10px"
						text-anchor="middle">отправка письма...</text
					></switch
				></g
			></g
		><g
			id="cell-MU0Fsv9c0_hi0CxBfKlq-23"
			content="&lt;object placeholders=&quot;1&quot; c4Name=&quot;Клиент&quot; c4Type=&quot;Person&quot; c4Description=&quot;Клиент BERG&quot; label=&quot;&amp;lt;font style=&amp;quot;font-size: 16px&amp;quot;&amp;gt;&amp;lt;b&amp;gt;%c4Name%&amp;lt;/b&amp;gt;&amp;lt;/font&amp;gt;&amp;lt;div&amp;gt;[%c4Type%]&amp;lt;/div&amp;gt;&amp;lt;br&amp;gt;&amp;lt;div&amp;gt;&amp;lt;font style=&amp;quot;font-size: 11px&amp;quot;&amp;gt;&amp;lt;font color=&amp;quot;#cccccc&amp;quot;&amp;gt;%c4Description%&amp;lt;/font&amp;gt;&amp;lt;/div&amp;gt;&quot;/&gt;"
			data-placeholders="1"
			data-c4Name="Клиент"
			data-c4Type="Person"
			data-c4Description="Клиент BERG"
			data-label="&lt;font style=&quot;font-size: 16px&quot;&gt;&lt;b&gt;%c4Name%&lt;/b&gt;&lt;/font&gt;&lt;div&gt;[%c4Type%]&lt;/div&gt;&lt;br&gt;&lt;div&gt;&lt;font style=&quot;font-size: 11px&quot;&gt;&lt;font color=&quot;#cccccc&quot;&gt;%c4Description%&lt;/font&gt;&lt;/div&gt;"
			><ellipse
				cx="732"
				cy="42.5"
				rx="40.5"
				ry="40.5"
				fill="#09755f"
				stroke="#06315c"
				pointer-events="none"
			/><path
				d="M 632 107.3 C 632 84.93 650.13 66.8 672.5 66.8 L 791.5 66.8 C 813.87 66.8 832 84.93 832 107.3 L 832 141.5 C 832 163.87 813.87 182 791.5 182 L 672.5 182 C 650.13 182 632 163.87 632 141.5 Z"
				fill="#09755f"
				stroke="#06315c"
				stroke-miterlimit="10"
				pointer-events="none"
			/><ellipse
				cx="732"
				cy="42.5"
				rx="40.5"
				ry="40.5"
				fill="#09755f"
				stroke="#06315c"
				pointer-events="none"
			/><g transform="translate(-0.5 -0.5)"
				><switch
					><foreignObject
						pointer-events="none"
						width="100%"
						height="100%"
						requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility"
						style="overflow: visible; text-align: left;"
						><div
							xmlns="http://www.w3.org/1999/xhtml"
							style="display: flex; align-items: unsafe center; justify-content: unsafe center; width: 1px; height: 1px; padding-top: 125px; margin-left: 732px;"
						>
							<div
								data-drawio-colors="color: #ffffff; "
								style="box-sizing: border-box; font-size: 0px; text-align: center;"
							>
								<div
									style="display: inline-block; font-size: 11px; font-family: Helvetica; color: rgb(255, 255, 255); line-height: 1.2; pointer-events: none; white-space: nowrap;"
								>
									<font style="font-size: 16px"><b>Клиент</b></font>
									<div>[Person]</div>
									<br />
									<div>
										<font style="font-size: 11px"><font color="#cccccc">Клиент BERG</font></font>
									</div>
								</div>
							</div>
						</div></foreignObject
					><text
						x="732"
						y="128"
						fill="#ffffff"
						font-family="Helvetica"
						font-size="11px"
						text-anchor="middle">Клиент[Person]...</text
					></switch
				></g
			></g
		><g
			id="cell-MU0Fsv9c0_hi0CxBfKlq-24"
			content="&lt;object placeholders=&quot;1&quot; c4Type=&quot;Relationship&quot; c4Technology=&quot;JSON/HTTP&quot; c4Description=&quot;Обмен фин. информацией (чеки, УПД)&quot; label=&quot;&amp;lt;div style=&amp;quot;text-align: left&amp;quot;&amp;gt;&amp;lt;div style=&amp;quot;text-align: center&amp;quot;&amp;gt;&amp;lt;b&amp;gt;%c4Description%&amp;lt;/b&amp;gt;&amp;lt;/div&amp;gt;&amp;lt;div style=&amp;quot;text-align: center&amp;quot;&amp;gt;[%c4Technology%]&amp;lt;/div&amp;gt;&amp;lt;/div&amp;gt;&quot;/&gt;"
			data-placeholders="1"
			data-c4Type="Relationship"
			data-c4Technology="JSON/HTTP"
			data-c4Description="Обмен фин. информацией (чеки, УПД)"
			data-label="&lt;div style=&quot;text-align: left&quot;&gt;&lt;div style=&quot;text-align: center&quot;&gt;&lt;b&gt;%c4Description%&lt;/b&gt;&lt;/div&gt;&lt;div style=&quot;text-align: center&quot;&gt;[%c4Technology%]&lt;/div&gt;&lt;/div&gt;"
			><path
				d="M 712 482 L 1019.12 787.04"
				fill="none"
				stroke="#828282"
				stroke-miterlimit="10"
				pointer-events="none"
			/><path
				d="M 1029.77 797.61 L 1015.6 790.59 L 1022.65 783.49 Z"
				fill="#828282"
				stroke="#828282"
				stroke-miterlimit="10"
				pointer-events="none"
			/><g transform="translate(-0.5 -0.5)"
				><switch
					><foreignObject
						pointer-events="none"
						width="100%"
						height="100%"
						requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility"
						style="overflow: visible; text-align: left;"
						><div
							xmlns="http://www.w3.org/1999/xhtml"
							style="display: flex; align-items: unsafe center; justify-content: unsafe center; width: 1px; height: 1px; padding-top: 640px; margin-left: 871px;"
						>
							<div
								data-drawio-colors="color: #404040; background-color: rgb(255, 255, 255); "
								style="box-sizing: border-box; font-size: 0px; text-align: center;"
							>
								<div
									style="display: inline-block; font-size: 10px; font-family: Helvetica; color: rgb(64, 64, 64); line-height: 1.2; pointer-events: none; background-color: rgb(255, 255, 255); white-space: nowrap;"
								>
									<div style="text-align: left">
										<div style="text-align: center"><b>Обмен фин. информацией (чеки, УПД)</b></div>
										<div style="text-align: center">[JSON/HTTP]</div>
									</div>
								</div>
							</div>
						</div></foreignObject
					><text
						x="871"
						y="643"
						fill="#404040"
						font-family="Helvetica"
						font-size="10px"
						text-anchor="middle">Обмен фин. информацией (чеки, УПД)...</text
					></switch
				></g
			></g
		><g
			id="cell-MU0Fsv9c0_hi0CxBfKlq-25"
			content="&lt;object placeholders=&quot;1&quot; c4Type=&quot;Relationship&quot; c4Technology=&quot;Вызов хранимых процедур&quot; c4Description=&quot;Запрос номенклатурной информации&quot; label=&quot;&amp;lt;div style=&amp;quot;text-align: left&amp;quot;&amp;gt;&amp;lt;div style=&amp;quot;text-align: center&amp;quot;&amp;gt;&amp;lt;b&amp;gt;%c4Description%&amp;lt;/b&amp;gt;&amp;lt;/div&amp;gt;&amp;lt;div style=&amp;quot;text-align: center&amp;quot;&amp;gt;[%c4Technology%]&amp;lt;/div&amp;gt;&amp;lt;/div&amp;gt;&quot;/&gt;"
			data-placeholders="1"
			data-c4Type="Relationship"
			data-c4Technology="Вызов хранимых процедур"
			data-c4Description="Запрос номенклатурной информации"
			data-label="&lt;div style=&quot;text-align: left&quot;&gt;&lt;div style=&quot;text-align: center&quot;&gt;&lt;b&gt;%c4Description%&lt;/b&gt;&lt;/div&gt;&lt;div style=&quot;text-align: center&quot;&gt;[%c4Technology%]&lt;/div&gt;&lt;/div&gt;"
			><path
				d="M 772 452 L 1018.51 613.18"
				fill="none"
				stroke="#828282"
				stroke-miterlimit="10"
				pointer-events="none"
			/><path
				d="M 1031.06 621.39 L 1015.77 617.36 L 1021.25 608.99 Z"
				fill="#828282"
				stroke="#828282"
				stroke-miterlimit="10"
				pointer-events="none"
			/><g transform="translate(-0.5 -0.5)"
				><switch
					><foreignObject
						pointer-events="none"
						width="100%"
						height="100%"
						requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility"
						style="overflow: visible; text-align: left;"
						><div
							xmlns="http://www.w3.org/1999/xhtml"
							style="display: flex; align-items: unsafe center; justify-content: unsafe center; width: 1px; height: 1px; padding-top: 537px; margin-left: 902px;"
						>
							<div
								data-drawio-colors="color: #404040; background-color: rgb(255, 255, 255); "
								style="box-sizing: border-box; font-size: 0px; text-align: center;"
							>
								<div
									style="display: inline-block; font-size: 10px; font-family: Helvetica; color: rgb(64, 64, 64); line-height: 1.2; pointer-events: none; background-color: rgb(255, 255, 255); white-space: nowrap;"
								>
									<div style="text-align: left">
										<div style="text-align: center"><b>Запрос номенклатурной информации</b></div>
										<div style="text-align: center">[Вызов хранимых процедур]</div>
									</div>
								</div>
							</div>
						</div></foreignObject
					><text
						x="902"
						y="540"
						fill="#404040"
						font-family="Helvetica"
						font-size="10px"
						text-anchor="middle">Запрос номенклатурной информации...</text
					></switch
				></g
			></g
		></g
	><switch
		><g requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility" /><a
			transform="translate(0,-5)"
			xlink:href="https://www.diagrams.net/doc/faq/svg-export-text-problems"
			target="_blank"
			><text text-anchor="middle" font-size="10px" x="50%" y="100%"
				>Text is not SVG - cannot display</text
			></a
		></switch
	></svg
>
<style lang="scss">
	

	#cell-MU0Fsv9c0_hi0CxBfKlq-7 path{
		stroke:var( --cell-MU0Fsv9c0_hi0CxBfKlq-7, grey);
	}


</style>
