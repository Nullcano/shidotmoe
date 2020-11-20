import posts from './_posts.js';

const contents = JSON.stringify(posts.map(post => {
	return {
		title: post.title,
    slug: post.slug,
    category: post.category,
    isFeatured: post.isFeatured,
    avatar: post.avatar,
    banner: post.banner,
    items: post.items
	};
}));

export function get(req, res) {
	res.writeHead(200, {
		'Content-Type': 'application/json'
	});

	res.end(contents);
}