const ContactUs = () => {
    return (
        <div className="container" id="Contact">
            <div className="section-title-area">
                <h2 className="section-title">Let's build farm of your dreams together</h2>											</div>
            <div className="row">
                <div className="contact-form col-sm-6 wow slideInUp" />
                <div className="col-sm-6 wow slideInUp" >
                    <h3>Join our Aquaponics Revolution</h3>
                    <p><a href="https://tech.us5.list-manage.com/subscribe?u=b05e94f9647da65b3c325161c&amp;id=ac7f757457"><button id="contact" className="btn btn-theme-primary btn-lg">Get free consultation</button></a></p>
                    <br /><br />
                    <div className="address-box">

                        <h3>FarmModules.tech s.r.o.</h3>

                        <div className="address-contact">
                            <span className="fa-stack"><i className="fa fa-circle fa-stack-2x"></i><i className="fa fa-map-marker fa-stack-1x fa-inverse"></i></span>

                            <div className="address-content">Pod viaduktem 2783/58 <br /> Stodůlky (Prague 13) <br />155 00 Prague</div>
                        </div>

                        <div className="address-contact">
                            <span className="fa-stack"><i className="fa fa-circle fa-stack-2x"></i><i className="fa fa-phone fa-stack-1x fa-inverse"></i></span>
                            <div className="address-content">+420 774 588 710</div>
                        </div>

                        <div className="address-contact">
                            <span className="fa-stack"><i className="fa fa-circle fa-stack-2x"></i><i className="fa fa-envelope-o fa-stack-1x fa-inverse"></i></span>
                            <div className="address-content"><a href="mailto:info@farmmodules.tech">info@farmmodules.tech</a></div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactUs;