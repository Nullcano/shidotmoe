const posts = [
  //articles
  {
		title: 'Site Overhaul',
    slug: 'site-overhaul',
    category: 'Article',
    isFeatured: true,
    image: 'https://w.wallhaven.cc/full/9m/wallhaven-9mxz8k.jpg',
		html: `
			<p>I have built a new version of my site and added more projects.</p>
		`
  }, 
  // projects
  {
		title: 'Caitieeee',
    slug: 'caitieeee',
    category: 'Project',
    isFeatured: true,
    image: 'https://w.wallhaven.cc/full/9m/wallhaven-9mxz8k.jpg',
		html: `
			<p>Caitieeee's stuff.</p>
		`
	}, {
		title: 'ClassicHanky',
    slug: 'classichanky',
    category: 'Project',
    isFeatured: false,
    image: 'https://w.wallhaven.cc/full/9m/wallhaven-9mxz8k.jpg',
		html: `
			<p>ClassicHanky's stuff.</p>
		`
	}, {
		title: 'Coding Garden',
    slug: 'coding-garden',
    category: 'Project',
    isFeatured: true,
    image: 'https://w.wallhaven.cc/full/9m/wallhaven-9mxz8k.jpg',
		html: `
			<p>Coding Garden's stuff.</p>
		`
	}, {
		title: 'Cycrum',
    slug: 'cycrum',
    category: 'Project',
    isFeatured: false,
    image: 'https://w.wallhaven.cc/full/9m/wallhaven-9mxz8k.jpg',
		html: `
			<p>Cycrum's stuff.</p>
		`
	}, {
		title: 'DeathMaster001',
    slug: 'deathmaster001',
    category: 'Project',
    isFeatured: false,
    image: 'https://w.wallhaven.cc/full/9m/wallhaven-9mxz8k.jpg',
		html: `
			<p>DeathMaster001's stuff.</p>
		`
	}, {
		title: 'Gunblade2337',
    slug: 'gunblade2337',
    category: 'Project',
    isFeatured: true,
    image: 'https://w.wallhaven.cc/full/9m/wallhaven-9mxz8k.jpg',
		html: `
			<p>Gunblade2337's stuff.</p>
		`
	}, {
		title: 'HotTakesBySoph',
    slug: 'hottakesbysoph',
    category: 'Project',
    isFeatured: false,
    image: 'https://w.wallhaven.cc/full/9m/wallhaven-9mxz8k.jpg',
		html: `
			<p>HotTakesBySoph's stuff.</p>
		`
	}, {
		title: 'lolgreentea',
    slug: 'lolgreentea',
    category: 'Project',
    isFeatured: false,
    image: 'https://w.wallhaven.cc/full/9m/wallhaven-9mxz8k.jpg',
		html: `
			<p>lolgreentea's stuff.</p>
		`
	}, {
		title: 'MurdocTurner',
    slug: 'murdocturner',
    category: 'Project',
    isFeatured: false,
    image: 'https://w.wallhaven.cc/full/9m/wallhaven-9mxz8k.jpg',
		html: `
			<p>MurdocTurner's stuff.</p>
		`
	}, {
		title: 'TechandGames',
    slug: 'TechandGames',
    category: 'Project',
    isFeatured: false,
    image: 'https://w.wallhaven.cc/full/9m/wallhaven-9mxz8k.jpg',
		html: `
			<p>TechandGames's stuff.</p>
		`
	}, {
		title: 'thegamingpoet95',
    slug: 'thegamingpoet95',
    category: 'Project',
    isFeatured: false,
    image: 'https://w.wallhaven.cc/full/9m/wallhaven-9mxz8k.jpg',
		html: `
			<p>thegamingpoet95's stuff.</p>
		`
	}, {
		title: 'sentinel_infinitus',
    slug: 'sentinel-infinitus',
    category: 'Project',
    isFeatured: false,
    image: 'https://w.wallhaven.cc/full/9m/wallhaven-9mxz8k.jpg',
		html: `
			<p>sentinel_infinitus' stuff.</p>
		`
	}, {
		title: 'ShiDotMoe',
    slug: 'shidotmoe',
    category: 'Project',
    isFeatured: true,
    image: 'https://w.wallhaven.cc/full/9m/wallhaven-9mxz8k.jpg',
		html: `
			<p>ShiDotMoe's stuff.</p>
		`
	}, {
		title: 'VampyMaria',
    slug: 'vampymaria',
    category: 'Project',
    isFeatured: false,
    image: 'https://w.wallhaven.cc/full/9m/wallhaven-9mxz8k.jpg',
		html: `
			<p>VampyMaria's stuff.</p>
		`
	}, {
		title: 'WilkySan',
    slug: 'wilkysan',
    category: 'Project',
    isFeatured: false,
    image: 'https://w.wallhaven.cc/full/9m/wallhaven-9mxz8k.jpg',
		html: `
			<p>WilkySan's stuff.</p>
		`
	}, {
		title: 'xVylentine',
    slug: 'xvylentine',
    category: 'Project',
    isFeatured: true,
    image: 'https://w.wallhaven.cc/full/9m/wallhaven-9mxz8k.jpg',
		html: `
			<p>xVylentine's stuff.</p>
		`
	}
];

posts.forEach(post => {
	post.html = post.html.replace(/^\t{3}/gm, '');
});

export default posts;
