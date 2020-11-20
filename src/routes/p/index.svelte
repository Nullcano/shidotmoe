<script context="module">
	export function preload() {
		return this.fetch(`p.json`).then(r => r.json()).then(posts => {
			return { posts };
		});
	}
</script>

<script>
	export let posts;
</script>

<style>
	ul {
		margin: 0 0 1em 0;
		line-height: 1.5;
	}
</style>

<svelte:head>
	<title>Shi - All Posts</title>
</svelte:head>

<h1>All Posts</h1>

<ul>
	{#each posts as post}
		<li><a rel="prefetch" href="p/{post.slug}">{post.title}</a></li>
	{/each}
</ul>
