import { ComponentType } from 'react';
import {
	Link,
	Route,
	BrowserRouter as Router,
	Routes
  } from 'react-router-dom';
import { NavWrapper, TextWrapper } from './styles.css';

const NavHeader: ComponentType = () => {
	return (
		<NavWrapper>
			<TextWrapper>
				Enotion
			</TextWrapper>
			<TextWrapper>
				Notes
			</TextWrapper>
			<TextWrapper>
				About the creator
			</TextWrapper>
		</NavWrapper>
	)
}

// interface NavHeaderProps {

// }

export default NavHeader;
