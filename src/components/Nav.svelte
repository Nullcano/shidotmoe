<script>
	export let segment;
</script>

<style>
	nav {
    position: relative;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    padding: 1rem 3rem;
    border-bottom: 1px solid #111;
  }
  .left {
    text-transform: uppercase;
  }
  .right {
    display: block;
  }
  .right ul {
    display: flex;
  }
	[aria-current] {
		color: #ccc;
	}

	a {
		text-decoration: none;
		padding: 1em 0.5em;
		display: block;
  }
  @media (max-width: 600px) {
    nav {
      visibility: hidden;
    }
  }
</style>

<nav>
  <div class="left">
    <a rel=prefetch aria-current="{segment === undefined ? 'page' : undefined}" href=".">shi.moe</a>
  </div>
  <div class="right">
    <ul>
      <li><a rel=prefetch aria-current="{segment === 'about' ? 'page' : undefined}" href="about">About</a></li>
      <li><a rel=prefetch aria-current="{segment === 'commission' ? 'page' : undefined}" href="commission">Commission</a></li>
      <li><a rel=prefetch aria-current="{segment === 'projects' ? 'page' : undefined}" href="projects">Projects</a></li>
      <li><a rel=prefetch aria-current="{segment === 'articles' ? 'page' : undefined}" href="articles">Articles</a></li>
    </ul>
  </div>
</nav>

