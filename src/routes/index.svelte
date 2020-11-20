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
  .strip {
    width: 100%;
    padding: 3rem;
    display: flex;
    justify-content: space-between;
    font-size: 1.5rem;
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
	@media (max-width: 992px) {
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
  @media (max-width: 600px) {
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
  <div>Shi streams games and art on Twitch</div>
  <div>and creates charming assets</div>
  <div>for other content creators</div>
</h1>

<div class="strip">
  <span>Selected projects</span>
  <a rel="prefetch" href="projects">See all ⟶</a>
</div>

<section class="projects">
  {#each posts as post}
    {#if post.isFeatured && post.category == 'Project'}
      <a rel="prefetch" href="p/{post.slug}" class="project-item" style="background-image:url({post.image})">
        <div class="project-info">
          <h1>{post.title}</h1>
        </div>
      </a>
    {/if}
  {/each}
</section>

<div class="strip">
  <span>Recent articles</span>
  <a rel="prefetch" href="articles">See all ⟶</a>
</div>

<section class="projects">
  {#each posts.slice(0, 3) as post}
    {#if post.category == 'Article'}
      <a rel="prefetch" href="p/{post.slug}" class="project-item" style="background-image:url({post.image})">
        <div class="project-info">
          <h1>{post.title}</h1>
        </div>
      </a>
    {/if}
  {/each}
</section>