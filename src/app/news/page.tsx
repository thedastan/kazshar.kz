import NewsComponent from '@/components/news/NewsComponent';
import { Metadata } from 'next';
import React from 'react';




export const metadata: Metadata = {
	title: "",
	description: "",
	robots: "index, follow",
	authors: [{ name: "" }],
	openGraph: {
		title: "",
		description: "",

		url: "https://kzmc.kg/media/uploads/images/listovoi_prokat1.jpg",
		type: "website",
	},
};

const NewsPage = () => {
  return (
    <div>
       <NewsComponent/>
    </div>
  );
};

export default NewsPage;