namespace CARDS {
	type GetCardsRes = [
		{
			id: number;
			title: string;
			description: string;
			image: string;
			data_create: string;
		}
	]
  type GetCardsReq = void;

  type GetToolsRes = [
		{
			id: number;
			tools_image: string;
		}
	]
  type GetToolsReq = void;

  type GetGalleryRes = [
		{
			id: number;
			gallery_image: string;
		}
	]
  type GetGalleryReq = void;
}