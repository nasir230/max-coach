import React from 'react';

const Hero =()=>{
    return(
        <>
<div className="intro2-section section">

<div className="container">
    <div className="row row-cols-lg-2 row-cols-1 max-mb-n30">

        {/* <!-- Intro One Content Start --> */}
        <div className="col align-self-center max-mb-30" data-aos="fade-up">
            <div className="intro2-content text-center text-md-left">
                <h2 className="title">Distant learning for further expansion </h2>
                <div className="desc">
                    <p>Learning is a life-long journey that in fact we never find the terminate stop. Stop searching, enjoy the process.</p>
                </div>
                <a href="#" className="btn btn-primary btn-hover-secondary"><i className="far fa-download mr-3"></i> Download free guide</a>
                <a className="link link-lg" href="course-details-free.html"> Have questions?​ <mark>Get Free Form <i className="far fa-long-arrow-right"></i></mark></a>
            </div>
        </div>
        {/* <!-- Intro One Content End --> */}

        {/* <!-- Intro One Course Start --> */}
        <div className="col max-mb-30" data-aos="fade-up">
            <div className="contact-image intro2-image">
                <img src="assets/images/contact/contact.jpg" alt=""/>

                {/* <!-- Animation Shape Start --> */}
                <div className="shape shape-1 scene">
                    <span data-depth="3">
                        <img src="assets/images/shape-animation/about-shape-1.png" alt=""/>
                    </span>
                </div>
                <div className="shape shape-2 scene">
                    <span data-depth="-3"><img src="assets/images/shape-animation/about-shape-1.png" alt=""/></span>
                </div>
                <div className="shape shape-3 scene">
                    <span data-depth="4">shape 3</span>
                </div>
                <div className="shape shape-4 scene">
                    <span data-depth="4"><img src="assets/images/shape-animation/shape-1.png" alt=""/></span>
                </div>
                <div className="shape shape-5 scene">
                    <span data-depth="4"><img src="assets/images/shape-animation/nwesletter-shape-2.png" alt=""/></span>
                </div>
                {/* <!-- Animation Shape End --> */}
            </div>
        </div>
        {/* <!-- Intro One Course End --> */}

    </div>
</div>

</div>
        </>
    );
}

export default Hero;