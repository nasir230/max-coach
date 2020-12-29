import React from 'react';
import {Link} from 'react-router-dom';
const Header =()=>{
    return(
        <>
    <div className="header-section header-shadow sticky-header section">
            <div className="header-inner">
                <div className="container position-relative">
                    <div className="row justify-content-between align-items-center">

                   
                        <div className="col-xl-3 col-auto">
                            <div className="header-logo">
                                <Link to="index.html">
                                    <img className="dark-logo" src="assets/images/logo/dark-logo.png" alt="Learts Logo"/>
                                    <img className="light-logo" src="assets/images/logo/light-logo.png" alt="Learts Logo"/>
                                </Link>
                            </div>
                        </div>
                 
                        <div className="col d-none d-xl-block position-static">
                            <nav className="site-main-menu menu-hover-1">
                                <ul>
                                    <li className="has-children position-static">
                                        <Link to="/"><span className="menu-text">Home</span></Link>
                                        <span className="menu-toggle"><i className="far fa-angle-down"></i></span>

                                        <ul className="mega-menu">
                                <li>
                                    <ul>
                                        <li><Link to="/contact"><span className="menu-text">MaxCoach Education <span className="badge">Hot</span></span></Link></li>
                                        <li><Link to="index-2.html"><span className="menu-text">Course Portal</span></Link></li>
                                        <li><Link to="index-3.html"><span className="menu-text">Distant Learning <span className="badge">Hot</span></span></Link></li>
                                        <li><Link to="index-4.html"><span className="menu-text">Multimedia Pedagogy</span></Link></li>
                                        <li><Link to="index-5.html"><span className="menu-text">Modern Schooling</span></Link></li>
                                        <li><Link to="index-6.html"><span className="menu-text">Remote Training</span></Link></li>
                                    </ul>
                                </li>
                                <li>
                                    <ul>
                                        <li><Link to="index-7.html"><span className="menu-text">Health Coaching</span></Link></li>
                                        <li><Link to="index-8.html"><span className="menu-text">Gym Coaching</span></Link></li>
                                        <li><Link to="index-9.html"><span className="menu-text">Business</span></Link></li>
                                        <li><Link to="index-10.html"><span className="menu-text">Artist <span className="badge primary">New</span></span></Link></li>
                                        <li><Link to="index-11.html"><span className="menu-text">Kitchen Coach <span className="badge primary">New</span></span></Link></li>
                                        <li><Link to="index-12.html"><span className="menu-text">Motivation <span className="badge primary">New</span></span></Link></li>
                                    </ul>
                                </li>
                                <li className="menu-item-50">
                                    <ul>
                                        <li><Link to="#"><img src="assets/images/menu/mega-menu.jpg" alt="menu-image"/></Link></li>
                                    </ul>
                                </li>
                            </ul>
                                    </li>
                                    <li className="has-children">
                                        <Link to="#"><span className="menu-text">Pages</span></Link>
                                        <span className="menu-toggle"><i className="far fa-angle-down"></i></span>
                                        <ul className="sub-menu">
                                            <li><Link to="start-here.html"><span className="menu-text">Start Here</span></Link></li>
                                            <li><Link to="success-story.html"><span className="menu-text">Success Story</span></Link></li>
                                            <li><Link to="about-me.html"><span className="menu-text">About me</span></Link></li>
                                            <li><Link to="about-us-1.html"><span className="menu-text">About us 01</span></Link></li>
                                            <li><Link to="about-us-2.html"><span className="menu-text">About us 02</span></Link></li>
                                            <li><Link to="about-us-3.html"><span className="menu-text">About us 03</span></Link></li>
                                            <li><Link to="contact-me.html"><span className="menu-text">Contact me</span></Link></li>
                                            <li><Link to="contact-us.html"><span className="menu-text">Contact us</span></Link></li>
                                            <li><Link to="purchase-guide.html"><span className="menu-text">Purchase Guide</span></Link></li>
                                            <li><Link to="privacy-policy.html"><span className="menu-text">Privacy Policy</span></Link></li>
                                            <li><Link to="terms-of-service.html"><span className="menu-text">Terms of Service</span></Link></li>
                                        </ul>
                                    </li>
                                    <li className="has-children">
                                        <Link to="#"><span className="menu-text">Courses</span></Link>
                                        <span className="menu-toggle"><i className="far fa-angle-down"></i></span>
                                        <ul className="sub-menu">
                                            <li><Link to="courses-grid-1.html"><span className="menu-text">Courses Grid 01</span></Link></li>
                                            <li><Link to="courses-grid-2.html"><span className="menu-text">Courses Grid 02</span></Link></li>
                                            <li><Link to="courses-grid-3.html"><span className="menu-text">Courses Grid 03</span></Link></li>
                                            <li><Link to="membership-levels.html"><span className="menu-text">Membership Levels</span></Link></li>
                                            <li><Link to="become-Link-teacher.html"><span className="menu-text">Become Link Teacher</span></Link></li>
                                            <li><Link to="profile.html"><span className="menu-text">Profile</span></Link></li>
                                            <li><Link to="checkout.html"><span className="menu-text">Checkout</span></Link></li>
                                            <li className="has-children">
                                                <Link to="course-details-sticky-feature-bar.html"><span className="menu-text">Single Layout</span></Link>
                                                <span className="menu-toggle"><i className="far fa-angle-down"></i></span>
                                                <ul className="sub-menu">
                                                    <li><Link to="course-details-free.html"><span className="menu-text">Free Course</span></Link></li>
                                                    <li><Link to="course-details-sticky-feature-bar.html"><span className="menu-text">Sticky Features Bar</span></Link></li>
                                                    <li><Link to="course-details-standard-sidebar.html"><span className="menu-text">Standard Sidebar</span></Link></li>
                                                    <li><Link to="course-details-no-sidebar.html"><span className="menu-text">No Sidebar</span></Link></li>
                                                </ul>
                                            </li>

                                        </ul>
                                    </li>
                                    <li className="has-children">
                                        <Link to="#"><span className="menu-text">Event</span></Link>
                                        <span className="menu-toggle"><i className="far fa-angle-down"></i></span>
                                        <ul className="sub-menu">
                                            <li><Link to="event.html"><span className="menu-text">Event</span></Link></li>
                                            <li><Link to="zoom-meetings.html"><span className="menu-text">Zoom Meetings</span></Link></li>
                                            <li><Link to="event-details.html"><span className="menu-text">Event Details</span></Link></li>
                                            <li><Link to="zoom-event-details.html"><span className="menu-text">Zoom Meeting Details</span></Link></li>
                                        </ul>
                                    </li>
                                    <li className="has-children">
                                        <Link to="#"><span className="menu-text">Blog</span></Link>
                                        <span className="menu-toggle"><i className="far fa-angle-down"></i></span>
                                        <ul className="sub-menu">
                                            <li><Link to="blog-grid.html"><span className="menu-text">Blog Grid</span></Link></li>
                                            <li><Link to="blog-masonry.html"><span className="menu-text">Blog Masonry</span></Link></li>
                                            <li><Link to="blog-classNameic.html"><span className="menu-text">Blog ClassNameic</span></Link></li>
                                            <li><Link to="blog-list.html"><span className="menu-text">Blog List</span></Link></li>
                                        </ul>
                                    </li>
                                    <li className="has-children">
                                        <Link to="#"><span className="menu-text">Shop</span></Link>
                                        <span className="menu-toggle"><i className="far fa-angle-down"></i></span>
                                        <ul className="sub-menu">
                                            <li><Link to="shop.html"><span className="menu-text">Shop Left Sidebar</span></Link></li>
                                            <li><Link to="shop-right-sidebar.html"><span className="menu-text">Shop Right Sidebar</span></Link></li>
                                            <li><Link to="shopping-cart.html"><span className="menu-text">Cart</span></Link></li>
                                            <li><Link to="shopping-cart-empty.html"><span className="menu-text">Cart Empty</span></Link></li>
                                            <li><Link to="wishlist.html"><span className="menu-text">Wishlist</span></Link></li>
                                            <li><Link to="product-details.html"><span className="menu-text">Single Product</span></Link></li>
                                            <li><Link to="my-account.html"><span className="menu-text">My Account</span></Link></li>
                                            <li><Link to="login-register.html"><span className="menu-text">Login Register</span></Link></li>
                                        </ul>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                     
                        <div className="col-xl-3 col-auto">
                            <div className="header-right">
                                <div className="inner">

                             
                                    <div className="header-login">
                                        <Link to="profile.html"><i className="far fa-user-circle"></i></Link>
                                    </div>
                                

                             
                                    <div className="header-search">
                                        <button className="header-search-toggle"><i className="far fa-search"></i></button>
                                        <div className="header-search-form">
                                            <form action="#">
                                                <input type="text" placeholder="Search..."/>
                                                <button><i className="fas fa-search"></i></button>
                                            </form>
                                        </div>
                                    </div>
                                   


                             
                                    <div className="header-mobile-menu-toggle d-xl-none ml-sm-2">
                                        <button className="toggle">
                                            <i className="icon-top"></i>
                                            <i className="icon-middle"></i>
                                            <i className="icon-bottom"></i>
                                        </button>
                                    </div>
                               
                                </div>
                            </div>
                        </div>
                   

                    </div>
                </div>
            </div>
        </div>
        </>
    );
}

export default Header;