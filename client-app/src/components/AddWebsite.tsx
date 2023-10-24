import { faCirclePlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useQueryClient } from "@tanstack/react-query";
import { KeyboardEvent, useRef } from "react";
import toast from "react-hot-toast";
import { addWebsite, checkIfAtleastHttp } from "utils/utils";

export const AddWebsite = () => {
  /* TODO: add isLoading state */

  const queryClient = useQueryClient();

  const inputRef = useRef<HTMLInputElement>(null);

  const handleAddWebsite = async () => {
    const query = inputRef.current?.value;

    if (!query) return;

    if (!checkIfAtleastHttp(query)) {
      toast.error("Not valid website");
      return;
    }

    await addWebsite(query);

    queryClient.invalidateQueries({ queryKey: ["websites"] });

    inputRef.current.value = "";
  };

  const ifEnterThenSubmitForm = async (
    event: KeyboardEvent<HTMLInputElement>
  ) => {
    if (event.key === "Enter") await handleAddWebsite();
  };

  return (
    <div className="flex flex-row justify-center items-center">
      <input
        onKeyDown={ifEnterThenSubmitForm}
        ref={inputRef}
        aria-label="input-add-website"
        className="rounded border px-4 py-2 bg-white"
        placeholder="Enter website to add..."
      />
      <button aria-label="button-add-website" onClick={handleAddWebsite}>
        <FontAwesomeIcon
          className={`ms-3 ${"color-success cursor-pointer"}`}
          size="xl"
          icon={faCirclePlus}
        />
      </button>
    </div>
  );
};
