import type { NextApiRequest, NextApiResponse } from "next";
import { SitemapStream, streamToPromise } from "sitemap";
import { Readable } from "stream";

export default async (req: NextApiRequest, res: NextApiResponse) => {
	const links = [
		{ url: "/", changefreq: "daily", priority: 1.0 },
		{ url: "/#about", changefreq: "daily", priority: 0.8 },
		{ url: "/forclient", changefreq: "monthly", priority: 0.6 },
		{ url: "/news", changefreq: "daily", priority: 0.8 },
		{ url: "/contact", changefreq: "daily", priority: 0.8 },
		{ url: "/certificate", changefreq: "daily", priority: 0.8 },
		{ url: "/gallery", changefreq: "daily", priority: 0.8 },
		{ url: "/kovanye-meleyshie-shary", changefreq: "daily", priority: 0.9 },
		{ url: "/litye-meleyshie-shary", changefreq: "daily", priority: 0.8 },
		{ url: "/katanye-meleyshie-shary", changefreq: "daily", priority: 0.8 },


	];

	const stream = new SitemapStream({ hostname: "https://kashar.kz/" });
	res.writeHead(200, { "Content-Type": "application/xml" });

	streamToPromise(Readable.from(links).pipe(stream)).then((data) =>
		res.end(data.toString())
	);
};
