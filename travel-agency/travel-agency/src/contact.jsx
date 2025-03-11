import rrr from "./assets/rrr.png";
import snow1 from "./assets/snow1.jpg";
function Contact (){
    return (
        <div className="Contact">
{/* Start Header */}
 <header className="contact_header">

                <div className="header_div1">
                    <h1>TRAVEL AGENCY   </h1>
                    <img className="header_img" src={rrr} alt="" />
                    <h1 className="contact_h1">Ready to Start Your Next Adventure?</h1>
                    <p>Duis aute irure dolor in reprehenderit in voluptate velit esse.</p>

                    <a className="header_link" href="#">READ MORE</a>
                </div>
            </header>


            {/* End Header */}





{/* Start Second Section */}
            <div className="contact_section2">


                <div>
                    <div className="contact_emptyDiv1">
                        <div></div>
                    </div>

                    <img src={snow1} alt="" />
                    <div className="contact_emptyDiv2"></div>
                </div>


                <div className="contactSection2_card">
              
                    <h1>Contact Us</h1>
                   
                    <p>We are here to meet any business need and to promote your company online!</p>

                    <div></div>
                    <h2>Phone: <a href="#">123456789</a></h2>
                    <h2>Location : 75 Street Sample, WI 63025</h2>
                    <h2>Mail: <a href="mailto:template@sample.com">template@sample.com</a></h2>
                </div>
            </div>
{/* End Second Section */}








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
export default Contact;
