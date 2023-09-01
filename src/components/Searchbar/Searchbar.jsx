import { Component } from 'react';
import PropTypes from 'prop-types';
import {
    SearchHeader,
    SearchForm,
    SearchButton,
    SearchLabel,
    SearchInput,
} from './Searchbar.styled';

export default class Searchbar extends Component {
    state = {
        searchName: '',
        inputValue: '',
    };

    handleChange = e => {
        this.setState({ inputValue: e.target.value });
    };

    handleSubmit = e => {
        e.preventDefault();
        const searchQuery = e.target.elements.searchName.value.trim();
        this.props.onSubmit(searchQuery);
        e.target.reset();
    };

    render() {
        return (
            <SearchHeader>
                <SearchForm onSubmit={this.handleSubmit}>
                    <SearchInput
                        type="text"
                        autocomplete="off"
                        autoFocus
                        placeholder="Search images and photos"
                        name="searchName"
                        value={this.state.inputValue}
                        onChange={this.handleChange}
                    />
                    
                    <SearchButton>
                        <SearchLabel>Search</SearchLabel>
                    </SearchButton>
                </SearchForm>
            </SearchHeader>
        );
    }
}

Searchbar.propTypes = {
    onSubmit: PropTypes.func.isRequired,
};
