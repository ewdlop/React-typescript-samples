import React, { useState, useEffect } from 'react';
import { reducer } from '../React-Redux/reducer';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { ConnectedTasksList } from '../React-Redux/TaskList';
import './Test.css';
const mystyle = {
    textAlign: 'center' as 'center',
    height: '500px'
};

const mystyle2 = {
    backgroundColor: 'rgba(255, 255, 255, 0.85)',
    textAlign: 'center' as 'center',
    height: '200px'
};

interface myState {
    scroller: number;
}

const store = createStore(reducer);

const TestList: React.FC = () => {

    const [myState, setMyState] = useState<myState>({ scroller: 0 });

    useEffect(() => {
        const handleScroll = () => {
            setMyState({ scroller: document.documentElement.scrollTop });
            if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
                const navbar: HTMLElement | null = document.getElementById("navbar");
                if (navbar) {
                    navbar.style.top = "0";
                }
            } else {
                const navbar: HTMLElement | null = document.getElementById("navbar");
                if (navbar) {
                    navbar.style.top = "-50px";
                }
            }
        }
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [myState])

    return (
        <Provider store={store}>
            {/* <ConnectedTasksList/> */}
            <div>
                <div id="navbar">
                    <a href="#home">Home</a>
                    <a href="#news">News</a>
                    <a href="#contact">Contact</a>
                </div>
                <div className="parallax-image img1">
                    <div style={mystyle}></div>
                </div>
                <div className="parallax-image img1">
                    <div style={mystyle2}></div>
                </div>
                <div className="parallax-image img2">
                    <div className="masonry">
                        <div className="item">
                            <img src='https://d2jv9003bew7ag.cloudfront.net/uploads/Geometric-Forms-in-Art.-Image-via-thevirtualinstructor.com_.jpg' />
                            <div className="overlay">
                                <div className="text">Hello World</div>
                            </div>
                        </div>
                        <div className="item">
                            <img src='https://th.bing.com/th/id/OIP.MJZzNhNtntF4kquZ9rEK-gHaFC?pid=Api&rs=1' />
                            <div className="overlay">
                                <div className="text">Hello World</div>
                            </div>
                        </div>
                        <div className="item">
                            <img src='https://images.designtrends.com/wp-content/uploads/2016/11/26133943/3D-Abstract-Geometric-Polygonal-Shape.jpg' />
                            <div className="overlay">
                                <div className="text">Hello World</div>
                            </div>
                        </div>
                        <div className="item">
                            <img src='https://img.freepik.com/free-photo/3d-depth-realism-background-3d-rendering_9941-215.jpg?size=626&ext=jpg' />
                            <div className="overlay">
                                <div className="text">Hello World</div>
                            </div>
                        </div>
                        <div className="item">
                            <img src='https://introspecs.com/wp-content/uploads/2013/07/folded6.jpg' />
                            <div className="overlay">
                                <div className="text">Hello World</div>
                            </div>
                        </div>
                        <div className="item">
                            <img src='https://upload.wikimedia.org/wikipedia/commons/a/ae/BallsRender.png' />
                            <div className="overlay">
                                <div className="text">Hello World</div>
                            </div>
                        </div>
                        <div className="item">
                            <img src='https://images.fineartamerica.com/images/artworkimages/mediumlarge/2/shape-and-shadow-tom-mc-nemar.jpg' />
                            <div className="overlay">
                                <div className="text">Hello World</div>
                            </div>
                        </div>
                        <div className="item">
                            <img src='https://www.pufferbelliestoys.com/components/com_virtuemart/shop_image/product/full/optical_ill_35dbc8013085bc.jpg' />
                            <div className="overlay">
                                <div className="text">Hello World</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="parallax-image img3">
                    <div style={mystyle2}></div>
                </div>
            </div>
        </Provider>
    );
}

export default TestList;