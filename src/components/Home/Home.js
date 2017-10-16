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
                <h1>Welcome To Music World <strong>Website</strong></h1>
                <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc..</p>
                <a class="btn" href="/About">Find Out More</a>
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
                                        <p>Beyoncé Giselle Knowles was born in Houston, Texas, to Celestine "Tina" Knowles (née Beyincé), a hairdresser and salon owner, and Mathew Knowles, a Xerox sales manager. Beyoncé's name is a tribute to her mother's maiden name. Beyoncé's younger sister Solange is also a singer and a former back up dancer for Destiny's Child. Solange and Beyoncé are the first sisters to have both had No. 1 albums.[26] Mathew is African American, while Tina is of Louisiana Creole descent (African, Native American, and French). Through her mother, Beyoncé is a descendant of Acadian leader Joseph Broussard.</p>
                                        <small>Source: Spotify</small><br /><br />
                                        <button class="btn btn-info">Show</button>
                                    </div>
                                </div>
                                <div class="col-lg-6 col-md-6 col-sm-6">
                                    <div className="home-article">
                                        <img src="images/bey-2.jpg" className="img-responsive" />
                                        <h1>Bob Marley</h1>
                                        <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate.</p>
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