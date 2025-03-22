import CreateComponent from "@/components/create/CreateComponent";
import { Metadata } from "next";
 


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

const CreatePage = () => {
	return (
		<div>
			<CreateComponent />
		</div>
	);
};

export default CreatePage;
