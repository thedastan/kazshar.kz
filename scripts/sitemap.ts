import type { NextApiRequest, NextApiResponse } from "next";
import { SitemapStream, streamToPromise } from "sitemap";
import { Readable } from "stream";

export default async (req: NextApiRequest, res: NextApiResponse) => {
	const links = [
		{ url: "/", changefreq: "daily", priority: 1.0 },
		{ url: "/[id]", changefreq: "daily", priority: 0.8 },
		{ url: "/about-company", changefreq: "weekly", priority: 0.7 },
		{ url: "/catalog", changefreq: "daily", priority: 0.8 },
		{ url: "/table", changefreq: "daily", priority: 0.8 },
		{ url: "/table/[id]", changefreq: "daily", priority: 0.9 },

	 
	];

	const stream = new SitemapStream({ hostname: "https://metallomir.kg/" });
	res.writeHead(200, { "Content-Type": "application/xml" });

	streamToPromise(Readable.from(links).pipe(stream)).then((data) =>
		res.end(data.toString())
	);
};
