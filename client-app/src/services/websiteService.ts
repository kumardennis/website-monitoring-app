import {
  DeleteWebsiteRequestModel,
  DeleteWebsiteResponseModel,
  GetWebsitesResponseModel,
  PostWebsiteRequestModel,
  PostWebsiteResponseModel,
} from "models/ServiceModels";
import { ServiceClient } from "./serviceClient";

export const WebsiteService = {
  getAllWebsiteStatuses: async (): Promise<GetWebsitesResponseModel> => {
    try {
      const response = await ServiceClient.get("v1/monitor/statuses");

      return {
        data: response,
        error: null,
      };
    } catch (err: any) {
      return {
        data: null,
        error: err.toString(),
      };
    }
  },

  addWebsite: async (
    website: PostWebsiteRequestModel
  ): Promise<PostWebsiteResponseModel> => {
    try {
      const response = await ServiceClient.post("v1/monitor/add", website);

      return {
        error: null,
        data: response,
      };
    } catch (err: any) {
      return {
        error: err,
        data: null,
      };
    }
  },

  removeWebsite: async (
    website: DeleteWebsiteRequestModel
  ): Promise<DeleteWebsiteResponseModel> => {
    try {
      const response = await ServiceClient.delete("v1/monitor/remove", website);

      return {
        error: null,
        data: response,
      };
    } catch (err: any) {
      return {
        error: err,
        data: null,
      };
    }
  },
};
