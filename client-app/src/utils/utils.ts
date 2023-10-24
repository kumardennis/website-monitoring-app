import { GetWebsitesResponseModel } from "models/ServiceModels";
import toast from "react-hot-toast";
import { WebsiteService } from "services/websiteService";

export const checkIfAtleastHttp = (query: string): boolean => {
  const pattern = /^(http|https)/i;

  const text = query;

  return pattern.test(text);
};

export const addWebsite = async (query: string) => {
  const { data, error } = await WebsiteService.addWebsite({
    url: query,
  });

  if (error) {
    toast.error(
      `Oops, something happened: ${error}, maybe domain does not exists`
    );
    return;
  }

  toast.success("added!");
};

export const deleteWebsite = async (url: string) => {
  const { data, error } = await WebsiteService.removeWebsite({
    url,
  });

  if (error) {
    toast.error(`Oops, something happened: ${error}`);
    return;
  }

  toast.success("Deleted!");
};

export const fetchWebsites = async (): Promise<GetWebsitesResponseModel> => {
  const response = await WebsiteService.getAllWebsiteStatuses();

  return response;
};
