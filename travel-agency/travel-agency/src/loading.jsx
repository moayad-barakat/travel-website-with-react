import beach_tree from "./assets/beach_tree.jpg";
import mm from "./assets/mm.jpg";
import werwer from "./assets/werwer.jpg";
import lake from "./assets/lake.jpeg";
import beach from "./assets/beach.jpg";
import bycecle from "./assets/bycecle.jpeg";
import loading1 from "./assets/loading1.jpg";



function Loadding() {
    return (
        <div className="loading">

            <header className="loading_header">

                <div >
                    <h1>TRAVEL AGENCY   </h1>

                    <h1 className="loading_h1">Your Adventure Starts Here</h1>


                    <a className="header_link" href="#">START PLANING</a>
                </div>
            </header>


            {/* Start Vacation Adventures Take Many Forms */}
            <div>
                <div className="startVacation_section">

                    <h1>Vacation Adventures Take Many Forms</h1>


                    <div className="startVacation_cards">

                        <div className="startVacation_card">

                            <h2>Ocean Cruising</h2>
                            <p>Sample text. Click to select the Text Element.
                            </p>
                            <hr />
                            <img className="vacation_imgs" src={beach_tree} alt="" />





                        </div>



                        <div className="startVacation_card">

                            <h2>Land Adventures </h2>
                            <p>Sample text. Click to select the Text Element.
                            </p>
                            <hr />
                            <img className="vacation_imgs" src={mm} alt="" />





                        </div>


                        <div className="startVacation_card">

                            <h2>Nearby Adventures </h2>
                            <p>Sample text. Click to select the Text Element.
                            </p>
                            <hr />
                            <img className="vacation_imgs" src={werwer} alt="" />





                        </div>
                    </div>




                    <div className="startVacation_cards">

                        <div className="startVacation_card">

                            <h2>River cruising
                            </h2>
                            <p>Sample text. Click to select the Text Element.
                            </p>
                            <hr />
                            <img className="vacation_imgs" src={lake} alt="" />





                        </div>



                        <div className="startVacation_card">

                            <h2>Romantic Tours </h2>
                            <p>Sample text. Click to select the Text Element.
                            </p>
                            <hr />
                            <img className="vacation_imgs" src={beach} alt="" />





                        </div>


                        <div className="startVacation_card">

                            <h2>Nearby Adventures </h2>
                            <p>Sample text. Click to select the Text Element.
                            </p>
                            <hr />
                            <img className="vacation_imgs" src={bycecle} alt="" />





                        </div>
                    </div>









                </div>



                <div className="startVacation_section_s2">

                    <div>
                        <div>

                            <div className="startVacation_emptyDiv">
                                <div></div>
                            </div>
                            <div className="startVacation_s2_1">
                                <img className="loading1_img" src={loading1} alt="" />

                                <div className="startVacation_emptyDiv1"></div>

                                <div className="startVacation_s2_card">
                                    <h1>International Land Adventures</h1>
                                    <p>Nibh venenatis cras sed felis eget velit aliquet sagittis id. Tellus pellentesque eu tincidunt tortor aliquam nulla.</p>
                                    <a href="#">CONTACT US</a>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>


                <div className="startVacation_section_s3">

                    <div>
                        <h1>  <span>5%</span>  off Summer Tours</h1>
                        <p>Conveniently book your personal appointment online. Choose your preferred date, time, service, Stylist or Barber, and receive an email confirming all the details.</p>

                        <a href="#">LEARN MORE !</a>
                    </div>


                    <div>
                        <img src={beach} alt="" />
                        <div className="startVacation_sectionEmptyDiv"></div>
                    </div>
                </div>




                <div className="startVacation_section_s4">
                    <h1>The perfect vacation starts with the right travel partner</h1>

                    <div className="startVacation_section_s4_1">
                        <div>
                            <img src={werwer} alt="" />
                        </div>

                        <div>
                            <p>Sample text. Click to select the text box. Click again or double click to start editing the text. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>

                            <div className="startVacation_section_s4Flex">
                                <div className="startVacationSection_s4EmptyDiv"></div>

                                <div>
                                    <p>Sample text. Click to select the text box. Click again or double click to start editing the text. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
                {/* End Vacation Adventures Take Many Forms */}
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
export default Loadding;