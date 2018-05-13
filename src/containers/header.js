import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

//import logo from '../logo.svg';
import '../App.css';
import SearchBar from '../components/searchBar';
import logoHeader from '../img/awv_logo_header.png';
import bgsearch from '../img/bg_search.jpg';
import { clear } from "../reducers/resultsReducer";

class Header extends React.Component {
  render() {
    const {
			welcome,
			clear
    } = this.props;
    return (
			<div>
				<div className="App-header">
					<Link
						to={'/'}
					>
						<img
							className="App-logo"
							src={ logoHeader }
							onClick={
								() =>{
									console.log("clear");
									clear();
								}
							}
						/>
					</Link>
					<nav>
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
				<div
					className="App-subheader"
				>
					<div
						className="App-subheader-message"
					>
							<h1>Busca en nuestro archivo</h1>
							<p>
								En nuestro archivo hay almacenadas múltiples páginas de origen venezolano, siéntete libre de revisar.
							</p>
					</div>
					<SearchBar />
				</div>
			</div>
    );
  }
}

const mS = state => {
  return {
  };
};

const mD = {
	clear
};

export default connect(mS, mD)(Header);