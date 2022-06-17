import styled from 'styled-components';

export const NavWrapper = styled.div`
	display: flex;
	justify-content: space-evenly;
	padding-top: 2%;
	width: 100%;
	height: 80px;
	border-bottom: 1px solid black;
	font-family: 'Codystar', cursive;
	font-weight: bold;
	color: white;
	transition: .5s;
`

export const TextWrapper = styled.div`
	font-size: 24px;
	padding-top: 2%;
	padding-left: 2%;
	padding-right: 2%;
	margin-bottom: 1%;
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
