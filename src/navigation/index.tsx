import React, { ComponentType } from 'react';
import {
	BrowserRouter as Router,
	Routes,
	Route,
	Link
  } from 'react-router-dom';
import { NavWrapper, TextWrapper } from './styles.css';

interface NavHeaderProps {

}

const NavHeader: ComponentType<NavHeaderProps> = () => {
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

export default NavHeader;
