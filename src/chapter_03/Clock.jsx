import React from "react";

function Clock(props) {
    return (
        <div>
            <h1> �ȳ� ����Ʈ!
            </h1>
            <h2> ���� �ð�: {new Date().toLocaleDateString()} </h2>        </div>
    )
}
export default Clock;