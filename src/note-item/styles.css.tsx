import styled from 'styled-components';

const grid = 8;

export const NoteItemWrapper = styled.div`
	width: 200px;
	border: 1px solid black;
	margin-bottom: ${grid}px;
	background-color: black;
	color: white;
	text-align: center;
	padding: ${grid}px;
	position: relative;
	&:hover {
		color: #ffee10;
		box-shadow: 0 0 5px #ffee10;
 		text-shadow: 0 0 5px #ffee10;
	}
	&hover::before {
		transform: scale(1.1);
		box-shadow: 0 0 15px #ffee10;
	}
`;

export const TrashCanWrapper = styled.span`
	position: fixed;
	color: white;
	z-index: 5000;
	left: 17%;
`;
