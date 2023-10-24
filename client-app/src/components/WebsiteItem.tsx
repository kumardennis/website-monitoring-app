import { faCircle, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { StatusModel } from "models/StatusModels";

type PropTypes = {
  websiteUrl: string;
  status: StatusModel;
  onDelete: (url: string) => Promise<void>;
};

export const WebsiteItem = ({ websiteUrl, status, onDelete }: PropTypes) => {
  /* TODO: add isLoading state */

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "ok":
        return <FontAwesomeIcon icon={faCircle} className="color-success" />;

      case "slow":
        return <FontAwesomeIcon icon={faCircle} className="color-warning" />;

      case "error":
        return <FontAwesomeIcon icon={faCircle} className="color-danger" />;

      default:
        break;
    }
  };

  const deleteWebsite = (websiteUrl: string) => async () => {
    await onDelete(websiteUrl);
  };

  return (
    <div className="flex flex-row items-center my-2 min-w-full">
      <small className="text-right px-2 w-20">{status.toString()}</small>
      <div className="me-3 flex flex-row items-center w-10">
        <span className="mx-3">{getStatusIcon(status.toString())}</span>
      </div>
      <span className="border-2 px-5 py-1 rounded text-lg w-full text-start">
        {websiteUrl}
      </span>
      <span className="ms-5">
        <button data-cy-delete={websiteUrl} onClick={deleteWebsite(websiteUrl)}>
          <FontAwesomeIcon
            icon={faTrash}
            className="color-disabled cursor-pointer"
            role="button"
            data-testid={`${status}-icon`}
          />
        </button>
      </span>
    </div>
  );
};
