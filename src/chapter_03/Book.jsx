import React from "react";
function Book(props) {
    return (
        <div>
            <h1>{'�� å�� �̸��� ${props.name}�Դϴ�.'} </h1>
            <h2>{'�� å�� �� ${props.numOfPage}�������� �̷��� �ֽ��ϴ�.'}</h2>
        </div>
    );
}
export default Book;