<script>
	import Header from '../components/Header.svelte';
  import Nav from '../components/Nav.svelte';
  import Footer from '../components/Footer.svelte';
	export let segment;
</script>

<style>
	main {
    min-height: 100vh;
    display: flex;
    flex-direction: row;
    overflow: visible;
  }
  section {
    width: 100%;
    display: flex;
    flex-direction: column;
  }
</style>

<main>
  <Header/>
  <section>
    <Nav {segment}/>
    <slot></slot>
    <Footer/>
  </section>
</main>

