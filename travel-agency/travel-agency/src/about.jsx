import rrr from "./assets/rrr.png";
import snow1 from "./assets/snow1.jpg";
import download1 from "./assets/download1.jpg";
import download2 from "./assets/download2.jpg";
import download3 from "./assets/download3.jpg";
import download4 from "./assets/download4.jpg";
import download5 from "./assets/download5.jpg";
import download6 from "./assets/download6.jpg";


function About() {
    return (
        <div className="About">


            {/* Start Header */}


            <header className="About_header">

                <div className="header_div1">
                    <h1>TRAVEL AGENCY   </h1>
                    <img className="header_img" src={rrr} alt="" />
                    <h1>About Us</h1>
                    <p>Duis aute irure dolor in reprehenderit in voluptate velit esse.</p>

                    <a className="header_link" href="#">READ MORE</a>
                </div>
            </header>
            {/* End Header */}


            {/* Start Second Section */}

            <div className="second_section">

                <div className="section2_cards">


                    <div className="section2_card">
                        <div>
                            <i class="fa-solid fa-location-dot"></i>

                            <h1>Tours
                            </h1>
                        </div>

                        <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur</p>
                        <a href="#">MORE</a>
                    </div>



                    <div className="section2_card">
                        <div>
                            <i class="fa-solid fa-person-hiking"></i>

                            <h1>Hikking
                            </h1>
                        </div>

                        <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur</p>
                        <a href="#">MORE</a>
                    </div>


                    <div className="section2_card">
                        <div>
                            <i class="fa-solid fa-earth-europe"></i>
                            <h1>Travel
                            </h1>
                        </div>

                        <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur</p>
                        <a href="#">MORE</a>
                    </div>


                    <div className="section2_card">
                        <div>
                            <i class="fa-solid fa-question"></i>
                            <h1>Travel
                            </h1>
                        </div>

                        <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur</p>
                        <a href="#">MORE</a>
                    </div>

                </div>



                <div className="second_section_s2">
                    <div>
                        <img className="snow_img" src={snow1} alt="" />

                        <div className="section_s2Cards">
                            <h1>The World Is a Big Place. We'll Help You Explore It.</h1>
                            <p>Elit ut aliquam purus sit amet luctus venenatis. Ridiculus mus mauris vitae ultricies leo integer malesuada. Massa enim nec dui nunc mattis enim. Sagittis vitae et leo duis ut. Lacus suspendisse faucibus interdum.</p>
                            <a href="#">READ MORE</a>



                        </div>
                    </div>


                    <div>
                        <div className="About_emptyDiv1">

                            <div></div>
                        </div>

                        <div className="About_emptyDiv2"></div>

                    </div>
                </div>





            </div>


            {/* End Second Section */}



            {/* Start Outdoor Recreation Section */}


            <div className="outdoor_section">
                <div className="outdoor_sectionDiv1">
                    <h1>Outdoor Recreation</h1>
                    <p>Sample text. Click to select the text box. Click again or double click to start editing the text.</p>
                </div>
                <div className="outdoor_imgs">
                    <img src={download1} alt="" />
                    <img src={download2} alt="" />
                    <img src={download3} alt="" />
                </div>


                <div className="outdoor_imgs">
                <img src={download4} alt="" />
                    <img src={download5} alt="" />
                    <img src={download6} alt="" />
                    
                </div>

                <a className="outDoor_btn" href="#">MORE PHOTOS</a>
            </div>




{/* Start Get in touch Section */}


<div className="getToutch_Section">

<form action="">

    <h1>Get in touch</h1>
<input className="Input1" type="text" />
<input placeholder="Enter a valid email address" className="input2" type="text" />
<textarea rows={6} cols={50} placeholder="Enter your message" name="" id=""></textarea>

<button type="submit">Submit</button>





</form>


</div>

{/* End Get in touch Section */}



{/* Start Footer */}

<footer>
    <p>Sample text. Click to select the text box. Click again or double click to start editing the text.</p>
</footer>


{/* End Footer */}


        </div>
    )
}
export default About;