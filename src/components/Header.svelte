<script>
  let fullMenu = false;
  let currentYear = '2020';

  function toggleMenu() {
		fullMenu = !fullMenu;
	}
</script>

<style>
  header {
    position: sticky;
    width: 8rem;
    height: 100vh;
    top: 0;
    left: 0;
    z-index: 10;
    border-right: 1px solid #111;
  }
  .inner {
    padding: 2.5rem 2rem;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
  .logo-link, button {
    opacity: .5;
    transition: opacity 200ms;
  }
  .logo-link:hover, button:hover {
    opacity: .8;
  }
  .logo, button {
    width: 3rem;
    height: 3rem;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  nav {
    order: 2;
  }
  button {
    outline: 0;
  }
  span {
    order: 3;
  }
  .full-menu {
    position: fixed;
    top: 0;
    right: 0;
    width: calc(100% - 7rem);
    height: 100vh;
    background: #0c0c0c;
  }
  .full-menu ul {
    padding: 3rem;
    font-size: 5vw;
  }
  .full-menu ul li {
    padding: 2rem;
  }
  .full-menu ul li a {
    padding: 2rem;
  }
  @media (max-width: 992px) {

  }
  @media (max-width: 600px) {
    header {
      position: fixed;
      width: 100%;
      height: auto;
      top: 0;
      left: 0;
      border-right: 0;
      border-bottom: 1px solid #111;
      background: #0c0c0c;
    }
    .inner {
      padding: .5rem 1.5rem;
      height: auto;
      display: flex;
      flex-direction: row;
      justify-content: space-between;
    }
    span {
      display: none;
    }
    .full-menu {
      position: fixed;
      top: 4rem;
      right: 0;
      width: 100%;
      height: 100vh;
      background: #0c0c0c;
    }
  }
</style>

<header>
  <div class="inner">
    <a href="/" class="logo-link">
      <div class="logo">
        <img src="./logo.png" alt="S">
      </div>
    </a>
    <nav>
      <button on:click={toggleMenu}>
        <img src="./menu.png" alt="Menu">
      </button>
      {#if fullMenu}
        <div class="full-menu" on:click={toggleMenu}>
          <ul>
            <li><a rel=prefetch href=".">Home</a></li>
            <li><a rel=prefetch href="about">About</a></li>
            <li><a rel=prefetch href="commission">Commission</a></li>
            <li><a rel=prefetch href="projects">Projects</a></li>
            <li><a rel=prefetch href="articles">Articles</a></li>
          </ul>
        </div>
      {/if}
    </nav>
    <span>&copy {currentYear}</span>
  </div>
</header>