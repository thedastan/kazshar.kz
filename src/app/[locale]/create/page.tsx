import CreateComponent from "@/components/create/CreateComponent";
import { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Производство Kazshar",
  description:
    "Процесс ориентирован на эффективность и высокое качество, что позволяет нам удовлетворять требования самых требовательных клиентов.",
  robots: "index, follow",
  authors: [{ name: "Производство Kazshar" }],
  openGraph: {
    title:
      "Производство Kazshar",
    description:
      "Процесс ориентирован на эффективность и высокое качество, что позволяет нам удовлетворять требования самых требовательных клиентов.",

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
