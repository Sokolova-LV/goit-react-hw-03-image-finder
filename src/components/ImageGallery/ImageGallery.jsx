import { Gallery } from "./ImageGallery.styled";
import { GalleryItem } from "components/ImageGalleryItem/ImageGalleryItem";


export const ImageGallery = ({ galleryItems }) => {
    return (
        <Gallery>
            {galleryItems.map(galleryItem => {
                return (
                    <GalleryItem key={galleryItem.id} galleryItem={galleryItem} />
                );
            })}
        </Gallery>
    );
};
