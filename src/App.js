import React from 'react';
import './styles.css'; // 引入自定义样式

const App = () => {
    return (
        <div>
            <head>
                <link rel="stylesheet" type="text/css" href="styles.css" />
                <title>白叶 - 创意无限 创新无极限</title>
                <link
                    rel="stylesheet"
                    crossorigin="anonymous"
                    href="https://cdn.jsdelivr.net/npm/misans@4.0.0/lib/Normal/MiSans-Bold.min.css"
                />
                <link rel="stylesheet" href="https://hmos.dongs.xyz/css/harmonyos_sans_sc.css" />
            </head>
            <body>
                <div className="nav-f">
                    <h2 className="logo">白叶</h2>
                    <nav className="navigation">
                        <a href="https://map.whiteleaf.cn/">地图</a>
                        <a href="https://qm.qq.com/q/J9q03TFrkO">交流群</a>
                        {/* <button className="btnLogin-popup">Login</button> */}
                    </nav>
                </div>
                <header>
                    <section className="home" id="home">
                        <div className="home-content">
                            <div className="main-content">
                                <h1 className="line1">WelCome to </h1>
                                <h1 className="line2">白叶</h1>
                            </div>
                            <p>欢迎加入我们的服务器，与更多的玩家一起畅玩游戏！</p>
                            <div className="main-button">
                                <a href="https://tldocs.whiteleaf.cn/%E5%85%A5%E9%97%A8/how2join" className="bt1">立即加入</a>
                                <a href="https://tldocs.whiteleaf.cn/" className="bt2">Wiki</a>
                            </div>
                        </div>
                    </section>
                </header>

                {/* 添加备案号 */}
                <footer className="footer">
                    <p>冀ICP备2024079575号-1</p>
                </footer>
            </body>
        </div>
    );
}

export default App;
