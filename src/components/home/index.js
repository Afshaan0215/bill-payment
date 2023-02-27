import React from 'react'

const Home = () => {
    return (
        <div>

            <section id="sec1" className="">
                <div className="main">
                    {/* <nav className="navbar navbar-expand-sm">
                        <div className="container-fluid ">
                            <img src="https://askproject.net/bankai/wp-content/uploads/sites/32/2021/10/logo_Asset-1_2-800x894.png"
                                className="img1" alt="" />
                            <div className="vr bg-light mx-md-5"></div>
                            <button className="navbar-toggler border-light" type="button" data-bs-toggle="collapse"
                                data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                                aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon btn btn-bg-none"></span>
                            </button>
                            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                <ul className="navbar-nav nt text-dark-subtle mb-2 mb-lg-0">
                                    <li className="nav-item">
                                        <a className="fs-6 nav-link text-light active" aria-current="page" href="#">Home</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="fs-6 nav-link" href="#">About</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="fs-6 nav-link" href="#">Services</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="fs-6 nav-link" href="#">Card List</a>
                                    </li>
                                    <li className="nav-item dropdown">
                                        <a className="fs-6 nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                            Pages
                                        </a>
                                    </li>
                                </ul>
                               
                                <div className="w-25 align-items-end">
                                    <ul className="navbar-nav nt me-auto mb-2 mb-lg-0">
                                        <li className="nav-item">
                                            <a className="fs-6 nav-link" href="#">Contact</a>
                                        </li>
                                        <li className="nav-item log">
                                            <a href="" className="nav-link px-3 fs-6 text-light">Log In</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </nav> */}
                    <nav class="navbar navbar-expand-sm ">
                        <div class="container">
                            <a class="navbar-brand" href="javascript:void(0)">
                            <img src="https://askproject.net/bankai/wp-content/uploads/sites/32/2021/10/logo_Asset-1_2-800x894.png"
                                className="img1" alt="" />
                            </a>
                            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#mynavbar">
                                <span class="navbar-toggler-icon"></span>
                            </button>
                            <div class="collapse navbar-collapse" id="mynavbar">
                                <ul class="navbar-nav me-auto">
                                    <li className="nav-item">
                                        <a className="fs-6 nav-link text-light active " aria-current="page" href="#">Home</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="fs-6 nav-link text-light" href="#">About</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="fs-6 nav-link text-light" href="#">Services</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="fs-6 nav-link text-light" href="#">Card List</a>
                                    </li>
                                </ul>
                                <form class="d-flex">
                                <ul class="navbar-nav me-auto">
                                <li className="nav-item">
                                        <a className="fs-6 nav-link text-light" href="#">Contact</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="fs-6 nav-link text-light" href="#">Login</a>
                                    </li>
                                    </ul>
                                </form>
                            </div>
                        </div>
                    </nav>
                    <div>
                        <div className="row mt-md-5 ps-md-5 text-light text-decoration-none">
                            <div className="col-md-6 col-sm-12 ps-md-5">
                                <h1 className=" mx-md-5 p-sm-5 mx-5 my-2 w-md-75">You Can Do more with Right Card</h1>
                                <p className="text-secondary m-md-5 p-5 w-md-75">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
                                <div className="w-md-100 d-flex  p-4">
                                    <span className="my-md-5 sign fs-6">
                                        <a href="" className="text-decoration-none text-light  px-4 py-3 fs-6">Sign Up</a>
                                    </span>
                                    <span className="get">
                                        <a href="" className="nav-link m-md-5">Get Started <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-chevron-right" viewBox="0 0 16 16">
                                            <path fillRule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z" />
                                        </svg></a>
                                    </span>
                                </div>
                                <div className="d-flex justify-content-around ms-md-5 w-md-50 mx-md-5 box mb-md-5">
                                    <div className="align-items-center px-4 py-3">
                                        <h1>30K+</h1>
                                        <b>Happy <br /> Customer</b>
                                    </div>
                                    <div className="align-items-center px-4 py-3">
                                        <h1>15+</h1>
                                        <b>Years <br /> Experience</b>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 col-sm-12 mt-sm-5 coln position-relative">
                                <img src="https://askproject.net/bankai/wp-content/uploads/sites/32/2021/10/Credit_Card_Mockup_1143-1.png" className="w-100" alt="" />
                                <div className="graph px-md-3 py-md-4">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="75" height="50" fill="currentColor" className="bi bi-graph-up-arrow" viewBox="0 0 16 16">
                                        <path fillRule="evenodd" d="M0 0h1v15h15v1H0V0Zm10 3.5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 .5.5v4a.9.5 0 0 1-1 0V4.9l-3.613 4.417a.5.5 0 0 1-.74.037L7.06 6.767l-3.656 5.027a.5.5 0 0 1-.808-.588l4-5.5a.5.5 0 0 1 .758-.06l2.609 2.61L13.445 4H10.5a.5.5 0 0 1-.5-.5Z" />
                                    </svg>
                                </div>
                                <div className="card px-md-3 py-md-4">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="75" height="50" fill="currentColor" className="bi bi-credit-card-fill" viewBox="0 0 16 16">
                                        <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v1H0V4zm0 3v5a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7H0zm3 2h1a1 1 0 0 1 1 1v1a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1v-1a1 1 0 0 1 1-1z" />
                                    </svg>
                                </div>
                                <div className="doll px-md-3 py-md-4">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="75" height="50" fill="currentColor" className="bi bi-currency-dollar" viewBox="0 0 16 16">
                                        <path d="M4 10.781c.148 1.667 1.513 2.85 3.591 3.003V15h1.043v-1.216c2.27-.179 3.678-1.438 3.678-3.3 0-1.59-.947-2.51-2.956-3.028l-.722-.187V3.467c1.122.11 1.879.714 2.07 1.616h1.47c-.166-1.6-1.54-2.748-3.54-2.875V1H7.591v1.233c-1.939.23-3.27 1.472-3.27 3.156 0 1.454.966 2.483 2.661 2.917l.61.162v4.031c-1.149-.17-1.94-.8-2.131-1.718H4zm3.391-3.836c-1.043-.263-1.6-.825-1.6-1.616 0-.944.704-1.641 1.8-1.828v3.495l-.2-.05zm1.591 1.872c1.287.323 1.852.859 1.852 1.769 0 1.097-.826 1.828-2.2 1.939V8.73l.348.086z" />
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* <!-- section 2 --> */}
            <section id="section2">
                <div className="container p-2 animated fadeInUp">
                    <div className="row mt-5 p-5 ">
                        <div className="col-md-6 col-sm-12 p-5">
                            <h1 className="heading1 "><b> A Right Choice <br /> Changes Everything</b></h1> <br />
                            <div>
                                <p className="paraText">Lorem ipsum dolor sit amet, consectetur adipiscing elit.Ut elit
                                    tellus, luctus nec ullamcorper mattis,pulvinar dapibus leo.</p>
                            </div> <br />
                            <div className="my-3">
                                <button type="button " className="btn cardBlueColor rounded-0 btn-sign-up px-4">Learn More
                                    <svg xmlns="http://www.w3.org/2000/svg" width="15" height="20" fill="currentColor"
                                        className="bi bi-arrow-right" viewBox="0 0 16 16">
                                        <path fillRule="evenodd"
                                            d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z" />
                                    </svg></button>
                            </div>
                        </div>
                        <div className="col-md-6 col-sm-12 py-5">
                            <div className="row">
                                <div className="col-md-6 col-sm-12 my-3">
                                    <div className=" text-center">
                                        <div className="card-body border borderBlue ">

                                            <b> <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" className="iconsColor m-5 bi bi-unlock-fill" fill="currentColor"
                                                viewBox="0 0 16 16">
                                                <path
                                                    d="M11 1a2 2 0 0 0-2 2v4a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2h5V3a3 3 0 0 1 6 0v4a.5.5 0 0 1-1 0V3a2 2 0 0 0-2-2z" />
                                            </svg>

                                            </b>
                                            <h4 className="elementary-heading-title elementary-size-default py-2"> <b>Most Secure <br />
                                                Payments </b></h4>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-md-6 col-sm-12  ">
                                    <div className=" text-center my-3">
                                        <div className="card-body cardBlueColor text-light">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" className="m-5 bi bi-search" fill="currentColor"
                                                viewBox="0 0 16 16">
                                                <path
                                                    d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                                            </svg>
                                            <h4 className="elementary-heading-title elementary-size-default py-2"><b> No Hidden <br /> Fees</b>
                                            </h4>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <br />
                            <div className="row">
                                <div className="col-md-6 col-sm-12">
                                    <div className=" text-center my-3">
                                        <div className="card-body border borderBlue ">
                                            <b><svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" className="iconsColor m-5 bi bi-arrow-repeat" fill="currentColor"
                                                viewBox="0 0 16 16">
                                                <path
                                                    d="M11.534 7h3.932a.25.25 0 0 1 .192.41l-1.966 2.36a.25.25 0 0 1-.384 0l-1.966-2.36a.25.25 0 0 1 .192-.41zm-11 2h3.932a.25.25 0 0 0 .192-.41L2.692 6.23a.25.25 0 0 0-.384 0L.342 8.59A.25.25 0 0 0 .534 9z" />
                                                <path fillRule="evenodd"
                                                    d="M8 3c-1.552 0-2.94.707-3.857 1.818a.5.5 0 1 1-.771-.636A6.002 6.002 0 0 1 13.917 7H12.9A5.002 5.002 0 0 0 8 3zM3.1 9a5.002 5.002 0 0 0 8.757 2.182.5.5 0 1 1 .771.636A6.002 6.002 0 0 1 2.083 9H3.1z" />
                                            </svg></b>
                                            <h4 className="elementary-heading-title elementary-size-default py-2"> <b >All In One <br /> Feature</b>
                                            </h4>

                                        </div>
                                    </div>
                                </div>

                                <div className="col-md-6 col-sm-12">
                                    <div className=" text-center my-3">
                                        <div className="card-body border borderBlue ">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" className="iconsColor m-5 bi bi-qr-code" fill="currentColor"
                                                viewBox="0 0 16 16" color="primary">
                                                <path d="M2 2h2v2H2V2Z" />
                                                <path d="M6 0v6H0V0h6ZM5 1H1v4h4V1ZM4 12H2v2h2v-2Z" />
                                                <path d="M6 10v6H0v-6h6Zm-5 1v4h4v-4H1Zm11-9h2v2h-2V2Z" />
                                                <path
                                                    d="M10 0v6h6V0h-6Zm5 1v4h-4V1h4ZM8 1V0h1v2H8v2H7V1h1Zm0 5V4h1v2H8ZM6 8V7h1V6h1v2h1V7h5v1h-4v1H7V8H6Zm0 0v1H2V8H1v1H0V7h3v1h3Zm10 1h-1V7h1v2Zm-1 0h-1v2h2v-1h-1V9Zm-4 0h2v1h-1v1h-1V9Zm2 3v-1h-1v1h-1v1H9v1h3v-2h1Zm0 0h3v1h-2v1h-1v-2Zm-4-1v1h1v-2H7v1h2Z" />
                                                <path d="M7 12h1v3h4v1H7v-4Zm9 2v2h-3v-1h2v-1h1Z" />
                                            </svg>
                                            <h4 className="elementary-heading-title elementary-size-default py-2"><b >Easy Payment <br /> Methods</b>
                                            </h4>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* <!-- end --> */}

            {/* <!-- s3 start --> */}
            <section id="section3">
                <div className="main">
                    <div className=" fontStylew">
                        <div className="row container mt-5">
                            <div className="col-lg-7 col-md-6 col-sm-12 col-xs-12 ">
                                <img width="100%"
                                    src="https://askproject.net/bankai/wp-content/uploads/sites/32/2021/10/Credit_Card_Mockup_1161.png"
                                    alt="cards" />
                            </div>
                            <div className="col-lg-5 col-md-6 col-sm-12 col-xs-12 mt-5">
                                <h1 className="font py-2"><b> Explore the unexplored <br /> with Bankai</b></h1><br />
                                <p className="paraText px-5">Lorem ipsum dolor sit amet,
                                    consectetur adipiscing elite.Sed et libero tempus,accumsan
                                    arcu vitae,posuere tellus.Cras semper purus non <br />
                                    condimentum posuere.</p><br />
                                <div className="mx-5">
                                    <button type="button " className="btn cardBlueColor rounded-0 btn-sign-up px-4">Learn More
                                        <svg xmlns="http://www.w3.org/2000/svg" width="15" height="20" fill="currentColor"
                                            className="bi bi-arrow-right" viewBox="0 0 16 16">
                                            <path fillRule="evenodd"
                                                d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z" />
                                        </svg></button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* <!-- end --> */}


            {/* <!-- s4 --> */}
            <section id="section4">
                <div className="container mt-3 p-5">
                    <div className="row p-5">
                        <div className="col-md-5 col-sm-12 ">
                            <h1 className=" p-1 "><b><strong> card that speaks for you</strong></b></h1>
                            <p className="py-3 an paraText">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
                                tellus, luctus
                                nec ullamcorper mattis.</p>
                            <button type="button" className="btn text-light btn-lg rounded-0 btn-sign-up">
                                contact us <span><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                                    fill="currentColor" className="bi bi-arrow-right" viewBox="0 0 16 16">
                                    <path fillRule="evenodd"
                                        d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z" />
                                </svg></span>
                            </button>
                        </div>
                        <div className="col-md-7  ">

                            <div className="row mt-5 justify-content-between an">
                                <div className="col-md-4 text-center p-3     col-sm-12">
                                    <div className=" card div1 ">
                                        <div className="py-5 px-2 text-primary">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" className="iconColor bi bi-unlock" fill="currentColor"
                                                viewBox="0 0 16 16">
                                                <path
                                                    d="M11 1a2 2 0 0 0-2 2v4a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2h5V3a3 3 0 0 1 6 0v4a.5.5 0 0 1-1 0V3a2 2 0 0 0-2-2zM3 8a1 1 0 0 0-1 1v5a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V9a1 1 0 0 0-1-1H3z" />
                                            </svg>
                                        </div>
                                        <h3 className="px-1 py-2">Transfer</h3>
                                    </div>
                                </div>
                                <div className="col-md-4  text-center p-3   col-sm-12 ">
                                    <div className=" card div1 ">
                                        <div className="py-5 px-2 text-primary">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" className="iconColor bi bi-search" fill="currentColor"
                                                viewBox="0 0 16 16">
                                                <path
                                                    d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                                            </svg>
                                        </div>
                                        <h3 className="px-3 py-2">Paybill</h3>
                                    </div>
                                </div>

                                <div className="col-md-4  text-center p-3     col-sm-12">
                                    <div className=" card  text-white lastCard">
                                        <div className="py-5 px-2 ">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" className="iconColorWhite bi bi-search" fill="currentColor"
                                                viewBox="0 0 16 16">
                                                <path
                                                    d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                                            </svg>
                                        </div>
                                        <h3 className="px-1 py-2">e-wallet</h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <br />
                    <br />
                    <div className="row mt-5 justify-content-between an">
                        <div className="col-md-2 col-sm-12 text-center">
                            <div className="number-percentage-wraper">
                                <h1 className="number-percentage" data-value="15" data-animation-duration="3500"
                                    data-style="static"><b>15 k</b><sup className="text-primary">+</sup></h1>
                            </div>
                            <p className="p1">satisfied client</p>

                        </div>
                        <div className="col-md-2 col-sm-12 text-center">
                            <h1> <b>120 M</b><sup className="text-primary">+</sup> </h1>
                            <p className="p1">total transaction</p>
                        </div>
                        <div className="col-md-2 col-sm-12 text-center">
                            <h1><b>14 k</b><sup className="text-primary">+</sup></h1>
                            <p className="p1">active user</p>
                        </div>
                        <div className="col-md-2 col-sm-12 text-center">
                            <h1><b>1500</b><sup className="text-primary">+</sup></h1>
                            <p className="p1">positive reviews</p>
                        </div>
                    </div>
                </div>
            </section>
            {/* <!-- end --> */}

            {/* <!-- s5 --> */}
            <section id="section5">

                <div className="row px-2 mx-5 mt-5">

                    <div className="cards col-md-6 col-sm-6 col-lg-6 ">
                        <img src="https://askproject.net/bankai/wp-content/uploads/sites/32/2021/10/Credit_Card_Mockup_1153-1.png"
                            alt="cards" width="100%" height="90%" className="pt-5" />
                    </div>

                    <div className="text col-md-6 col-sm-6 col-lg-6 ">
                        <h1 className="text1" id="font"><b> Choose your own <br />Unique Credit Card</b></h1>
                        <br />
                        <p className="text2" id="font">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et libero
                            tempus, accumsan arcu vitae, posuere tellus. Cras semper purus non condimentum posuere.</p>
                        <br />

                        <button type="button" className="btn" id="font">Sign Up Now &nbsp<svg xmlns="http://www.w3.org/2000/svg"
                            width="25" height="25" fill="currentColor" className="bi bi-arrow-right" viewBox="0 0 16 16">
                            <path fillRule="evenodd"
                                d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z" />
                        </svg>
                        </button>

                    </div>
                </div>

            </section>
            {/* <!-- end --> */}

            {/* <!-- section 6 --> */}
            <section className="section6 " id="section6">
                <div className="container ">
                    <div className="row mt-5">
                        <div className="col-md-10 col-sm-12 p-5">
                            <h1 className="text-bolder txtt ">What Client say about our <br /> Services</h1>
                        </div>
                        <div className="col-md-2 col-sm-12">
                            <button type="button " className="btn cardBlueColor rounded-0 btn-sign-up p-3 mx-5">See More
                                <svg xmlns="http://www.w3.org/2000/svg" width="15" height="20" fill="currentColor"
                                    className="bi bi-arrow-right" viewBox="0 0 16 16">
                                    <path fillRule="evenodd"
                                        d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z" />
                                </svg></button>                </div>
                    </div>
                </div>
            </section>
            <section className="section6 py-5 " id="section6">
                <div className="container py-5">
                    <div className="row justify-content-between">
                        <div className="col-md-4">
                            <div className="card px-3">
                                <div className="card-body">
                                    <h5 className="card-title"><span>&starf;</span>
                                        <span>&starf;</span>
                                        <span>&starf;</span>
                                        <span>&starf;</span>
                                        <span>&starf;</span>
                                    </h5>
                                    <p className="card-text txt">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et
                                        libero tempus, accumsan arcu vitae, posuere tellus.</p>
                                    <div className="row">
                                        <div className="col-3"><img
                                            src="https://askproject.net/bankai/wp-content/uploads/sites/32/2021/10/portrait-of-smiling-young-woman-sitting-at-desk-CP6L59N.jpeg"
                                            className="border rounded-pill w-100" alt="Man" />
                                        </div>
                                        <div className="col-6 py-2">
                                            <h5>Jane Adams</h5>
                                            <p className="para">Client</p>
                                        </div>
                                        <div className="col-3">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="76" height="96" fill="currentColor"
                                                className="bi bi-quote" viewBox="0 0 16 16">
                                                <path
                                                    d="M12 12a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1h-1.388c0-.351.021-.703.062-1.054.062-.372.166-.703.31-.992.145-.29.331-.517.559-.683.227-.186.516-.279.868-.279V3c-.579 0-1.085.124-1.52.372a3.322 3.322 0 0 0-1.085.992 4.92 4.92 0 0 0-.62 1.458A7.712 7.712 0 0 0 9 7.558V11a1 1 0 0 0 1 1h2Zm-6 0a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1H4.612c0-.351.021-.703.062-1.054.062-.372.166-.703.31-.992.145-.29.331-.517.559-.683.227-.186.516-.279.868-.279V3c-.579 0-1.085.124-1.52.372a3.322 3.322 0 0 0-1.085.992 4.92 4.92 0 0 0-.62 1.458A7.712 7.712 0 0 0 3 7.558V11a1 1 0 0 0 1 1h2Z" />
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="card">
                                <div className="card-body">
                                    <h5 className="card-title"><span>&starf;</span>
                                        <span>&starf;</span>
                                        <span>&starf;</span>
                                        <span>&starf;</span>
                                        <span>&starf;</span>
                                    </h5>
                                    <p className="card-text txt">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et
                                        libero tempus, accumsan arcu vitae, posuere tellus.</p>
                                    <div className="row">
                                        <div className="col-3"><img
                                            src="https://askproject.net/bankai/wp-content/uploads/sites/32/2021/10/black-man-portrait-on-a-pink-wall-background-282LHHH.jpg"
                                            className="border rounded-pill w-100" alt="women" width="100%" />
                                        </div>
                                        <div className="col-6 py-2">
                                            <h5>Vincent Mark</h5>
                                            <p className="para">Client</p>
                                        </div>
                                        <div className="col-3">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="76" height="96" fill="currentColor"
                                                className="bi bi-quote" viewBox="0 0 16 16">
                                                <path
                                                    d="M12 12a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1h-1.388c0-.351.021-.703.062-1.054.062-.372.166-.703.31-.992.145-.29.331-.517.559-.683.227-.186.516-.279.868-.279V3c-.579 0-1.085.124-1.52.372a3.322 3.322 0 0 0-1.085.992 4.92 4.92 0 0 0-.62 1.458A7.712 7.712 0 0 0 9 7.558V11a1 1 0 0 0 1 1h2Zm-6 0a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1H4.612c0-.351.021-.703.062-1.054.062-.372.166-.703.31-.992.145-.29.331-.517.559-.683.227-.186.516-.279.868-.279V3c-.579 0-1.085.124-1.52.372a3.322 3.322 0 0 0-1.085.992 4.92 4.92 0 0 0-.62 1.458A7.712 7.712 0 0 0 3 7.558V11a1 1 0 0 0 1 1h2Z" />
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="card">
                                <div className="card-body">
                                    <h5 className="card-title"><span>&starf;</span>
                                        <span>&starf;</span>
                                        <span>&starf;</span>
                                        <span>&starf;</span>
                                        <span>&starf;</span>
                                    </h5>
                                    <p className="card-text txt">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et
                                        libero tempus, accumsan arcu vitae, posuere tellus.</p>
                                    <div className="row">
                                        <div className="col-3"><img
                                            src="https://askproject.net/bankai/wp-content/uploads/sites/32/2021/10/portrait-of-woman-HAG7CC5.jpg"
                                            className="border rounded-pill w-100" alt="women"
                                        /></div>
                                        <div className="col-6 py-2">
                                            <h5>Amanda Smith</h5>
                                            <p className="para">Client</p>
                                        </div>
                                        <div className="col-3">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="76" height="96" fill="currentColor"
                                                className="bi bi-quote" viewBox="0 0 16 16">
                                                <path
                                                    d="M12 12a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1h-1.388c0-.351.021-.703.062-1.054.062-.372.166-.703.31-.992.145-.29.331-.517.559-.683.227-.186.516-.279.868-.279V3c-.579 0-1.085.124-1.52.372a3.322 3.322 0 0 0-1.085.992 4.92 4.92 0 0 0-.62 1.458A7.712 7.712 0 0 0 9 7.558V11a1 1 0 0 0 1 1h2Zm-6 0a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1H4.612c0-.351.021-.703.062-1.054.062-.372.166-.703.31-.992.145-.29.331-.517.559-.683.227-.186.516-.279.868-.279V3c-.579 0-1.085.124-1.52.372a3.322 3.322 0 0 0-1.085.992 4.92 4.92 0 0 0-.62 1.458A7.712 7.712 0 0 0 3 7.558V11a1 1 0 0 0 1 1h2Z" />
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* <!-- end --> */}



            {/* <!-- s7 --> */}
            <section className="wholeBody py-5" id="s7">
                <div className="p-1">
                    <h1 className="articles py-5"><strong><b> Our Articles</b></strong></h1>
                    <p className="para py-5">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed dolor enim,euismod nec<br />
                        ullamcorper tempor, maximus fermentum leo.</p>
                </div>
                <div className="row px-5">
                    <div className="col-md-4 col-sm-12 col-lg-4 p-2">
                        <div className="card ">
                            <div className="card-body p-3">
                                <div className="mt-3 ">
                                    <a
                                        href="https://askproject.net/bankai/wp-content/uploads/sites/32/2021/10/cardmapr-To2HQm-4688-unsplash-1024x684.jpg">
                                        <img src="https://askproject.net/bankai/wp-content/uploads/sites/32/2021/10/cardmapr-To2HQm-4688-unsplash-1024x684.jpg"
                                            width="100%" height="100%" className="imagess"
                                            alt="Federal Bank appoints the new directors on board" />
                                    </a>
                                    <a className="fs-4 text-decoration-none text-dark"
                                        href="https://askproject.net/bankai/wp-content/uploads/sites/32/2021/10/cardmapr-To2HQm-4688-unsplash-1024x684.jpg">
                                        <strong className="mainText">Federal Bank appoints the new directors on board</strong></a>
                                </div>

                                <div>

                                    <p className="p-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris finibus…</p>
                                </div>
                                <div>
                                    <a className="text-decoration-none readmore"
                                        href="https://askproject.net/bankai/wp-content/uploads/sites/32/2021/10/cardmapr-To2HQm-4688-unsplash-1024x684.jpg">ReadMore
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                            className="bi bi-arrow-right" viewBox="0 0 16 16">
                                            <path fillRule="evenodd"
                                                d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z" />
                                        </svg></a>
                                </div>
                            </div>

                        </div>

                    </div>
                    <div className="col-md-4 col-sm-12 col-lg-4 p-2">
                        <div className="card">
                            <div className="card-body">
                                <div className="mt-3">
                                    <a
                                        href="https://askproject.net/bankai/wp-content/uploads/sites/32/2021/10/emil-kalibradov-2s9N9qHsSCI-unsplash-1024x684.jpg">
                                        <img className="imagessz"
                                            src="https://askproject.net/bankai/wp-content/uploads/sites/32/2021/10/emil-kalibradov-2s9N9qHsSCI-unsplash-1024x684.jpg"
                                            width="100%" height="100%" alt="IndusInd, Vistara launch co-branded credit card" />
                                    </a>
                                    <a className="fs-4 text-decoration-none text-dark"
                                        href="https://askproject.net/bankai/wp-content/uploads/sites/32/2021/10/emil-kalibradov-2s9N9qHsSCI-unsplash-1024x684.jpg">
                                        <strong className="mainText">IndusInd,Vistara launch co-branded credit card</strong></a>
                                </div>
                                <div>
                                    <p className="p-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris finibus…</p>
                                </div>
                                <div>
                                    <a href="https://askproject.net/bankai/wp-content/uploads/sites/32/2021/10/emil-kalibradov-2s9N9qHsSCI-unsplash-1024x684.jpg"
                                        className="text-decoration-none readmore">Read More<svg xmlns="http://www.w3.org/2000/svg"
                                            width="16" height="16" fill="currentColor" className="bi bi-arrow-right"
                                            viewBox="0 0 16 16">
                                            <path fillRule="evenodd"
                                                d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z" />
                                        </svg></a>
                                </div>

                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 col-sm-12 col-lg-4 p-2">
                        <div className="card">
                            <div className="card-body">
                                <div className="mt-3">
                                    <a
                                        href="https://askproject.net/bankai/wp-content/uploads/sites/32/2021/10/pexels-karolina-grabowska-5239812-1024x683.jpeg">
                                        <img className="imagess"
                                            src="https://askproject.net/bankai/wp-content/uploads/sites/32/2021/10/pexels-karolina-grabowska-5239812-1024x683.jpeg"
                                            width="100%" height="100%" alt="This bank will shut down its ATMs from tomorrow." />
                                    </a>
                                    <a className="fs-4  text-decoration-none text-dark"
                                        href="https://askproject.net/bankai/wp-content/uploads/sites/32/2021/10/pexels-karolina-grabowska-5239812-1024x683.jpeg">
                                        <strong className="mainText">This bank will shut down its ATMs from tomorrow.</strong></a>
                                </div>
                                <div>

                                    <p className="p-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris finibus…</p>
                                </div>
                                <div>
                                    <a className="text-decoration-none readmore"
                                        href="https://askproject.net/bankai/wp-content/uploads/sites/32/2021/10/pexels-karolina-grabowska-5239812-1024x683.jpeg">Read
                                        More
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                            className="bi bi-arrow-right" viewBox="0 0 16 16">
                                            <path fillRule="evenodd"
                                                d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z" />
                                        </svg>
                                    </a>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>

            </section >
            {/* < !--end --> */}


            {/* < !--s8 --> */}
            <section className="bodyfont p-lg-5 " id="section8">
                <div className="bgColorx mt-5 px-5 ">
                    <div className="row ">
                        <div className="col-md-5 col-sm-12 col-lg-5 ">
                            <div className="rx1">
                                <img src="https://askproject.net/bankai/wp-content/uploads/sites/32/2021/10/iPhone-Mockup-2.2-1.png"
                                    alt="" height="0%" className="img-fluid" />
                            </div>
                        </div>
                        <div className="col-md-7 col-sm-12 col-lg-7 text-white an">
                            <div className=" py-5 px-2 m-4 ">
                                <h1><strong>
                                    Ready to join Bankai?
                                </strong> </h1>
                                <p className="para py-4">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et libero tempus, accumsan arcu
                                    vitae,
                                    posuere tellus.
                                </p>

                                <div className=" d-flex px-2 ">
                                    <span className=" sign fs-6">
                                        <button type="button " className="btn cardBlueColor rounded-0 btn-sign-up px-4">Sign Up</button>
                                    </span>
                                    <span className="get">
                                        <button type=" " className="btn text-white rounded-0 btn-sign-up px-4 textWhite">Get Started
                                            <svg xmlns="http://www.w3.org/2000/svg" width="15" height="20" fill="currentColor"
                                                className="bi bi-arrow-right" viewBox="0 0 16 16">
                                                <path fillRule="evenodd"
                                                    d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z" />
                                            </svg></button>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* <!--end --> */}


            {/* < !--section_9 --> */}
            <section id="footer">
                <div className="container fonts">
                    <div className="row">
                        <div className="col-md-3 mainDiv p-5">
                            <img src="https://askproject.net/bankai/wp-content/uploads/sites/32/2021/10/logo_Asset-4_4-2048x688.png"
                                alt="" width="100%" />
                            <p className="py-2"> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in nibh vehicula. </p>
                            <div className="icons">
                                <a> <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                    className="iconColor bi bi-facebook" viewBox="0 0 16 16">
                                    <path
                                        d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z" />
                                </svg>
                                </a>
                                <a><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                    className="iconColor bi bi-twitter" viewBox="0 0 16 16">
                                    <path
                                        d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z" />
                                </svg>
                                </a>
                                <a><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                    className="iconColor bi bi-youtube" viewBox="0 0 16 16">
                                    <path
                                        d="M8.051 1.999h.089c.822.003 4.987.033 6.11.335a2.01 2.01 0 0 1 1.415 1.42c.101.38.172.883.22 1.402l.01.104.022.26.008.104c.065.914.073 1.77.074 1.957v.075c-.001.194-.01 1.108-.082 2.06l-.008.105-.009.104c-.05.572-.124 1.14-.235 1.558a2.007 2.007 0 0 1-1.415 1.42c-1.16.312-5.569.334-6.18.335h-.142c-.309 0-1.587-.006-2.927-.052l-.17-.006-.087-.004-.171-.007-.171-.007c-1.11-.049-2.167-.128-2.654-.26a2.007 2.007 0 0 1-1.415-1.419c-.111-.417-.185-.986-.235-1.558L.09 9.82l-.008-.104A31.4 31.4 0 0 1 0 7.68v-.123c.002-.215.01-.958.064-1.778l.007-.103.003-.052.008-.104.022-.26.01-.104c.048-.519.119-1.023.22-1.402a2.007 2.007 0 0 1 1.415-1.42c.487-.13 1.544-.21 2.654-.26l.17-.007.172-.006.086-.003.171-.007A99.788 99.788 0 0 1 7.858 2h.193zM6.4 5.209v4.818l4.157-2.408L6.4 5.209z" />
                                </svg>
                                </a>

                                <a><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                    className="iconColor bi bi-linkedin" viewBox="0 0 16 16">
                                    <path
                                        d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z" />
                                </svg>
                                </a>
                            </div>

                        </div>
                        <div className="col-md-3 allINFO p-5">
                            <h3> <strong> Get In Touch</strong></h3>
                            <div className="alldata"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20"
                                fill="currentColor" className="iconColor bi bi-geo-alt-fill" viewBox="0 0 16 16">
                                <path
                                    d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z" />
                            </svg>&nbsp;&nbsp;&nbsp;<span className="">918 Abner Road, Hudson</span></div><br />
                            <div className="alldata"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20"
                                fill="currentColor" className="iconColor bi bi-envelope-fill" viewBox="0 0 16 16">
                                <path
                                    d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414.05 3.555ZM0 4.697v7.104l5.803-3.558L0 4.697ZM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586l-1.239-.757Zm3.436-.586L16 11.801V4.697l-5.803 3.546Z" />
                            </svg>&nbsp;&nbsp;&nbsp;<span className=""> example@mial.com</span></div> <br />
                            <div className="alldata"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20"
                                fill="currentColor" className="iconColor bi bi-telephone-fill" viewBox="0 0 16 16">
                                <path fillRule="evenodd"
                                    d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z" />
                            </svg>&nbsp;&nbsp;&nbsp;<span className="">+91 9177916892 </span></div> <br />
                            <div className="alldata"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20"
                                fill="currentColor" className="iconColor bi bi-clock-fill" viewBox="0 0 16 16">
                                <path
                                    d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71V3.5z" />
                            </svg>&nbsp;&nbsp;&nbsp;<span className="">07:00 to 23:00 </span></div>
                        </div>
                        <div className="col-md-3 allINFO p-5">
                            <h3><strong>Quicklines</strong> </h3>
                            <p className=" homes">Home</p>
                            <p className="homes">About</p>
                            <p className="homes">FAQs</p>
                            <p className="homes">Blog</p>
                            <p className=" homes">Contact</p>
                        </div>
                        <div className="col-md-3 allINFO p-5">
                            <h3><strong>Location</strong></h3>
                            <div className="col-lg-5 ">
                                <div className="mapwidth">
                                    <iframe
                                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12094.57348593182!2d-74.00599512526003!3d40.72586666928451!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c2598f988156a9%3A0xd54629bdf9d61d68!2sBroadway-Lafayette%20St!5e0!3m2!1spl!2spl!4v1624523797308!5m2!1spl!2spl"
                                        className="mapbox" style={{ border: 0 }} allowFullScreen="" loading="lazy"></iframe>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="fonts fontStyles d-flex flex-wrap-wrap justify-content-between border-top p-2">
                    <div className="">Copyright @2021 ASK Project</div>
                    <div className="">
                        <span className="px-2">Privacy Policy</span>
                        <span className="px-2"> Terms & Services</span>
                    </div>
                </div>
            </section>
            {/* <!--end --> */}
        </div >
    )
}

export default Home