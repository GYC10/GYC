import React from "react";
import Book from "./Book";

function Library(props){
	return (
		<div>
		<Book name = "ó�� ���� ���̽�" numOfPage = {300}/>
		<Book name = "ó�� ���� AWS" numOfPage = {400}/>
		<Book name = "ó�� ���� ����Ʈ" numOfPage = {500}/>
		</div>
	);
}

export default Library;