import type { NextApiRequest, NextApiResponse } from "next";
import { SitemapStream, streamToPromise } from "sitemap";
import { Readable } from "stream";

export default async (req: NextApiRequest, res: NextApiResponse) => {
	const links = [
		{ url: "/", changefreq: "daily", priority: 1.0 },
		{ url: "/about", changefreq: "daily", priority: 0.8 },
		{ url: "/products", changefreq: "monthly", priority: 0.6 },
		{ url: "/forged", changefreq: "daily", priority: 0.8 },
		{ url: "/cast", changefreq: "daily", priority: 0.8 },
		{ url: "/rolled", changefreq: "daily", priority: 0.8 },
		{ url: "/create", changefreq: "daily", priority: 0.8 },
		{ url: "/news", changefreq: "daily", priority: 0.9 },
		{ url: "/contact", changefreq: "daily", priority: 0.8 },

	];

	const stream = new SitemapStream({ hostname: "https://kashar.kz/" });
	res.writeHead(200, { "Content-Type": "application/xml" });

	streamToPromise(Readable.from(links).pipe(stream)).then((data) =>
		res.end(data.toString())
	);
};
