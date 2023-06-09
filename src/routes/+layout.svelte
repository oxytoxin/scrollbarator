<script>
	import '../app.postcss';
</script>

<div class="bg-gray-200 h-screen flex flex-col">
	<div class="bg-amber-600 p-8">
		<h1 class="text-center text-3xl font-bold italic">SCROLLBARINATOR</h1>
	</div>
	<div class="px-16 overflow-auto flex-1">
		<slot />
	</div>
	<div class="flex items-center text-sm font-semibold p-2 bg-black text-white justify-center">
		Made with<span class="text-2xl px-1 text-red-600">&hearts;</span>by OXYTOXINSGRACE &copy; 2023
	</div>
</div>
