import React from 'react';

// 改value属性，用map实现li，将状态提升到父组件
class PageTurning extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            firstPage: 1,
            listPages: 1,
            currentPage: 1,
            totalPages: 1
        };
    }

    render() {
        return (
            <div className="page" >
                <ul>
                    <li><input type="button" value="1" className="button3" id="a" /></li>
                    <li><input type="button" value="2" className="button3" id="b" /></li>
                    <li><input type="button" value="3" className="button3" id="c" /></li>
                    <li><input type="button" value="4" className="button3" id="d" /></li>
                    <li><input type="button" value="5" className="button3" id="e" /></li>
                    <li><input type="button" value="6" className="button3" id="f" /></li>
                    <li><input type="button" value="7" className="button3" id="g" /></li>
                    <li><input type="button" value="8" className="button3" id="h" /></li>
                    <li><input type="button" value="9" className="button3" id="i" /></li>
                    <li><input type="button" value="..." className="button3" id="j" /></li>
                    <li><button></button></li>
                    <li style={{ marginLeft: '30px' }}>共<span id='k'>1</span>页</li>
                    <li>第<span id='l'>1</span>页</li>
                </ul>
            </div>
        );
    }
}

export default PageTurning;
