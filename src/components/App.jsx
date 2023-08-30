import { Component } from "react";

import Api from "utils/Api";

import Searchbar from "./Searchbar/Searchbar";
import { ImageGallery } from "./ImageGallery/ImageGallery";
import { Button } from "./Button/Button";
import { Loader } from "./Loader/Loader";

import { AppContent } from "./App.styled";

const Api = new Api();

export class App extends Component {
  state = {
    query: '',
    items: [],
    page: 1,
    loading: false,
    isButton: false,
    error: true,
  };

  componentDidUpdate(_, prevState) {
    const prevQuery = prevState.query;
    const nextQuery = this.state.query;
    const prevPage = prevState.page;
    const nextPage = this.state.page;

    if (prevQuery !== nextQuery) {
      this.setState({ page: 1, items: [], isButton: false });
      if (nextPage === 1) {
        this.fetchGallery(nextQuery, nextPage);
      }
    }

    fetchGallery = (nextQuery, nextPage) => {
      this.setState({ loading: true, error: false });

      Api.query = nextQuery;
      Api.page = nextPage;

      Api.fetchPost().then(data => {
        Api.hits = data.totalHits;

        
      })
    }
  }
}



function renderCards(images) {
  const articles = images
    .map(image => {
      const {
        id,
        webformatURL,
        largeImageURL,
      } = image;
  })
}

