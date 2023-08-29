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
        query: '',
    };

    handleQuery = ({ currentTarget: { value } }) => {
        this.setState({ query: value.toLowerCase() });
    };

    handleSubmit = e => {
        const query = this.state.query.trim();
        e.preventDefault();

        if (query.trim() === '') {
            alert('Please, enter search word.');
            return;
        }

        this.props.onSubmit(query);
        this.setState({ query: '' });
    };

    render() {
        const { query } = this.state;
        return (
            <SearchHeader>
                <SearchForm onSubmit={this.handleSubmit}>
                    <SearchInput
                        type="text"
                        autocomplete="off"
                        autofocus
                        placeholder="Search images and photos"
                        name="query"
                        value={query}
                        onChange={this.handleQuery}
                    />
                    
                    <SearchButton type="submit">
                        <SearchLabel>Search</SearchLabel>
                    </SearchButton>
                </SearchForm>
            </SearchHeader>
        )
    }
}

Searchbar.propTypes = {
    onSubmit: PropTypes.func.isRequired,
};
