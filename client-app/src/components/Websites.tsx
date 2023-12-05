import { useQuery, useQueryClient } from "@tanstack/react-query";
import { WebsiteItem } from "./WebsiteItem";
import { deleteWebsite, fetchWebsites } from "utils/utils";
import { TIME_CONST } from "utils/constants";

export const Websites = () => {
  const queryClient = useQueryClient();

  const { data, isLoading } = useQuery({
    queryKey: ["wesbites"],
    queryFn: fetchWebsites,
    refetchInterval: TIME_CONST.MINUTE,
  });

  const handleDeleteWebsite = async (url: string) => {
    await deleteWebsite(url);

    queryClient.invalidateQueries({ queryKey: ["websites"] });
  };

  return isLoading ? (
    <span>Loading...</span>
  ) : (
    <div
      className='flex flex-col items-center mx-auto p-3'
      style={{ minWidth: "600px", maxWidth: "600px" }}
    >
      {data?.data &&
        Object.keys(data.data).map(
          (key) =>
            data.data &&
            data.data[key] && (
              <WebsiteItem
                websiteUrl={key}
                status={data.data[key]}
                onDelete={handleDeleteWebsite}
              />
            )
        )}
    </div>
  );
};
