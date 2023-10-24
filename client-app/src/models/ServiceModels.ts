import { ErrorModel } from "./ErrorModel";
import { StatusModel } from "./StatusModels";

export interface GetWebsitesResponseModel extends ErrorModel {
  data: {
    [url: string]: StatusModel;
  } | null;
}

export interface PostWebsiteRequestModel {
  url: string;
}

export interface PostWebsiteResponseModel extends ErrorModel {
  data: {
    url: string;
    status: StatusModel;
  } | null;
}

export interface DeleteWebsiteRequestModel {
  url: string;
}

export interface DeleteWebsiteResponseModel extends ErrorModel {
  data: {
    url: string;
    message: StatusModel;
  } | null;
}
