import React from 'react';
import { connect } from "react-redux";
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
					<Link
					to={'/about'}
					>
						<div className="App-img">
							<img
							src={ logo }
							alt="Logo del Archivo Web"
							/>
							<span>Archivo Wed de Venezuela</span>
						</div>
					</Link>
					<div className="App-img">
						<img
						src={ ucvlogo }
						alt="Logo del UCV"					
						/>
						<span>Universidad Central de Venezuela</span>						
					</div>
					<div className="App-img">
						<img
						src={ cienciaslogo }
						alt="Logo de la Facultad de Ciencias"					
						/>
						<span>Facultad de Ciencias UCV</span>						
					</div>
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