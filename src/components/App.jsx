import { Component } from "react";

/*import Api from "utils/Api";*/

import * as API from '../utils/Api';

import Searchbar from "./Searchbar/Searchbar";
import { ImageGallery } from "./ImageGallery/ImageGallery";
import { Button } from "./Button/Button";
import { Loader } from "./Loader/Loader";

import { AppContent } from "./App.styled";

export class App extends Component {
  state = {
    searchName: '',
    images: [],
    currentPage: 1,
    error: null,
    isLoading: false,
    totalPages: 0,
  };

  componentDidUpdate(_, prevState) {
    if (
      prevState.searchName !== this.state.searchName ||
      prevState.currentPage !== this.state.currentPage
    ) {
      this.addImages();
    }
  }

  loadMore = () => {
    this.setState(prevState => ({
      currentPage: prevState.currentPage + 1,
    }));
  };

  handleSubmit = query => {
    this.setState({
      searchName: query,
      images: [],
      currentPage: 1,
    });
  };

  addImages = async () => {
    const { searchName, currentPage } = this.state;
    try {
      this.setState({ isLoading: true });

      const data = await API.getImages(searchName, currentPage);

      if (data.hits.length === 0) {
        return alert('Sorry, image not found :(');
      };

      const normalizedImages = API.normalizedImages(data.hits);

      this.setState(state => ({
        images: [...state.images, ...normalizedImages],
        isLoading: false,
        error: '',
        totalPages: Math.ceil(data.totalHits / 12),
      }));
    } catch (error) {
      this.setState({ error: 'Something went wrong...' });
    } finally {
      this.setState({ isLoading: false });
    }
  };

  render() {
    const { images, isLoading, currentPage, totalPages } = this.state;

    return (
      <div>
        <Searchbar onSubmit={this.handleSubmit} />
        {images.length > 0 ? (
          <ImageGallery images={images} />
        ) : (
          <p>Image gallery is empty...</p>
        )}
        {isLoading && <Loader />}
        {images.length > 0 && totalPages !== currentPage && !isLoading && (
          <Button onClick={this.loadMore} />
        )}
      </div>
    );
  }
}

/*const api = new Api();

export class App extends Component {
  state = {
    searchQuery: '',
    galleryItems: [],
    galleryPage: 1,
    loading: false,
    isButton: false,
    error: true,
  };

  componentDidUpdate(_, prevState) {
    const prevQuery = prevState.searchQuery;
    const nextQuery = this.state.searchQuery;
    const prevPage = prevState.galleryPage;
    const nextPage = this.state.galleryPage;

    if (prevQuery !== nextQuery) {
      this.setState({ galleryPage: 1, galleryItems: [], isButton: false });
      if (nextPage === 1) {
        this.fetchGallery(nextQuery, nextPage);
      }
    } else if (prevPage !== nextPage) {
      this.fetchGallery(nextQuery, nextPage);
    }
  }

    fetchGallery = (nextQuery, nextPage) => {
      this.setState({ loading: true, error: false });

      Api.query = nextQuery;
      Api.page = nextPage;

      Api.fetchPost().then(data => {
        Api.hits = data.totalHits;

        const newData = data.hits.map(
          ({ id, tags, webformatURL, largeImageURL }) => ({
            id, tags, webformatURL, largeImageURL,
          })
        );
        const currentData = [...this.state.galleryItems, ...newData];

        this.setState(prevState => ({
          galleryItems: [...prevState.galleryItems, ...newData],
        }));

        if (!data.totalHits) {
          this.setState({ loading: false, error: true });
          return alert(`There are no images for your request. Please, try again.`);
        }

        if (currentData.length >= data.totalHits) {
          this.setState({
            loading: false,
            isButton: false,
            error: false,
          });
          return;
        }

        if (nextPage === 1) {
          alert(`Success! We found ${api.hits} images.`);
        }

        this.setState({
          loading: false,
          isButton: true,
          error: false,
        });
      });
    };

    formSubmit = searchQuery => {
      this.setState({ searchQuery });
    };

    onLoadMore = () => {
      this.setState(prevState => ({
        galleryPage: prevState.galleryPage + 1,
      }));
  };
  render() {
      const { galleryItems, loading, isButton, error } = this.state;

      return (
        <AppContent>
          <Searchbar onSubmit={this.formSubmit} />

          {error && <h2>Please, enter search word</h2>}
          {!error && <ImageGallery galleryItems={galleryItems} />}
          {loading && <Loader />}
          {isButton && <Button onClick={this.onLoadMore} />}
        </AppContent>
      );
    }
  }*/