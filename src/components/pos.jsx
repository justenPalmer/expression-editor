import React from 'react';
import Val from './val';
import Exp from './exp';
import Styled from 'styled-components';
import Base from '../styles/base';

const Container = Styled.div`
	${Base}
	position:relative;
	margin:8px 0 0 0;
	${props => (props.expanded)? 'clear:both;': 'display:inline-block;'}
`;

const themes = {
	exp:{color:'#424242',colorLt:'#616161',colorDk:'#212121'},
	string:{color:'#1E88E5',colorLt:'#2196F3',colorDk:'#1A75D3'},
	number:{color:'#679E38',colorLt:'#7CB341',colorDk:'#558A30'},
	bool:{color:'#9C27B0',colorLt:'#AB47BC',colorDk:'#8E24AA'},
	color:{color:'#424242',colorLt:'#616161',colorDk:'#212121'},
	null:{color:'#424242',colorLt:'#616161',colorDk:'#212121'}
};

class Pos extends React.Component {

	render (){
		this.type = 'string';
		if (Object.prototype.toString.call(this.props.vector) === '[object Array]'){
			this.type = 'exp';
		} else if (this.props.vector && typeof this.props.vector === 'number'){
			this.type = 'number';
		} else if (this.props.vector === true || this.props.vector === false){
			this.type = 'bool';
		} else if (this.props.vector === null){
			this.type = 'null';
		} else if (this.props.vector && typeof this.props.vector === 'string'){
			if (this.props.vector.match(/^[0-9]+$/)) this.type = 'number';
			if (this.props.vector.indexOf('#') === 0) this.type = 'color';	
		}

		let theme = themes[this.type];
		console.log('theme:',this.type,theme);

		return <Container expanded={this.props.expanded}>
			{this.type === 'exp' ? (
				<Exp pos={this.props.pos} vector={this.props.vector} handle={this.props.handle} 
					theme={theme}/>
			):(
				<Val pos={this.props.pos} vector={this.props.vector} handle={this.props.handle} 
					type={this.type} theme={theme}/>
			)}
		</Container>
	}
};

export default Pos;