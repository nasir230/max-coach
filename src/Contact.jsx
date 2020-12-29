import React from 'react';

const Contact =()=>{
    return(
        <>
       <div class="contact-information-section section section-padding-bottom">
            <div class="container">
                <div class="row">
                    <div class="col-lg-4">
                        <div class="contact-title">
                            <span class="sub-title">Get excited already?</span>
                            <h2 class="title">Reach me!</h2>
                        </div>

                        <div class="contact-info-wrap max-mb-n50">
                            {/* <!-- Single Contact Info Start --> */}
                            <div class="contact-info max-mb-50">
                                <div class="icon">
                                    <i class="fal fa-map-marker-alt"></i>
                                </div>
                                <div class="info">
                                    <h4 class="title"> Address</h4>
                                    <span class="info-text"> 1800 Abbot Kinney Blvd. Unit D & E Venice</span>
                                </div>
                            </div>
                            {/* <!-- Single Contact Info End --> */}

                            {/* <!-- Single Contact Info Start --> */}
                            <div class="contact-info max-mb-50">
                                <div class="icon">
                                    <i class="fal fa-phone"></i>
                                </div>
                                <div class="info">
                                    <h4 class="title"> Contact</h4>
                                    <span class="info-text"> Mobile: <strong>(+88) - 1990 - 6886</strong> 
                                        <br/> 
                                        Hotline: <strong>1800 – 1102</strong>
                                        <br/>
                                        Mail: <a href="mailto:hello@hasthemes.com">hello@hasthemes.com</a>
                                    </span>
                                </div>
                            </div>
                            {/* <!-- Single Contact Info End --> */}

                            {/* <!-- Single Contact Info Start --> */}
                            <div class="contact-info max-mb-50">
                                <div class="icon">
                                    <i class="fal fa-clock"></i>
                                </div>
                                <div class="info">
                                    <h4 class="title"> Hour of operation</h4>
                                    <span class="info-text"> Monday – Friday : 09:00 – 20:00 <br/> Sunday &amp; Saturday: 10:30 – 22:00</span>
                                </div>
                            </div>
                            {/* <!-- Single Contact Info End --> */}
                        </div>

                    </div>
                    <div class="col-lg-8">
                        <div class="contact-image mt-sm-50 mt-xs-50">
                            <img src="assets/images/contact/contact.jpg" alt=""/>

                            {/* <!-- Animation Shape Start --> */}
                            <div class="shape shape-1 scene">
                                <span data-depth="3">
                                    <img src="assets/images/shape-animation/about-shape-1.png" alt=""/>
                                </span>
                            </div>
                            <div class="shape shape-2 scene">
                                <span data-depth="-3"><img src="assets/images/shape-animation/about-shape-1.png" alt=""/></span>
                            </div>
                            <div class="shape shape-3 scene">
                                <span data-depth="4">shape 3</span>
                            </div>
                            <div class="shape shape-4 scene">
                                <span data-depth="4"><img src="assets/images/shape-animation/shape-1.png" alt=""/></span>
                            </div>
                            <div class="shape shape-5 scene">
                                <span data-depth="4"><img src="assets/images/shape-animation/nwesletter-shape-2.png" alt=""/></span>
                            </div>
                            {/* <!-- Animation Shape End --> */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    );
}

export default Contact;