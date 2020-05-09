import React from "react";

import SHOP_DATA from "./shop.data.jsx";

import CollectionPreview from "../../components/collection-preview/collection-preview.component";

import SearchBox from "../../components/search-box/search-box.component";

class ShopPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      collections: SHOP_DATA,
      searchField: "",
    };
  }

  handleChange = (e) => {
    this.setState({ searchField: e.target.value });
  };

  render() {
    const { collections, searchField } = this.state;
    return (
      <div className="shop-page">
        <SearchBox placeholder="Search food" handleChange={this.handleChange} />
        {collections.map(({ id, ...otherCollectionProps }) => (
          <CollectionPreview key={id} {...otherCollectionProps} />
        ))}
      </div>
    );
  }
}

export default ShopPage;
