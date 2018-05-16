import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import {Motion, spring} from 'react-motion';

import '../App.css';
import SearchBar from '../components/searchBar';
import logoHeader from '../img/awv_logo_header.png';
import bgsearch from '../img/bg_search.jpg';
import { clear, update } from "../reducers/resultsReducer";

class Header extends React.Component {
	handleMouseDown = () => {
		const {
			update,
			header,
		} = this.props;
		update({header: false});
	};

	handleTouchStart = (e) => {
		e.preventDefault();
		this.handleMouseDown();
	};

	render() {
    const {
			header,
			clear
    } = this.props;
    return (
			<div className="App-header">
				<div className="App-upperheader">
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
					<nav
						className="App-upperheader-menu"
					>
						<Link
							onMouseDown={this.handleMouseDown}
							onTouchStart={this.handleTouchStart}							
							to={'/about'}
						>
							¿Quiénes somos?
						</Link>
						<Link
							onMouseDown={this.handleMouseDown}
							onTouchStart={this.handleTouchStart}	
							to={'/contact'}				
						>
							Contacto
						</Link>
						<Link
							onMouseDown={this.handleMouseDown}
							onTouchStart={this.handleTouchStart}	
							to={'/login'}					
						>
							Iniciar sesión
						</Link>
					</nav>
				</div>
				<Motion style={{x: spring(header ? 30.1 : 3)}}>
					{({x}) =>
						<div
							className="App-subheader"
							style={{
								minHeight: `${x}rem`,
							}}
						>
							<div
								className="App-subheader-message"
								style={{
									display: header ? "initial" : "none",
								}}
							>
									<h3>Archivo Web de Venezuela</h3>
									<p>
										En nuestro archivo hay almacenadas múltiples páginas de origen venezolano, siéntete libre de explorar:
									</p>
							</div>
							<SearchBar
								mouseDown={this.handleMouseDown}
								touchStart={this.handleTouchStart}
							/>
						</div>
					}
		  		</Motion>
				
			</div>
    );
  }
}

const mS = state => {
  return {
    header: state.results.header,	  
  };
};

const mD = {
	clear,
	update,
};

export default connect(mS, mD)(Header);