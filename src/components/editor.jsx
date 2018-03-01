import React from 'react';
import Pos from './pos';
import Styled from 'styled-components';
import Base from '../styles/base';

const Container = Styled.div`
	${Base}
	position:relative;
	max-width:500px;
	margin:60px auto;
`;
const H2 = Styled.h2`
	${Base}
	font-size:24px;
	line-height:1.6;
	font-weight:normal;
`;
const EditorBox = Styled.div`
	${Base}
	position:relative;
	background-color:#FAFAFA;
	border:1px solid #CFD8DD;
	padding:4px 12px 12px 12px;
	font-size:12px;
`;
const Textarea = Styled.textarea`
	${Base}
	position:relative;
	background-color:#FFFFFF;
	border:1px solid #cccccc;
	padding:8px;
	width:100%;
	min-height:120px;
	font-size:14px;
	line-height:1.6;
	resize: none;
`;

class Editor extends React.Component {

	/*
	props (obj)
	*/
	constructor(props) {
		super(props);
		this.state = {
			vector:[''],
			focusCur:'0'
		};
		this.handle = {
			vectorAdd:(pos,val)=>{ // adds afer this pos
				let vector = this.state.vector.slice(),
					inds = pos.split('.'),
					cur = vector;
				if (inds.length < 2) return; // do not allow more than one base node
				inds.forEach((ind,i)=>{
					if (i === inds.length-1) cur.splice(ind+1,0,val);
					else cur = cur[ind];
				});
				this.vectorSet(vector);
			},
			vectorUpdate:(pos,val)=>{
				let vector = this.state.vector.slice(),
					inds = pos.split('.'),
					cur = vector;
				inds.forEach((ind,i)=>{
					if (i === inds.length-1) cur[ind] = val;
					else cur = cur[ind];
				});
				this.vectorSet(vector);
			},
			vectorRemove:(pos)=>{
				let vector = this.state.vector.slice(),
					inds = pos.split('.'),
					cur = vector;
				inds.forEach((ind,i)=>{
					if (i === inds.length-1) cur.splice(ind,1);
					else cur = cur[ind];
				});
				this.vectorSet(vector);
			},

			textareaUpdate:(e)=>{
				//add delay
				let value = e.target.value;
				this.setState({vectorStr:value});
				let obj = this.vectorObj(value);
				if (obj !== undefined){
					this.setState({vector:[obj]});
				}
				
			},

			isDefined:(pos)=>{
				return this.getVectorItem(pos) === undefined? false: true;
			},


			focusIs:(pos)=>{
				return (this.state.focusCur === pos)? true: false;
			},
			focusIn:(pos)=>{
				//console.log('focus in:',pos);
				this.setState({focusCur:pos});
			},
			focusNext:(pos)=>{ // move focus to next pos, if doesn't exist make it
				// get next pos
				let nextPos = this.getNextPos(pos);
				if (!this.handle.isDefined(nextPos)) return;
				this.handle.focusFromTo(pos,nextPos);
			},
			focusNextAdd:(pos,focusPos)=>{ // move focus to next pos, if doesn't exist make it
				// get next pos
				let nextPos = this.getNextPos(pos);
				if (!this.handle.isDefined(nextPos)){
					console.log('next pos not defined:',this.handle.isDefined(nextPos),pos,nextPos);
					this.handle.vectorUpdate(nextPos,'');	
				}
				this.handle.focusFromTo(focusPos || pos,nextPos);
			},
			focusUpAdd:(pos,focusPos)=>{ // move focus to next pos up one level, if doesn't exist make it
				// get next pos
				let upPos = this.getUpPos(pos);
				this.handle.focusNextAdd(upPos,pos);
			},
			focusFromTo:(fromPos,toPos)=>{ // move focus to a pos
				if (this.handle.focusIs(fromPos)){
					this.focusPrev = fromPos;
					this.handle.focusIn(toPos);
				}
			},
			focusPrev:(pos)=>{ // move focus to next pos, if doesn't exist make it
				// get next pos
				let prevPos = this.getPrevPos(pos);
				if (!this.handle.isDefined(prevPos)) return;
				this.handle.focusFromTo(pos,prevPos);
			},
			focusBackout:(pos)=>{
				let prevPos = this.getPrevPos(pos);
				if (pos === '0'){
					this.handle.vectorUpdate(pos,'');
					return;
				}
				this.handle.focusFromTo(pos,prevPos);
				this.handle.vectorRemove(pos);
			},

			
			focusOut:(pos)=>{
				//console.log('focus out:',pos);
				// do not reset if another focus action triggered change
				if (this.focusPrev === pos){
					this.focusPrev = null;
					return;
				}
				this.setState({focusCur:null});
			},
			focusUp:(pos)=>{

				// move focus up
			},
			focusRight:(pos)=>{
				// move focus in deeper
			},
			focusLeft:(pos)=>{
				// move focus out
			},
			focusDown:(pos)=>{
				// move focus down

				// look through vectors

				/*
				let inds = pos.split('.');
				inds[inds.length-1]++;
				let nextPos = inds.join('.');

				let nextVector = this.getVectorItem(nextPos);

				if (nextVector) this.handle.focusIn(nextPos);
				*/
			},
			focusAdd:(pos)=>{
				this.focusPrev = pos;

				// if zero, do not allow new 
				// move focus down, if no element make a new one
			}
		}
		for (let i in this.handle){
			this.handle[i] = this.handle[i].bind(this);
		}
	}

	getNextPos(pos){
		let inds = pos.split('.');
		inds[inds.length-1]++;
		return inds.join('.');
	}

	getUpPos(pos){
		let inds = pos.split('.');
		if (inds.length < 2) return pos;
		inds.pop();
		return inds.join('.');
	}

	getPrevPos(pos){
		let inds = pos.split('.');
		inds[inds.length-1]--;
		if (inds[inds.length-1] < 1){
			inds.pop();
		}
		return inds.join('.');
	}

	getVectorItem(pos,vector){
		if (vector === undefined) vector = this.state.vector;
		let bits = pos.split('.');
		if (bits.length < 0 || pos.length < 1) return vector;
		if (bits.length > 0){
			let bit = bits.shift();
			if (vector[bit] === undefined) return;
			return this.getVectorItem(bits.join('.'),vector[bit]);
		}
	}

	vectorSet(vector){
		this.setState({vector:vector});
		this.setState({vectorStr:this.vectorStr(vector[0])});
	}

	vectorStr(vector){
		try {
			return JSON.stringify(vector);
		} catch(e) {
			// throw error
			return console.error('vector error');
		}
	}

	vectorObj(vector){
		try {
			return JSON.parse(vector);
		} catch(e) {
			// throw error
			return console.error('vector error');
		}
	}

	render (props){
		return <Container>
			<H2>Expression Editor</H2>
			<EditorBox>
				<Pos ref={instance => {this.entry = instance}} pos={'0'} 
					vector={this.state.vector[0]} handle={this.handle}/>
			</EditorBox>
			<Textarea onChange={this.handle.textareaUpdate} value={this.state.vectorStr} placeholder="Paste expression here">
			</Textarea>
		</Container>
	}
};

export default Editor;