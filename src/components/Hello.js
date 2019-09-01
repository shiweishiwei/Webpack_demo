import React from 'react';
import "../style.css";
import "../page.css";

function Hello() {
    return (
        <div>
            <h1 className="title">This is a Hello sentence</h1>
            <p className="p">这里是正文</p>
            <div className="content">这里是内容</div>
            <div className="pic"></div>
        </div>
    )
}

export default Hello;