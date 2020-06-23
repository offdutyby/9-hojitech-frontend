import React, { Component } from 'react';
import './header.scss'

class Header extends Component {
    render() {
        return (
            <div>
                <header>
                    <div className="haederTop">
                        <div className="headerTopLeft">
                            <a href="/#"><img src="https://www.logitech.com/content/dam/logitech/common/header/logitechg-bottom.svg" alt="logitechG"></img></a>
                            <a href="/#"><img src="https://www.logitech.com/content/dam/logitech/common/header/jaybird-overlay.svg" alt="jaybirdsoprt"></img></a>
                            <a href="/#"><img src="https://www.logitech.com/content/dam/logitech/common/header/ue-bottom.svg" alt="ultimateears"></img></a>
                        </div>
                        <div className="headerTopRight">
                            <a href="/#">ko</a>
                            <a href="/#">내 계정</a>
                        </div>
                    </div>
                    <div className="headerMain">
                        <div className="headerMainRight">
                            <a href="/#"><img src="https://www.logitech.com/content/dam/logitech/common/header/logitechg-overlay.svg" alt="mainlogo"></img></a>
                        </div>
                        <div className="headerMainCenter">
                            <div className ="mainCategory"><a href="/#">제품</a></div>
                            <div className ="mainCategory"><a href="/#">솔루션</a></div>
                            <div className ="mainCategory"><a href="/#">비즈니스</a></div>
                            <div className ="mainCategory"><a href="/#">지원</a></div>
                        </div>
                        <div className="headerMainLeft">
                            <input className="searchInput" type="text" placeholder="검색"></input>
                        </div>
                    </div>
                </header>
            </div>
        );
    }
}

export default Header;