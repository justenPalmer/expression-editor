import React from 'react';
import Ac from './ac';
import Pos from './pos';
import Styled from 'styled-components';
import Base from '../styles/base';

const Container = Styled.div`
	${Base}
	position:relative;
	display:inline-block;
	margin-left:16px;
`;

const Tack = Styled.div`
	${Base}
	position:absolute;
	width:10px;
	top:14px;
	bottom:10px;
	border-left:2px solid ${props => (props.focus)? props.theme.colorLt: props.theme.color};
	left:-14px;
`;

const Top = Styled.div`
	${Base}
	border-radius:4px;
	width:16px;
	height:16px;
	position:relative;
	left:-9px;
	top:-9px;
	color:#FFFFFF;
	background-color:${props => (props.focus)? props.theme.colorLt: props.theme.color};
	cursor:pointer;
	&:hover{
		background-color:${props => props.theme.colorDk};
	}
`;

const ArrowRight = Styled.div`
	${Base}
	position:relative;
	width:6px;
	height:8px;
	border-left:6px solid #FFFFFF;
	border-top:4px solid transparent;
	border-bottom:4px solid transparent;
	top:4px;
	left:6px;
`;

const ArrowDown = Styled.div`
	${Base}
	position:relative;
	width:8px;
	height:6px;
	border-left:4px solid transparent;
	border-right:4px solid transparent;
	border-top:6px solid #FFFFFF;
	top:6px;
	left:4px;
`;

const Dot = Styled.div`
	${Base}
	position:absolute;
	left:-16px;
	top:10px;
	border-radius:4px;
	width:6px;
	height:6px;
	border:2px solid #333;
	background-color:#FFFFFF;
	z-index:2;
	cursor:pointer;
`;

const RowMenu = Styled.div`
	${Base}
	position:absolute;
	left:-21px;
	top:22px;
	z-index:2;
`;

const TopMenu = Styled.div`
	${Base}
	position:absolute;
	left:-9px;
	top:11px;
	z-index:2;
`;

const AddBelow = Styled.div`
	${Base}
	position:absolute;
	top:0;
	left:0;
	cursor:pointer;
	border-radius:8px;
	line-height:12px;
	text-align:center;
	width:16px;
	height:16px;
	z-index:2;
	font-size:11px;
	font-weight:bold;
	border:2px solid #333;
	color:#333;
	background-color:#FFFFFF;
	display:none;
	opacity:0;
	&:hover{
		opacity:1;
	}
`;

const Row = Styled.div`
	${Base}
	position:relative;
	${props => (props.expanded)? 'clear:both;': 'display:inline-block;'}
`;

const LineEnd = Styled.div`
	${Base}
	position:absolute;
	bottom:0;
	top:16px;
	left:-16px;
	background-color:#FAFAFA;
	width:4px;
	z-index:1;
`;



const expressions = [
	{value:'array',category:'type',returns:'array'},
	{value:'boolean',category:'type',returns:'boolean'},
	{value:'literal',category:'type',returns:['array','object']},
	{value:'number',category:'type',returns:'number'},
	{value:'string',category:'type',returns:'string'},
	{value:'to-boolean',category:'type',returns:'boolean'},
	{value:'to-color',category:'type',returns:'color'},
	{value:'to-number',category:'type',returns:'number'},
	{value:'to-string',category:'type',returns:'string'},
	{value:'typeof',category:'type',returns:'string'},

	{value:'geometry-type',category:'feature'},
	{value:'id',category:'feature'},
	{value:'properties',category:'feature'},

	{value:'at',category:'feature'},
	{value:'get',category:'feature'},
	{value:'has',category:'feature'},
	{value:'length',category:'feature'},

	{value:'!',category:'feature'},
	{value:'!=',category:'feature'},
	{value:'>',category:'feature'},
	{value:'<',category:'feature'},
	{value:'>=',category:'feature'},
	{value:'<=',category:'feature'},
	{value:'==',category:'feature'},
	{value:'all',category:'feature'},
	{value:'any',category:'feature'},
	{value:'case',category:'feature'},
	{value:'coalesce',category:'feature'},
	{value:'match',category:'feature'},

	{value:'interpolate',category:'feature'},
	{value:'step',category:'feature'},

	{value:'let',category:'feature'},
	{value:'var',category:'feature'},

	{value:'concat',category:'feature'},
	{value:'downcase',category:'feature'},
	{value:'upcase',category:'feature'},

	{value:'rgb',category:'feature'},
	{value:'rgba',category:'feature'},
	{value:'to-rgba',category:'feature'},

	{value:'-',category:'feature'},
	{value:'*',category:'feature'},
	{value:'/',category:'feature'},
	{value:'%',category:'feature'},
	{value:'^',category:'feature'},
	{value:'+',category:'feature'},
	{value:'acos',category:'feature'},
	{value:'asin',category:'feature'},
	{value:'atan',category:'feature'},
	{value:'cos',category:'feature'},
	{value:'e',category:'feature'},
	{value:'ln',category:'feature'},
	{value:'ln2',category:'feature'},
	{value:'log10',category:'feature'},
	{value:'log2',category:'feature'},
	{value:'max',category:'feature'},
	{value:'min',category:'feature'},
	{value:'pi',category:'feature'},
	{value:'sin',category:'feature'},
	{value:'sqrt',category:'feature'},
	{value:'tan',category:'feature'},

	{value:'zoom',category:'feature'},
	{value:'heatmap-density',category:'feature'}
];

