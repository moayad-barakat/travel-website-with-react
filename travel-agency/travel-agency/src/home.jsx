import rrr from "./assets/rrr.png";
import images from "./assets/images.jpeg";
import img1 from "./assets/img1.jpeg";
import mounten1 from "./assets/mounten1.jpg";
import mounten2 from "./assets/mounten2.jpg";
import img4 from "./assets/img4.jpeg";
import Enjoy1 from "./assets/Enjoy1.jpeg";
import street from "./assets/street.jpeg";
import wm from "./assets/wm.jpeg";
function Home() {
    return (
        <div className="Home_section">
            {/* Start Header Section*/}

            <header className="home_header">

                <div className="header_div1">
                    <h1>TRAVEL AGENCY   </h1>
                    <img className="header_img" src={rrr} alt="" />
                    <h1>Wonderful tours</h1>
                    <p>Duis aute irure dolor in reprehenderit in voluptate velit esse.</p>

                    <a className="header_link" href="#">READ MORE</a>
                </div>
            </header>


            {/* End Header Section */}


            {/* Start Second Section */}
            <div className="home_s2">
                <div className="home_s2_1">
                    <div className="s2_divs">
                        <i class="fa-solid fa-briefcase"></i>
                        <h1>Traveller Tours</h1>
                        <p>Sample text. Click to select the text box.</p>
                    </div>




                    <div className="s2_divs">
                        <i class="fa-solid fa-earth-americas"></i>    <h1>Explore The World</h1>
                        <p>Sample text. Click to select the text box.</p>
                    </div>


                    <div className="s2_divs">
                        <i class="fa-solid fa-campground"></i>
                        <h1>Adventure Vacations</h1>
                        <p>Sample text. Click to select the text box.</p>
                    </div>



                    <div className="s2_divs">
                        <i class="fa-solid fa-building"></i>
                        <h1>Adventure Vacations</h1>
                        <p>Sample text. Click to select the text box.</p>
                    </div>



                </div>






                <div className="home_s2_2">
                    <div>
                        <h1>Good Trips Only</h1>
                        <p>Sample text. Click to select the text box. Click again or double click to start editing the text.</p>

                        <a className="header_link" href="#">LEARN MORE</a>
                    </div>

                    <div >

                        <div className="emptu_div1">
                            <div></div>
                        </div>

                        <img src={images} alt="" />
                        <div className="empty_div2">
                            <div></div>
                        </div>
                    </div>
                </div>
            </div>


            <div className="home_s2_3">

                <div>
                    <img className="tree_img" src={img1} alt="" />
                    <div className="empty_div3">
                        <div></div>
                    </div>
                </div>



                <div>
                    <img className="mounten1" src={mounten1} alt="" />

                    <div>
                        <img className="mounten2" src={mounten2} alt="" />
                    </div>

                    <div className="empty_div4">
                        <div></div>
                    </div>

                </div>


            </div>







            {/* ثىي Second Section */}


            {/*  Start Backpacking Trips Section */}




            <div className=" Backpacking_Trips_Section">
                <h1>Backpacking Trips</h1>
                <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur</p>
                <p>sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit.</p>


                <a href="#">READ MORE</a>


            </div>



            {/* End Backpacking Trips Section */}




            {/*  Start Small group travel that's good all over Section */}


            <div className="startGroup_section">
                <h1>Small group travel that's good all over</h1>



                <div>

                    <div className="smallGroup_card">

                        <p>Sit amet massa vitae tortor condimentum lacinia quis. Ornare arcu dui vivamus arcu felis bibendum ut. Consectetur adipiscing elit duis tristique sollicitudin. Volutpat lacus laoreet non curabitur. Magna fringilla urna porttitor rhoncus. Ultricies leo integer malesuada nunc vel risus commodo viverra. Ipsum a arcu cursus vitae congue. Imperdiet dui accumsan sit amet nulla facilisi. </p>

                        <a href="#">READ MORE</a>
                    </div>

                    <div>
                        <img className="startGroup_img" src={img4} alt="" />
                    </div>
                </div>
            </div>




            {/* End Small group travel that's good all over Section */}








            {/* Start Enjoy the perfect blend of adventure tours Section */}



            <div className="EnjoyPerfect_Section">
                <h1>Enjoy the perfect blend of</h1>
                <h2>adventure tours</h2>


                <div className="EnjoyPerfect_SectionCards">
                    <div className="EnjoyPerfect_SectionCard">
                        <img className="Enjoy_imgs" src={mounten2} alt="" />

                        <h1>Mountains</h1>
                        <p>Sample text. Click to select the text box. Click again or double click to start editing the text.</p>
                        <a href="#">MORE</a>


                    </div>





                    <div className="EnjoyPerfect_SectionCard">
                        <img className="Enjoy_imgs" src={Enjoy1} alt="" />

                        <h1>Waterfalls</h1>
                        <p>Sample text. Click to select the text box. Click again or double click to start editing the text.</p>
                        <a href="#">MORE</a>


                    </div>




                    <div className="EnjoyPerfect_SectionCard">
                        <img className="Enjoy_imgs" src={street} alt="" />

                        <h1>Road Travel</h1>
                        <p>Sample text. Click to select the text box. Click again or double click to start editing the text.</p>
                        <a href="#">MORE</a>


                    </div>



                </div>


                <div className="EnjoyPerfect_Section_s2">



                    <div>
                        <img className="wm_img" src={wm} alt="" />

                        <div className="Enjoy_emptyDiv"></div>

                        <div className="EnjoyPerfect_Section_s2_card">
                            <h1>Your adventure starts here</h1>
                            <p>Article evident arrived express highest men did boy. Mistress sensible entirely am so. Quick can manor smart money hopes worth too.</p>
                            <a href="#">READ MORE</a>
                        </div>

                    </div>
                </div>







                <div className="EnjoyPerfect_Section_s3">
                    <div className="EnjoyPerfect_Section_s3Cards">


                        <div className="EnjoyPerfect_Section_s3Card1">
                            <div className="EnjoyPerfect_Section_s3Card">
                                <i class="fa-brands fa-gripfire"></i>
                                <i class="fa-brands fa-gripfire"></i>
                                <p>Proin sed libero enim sed faucibus turpis. At imperdiet dui accumsan sit amet nulla facilisi morbi tempus. Ut sem nulla pharetra diam sit amet nisl. Enim nunc</p>
                                <h2>Celia Almeda</h2>
                            </div>


                            <div className="EnjoyPerfect_Section_s3Card">
                                <i class="fa-brands fa-gripfire"></i>
                                <i class="fa-brands fa-gripfire"></i>
                                <p>Proin sed libero enim sed faucibus turpis. At imperdiet dui accumsan sit amet nulla facilisi morbi tempus. Ut sem nulla pharetra diam sit amet nisl. Enim nunc</p>
                                <h2>Peter Howard</h2>
                            </div>
                        </div>






                        <div className="EnjoyPerfect_Section_s3Card1">
                            <div className="EnjoyPerfect_Section_s3Card">
                                <i class="fa-brands fa-gripfire"></i>
                                <i class="fa-brands fa-gripfire"></i>
                                <p>Proin sed libero enim sed faucibus turpis. At imperdiet dui accumsan sit amet nulla facilisi morbi tempus. Ut sem nulla pharetra diam sit amet nisl. Enim nunc</p>
                                <h2>Sasha Payne</h2>
                            </div>


                            <div className="EnjoyPerfect_Section_s3Card">
                                <i class="fa-brands fa-gripfire"></i>
                                <i class="fa-brands fa-gripfire"></i>
                                <p>Proin sed libero enim sed faucibus turpis. At imperdiet dui accumsan sit amet nulla facilisi morbi tempus. Ut sem nulla pharetra diam sit amet nisl. Enim nunc</p>
                                <h2>Phoebe Nelson</h2>
                            </div>
                        </div>






                        <div className="EnjoyPerfect_Section_s3Card1">
                            <div className="EnjoyPerfect_Section_s3Card">
                                <i class="fa-brands fa-gripfire"></i>
                                <i class="fa-brands fa-gripfire"></i>
                                <p>Proin sed libero enim sed faucibus turpis. At imperdiet dui accumsan sit amet nulla facilisi morbi tempus. Ut sem nulla pharetra diam sit amet nisl. Enim nunc</p>
                                <h2>Ann Richmond</h2>
                            </div>


                            <div className="EnjoyPerfect_Section_s3Card">
                                <i class="fa-brands fa-gripfire"></i>
                                <i class="fa-brands fa-gripfire"></i>
                                <p>Proin sed libero enim sed faucibus turpis. At imperdiet dui accumsan sit amet nulla facilisi morbi tempus. Ut sem nulla pharetra diam sit amet nisl. Enim nunc</p>
                                <h2>Monica Pouli</h2>
                            </div>
                        </div>



                    </div>
                </div>





                <div className="EnjoyPerfect_Section_s4">
                    <div>
                        <h1>Tours Nature & Wildlife</h1>
                        <p>Fly with who you want, stay wherever you want — now that's a dream holiday!</p>
                        <i class="fa-brands fa-facebook"></i>
                        <i class="fa-brands fa-twitter"></i>
                        <i class="fa-brands fa-instagram"></i>
                        <i class="fa-brands fa-google"></i>
                    </div>

                </div>

            </div>





            {/*  End Enjoy the perfect blend of adventure tours Section */}




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

export default Home;