import { GalleryImage, GalleryItem } from "./ImageGalleryItem.styled";
import { Component } from "react"; 
import { Modal } from "components/Modal/Modal";

export class ImageGalleryItem extends Component {
    state = {
        isModalOpen: false,
    };

    toggleModal = () => {
        this.setState(({ isModalOpen }) => ({ isModalOpen: !isModalOpen }));
    };

    render() {
        const {
            galleryItem: { webformatURL, largeImageURL, alt },
        } = this.props;

        return (
            <>
                <GalleryItem onClick={this.toggleModal}>
                    <GalleryImage src={webformatURL} alt={alt} />
                </GalleryItem>
                {
                this.state.isModalOpen && (
                    <Modal
                        largeImageURL={largeImageURL}
                        alt={alt}
                        onCloseModal={this.toggleModal}
                    />
                )}
            </>
        );
    }
};
