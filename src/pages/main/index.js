import React, { Component } from "react";
import PropTypes from "prop-types";

import { connect } from "react-redux"; // connectar componente ao reducer
import { bindActionCreators } from "redux"; // ler/atualizar ao reducer
import * as FavoritesActions from "../../store/actions/favorites"; // importando todos as actions do componente favorites

class Main extends Component {
  static propTypes = {
    addFavoriteRequest: PropTypes.func.isRequired,
    favorites: PropTypes.shape({
      loading: PropTypes.bool,
      data: PropTypes.arrayOf(
        PropTypes.shape({
          id: PropTypes.number,
          name: PropTypes.string,
          description: PropTypes.string,
          url: PropTypes.string
        })
      )
    }).isRequired
  };

  state = {
    repositoryInput: ""
  };

  handleAddRepository = e => {
    e.preventDefault();

    this.props.addFavoriteRequest(this.state.repositoryInput);

    this.setState({ repositoryInput: "" });
  };

  render() {
    return (
      <>
        <form onSubmit={this.handleAddRepository}>
          <input
            type="text"
            placeholder="usuário/repositório"
            value={this.state.repositoryInput}
            onChange={e => this.setState({ repositoryInput: e.target.value })}
          />
          <button type="submit">Adicionar</button>

          {this.props.favorites.loading && <span>Carregando</span>}
        </form>

        <ul>
          {this.props.favorites.data.map(favorite => (
            <li key={favorite.id}>
              <p>
                <strong>{favorite.name}</strong> ({favorite.description})
              </p>
              <a href={favorite.url}>Acessar</a>
            </li>
          ))}
        </ul>
      </>
    );
  }
}

// mapeia o estado dos reducers para props
const mapStateToProps = state => ({
  favorites: state.favorites
});

// mepeia as actions para os reducers
const mapDispatchToProps = dispatch =>
  bindActionCreators(FavoritesActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Main);
