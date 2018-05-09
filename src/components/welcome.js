import React from 'react';
import { connect } from "react-redux";
import renderHTML from 'react-render-html';
import { Link } from "react-router-dom";

import { update } from '../reducers/resultsReducer';
import logo from '../img/awvsolo.png';
import ucvlogo from '../img/ucv-logo.svg';
import cienciaslogo from '../img/ciencias_logo.jpg';

class Welcome extends React.Component {

	render() {
		return (
			<div className="App-welcome">
				<div className="App-imgWrapper">
					<img
					className="App-img"
					src={ logo }
					/>
					<img
					className="App-img"
					src={ ucvlogo }
					/>
					<img
					className="App-img"
					src={ cienciaslogo }
					/>
				</div>

				<div className="App-text">
					<h1>Archivo Web de Venezuela</h1>				
					<p>Bienvenido, en este portal usted podrá acceder a los sitios web que han sido archivados en el Archivo Web de Venezuela</p>
					<p>El proyecto del Archivo Web de Venezuela es una iniciativa desarrollada por la profesora Mercy Ospina, en la Facultad de Ciencias de la Universidad Central de Venezuela</p>
					<nav>
					<Link
						className='App-link'
						to={'/about'}
					>
						¿Quiéres saber más sobre el Archivo Web de Venezuela?
					</Link>
					<br/>
					<Link
						className='App-link'					
						to={'/contact'}					
					>
						Contáctanos
					</Link>
					<br/>					
					<Link
						className='App-link'					
						to={'/login'}					
					>
						Regístrate
					</Link>
					</nav>
				</div>
				
			</div>
		)
	}
}

const mS = state => {
	return {
	};
};

const mD = {
};

export default connect(mS, mD)(Welcome);