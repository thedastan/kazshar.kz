import CastComponent from '@/components/cast/CastComponent';
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

const CastPage = () => {
  return (
    <div>
       <CastComponent/>
    </div>
  );
};

export default CastPage;