import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

//import logo from '../logo.svg';
import '../App.css';
import SearchBar from '../components/searchBar';
import logoHeader from '../img/awv_logo_header.png';

class Header extends React.Component {
  render() {
    const {
      welcome 
    } = this.props;
    return (
			<div className="App-header">
				<Link
          to={'/'}
        >
          <img
            className="App-logo"
            src={ logoHeader }
          />
        </Link>
				<nav>
					<SearchBar />
					<Link
						to={'/about'}
					>
						¿Quiénes somos?
					</Link>
					<Link
						to={'/contact'}					
					>
						Contacto
					</Link>
					<Link
						to={'/login'}					
					>
						Iniciar sesión
					</Link>
				</nav>
			</div>
    );
  }
}

const mS = state => {
  return {
  };
};

const mD = {};

export default connect(mS, mD)(Header);