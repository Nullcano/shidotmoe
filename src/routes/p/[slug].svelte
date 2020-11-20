<script context="module">
	export async function preload({ params }) {
		const res = await this.fetch(`p/${params.slug}.json`);
		const data = await res.json();

		if (res.status === 200) {
			return { post: data };
		} else {
			this.error(res.status, data.message);
		}
	}
</script>

<script>
	export let post;
</script>

<style>
	h1 {
    padding: 3rem;
    font-size: 3rem;
    font-weight: 600;
    margin: 0 0 0.5em 0;
    color: #ccc;
  }
  .content {
    margin: 0 3rem;
  }
</style>

<svelte:head>
	<title>{post.title}</title>
</svelte:head>

<h1>{post.title}</h1>

<div class="content">
	{@html post.html}
</div>
