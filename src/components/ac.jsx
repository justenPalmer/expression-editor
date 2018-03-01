import React from 'react';
import Styled from 'styled-components';
import Base from '../styles/base';

const Container = Styled.div`
	${Base}
	position:relative;
	display:inline-block;
`;

const Dropdown = Styled.ul`
	${Base}
	position:absolute;
	top:28px;
	left:0;
	border:1px solid #BDBDBD;
	background-color:#FFFFFF;
	z-index:2;
`;
const Li = Styled.li`
	${Base}
	cursor:pointer;
	line-height:1.8;
	padding:0 8px;
	&:hover{
		background-color:#BDBDBD;
		color:#FFFFFF;
	}
`;
const ActiveLi = Styled(Li)`
	background-color:${props => props.theme.color};
	color:#FFFFFF;
	&:hover{
		background-color:${props => props.theme.colorDk};
	}
`;
const Selected = Styled.button`
	${Base}
	position:relative;
	background-color:${props => props.theme.color};
	color:#FFFFFF;
	display:inline-block;
	line-height:1.8;
	padding:0 8px;
	cursor:pointer;
	border:1px solid ${props => props.theme.color};
	&:hover{
		background-color:${props => props.theme.colorDk};
	}
`;

const Err = Styled.div`
	${Base}
	color:#FFFFFF;
	line-height:21px;
	font-size:12px;
	display:inline-block;
	cursor:pointer;
	padding:0 8px;
	background-color:#C62928;
	margin-left:10px;
`;

const Input = Styled.input`
	${Base}
	line-height:1.8;
	padding: 0 8px;
	border:1px solid #CFD8DD;
`;

class Ac extends React.Component {

	/*
	props
		value (str): if defined, select this element from options
		options (ary): 
			option (obj):
				vaLue (str or num):
		handle (obj)
			select (fun)
				value
			clear (fun)
	*/
	constructor(props) {
		super(props);

		this.state = {
			inputValue: '',
			active: null,
			mode:null
		};

		this.handle = {
			change:(e)=>{
				this.setState({inputValue: e.target.value});
				// set active to first matching
				for (let i=0,len=this.props.options.length;i<len;i++){
					if (this.props.options[i].value.indexOf(e.target.value) !== -1){ // is a match
						this.setState({active: this.props.options[i].value});
						return;
					}
				}
				this.setState({active: null});
			},
			keyUp:(e)=>{
				if (e.key === 'ArrowDown'){
					let next = this.state.active === null? true: false;
					for (let i=0,len=this.props.options.length;i<len;i++){
						if (this.props.options[i].value.indexOf(e.target.value) === -1) continue; // not a match
						if (next) return this.setState({active: this.props.options[i].value});
						if (this.props.options[i].value === this.state.active){ // is active
							next = true;
						}
					}
				}
				if (e.key === 'ArrowUp'){
					let next = false;
					for (let i=this.props.options.length-1;i>=0;i--){
						if (this.props.options[i].value.indexOf(e.target.value) === -1) continue; // not a match
						if (next) return this.setState({active: this.props.options[i].value});
						if (this.props.options[i].value === this.state.active){ // is active
							next = true;
						}
					}
				}
				if (e.key === 'Enter'){

					if (this.state.active !== null){
						this.handle.select(this.state.active);
					}
				}
				if (e.key === 'Backspace' && !this.state.inputValue){
					this.props.handle.backout();
				}
			},
			
			select:(value)=>{
				this.setState({mode:'view'});
				// if this is focused, move focus to next

				this.props.handle.select(value);
			},
			liClick:(value)=>{
				this.handle.select(value);
			},
			cancel:()=>{
				//this.setState({selected:null});
				this.props.handle.clear();
			},

			selectedKeyPress:(e)=>{
				if (e.which === 13 /* Enter */) {
					return e.preventDefault();
				}
			},
			selectedClick:(e)=>{
				console.log('selected click');
				this.selectedEnter = true;
				this.setState({mode:'edit'});
				this.props.handle.selectedClick();
			},
			selectedKeyUp:(e)=>{
				console.log('selected keyUp',e);
				/*
				if (e.key === 'ArrowDown'){
					this.props.handle.focusNext();
				}
				if (e.key === 'ArrowUp'){
					this.props.handle.focusPrev();
				}
				*/
				if (e.key === 'Enter'){
					this.setState({mode:'edit'});
				}
				if (e.key === 'Backspace'){
					this.setState({mode:'edit'});
				}
			},

			focus:()=>{
				this.props.handle.focus();
			},
			focusIs:()=>{
				return this.props.handle.focusIs();
			},
			blur:()=>{
				if (this.dropdownOver) return;
				this.props.handle.blur();
			},

			dropdownMouseEnter:()=>{
				this.dropdownOver = true;
			},
			dropdownMouseLeave:()=>{
				this.dropdownOver = false;
			}

		}

		for (let i in this.handle){
			this.handle[i] = this.handle[i].bind(this);
		}

	}

	render (){
		//console.log('handle change:',this.state.value);
		if (this.props.value !== null && this.props.value.length > 0 && (!this.state.mode || this.state.mode === 'view')){

			//check if value is valid option, if not show error
			let found = false;
			for (let i=0,len=this.props.options.length;i<len;i++){
				let option = this.props.options[i];
				if (option.value === this.props.value){
					found = true;
				}
			}

			let error = (!found)? 'expression not found': null; 

			return <Container theme={this.props.theme}>
				<Selected type="button" 
					error={error}
					onBlur={this.handle.blur} 
					onClick={this.handle.selectedClick} 
					onKeyPress={this.handle.selectedKeyPress}
					onKeyUp={this.handle.selectedKeyUp} 
					onFocus={this.handle.focus} 
					innerRef={input => input && this.props.focus && input.focus()} 
					theme={this.props.theme}>
					{this.props.value}
					
				</Selected>
				{error && (
					<Err>{error}</Err>
				)}
			</Container>
		}
		let count = 0;
		return <Container theme={this.props.theme}>
			<Input type="text" placeholder="enter an expression"
				onBlur={this.handle.blur} 
				onChange={this.handle.change}
				onFocus={this.handle.focus} 
				onKeyUp={this.handle.keyUp}
				innerRef={input => input && this.props.focus && input.focus()}
				theme={this.props.theme} 
				value={this.state.inputValue} />
			{this.handle.focusIs() && 
				<Dropdown theme={this.props.theme} 
					onMouseEnter={this.handle.dropdownMouseEnter} 
					onMouseLeave={this.handle.dropdownMouseLeave}>
					{this.props.options.map((exp,i)=>{
						
						if (exp.value.indexOf(this.state.inputValue) === -1) return null;
						count++;
						if (count > 10) return null;
						if (this.state.active === exp.value){
							return <ActiveLi theme={this.props.theme} 
								onClick={(e)=>{this.handle.liClick(exp.value)}} 
								key={exp.value}>{exp.value}</ActiveLi>
						}
						return <Li theme={this.props.theme} 
							onClick={(e)=>{this.handle.liClick(exp.value)}} 
							key={exp.value}>{exp.value}</Li>
					})}
				</Dropdown>
			}
		</Container>
	}

};

export default Ac;