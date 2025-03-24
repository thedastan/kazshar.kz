import CreateComponent from "@/components/create/CreateComponent";
import { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Производство металлоизделий высокого качества | High-Quality Metal Products Manufacturing | Жоғары сапалы металл бұйымдарын өндіру",
  description:
    "Процесс ориентирован на эффективность и высокое качество, что позволяет нам удовлетворять требования самых требовательных клиентов. | The process is focused on efficiency and high quality, allowing us to meet the demands of even the most demanding clients. | Процесс тиімділік пен жоғары сапаға бағытталған, бұл бізге ең талапшыл клиенттердің сұранысын қанағаттандыруға мүмкіндік береді. ",
  robots: "index, follow",
  authors: [{ name: "" }],
  openGraph: {
    title:
      "Производство металлоизделий высокого качества | High-Quality Metal Products Manufacturing | Жоғары сапалы металл бұйымдарын өндіру",
    description:
      "Процесс ориентирован на эффективность и высокое качество, что позволяет нам удовлетворять требования самых требовательных клиентов. | The process is focused on efficiency and high quality, allowing us to meet the demands of even the most demanding clients. | Процесс тиімділік пен жоғары сапаға бағытталған, бұл бізге ең талапшыл клиенттердің сұранысын қанағаттандыруға мүмкіндік береді. ",

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
