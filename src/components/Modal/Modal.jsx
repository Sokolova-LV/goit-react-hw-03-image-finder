import { Component } from "react"; 
import PropTypes from 'prop-types';
import { Overlay, ModalContent } from "./Modal.styled";

export class Modal extends Component {
    componentDidMount() {
        window.addEventListener('keydown', this.handleKeydown);
        document.body.style.overflow = 'hidden';
    }

    componentWillUnmount() {
        window.removeEventListener('keydown', this.handleKeydown);
        document.body.style.overflow = 'visible';
    }

    handleKeydown = e => {
        if (e.code === 'Escape') {
            this.props.onClose();
        }
    };

    handleBackdropClick = e => {
        if (e.currentTarget === e.target) {
            this.props.onClose();
        }
    };

    render() {
        const { largeImageURL, tags } = this.props;

        return (
            <Overlay onClick={this.handleBackdropClick}>
                <ModalContent>
                    <img src={largeImageURL} alt={tags} />
                </ModalContent>
            </Overlay>
        );
    }
}

Modal.propTypes = {
    largeImageURL: PropTypes.string.isRequired,
    tags: PropTypes.string.isRequired,
    onClose: PropTypes.func.isRequired,
};

/*export class Modal extends Component {
    componentDidMount() {
        window.addEventListener('keydown', this.keydownClick);
    }

    componentWillUnmount() {
        window.removeEventListener('keydown', this.keydownClick);
    }

    keydownClick = e => {
        if (e.code === 'Escape') {
            this.props.onCloseModal();
        }
    };

    backdropClick = ({ target, currentTarget }) => {
        if (currentTarget === target) {
            this.props.onCloseModal();
        }
    };

    render() {
        const { largeImageURL, alt } = this.props;
        
        return (
        <Overlay onClick={this.backdropClick}>
            <ModalContent>
                <img src={largeImageURL} alt={alt} />
            </ModalContent>
        </Overlay>
        );
    }
};*/