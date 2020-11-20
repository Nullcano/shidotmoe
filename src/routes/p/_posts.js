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
    avatar: 'https://static-cdn.jtvnw.net/jtv_user_pictures/ae94a6c7-2ddf-40d8-a2ef-1996b2975f91-profile_image-300x300.png',
    banner: 'https://static-cdn.jtvnw.net/jtv_user_pictures/e3b61848-08dc-428c-a764-31a059aa1c46-profile_banner-480.jpeg',
    items: [
      'https://static-cdn.jtvnw.net/emoticons/v1/304493618/3.0',
      'https://static-cdn.jtvnw.net/emoticons/v1/304525425/3.0',
      'https://static-cdn.jtvnw.net/emoticons/v1/304505394/3.0',
      'https://static-cdn.jtvnw.net/emoticons/v1/304521062/3.0',
      'https://static-cdn.jtvnw.net/emoticons/v1/304505382/3.0'
    ],
		html: `
			<p>Caitieeee's stuff will be published soon.</p>
		`
	}, {
		title: 'ClassicHanky',
    slug: 'classichanky',
    category: 'Project',
    isFeatured: false,
    avatar: 'https://static-cdn.jtvnw.net/jtv_user_pictures/ae94a6c7-2ddf-40d8-a2ef-1996b2975f91-profile_image-300x300.png',
    banner: 'https://static-cdn.jtvnw.net/jtv_user_pictures/e3b61848-08dc-428c-a764-31a059aa1c46-profile_banner-480.jpeg',
    items: [
      'https://static-cdn.jtvnw.net/emoticons/v1/304493618/3.0',
      'https://static-cdn.jtvnw.net/emoticons/v1/304525425/3.0',
      'https://static-cdn.jtvnw.net/emoticons/v1/304505394/3.0',
      'https://static-cdn.jtvnw.net/emoticons/v1/304521062/3.0',
      'https://static-cdn.jtvnw.net/emoticons/v1/304505382/3.0'
    ],
    html: `
			<p>ClassicHanky's stuff will be published soon.</p>
		`
	}, {
		title: 'Coding Garden',
    slug: 'codinggarden',
    category: 'Project',
    isFeatured: true,
    avatar: 'https://static-cdn.jtvnw.net/jtv_user_pictures/611cac54-34e0-4c2a-851b-66e5ea2b3f81-profile_image-300x300.png',
    banner: 'https://static-cdn.jtvnw.net/jtv_user_pictures/64f7be39-e522-4911-b36c-3d4ef92328de-profile_banner-480.png',
    items: [
      'https://static-cdn.jtvnw.net/emoticons/v1/303121909/3.0',
      'https://cdn.betterttv.net/emote/5f43ef284510395d822c5636/3x',
      './more.png'
    ],
		html: `
      <p>Coding Garden (CJ) is a coding content creator on YouTube and recently a Twitch partner.</p>
      <p>He requested a big order with a 1920x1080 resolution pixel art animation with the lofi vibe. Check it out below!</p>
      <iframe style="margin: 2rem" width="560" height="315" src="https://www.youtube.com/embed/v6KW35eI9S4" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      <p>Initially CJ wanted it as a Twitch intro/outro but he also picked apart the assets from this animation and made his own overlay with it.</p>
      <p>I have also created a couple emotes for him.</p>
		`
	}, {
		title: 'Cycrum',
    slug: 'cycrum',
    category: 'Project',
    isFeatured: false,
    avatar: 'https://static-cdn.jtvnw.net/jtv_user_pictures/ae94a6c7-2ddf-40d8-a2ef-1996b2975f91-profile_image-300x300.png',
    banner: 'https://static-cdn.jtvnw.net/jtv_user_pictures/e3b61848-08dc-428c-a764-31a059aa1c46-profile_banner-480.jpeg',
    items: [
      'https://static-cdn.jtvnw.net/emoticons/v1/304493618/3.0',
      'https://static-cdn.jtvnw.net/emoticons/v1/304525425/3.0',
      'https://static-cdn.jtvnw.net/emoticons/v1/304505394/3.0',
      'https://static-cdn.jtvnw.net/emoticons/v1/304521062/3.0',
      'https://static-cdn.jtvnw.net/emoticons/v1/304505382/3.0'
    ],
		html: `
			<p>Cycrum's stuff will be published soon.</p>
		`
	}, {
		title: 'DeathMaster001',
    slug: 'deathmaster001',
    category: 'Project',
    isFeatured: false,
    avatar: 'https://static-cdn.jtvnw.net/jtv_user_pictures/ae94a6c7-2ddf-40d8-a2ef-1996b2975f91-profile_image-300x300.png',
    banner: 'https://static-cdn.jtvnw.net/jtv_user_pictures/e3b61848-08dc-428c-a764-31a059aa1c46-profile_banner-480.jpeg',
    items: [
      'https://static-cdn.jtvnw.net/emoticons/v1/304493618/3.0',
      'https://static-cdn.jtvnw.net/emoticons/v1/304525425/3.0',
      'https://static-cdn.jtvnw.net/emoticons/v1/304505394/3.0',
      'https://static-cdn.jtvnw.net/emoticons/v1/304521062/3.0',
      'https://static-cdn.jtvnw.net/emoticons/v1/304505382/3.0'
    ],
		html: `
			<p>DeathMaster001's stuff will be published soon.</p>
		`
	}, {
		title: 'Gunblade2337',
    slug: 'gunblade2337',
    category: 'Project',
    isFeatured: true,
    avatar: 'https://static-cdn.jtvnw.net/jtv_user_pictures/08dcd8d2-8078-4754-a8ed-59fe6723aaff-profile_image-300x300.png',
    banner: 'https://static-cdn.jtvnw.net/jtv_user_pictures/6c13c441-3738-4002-8bc0-0baf5cd1b0ac-profile_banner-480.png',
    items: [
      'https://static-cdn.jtvnw.net/emoticons/v2/emotesv2_96e9f8739f2348d09fc5854539c4401b/default/light/3.0',
      'https://static-cdn.jtvnw.net/emoticons/v2/emotesv2_f6879191852e416babccd8e2b15fbe58/default/light/3.0',
      'https://cdn.discordapp.com/emojis/774123567621210132.png?v=1'
    ],
		html: `
			<p>Gunblade2337's stuff will be published soon.</p>
		`
	}, {
		title: 'HotTakesBySoph',
    slug: 'hottakesbysoph',
    category: 'Project',
    isFeatured: false,
    avatar: 'https://static-cdn.jtvnw.net/jtv_user_pictures/ae94a6c7-2ddf-40d8-a2ef-1996b2975f91-profile_image-300x300.png',
    banner: 'https://static-cdn.jtvnw.net/jtv_user_pictures/e3b61848-08dc-428c-a764-31a059aa1c46-profile_banner-480.jpeg',
    items: [
      'https://static-cdn.jtvnw.net/emoticons/v1/304493618/3.0',
      'https://static-cdn.jtvnw.net/emoticons/v1/304525425/3.0',
      'https://static-cdn.jtvnw.net/emoticons/v1/304505394/3.0',
      'https://static-cdn.jtvnw.net/emoticons/v1/304521062/3.0',
      'https://static-cdn.jtvnw.net/emoticons/v1/304505382/3.0'
    ],
		html: `
			<p>HotTakesBySoph's stuff will be published soon.</p>
		`
	}, {
		title: 'lolgreentea',
    slug: 'lolgreentea',
    category: 'Project',
    isFeatured: false,
    avatar: 'https://static-cdn.jtvnw.net/jtv_user_pictures/ae94a6c7-2ddf-40d8-a2ef-1996b2975f91-profile_image-300x300.png',
    banner: 'https://static-cdn.jtvnw.net/jtv_user_pictures/e3b61848-08dc-428c-a764-31a059aa1c46-profile_banner-480.jpeg',
    items: [
      'https://static-cdn.jtvnw.net/emoticons/v1/304493618/3.0',
      'https://static-cdn.jtvnw.net/emoticons/v1/304525425/3.0',
      'https://static-cdn.jtvnw.net/emoticons/v1/304505394/3.0',
      'https://static-cdn.jtvnw.net/emoticons/v1/304521062/3.0',
      'https://static-cdn.jtvnw.net/emoticons/v1/304505382/3.0'
    ],
		html: `
			<p>lolgreentea's stuff will be published soon.</p>
		`
	}, {
		title: 'MurdocTurner',
    slug: 'murdocturner',
    category: 'Project',
    isFeatured: false,
    avatar: 'https://static-cdn.jtvnw.net/jtv_user_pictures/ae94a6c7-2ddf-40d8-a2ef-1996b2975f91-profile_image-300x300.png',
    banner: 'https://static-cdn.jtvnw.net/jtv_user_pictures/e3b61848-08dc-428c-a764-31a059aa1c46-profile_banner-480.jpeg',
    items: [
      'https://static-cdn.jtvnw.net/emoticons/v1/304493618/3.0',
      'https://static-cdn.jtvnw.net/emoticons/v1/304525425/3.0',
      'https://static-cdn.jtvnw.net/emoticons/v1/304505394/3.0',
      'https://static-cdn.jtvnw.net/emoticons/v1/304521062/3.0',
      'https://static-cdn.jtvnw.net/emoticons/v1/304505382/3.0'
    ],
		html: `
			<p>MurdocTurner's stuff will be published soon.</p>
		`
	}, {
		title: 'TechandGames',
    slug: 'TechandGames',
    category: 'Project',
    isFeatured: false,
    avatar: 'https://static-cdn.jtvnw.net/jtv_user_pictures/ae94a6c7-2ddf-40d8-a2ef-1996b2975f91-profile_image-300x300.png',
    banner: 'https://static-cdn.jtvnw.net/jtv_user_pictures/e3b61848-08dc-428c-a764-31a059aa1c46-profile_banner-480.jpeg',
    items: [
      'https://static-cdn.jtvnw.net/emoticons/v1/304493618/3.0',
      'https://static-cdn.jtvnw.net/emoticons/v1/304525425/3.0',
      'https://static-cdn.jtvnw.net/emoticons/v1/304505394/3.0',
      'https://static-cdn.jtvnw.net/emoticons/v1/304521062/3.0',
      'https://static-cdn.jtvnw.net/emoticons/v1/304505382/3.0'
    ],
		html: `
			<p>TechandGames's stuff will be published soon.</p>
		`
	}, {
		title: 'thegamingpoet95',
    slug: 'thegamingpoet95',
    category: 'Project',
    isFeatured: false,
    avatar: 'https://static-cdn.jtvnw.net/jtv_user_pictures/ae94a6c7-2ddf-40d8-a2ef-1996b2975f91-profile_image-300x300.png',
    banner: 'https://static-cdn.jtvnw.net/jtv_user_pictures/e3b61848-08dc-428c-a764-31a059aa1c46-profile_banner-480.jpeg',
    items: [
      'https://static-cdn.jtvnw.net/emoticons/v1/304493618/3.0',
      'https://static-cdn.jtvnw.net/emoticons/v1/304525425/3.0',
      'https://static-cdn.jtvnw.net/emoticons/v1/304505394/3.0',
      'https://static-cdn.jtvnw.net/emoticons/v1/304521062/3.0',
      'https://static-cdn.jtvnw.net/emoticons/v1/304505382/3.0'
    ],
		html: `
			<p>thegamingpoet95's stuff will be published soon.</p>
		`
	}, {
		title: 'sentinel_infinitus',
    slug: 'sentinel-infinitus',
    category: 'Project',
    isFeatured: false,
    avatar: 'https://static-cdn.jtvnw.net/jtv_user_pictures/ae94a6c7-2ddf-40d8-a2ef-1996b2975f91-profile_image-300x300.png',
    banner: 'https://static-cdn.jtvnw.net/jtv_user_pictures/e3b61848-08dc-428c-a764-31a059aa1c46-profile_banner-480.jpeg',
    items: [
      'https://static-cdn.jtvnw.net/emoticons/v1/304493618/3.0',
      'https://static-cdn.jtvnw.net/emoticons/v1/304525425/3.0',
      'https://static-cdn.jtvnw.net/emoticons/v1/304505394/3.0',
      'https://static-cdn.jtvnw.net/emoticons/v1/304521062/3.0',
      'https://static-cdn.jtvnw.net/emoticons/v1/304505382/3.0'
    ],
		html: `
			<p>sentinel_infinitus' stuff will be published soon.</p>
		`
	}, {
		title: 'ShiDotMoe',
    slug: 'shidotmoe',
    category: 'Project',
    isFeatured: true,
    avatar: 'https://static-cdn.jtvnw.net/jtv_user_pictures/624b80b6-4ebb-4899-b3eb-faa7c114e078-profile_image-300x300.png',
    banner: 'https://static-cdn.jtvnw.net/jtv_user_pictures/dd218249-afae-4553-bc48-48b44ae82e3d-profile_banner-480.png',
    items: [
      'https://static-cdn.jtvnw.net/emoticons/v2/304382003/default/light/3.0',
      'https://static-cdn.jtvnw.net/emoticons/v2/304389826/default/light/3.0',
      'https://static-cdn.jtvnw.net/emoticons/v2/304393586/default/light/3.0',
      'https://static-cdn.jtvnw.net/emoticons/v2/304393757/default/light/3.0',
      'https://static-cdn.jtvnw.net/emoticons/v2/304394947/default/light/3.0'
    ],
		html: `
			<p>ShiDotMoe's stuff will be published soon.</p>
		`
	}, {
		title: 'VampyMaria',
    slug: 'vampymaria',
    category: 'Project',
    isFeatured: false,
    avatar: 'https://static-cdn.jtvnw.net/jtv_user_pictures/ae94a6c7-2ddf-40d8-a2ef-1996b2975f91-profile_image-300x300.png',
    banner: 'https://static-cdn.jtvnw.net/jtv_user_pictures/e3b61848-08dc-428c-a764-31a059aa1c46-profile_banner-480.jpeg',
    items: [
      'https://static-cdn.jtvnw.net/emoticons/v1/304493618/3.0',
      'https://static-cdn.jtvnw.net/emoticons/v1/304525425/3.0',
      'https://static-cdn.jtvnw.net/emoticons/v1/304505394/3.0',
      'https://static-cdn.jtvnw.net/emoticons/v1/304521062/3.0',
      'https://static-cdn.jtvnw.net/emoticons/v1/304505382/3.0'
    ],
		html: `
			<p>VampyMaria's stuff will be published soon.</p>
		`
	}, {
		title: 'WilkySan',
    slug: 'wilkysan',
    category: 'Project',
    isFeatured: false,
    avatar: 'https://static-cdn.jtvnw.net/jtv_user_pictures/ae94a6c7-2ddf-40d8-a2ef-1996b2975f91-profile_image-300x300.png',
    banner: 'https://static-cdn.jtvnw.net/jtv_user_pictures/e3b61848-08dc-428c-a764-31a059aa1c46-profile_banner-480.jpeg',
    items: [
      'https://static-cdn.jtvnw.net/emoticons/v1/304493618/3.0',
      'https://static-cdn.jtvnw.net/emoticons/v1/304525425/3.0',
      'https://static-cdn.jtvnw.net/emoticons/v1/304505394/3.0',
      'https://static-cdn.jtvnw.net/emoticons/v1/304521062/3.0',
      'https://static-cdn.jtvnw.net/emoticons/v1/304505382/3.0'
    ],
		html: `
			<p>WilkySan's stuff will be published soon.</p>
		`
	}, {
		title: 'xVylentine',
    slug: 'xvylentine',
    category: 'Project',
    isFeatured: true,
    avatar: 'https://static-cdn.jtvnw.net/jtv_user_pictures/8e4ecba6-6090-4cb0-8f89-467d561b11c7-profile_image-300x300.png',
    banner: 'https://static-cdn.jtvnw.net/jtv_user_pictures/1806b664-0f8e-4d25-98e2-20e32e802b60-profile_banner-480.png',
    items: [
      './more.png'
    ],
		html: `
			<p>xVylentine's stuff will be published soon.</p>
		`
	}
];

posts.forEach(post => {
	post.html = post.html.replace(/^\t{3}/gm, '');
});

export default posts;
