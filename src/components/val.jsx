import React from 'react';
import Styled from 'styled-components';
import Base from '../styles/base';

const Container = Styled.div`
	${Base}
	position:relative;
	display:inline-block;
`;

const Swatch = Styled.div`
	${Base}
	position:absolute;
	top:4px;
	right:4px;
	width:16px;
	height:19px;
	background-color:${props => props.color};
`;

const Input = Styled.input`
	${Base}
	line-height:1.8;
	border:1px solid #CFD8DD;
	padding:0 8px;
	border-left:4px solid ${props => props.theme.color};
`;

class Val extends React.Component {

	/*
	props (obj)
		pos (str)
		vector (any)
		handle (obj)
	*/
	constructor (props) {
		super(props);

		this.handle = {
			change:(e)=>{ // reset pos to string
				if (e.target.value === '['){
					return this.props.handle.vectorUpdate(this.props.pos,[]);
				}
				if (e.target.value === 'true'){
					return this.props.handle.vectorUpdate(this.props.pos,true);
				}
				if (e.target.value === 'false'){
					return this.props.handle.vectorUpdate(this.props.pos,false);
				}
				if (e.target.value === 'null'){
					return this.props.handle.vectorUpdate(this.props.pos,null);
				}
				/*
				if (e.target.value.match(/^[0-9]+$/))
					return this.props.handle.vectorUpdate(this.props.pos,Number(e.target.value));
				*/
				let value = (this.props.type === 'number')? Number(e.target.value): e.target.value;

				this.props.handle.vectorUpdate(this.props.pos,value);
			},
			keyUp:(e)=>{
				if (e.key === 'Enter' || e.key === ','){
					if (e.target.value.length < 1){
						this.props.handle.vectorRemove(this.props.pos);
						this.props.handle.focusUpAdd(this.props.pos);
						return;
					}
					this.props.handle.focusNextAdd(this.props.pos);
					// if enter was hit on empty value, focus on next field of parent

				}
				if (e.key === 'Backspace' && e.target.value === ''){
					if (this.backoutOnce){
						this.backoutOnce = false;
						this.props.handle.focusBackout(this.props.pos);
						return;
					}
					this.backoutOnce = true;
				}
				if (e.key === 'ArrowDown'){
					this.props.handle.focusNext(this.props.pos);
				}
				if (e.key === 'ArrowUp'){
					this.props.handle.focusPrev(this.props.pos);
				}
			},
			focus:(e)=>{
				this.props.handle.focusIn(this.props.pos);
			},
			blur:(e)=>{
				this.props.handle.focusOut(this.props.pos);
			}
		}

		for (let i in this.handle){
			this.handle[i] = this.handle[i].bind(this);
		}
	}

	render (){

		let inputType = 'text';
		if (this.props.type === 'number') inputType = 'number';

		let value = (this.props.type === 'null')? 'null': this.props.vector;
		let isFocused = this.props.handle.focusIs(this.props.pos);

		return <Container theme={this.props.theme}>
			<Input value={value} 
				placeholder="[ for expressions"
				onBlur={this.handle.blur} 
				onChange={this.handle.change}
				onFocus={this.handle.focus} 
				onKeyUp={this.handle.keyUp}
				innerRef={input => input && isFocused && input.focus()}
				theme={this.props.theme}
				type={inputType} />
			{this.props.type === 'color' && 
				<Swatch color={this.props.vector}/>
			}
		</Container>
	}
};

export default Val;