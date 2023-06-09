<script lang="ts">
	import { generateTricolorCombination } from '$lib/utils';
	let thumb = '#000000';
	let track = '#000000';
	let border = '#ffffff';
	let scrollType = 'vertical';

	function regenerate() {
		[thumb, track, border] = generateTricolorCombination();
	}
	regenerate();

	let borderRadius = 0;
	let width = 10;
	let height = 10;
	let borderWidth = 3;
	let ffWidth = 'auto';
	let borderStyle = 'solid';
	$: borderRadiusValue = `${borderRadius}px`;
	$: widthValue = `${width}px`;
	$: heightValue = `${height}px`;
	$: borderWidthValue = `${borderWidth}px`;
	let code: HTMLPreElement;
	function copy() {
		navigator.clipboard.writeText(code.innerText);
		alert('Style copied.');
	}
</script>

<div class="flex gap-4 flex-col md:flex-row p-8">
	<div class="flex font-semibold uppercase gap-8 text-sm flex-col md:w-1/2 md:mx-auto">
		<div class="flex items-stretch justify-evenly gap-2">
			<div class="flex w-full divide-x-2 divide-black border-2 border-black">
				<input class="w-full h-12" bind:value={thumb} type="color" />
				<input class="w-full h-12" bind:value={track} type="color" />
				<input class="w-full h-12" bind:value={border} type="color" />
			</div>
			<button
				class="border-2 rounded-lg p-2 font-semibold bg-amber-400 border-amber-600"
				on:click={regenerate}>Randomize</button
			>
		</div>
		<div>
			<p class="text-lg">Scrollbar Type</p>
			<label for="vertical" class="cursor-pointer flex gap-2 items-center">
				<input
					bind:group={scrollType}
					class="cursor-pointer"
					type="radio"
					name="type"
					id="vertical"
					value="vertical"
				/>
				Vertical
			</label>
			<label for="horizontal" class="cursor-pointer flex gap-2 items-center">
				<input
					bind:group={scrollType}
					class="cursor-pointer"
					type="radio"
					name="type"
					id="horizontal"
					value="horizontal"
				/>
				Horizontal
			</label>
		</div>
		<div class="flex flex-col">
			<p class="text-lg">Border Settings</p>
			<label class="flex flex-col">
				Border Radius ({borderRadiusValue})
				<input type="range" min="0" max="100" bind:value={borderRadius} />
			</label>
			{#if scrollType === 'vertical'}
				<label class="flex flex-col">
					Scrollbar Width ({widthValue})
					<input type="range" min="0" max="40" bind:value={width} />
				</label>
			{/if}
			{#if scrollType === 'horizontal'}
				<label class="flex flex-col">
					Scrollbar Height ({heightValue})
					<input type="range" min="0" max="40" bind:value={height} />
				</label>
			{/if}

			<label class="flex flex-col">
				Border Width
				<input type="range" min="0" max="40" bind:value={borderWidth} />
			</label>
		</div>
		<div>
			<p class="text-lg">Miscellaneous</p>
			<label class="flex flex-col">
				Scrollbar Width (Firefox)
				<select bind:value={ffWidth}>
					<option value="none">None</option>
					<option value="thin">Thin</option>
					<option value="auto">Auto</option>
				</select>
			</label>
			<label class="flex flex-col">
				Border Style
				<select bind:value={borderStyle}>
					<option value="none">None</option>
					<option value="dotted">Dotted</option>
					<option value="dashed">Dashed</option>
					<option value="solid">Solid</option>
					<option value="double">Double</option>
					<option value="groove">Groove</option>
					<option value="ridge">Ridge</option>
					<option value="inset">Inset</option>
					<option value="outset">Outset</option>
				</select>
			</label>
		</div>
	</div>
	<div class="md:w-1/2">
		<div
			id="sample"
			style="
		--thumb:{thumb};
		--track:{track};
		--border:{border};
		--border-radius:{borderRadiusValue};
		--border-style:{borderStyle};
		--width:{widthValue};
		--height:{heightValue};
		--border-width:{borderWidthValue};
		--ff-width:{ffWidth};
		"
			class:whitespace-nowrap={scrollType === 'horizontal'}
			class="h-96 overflow-auto border border-black p-4 whitespace-nowrap mx-auto"
		>
			Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, saepe? Quos, voluptatem
			officiis tenetur, animi atque nemo repudiandae quidem beatae quis vel aperiam a cupiditate,
			dicta ab nostrum voluptates? Iure culpa expedita, magnam excepturi similique maiores
			accusamus. Quos aperiam, similique repudiandae rerum tempore earum laudantium dolorem tenetur
			nobis. Nam exercitationem reiciendis quos ratione minus, consectetur aut facilis sint
			inventore qui accusantium doloremque tempore magni maxime delectus. Quia dolores voluptates
			quas, at culpa quod aliquid facilis est, optio officiis veniam excepturi tenetur repellat
			nihil pariatur aperiam maiores reiciendis harum. Earum atque necessitatibus, culpa aut
			mollitia pariatur id magni iure obcaecati autem accusamus unde ab tenetur nobis possimus.
			Repellendus optio iure nam rem quae, nulla excepturi soluta et illum praesentium sapiente
			minus animi quasi modi molestiae laborum. Magni esse vitae nobis amet doloribus explicabo
			veniam reiciendis? Dolore consequuntur aliquam quo odio voluptatum odit iure. Cupiditate
			officia praesentium saepe doloribus voluptatem quo debitis. Molestias maiores officia amet! Ex
			similique voluptatem in totam aspernatur asperiores, quidem nobis rerum magni dignissimos
			laudantium aliquam fugit inventore placeat consectetur amet sed at? Dolorum reiciendis
			deleniti nam eum quae, omnis rem error culpa eligendi earum distinctio consectetur velit ullam
			architecto ratione aspernatur quisquam illo itaque voluptates laborum ipsam accusantium nulla
			vero? Natus neque rerum, minima, et accusamus ut provident, perferendis repellat alias iste
			corrupti ratione dolores corporis. Sapiente magnam officiis animi, officia obcaecati soluta
			quasi fugiat ipsum, rerum laudantium quibusdam repellendus hic laborum earum omnis doloribus
			nemo sit. Cum obcaecati perferendis itaque sunt tempore dolor blanditiis, nam ratione, magni
			asperiores dolorum dolores? Maxime nisi, quae placeat officia eos est recusandae enim, ex rem
			minima odit accusamus explicabo id illum! Iure, doloremque! Earum deleniti, nostrum ducimus
			eveniet tempore molestias nobis, iusto, blanditiis nesciunt quisquam expedita eaque dolorum
			illum inventore! Incidunt autem sint laboriosam placeat obcaecati voluptatem aperiam hic,
			consequatur ea sunt tenetur doloremque, dolorem debitis alias, eum eos officia delectus minus
			non. Sapiente praesentium corporis tempora earum dolor alias perspiciatis possimus magni
			veritatis ullam necessitatibus, minima natus ratione ducimus voluptas quaerat. Consequatur
			corrupti perspiciatis debitis, animi illo minima excepturi natus error accusantium magnam
			quia, sed a, cum perferendis reiciendis id at impedit dolores. Porro, delectus dolorum.
			Laudantium vitae pariatur ad! Alias beatae architecto, doloribus itaque doloremque veniam vel
			ex laborum possimus ullam sequi ab magnam quia! Pariatur laborum, perferendis voluptas natus
			praesentium fuga adipisci! Eaque totam nulla ratione illum? Iste optio consequatur ea alias
			tempore quidem nesciunt aliquid maiores in, magni eveniet magnam ipsam cumque id similique.
			Voluptatem dolorum sint maxime possimus minima dolor magni, repellat beatae, quia nobis
			accusamus voluptatibus quisquam ut soluta debitis culpa explicabo quo! Praesentium fuga odit
			officia voluptatibus mollitia eligendi, explicabo pariatur iusto quidem accusamus corporis et,
			alias voluptate. Aperiam similique fuga expedita nihil tenetur pariatur voluptates
			perspiciatis placeat assumenda eum adipisci est asperiores iure temporibus exercitationem quo
			doloribus recusandae, possimus odio ducimus. Molestias autem dignissimos aperiam placeat,
			voluptatibus tempore error, optio voluptates exercitationem deleniti aspernatur natus vitae ex
			ab impedit voluptatem dicta perspiciatis fugit neque distinctio rem porro deserunt, et
			reiciendis. Officiis ex recusandae qui alias, est veniam! Sed voluptates qui saepe dolorum
			voluptatum nam, fugiat neque harum labore obcaecati et recusandae maxime reiciendis nihil.
			Adipisci aliquid, vitae, odio quis, aliquam similique facilis asperiores est ut soluta rem
			deleniti temporibus distinctio. Exercitationem enim at tempore veritatis officiis officia
			accusantium ullam nisi hic libero. Quidem minus sunt autem vero, doloremque doloribus labore
			vitae vel sapiente voluptate nemo, provident assumenda modi iste. Similique dicta, distinctio
			laboriosam quod illo corrupti dolorum doloribus harum porro quia maiores, quasi qui quae.
			Libero consectetur ullam, sit officia illum eos incidunt ratione. Fugiat corrupti commodi
			maiores numquam consequatur amet quasi ipsum minus ullam velit sint voluptatum voluptatibus
			impedit, neque deserunt non blanditiis tempore vitae error dignissimos repellendus temporibus
			soluta officia. Laboriosam exercitationem quibusdam, veniam accusamus dolore officia at neque
			fugit labore sint cupiditate voluptatem aliquam dicta! Recusandae porro alias distinctio
			facere iste accusamus nemo adipisci numquam, repellat vero ea natus aut dicta optio labore
			exercitationem provident dolorem animi sapiente magni suscipit magnam odit iusto ullam.
			Dolorem nesciunt expedita voluptatibus iure maxime eos, rem odio sint cumque repellat amet,
			fuga corporis culpa voluptate error voluptas perspiciatis quas ad dignissimos. Ea harum,
			fugiat vel veritatis rerum blanditiis unde rem doloribus quas doloremque voluptas quidem
			repudiandae sit ipsum cum et aspernatur molestias. Laboriosam, ducimus a? At voluptatem ea
			repellat unde accusamus amet! Modi aspernatur consequuntur labore quod voluptas molestias
			voluptates unde ratione, ea minus maiores, totam exercitationem vero ad, possimus soluta. Sint
			sequi deleniti unde quo cupiditate laboriosam provident temporibus, ad blanditiis dolor.
			Consequuntur maxime, minima sed sint sunt fuga? Maxime dolore sint iure laudantium
			repudiandae, earum ex tenetur voluptates blanditiis aliquid fugiat vero nulla, cumque
			quisquam! Vero nesciunt eius consequatur. Eveniet ipsum quam voluptatem incidunt ipsam fugiat
			beatae mollitia quasi tempore quia? Illo facilis quasi quia esse ducimus magnam rerum vero
			harum unde similique! Repellendus rerum illum itaque sint repellat quaerat atque quasi, fugit,
			quidem, nisi autem pariatur? Facilis accusamus dolorem adipisci qui, numquam officia!
			Laudantium debitis iste omnis eos qui tempore. Culpa, minima veniam officiis fuga sint
			laudantium incidunt nisi facilis repellat placeat sed magni aspernatur quam assumenda nobis
			quas quasi et libero doloribus accusamus reiciendis ratione perferendis distinctio iure.
			Aperiam odio recusandae iste corporis laborum in, ducimus accusamus laudantium quos
			exercitationem eius ut nesciunt fuga pariatur voluptatum earum repellat reprehenderit maxime.
			Porro, laborum quo maxime rerum repudiandae sunt consectetur aliquam labore cupiditate
			veritatis fugit. Eius molestias inventore sit unde vitae dolore provident repudiandae veniam
			magni corrupti dolor qui doloremque tempore, ut hic mollitia nostrum eveniet magnam amet
			excepturi recusandae. Dolor itaque at explicabo excepturi ab dolorem, ad dolores natus eum?
			Facere minus, a nesciunt vel eligendi incidunt animi blanditiis facilis, culpa non dolorem
			amet aliquid maiores optio dolore tenetur odit totam aut beatae. Quasi reprehenderit nostrum
			sed quas sunt quia, veniam nisi voluptates recusandae nesciunt, deleniti obcaecati vel fugit
			earum dolor! Optio mollitia expedita consequatur asperiores! Voluptate cumque quo cum eligendi
			ducimus saepe accusantium aliquid alias sed hic ad minus labore itaque, qui molestiae, quasi
			ut. Voluptas, distinctio quo. Maiores?
		</div>
		<div class="mt-4 flex justify-end">
			<button
				on:click={copy}
				class="flex text-sm font-semibold border p-1 border-black rounded items-center"
			>
				<svg class="flex-shrink-0 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
					><path
						d="M6.9998 6V3C6.9998 2.44772 7.44752 2 7.9998 2H19.9998C20.5521 2 20.9998 2.44772 20.9998 3V17C20.9998 17.5523 20.5521 18 19.9998 18H16.9998V20.9991C16.9998 21.5519 16.5499 22 15.993 22H4.00666C3.45059 22 3 21.5554 3 20.9991L3.0026 7.00087C3.0027 6.44811 3.45264 6 4.00942 6H6.9998ZM5.00242 8L5.00019 20H14.9998V8H5.00242ZM8.9998 6H16.9998V16H18.9998V4H8.9998V6ZM7 11H13V13H7V11ZM7 15H13V17H7V15Z"
					/></svg
				>
				COPY
			</button>
		</div>
		<pre bind:this={code} class="whitespace-pre-line">
			{`
				/* Firefox */
				* {
					scrollbar-width: ${ffWidth};
					scrollbar-color: ${thumb} ${track};
				}

				/* Chrome, Edge, and Safari */
				*::-webkit-scrollbar {
					width: ${widthValue};
					height: ${heightValue};
				}

				*::-webkit-scrollbar-track {
					background: ${track};
				}

				*::-webkit-scrollbar-thumb {
					background-color: ${thumb};
					border-radius: ${borderRadiusValue};
					border: ${borderWidthValue} ${borderStyle} ${border};
				}
				`}
		</pre>
	</div>
</div>

<style>
	/* Firefox */
	* {
		scrollbar-width: var(--ff-width);
		scrollbar-color: var(--thumb) var(--track);
	}

	/* Chrome, Edge, and Safari */
	*::-webkit-scrollbar {
		width: var(--width);
		height: var(--height);
	}

	*::-webkit-scrollbar-track {
		background: var(--track);
	}

	*::-webkit-scrollbar-thumb {
		background-color: var(--thumb);
		border-radius: var(--border-radius);
		border: var(--border-width) var(--border-style) var(--border);
	}
</style>
