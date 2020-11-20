<script context="module">
	export function preload() {
		return this.fetch(`/p.json`).then(r => r.json()).then(posts => {
			return { posts };
    });
  }
</script>

<script>
  export let posts;
</script>

<style>
	h1 {
    padding: 3rem;
    font-size: 3rem;
    font-weight: 600;
    margin: 0 0 0.5em 0;
    color: #ccc;
  }
  .projects {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
  }
  .project-item {
    width: 33.333%;
    height: 12rem;
    background-position: center center;
    background-size: cover;
    filter: grayscale(1);
    border-right: 1px solid #333;
    border-bottom: 1px solid #333;
  }
  .project-item:hover {
    filter: none;
    background-size: 120%;
  }
  .project-info {
    width: 100%;
    height: 100%;
    display: grid;
    place-items: center;
    background: rgba(0,0,0,.75);
  }
  .project-info h1 {
    font-size: 2vw;
  }
	@media (max-width: 920px) {
		h1 {
			font-size: 2em;
    }
    .project-item {
      width: 50%;
    }
    .project-info h1 {
      font-size: 4vw;
    }
  }
  @media (max-width: 480px) {
		h1 {
			font-size: 2em;
    }
    .project-item {
      width: 100%;
    }
    .project-info h1 {
      font-size: 4vw;
    }
  }
</style>

<svelte:head>
	<title>Shi</title>
</svelte:head>

<h1>
  <div>A showcase of different</div>
  <div>projects I have worked on</div>
</h1>

<section class="projects">
  {#each posts as post}
    {#if post.category == 'Project'}
      <a rel="prefetch" href="p/{post.slug}" class="project-item" style="background-image:url({post.image})">
        <div class="project-info">
          <h1>{post.title}</h1>
        </div>
      </a>
    {/if}
  {/each}
</section>