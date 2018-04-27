import React from 'react';
import { connect } from "react-redux";
import renderHTML from 'react-render-html';

import { update } from '../reducers/resultsReducer';

class Welcome extends React.Component {

	render() {
		return (
			<div>
				<h1>Archivo Web de Venezuela</h1>
				<p>Este sitio es el módulo de acceso del Archivo Web de Venezuela, como proyecto de Trabajo Especial de Grado del Bachiller Luis Daniel Castillo C.I.: V- 22.756.693</p>
				<p>Este sistema ha sido desarrollado con las librerías React y Redux</p>
				<img src={ require('./images/test.png') } />
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