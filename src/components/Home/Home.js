import React from "react";
import "./Home.css";

const Home = () => (
    
    <div>
        <header class="v-header container">
            <div class="fullscreen-video-wrap">
                <video src="videoes/main-slide.mp4" autoplay="" loop="true">
                </video>
            </div>
            <div class="header-overlay"></div>
            <div class="header-content text-md-center">
                <h1>Welcome To Beyoncé <strong>Website</strong></h1>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Id temporibus perferendis necessitatibus numquam amet impedit explicabo? Debitis quasi ullam aperiam!</p>
                <a class="btn">Find Out More</a>
            </div>
        </header>

        <section class="contents">
            <div className="container">
                <div class="row">
                    <div class="col-lg-9 col-md-9 col-sm-12">
                        <div className="main-contents">
                            <div className="row">
                                <div class="col-lg-6 col-md-6 col-sm-6">
                                    <div className="home-article">
                                        <img src="images/bey-1.jpg" className="img-responsive" />
                                        <h1>Beyoncé</h1>
                                        <p>One of the most recognizable figures in contemporary music, Beyoncé rose to fame as the central member of pop-R&B group Destiny's Child before embarking on a multi-platinum, record-breaking solo career in 2001. Booming record sales, Grammy awards, movie roles, and marriage to rapper/CEO Jay-Z combined to heighten her profile in the 2000s. Billboard named her female artist of the decade, while the RIAA acknowledged that, through 64 gold and platinum certifications, she was the decade's top-selling artist. Once she released her fifth solo album in 2013, it was evident that the singer, songwriter, and dancer wasn't merely an entertainer but a progressive artist as well.</p>
                                        <small>Source: Spotify</small><br /><br />
                                        <button class="btn btn-info">Show</button>
                                    </div>
                                </div>
                                <div class="col-lg-6 col-md-6 col-sm-6">
                                    <div className="home-article">
                                        <img src="images/bey-2.jpg" className="img-responsive" />
                                        <h1>Beyoncé</h1>
                                        <p>One of the most recognizable figures in contemporary music, Beyoncé rose to fame as the central member of pop-R&B group Destiny's Child before embarking on a multi-platinum, record-breaking solo career in 2001. Booming record sales, Grammy awards, movie roles, and marriage to rapper/CEO Jay-Z combined to heighten her profile in the 2000s. Billboard named her female artist of the decade, while the RIAA acknowledged that, through 64 gold and platinum certifications, she was the decade's top-selling artist. Once she released her fifth solo album in 2013, it was evident that the singer, songwriter, and dancer wasn't merely an entertainer but a progressive artist as well.</p>
                                        <small>Source: Spotify</small><br /><br />
                                        <button class="btn btn-info">Show</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-3">
                        <sidebar>
                            <h3>SideBar</h3>
                        </sidebar>
                    </div>
                </div>
            </div>
        </section>
    </div>
)
    

export default Home;