import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { GalleryImage, GalleryItem } from "./ImageGalleryItem.styled";
import { Modal } from "components/Modal/Modal";

export class ImageGalleryItem extends Component {
    state = {
        showModal: false,
    };

    toggleModal = () => {
        this.setState(({ showModal }) => ({
            showModal: !showModal,
        }));
    };

    render() {
        const { showModal } = this.state;
        const { image } = this.props;

        return (
            <>
                <GalleryItem>
                    <GalleryImage
                        src={image.webformatURL}
                        alt={image.tags}
                        onClick={this.toggleModal}
                    />
                    {showModal && (
                        <Modal
                            largeImageURL={image.largeImageURL}
                            tags={image.tags}
                            onClose={this.toggleModal}
                        />
                    )}
                </GalleryItem>
            </>
        );
    }
}

ImageGalleryItem.propTypes = {
    image: PropTypes.shape({
        webformatURL: PropTypes.string.isRequired,
        tags: PropTypes.string.isRequired,
        largeImageURL: PropTypes.string.isRequired,
    }).isRequired,
};

/*export class ImageGalleryItem extends Component {
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
};*/
