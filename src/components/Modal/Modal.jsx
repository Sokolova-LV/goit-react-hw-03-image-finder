import { Component } from "react"; 
import { Overlay, ModalContent } from "./Modal.styled";


export class Modal extends Component {
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
};