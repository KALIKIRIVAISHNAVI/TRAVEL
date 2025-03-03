
import './App.css'

function App() {
 

  return (
    <>
  <section id="header">
        <div className="logo">
            explor<span className="er-text">er</span>
        </div>
        <div className="list-items">
            <ul>
                <li>Hotels</li>
                <li>Bike Rentals</li>
                <li>Restaurants</li>
            </ul>
        </div>
    </section>
    <section id="banner-section">
        <div className="left-content">
            <div className="left-inner-content">
                <h5 className="welcome-txt">WELCOME TO EXPLORER</h5>
                    <h1>Your Adventure</h1>
                    <h1>Travel Expert in</h1>
                    <h1>the <span className="bold-txt">SOUTH</span></h1>
                    <div>
                        <select name="travel-select" className="travel-sel">
                            <option value="Choose">Choose</option>
                            <option value="travelone">travelone</option>
                            <option value="traveltwo">traveltwo</option>
                            <option value="travelthree">travelthree</option>
                        </select>
                    </div>
                    <div>
                        <button className="explore-button">EXPLORE</button>
                    </div>
            </div>
            
        </div>
        <div className="right-content">
            <img src="images/heroimg.jpg"/>
        </div>
    </section>

    <section id="destination-section">
        <h2 className="heading-text">DESTINATIONS</h2>
        <div className="bottom-line">Just for you.Because you and your bike are special to us!</div>

        <div className="box-wrap">
            <div className="set-box">
                <img src="images/pollachi.jpg" />
                <div className="head-text">Never ending paddy fields</div>
                <div className="head-text">and Narrow Roads</div>
                <small>Pollachi</small>
                <div className="box-content">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Porro nesciunt sunt sed itaque odit, qui tempore asperiores facilis cupiditate esse ad perferendis? Sit impedit repellat distinctio porro et quidem beatae!Lorem ipsum dolor sit amet consectetur, adipisicing elit. Porro nesciunt sunt sed itaque odit, qui tempore asperiores facilis cupiditate esse ad perferendis? Sit impedit repellat distinctio porro et quidem beatae!Loremet quidem beatae!Lorem ipsum dolor sit amet consectetur, adipisicing elit. Porro nesciunt sunt sed itaque odit.
                </div>
                <div>
                    <button className="explore-button">READ MORE</button>
                </div>
            </div>
            <div className="set-box">
                <img src="images/thanjavur.jpg" />
                <div className="head-text">Small Ride across town in mid</div>
                <div className="head-text">Summer heat</div>
                <small>Thanjavur</small>
                <div className="box-content">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Porro nesciunt sunt sed itaque odit, qui tempore asperiores facilis cupiditate esse ad perferendis? Sit impedit repellat distinctio porro et quidem beatae!Lorem ipsum dolor sit amet consectetur, adipisicing elit. Porro nesciunt sunt sed itaque odit, qui tempore asperiores facilis cupiditate esse ad perferendis? Sit impedit repellat distinctio porro et quidem beatae!Loremet quidem beatae!Lorem ipsum dolor sit amet consectetur, adipisicing elit. Porro nesciunt sunt sed itaque odit.
                </div>
                <div>
                    <button className="explore-button">READ MORE</button>
                </div>
            </div>
            <div className="set-box">
                <img src="images/chidambaram.jpg" />
                <div className="head-text">Catching a short</div>
                <div className="head-text">Break at the Lotus Pond</div>
                <small>Chidambaram</small>
                <div className="box-content">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Porro nesciunt sunt sed itaque odit, qui tempore asperiores facilis cupiditate esse ad perferendis? Sit impedit repellat distinctio porro et quidem beatae!Lorem ipsum dolor sit amet consectetur, adipisicing elit. Porro nesciunt sunt sed itaque odit, qui tempore asperiores facilis cupiditate esse ad perferendis? Sit impedit repellat distinctio porro et quidem beatae!Loremet quidem beatae!Lorem ipsum dolor sit amet consectetur, adipisicing elit. Porro nesciunt sunt sed itaque odit.
                </div>
                <div>
                    <button className="explore-button">READ MORE</button>
                </div>
            </div>
            <div className="set-box">
                <img src="images/masinagudi.jpg" />
                <div className="head-text">Road Trip enroute the</div>
                <div className="head-text">mountains and forests</div>
                <small>Masinagudi</small>
                <div className="box-content">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Porro nesciunt sunt sed itaque odit, qui tempore asperiores facilis cupiditate esse ad perferendis? Sit impedit repellat distinctio porro et quidem beatae!Lorem ipsum dolor sit amet consectetur, adipisicing elit. Porro nesciunt sunt sed itaque odit, qui tempore asperiores facilis cupiditate esse ad perferendis? Sit impedit repellat distinctio porro et quidem beatae!Loremet quidem beatae!Lorem ipsum dolor sit amet consectetur, adipisicing elit. Porro nesciunt sunt sed itaque odit.
                </div>
                <div>
                    <button className="explore-button">READ MORE</button>
                </div>
            </div>
            <div className="set-box">
                <img src="images/kumbakkonam.jpg" />
                <div className="head-text">Fall in love with the divine</div>
                <div className="head-text">agraharams</div>
                <small>Kumbakkonam</small>
                <div className="box-content">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Porro nesciunt sunt sed itaque odit, qui tempore asperiores facilis cupiditate esse ad perferendis? Sit impedit repellat distinctio porro et quidem beatae!Lorem ipsum dolor sit amet consectetur, adipisicing elit. Porro nesciunt sunt sed itaque odit, qui tempore asperiores facilis cupiditate esse ad perferendis? Sit impedit repellat distinctio porro et quidem beatae!Loremet quidem beatae!Lorem ipsum dolor sit amet consectetur, adipisicing elit. Porro nesciunt sunt sed itaque odit.
                </div>
                <div>
                    <button className="explore-button">READ MORE</button>
                </div>
            </div>
            <div className="set-box">
                <img src="images/tirunalveli.jpg" />
                <div className="head-text">Energy driven drive through</div>
                <div className="head-text">the windmills</div>
                <small>Tirunalveli</small>
                <div className="box-content">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Porro nesciunt sunt sed itaque odit, qui tempore asperiores facilis cupiditate esse ad perferendis? Sit impedit repellat distinctio porro et quidem beatae!Lorem ipsum dolor sit amet consectetur, adipisicing elit. Porro nesciunt sunt sed itaque odit, qui tempore asperiores facilis cupiditate esse ad perferendis? Sit impedit repellat distinctio porro et quidem beatae!Loremet quidem beatae!Lorem ipsum dolor sit amet consectetur, adipisicing elit. Porro nesciunt sunt sed itaque odit.
                </div>
                <div>
                    <button className="explore-button">READ MORE</button>
                </div>
            </div>
           
        </div>
    </section>

    <section id="contact-section">
       
        <div className="contact-form">
            <h2 className="heading-text">Contact Us</h2>
            <div className="sales-txt">Our sales team will reach out to you ASAP!</div>
            <div className="field-box">
                <div className="title-txt">Name</div>
                <div className="input-box">
                    <input type="text" />
                </div>
            </div>
            <div className="field-box">
                <div className="title-txt">Your Home Town</div>
                <div className="input-box">
                   <select>
                    <option value="choose">choose</option>
                   </select>

                </div>
            </div>
            <div className="field-box">
                <div className="title-txt">Where would you like to go</div>
                <div className="input-box">
                    <select>
                        <option value="choose">choose</option>
                       </select>
                </div>
            </div>
            <div className="field-box">
                <div className="title-txt">Contact Number</div>
                <div className="input-box">
                    <input type="text" />
                </div>
            </div>
            <button className="explore-button">SUBMIT INTEREST</button>
        </div>
    </section>
    </>
  )
}

export default App
