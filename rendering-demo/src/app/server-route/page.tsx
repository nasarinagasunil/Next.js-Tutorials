import { serverSideFunction } from "@/utils/server-utils"
import { ImageSlider } from "@/components/imageSlider";
import { clientSideFunction } from "@/utils/client-utils";
export default function ServerRoute() {
    const result = serverSideFunction();
    const clientResult = clientSideFunction()
    return (
        <>
            <h1>Server route {result}</h1>
            <ImageSlider />
            <p>{clientResult}</p>
        </>
    );
}