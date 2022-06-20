import styled from 'styled-components';

const grid = 8;

export const AddNoteContainer = styled.div`
	-moz-box-sizing: content-box;
    -webkit-box-sizing: content-box;
    box-sizing: content-box;
	width: 200px;
	border: 1px solid black;
	margin-bottom: ${grid}px;
	background-color: black;
	color: white;
	display: flex;
	justify-content: center;
	padding: ${grid}px;
	cursor: pointer;
	&:hover {
		color: #ffee10;
		box-shadow: 0 0 5px #ffee10;
 		text-shadow: 0 0 5px #ffee10;
	}
	&hover::before {
		transform: scale(1.1);
		box-shadow: 0 0 15px #ffee10;
	}
`

export const PlusSignWrapper = styled.span`
	padding-left: 10%;
`


export const AddNoteInput = styled.input`
	margin: 0;
	padding: 0;
	border: 0;
	outline: 0;
	font-size: 110%;
	vertical-align: baseline;
	border-collapse: True;
	background: transparent;
	color: white;
`