class Exp extends React.Component {

	/*
	props (obj)
		pos (str)
		vector (any)
		handle (obj)
	*/
	constructor (props) {
		super(props);

		this.state = {
			expanded:true
		};

		this.handle = {
			argAdd:()=>{
				let pos = this.props.pos+'.'+(this.props.vector.length);
				this.props.handle.vectorUpdate(pos,'');
				this.props.handle.focusFromTo(this.props.pos,pos);
			},
			topClick:()=>{
				if (this.state.expanded) this.setState({expanded:false});
				else this.setState({expanded:true});
			}
		}

		this.acHandle = {
			backout:(e)=>{ // reset pos to string
				console.log('backout ac');
				if (this.backoutOnce){
					this.backoutOnce = false;
					this.props.handle.focusBackout(this.props.pos);
					return;
				}
				this.backoutOnce = true;
			},
			select:(value)=>{
				let typePos = this.props.pos+'.0';
				this.props.handle.vectorUpdate(typePos,value);
				this.props.handle.focusNextAdd(typePos,this.props.pos);
			},
			clear:()=>{
				this.props.handle.vectorUpdate(this.props.pos,[]);
			},
			selectedClick:()=>{
				this.props.handle.focusIn(this.props.pos);
			},
			focusIs:()=>{
				return this.props.handle.focusIs(this.props.pos);
			},
			focus:()=>{
				this.props.handle.focusIn(this.props.pos);
			},
			blur:()=>{
				this.props.handle.focusOut(this.props.pos);
			},
			focusNext:()=>{
				this.props.handle.focusNext(this.props.pos);
			},
			focusPrev:()=>{
				this.props.handle.focusPrev(this.props.pos);
			}
		}

		for (let i in this.handle){
			this.handle[i] = this.handle[i].bind(this);
		}
		for (let i in this.acHandle){
			this.acHandle[i] = this.acHandle[i].bind(this);
		}
	}

	render (){

		let type = this.props.vector.length < 1 ? '': this.props.vector[0];
		let args = this.props.vector.length < 2 ? []: this.props.vector.slice(1);

		let isFocused = this.props.handle.focusIs(this.props.pos);

		return <Container theme={this.props.theme} focus={isFocused}>
			<Tack expanded={this.state.expanded}>
				<Top theme={this.props.theme} onClick={this.handle.topClick}>
					{this.state.expanded ? (
						<ArrowDown/>
					) : (
						<ArrowRight/>
					)}
				</Top>
				<TopMenu className="menu">
					<AddBelow>+</AddBelow>
				</TopMenu>
			</Tack>

			<Ac options={expressions} handle={this.acHandle} value={type} focus={isFocused}
				theme={this.props.theme}/>
			
			{(type != null) && (this.state.expanded) &&
				args.map((arg,i)=>{
					//console.log('loop arg:',arg,i);
					let pos = this.props.pos+'.'+(i+1);
					return <Row expanded={this.state.expanded}>
						<Dot theme={this.props.theme}>
						</Dot>
						<RowMenu className="menu">
							<AddBelow>+</AddBelow>
						</RowMenu>
						<Pos expanded={this.state.expanded} key={pos} pos={pos} vector={arg} 
						handle={this.props.handle} theme={this.props.theme}/>
						{i === args.length-1 && 
							<LineEnd/>
						}
					</Row>
				})
			}
			
		</Container>
	}
};

export default Exp;