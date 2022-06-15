import React, { ComponentType } from "react";
import { Draggable } from "react-beautiful-dnd";
import styled from "styled-components";
import { Note } from "../types";

interface NoteItemProps {
	note: Note;
	index: number;
}

const NoteItem: ComponentType<NoteItemProps> = ({ note, index }) => {
	const grid = 8;

	const NoteItem = styled.div`
	width: 200px;
	border: 1px solid grey;
	margin-bottom: ${grid}px;
	background-color: lightblue;
	padding: ${grid}px;
`;
	return (
		<Draggable draggableId={note.content} index={index}>
			{provided => (
			<NoteItem
				ref={provided.innerRef}
				{...provided.draggableProps}
				{...provided.dragHandleProps}
			>
				{note.content}
			</NoteItem>
			)}
		</Draggable>
	);
}

export default NoteItem;
