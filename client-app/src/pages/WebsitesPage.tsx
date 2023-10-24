import { AddWebsite } from "components/AddWebsite"
import { Websites } from "components/Websites"

export const WebsitePage = () => {

    return (
        <div>
            <div>
                <AddWebsite />
            </div>
            <div>
                <Websites />
            </div>
        </div>
    )
}