import { serverSideFunction } from "@/utils/server-utils"
import { ImageSlider } from "@/components/imageSlider";

export default function ServerRoute() {
    const result = serverSideFunction();
    return (
        <>
            <h1>Server route {result}</h1>
            <ImageSlider />
        </>
    );
}