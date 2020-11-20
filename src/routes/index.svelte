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
    padding: 0 3rem;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
  }
  .project-item {
    position: relative;
    width: 100%;
    margin-bottom: 1rem;
    height: 7rem;
    background-position: center center;
    background-size: 105%;
    transition: background-size 200ms linear;
  }
  .project-item:hover {
    background-size: 110%;
  }
  .project-item::before {
    content: '';
    position: absolute;
    top: 1px;
    left: 1px;
    width: 100%;
    height: 7rem;
    background: #111;
    z-index: -1;
    transition: all 200ms linear;
  }
  .project-item:hover::before {
    top: 8px;
    left: 8px;
  }
  .overlay {
    padding: 0 2rem;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    background: rgba(10,10,10,.95);
  }
  .project-user {
    display: flex;
    align-items: center;
  }
  .avatar {
    margin-right: 1rem;
    width: 4rem;
    height: 4rem;
    border-radius: .25rem;
    border: 2px solid #555;
  }
  .user-info {
    display: flex;
    flex-direction: column;
  }
  .username {
    font-size: 1.75rem;
    color: #fff;
  }
  .link {
    margin-top: .5rem;
    font-size: 1.25rem;
  }
  .project-items {
    display: flex;
    flex-direction: row;
  }
  .project-items img {
    margin-left: .75rem;
    width: 3rem;
    height: 3rem;
    background: rgba(0,0,0,.5);
    border: 2px solid #555;
  }
  .project-info {
    width: 100%;
    height: 100%;
    display: grid;
    place-items: center;
    background: rgba(0,0,0,.75);
  }

	@media (max-width: 992px) {
    .project-item, .project-item::before {
      height: 10rem;
    }
    .overlay {
      flex-direction: column;
      justify-content: center;
    }
    .project-user {
      margin-bottom: 1rem;
    }
  }
  @media (max-width: 600px) {

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
  <span>Featured projects</span>
  <a rel="prefetch" href="projects">See all ⟶</a>
</div>

<section class="projects">
  {#each posts as post}
    {#if post.isFeatured && post.category == 'Project'}
      <a rel="prefetch" href="p/{post.slug}" class="project-item" style="background-image:url({post.banner})">
        <div class="overlay">
          <div class="project-user">
            <img class="avatar" src="{post.avatar}" alt="{post.title}">
            <div class="user-info">
              <h2 class="username">{post.title}</h2>
              <em class="link">twitch.tv/{post.slug}</em>
            </div>
          </div>
          <div class="project-items">
            {#if post.items}
              {#each post.items as item}
                <img src="{item}" alt="Item">
              {/each}
            {/if}
          </div>
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