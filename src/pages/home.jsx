import converterImg from "../media/converter.png";
import { Footer } from "../components/Footer";
import { Navbar } from "../components/Navbar";
import "./Home.css";

export const Home = () => {
    return(
        <div >
            <Navbar />
            <div className="OfferComponent">
                Free Shipping On Orders Over $75
            </div>
            <div className="FirstViewComponent">
                <img src={converterImg} alt="" />
                <div>
                    <p>PRODUCT LINE</p>
                    <h4>Subtitle</h4>
                </div>
            </div>
            <div className="HomeDetails">
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                    incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
                    nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore
                    eu fugiat nulla pariatur.
                </p>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                    incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
                    nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore
                    eu fugiat nulla pariatur.
                </p>
            </div>
            <div className="ConverterSpecs">
                <h2 className="ConverterSpecsHeading">SPECS</h2>
                <div className="ConverterSpecsContainer">
                    <div className="ConverterSpecsInfo">
                        <div className="ConverterSpecsInfoChild">
                            <h4>01</h4>
                            <h2>SPEC 01</h2>
                        </div>
                        <div className="ConverterSpecsInfoChild">
                            <h4>03</h4>
                            <h2>SPEC 03</h2>
                        </div>
                    </div>
                    <div className="ConverterSpecsInfo">
                        <img src={converterImg} alt="" />
                    </div>
                    <div className="ConverterSpecsInfo">
                        <div className="ConverterSpecsInfoChild">
                            <h4>02</h4>
                            <h2>SPEC 02</h2>
                        </div>
                        <div className="ConverterSpecsInfoChild">
                            <h4>04</h4>
                            <h2>SPEC 04</h2>
                        </div>
                    </div>
                </div>
            </div>
            <div className="ConverterDetails">
                <h2>10R80 XPL PRO-LOC BILLET TORQUE CONVERTER 260MM</h2>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                    incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
                    nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore
                    eu fugiat nulla pariatur.
                </p>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                    incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
                    nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore
                    eu fugiat nulla pariatur.
                </p>
            </div>
            <div className="ConverterImages">
                <div className="ConverterImage">
                    <img src={converterImg} alt="" />
                    <div className="ConverterImageText">
                        <h3 className="inline">10R80</h3>
                        <h3 className="inline">XPL PRO-LOC BILLET TORQUE CONVERTER 260MM</h3>
                    </div>
                </div>
                <div className="ConverterImage">
                    <img src={converterImg} alt="" />
                    <div className="ConverterImageText">
                        <h3 className="inline">10R80</h3>
                        <h3 className="inline">XPL PRO-LOC BILLET TORQUE CONVERTER 260MM</h3>
                    </div>
                </div>
                <div className="ConverterImage">
                    <img src={converterImg} alt="" />
                    <div className="ConverterImageText">
                        <h3 className="inline">10R80</h3>
                        <h3 className="inline">XPL PRO-LOC BILLET TORQUE CONVERTER 260MM</h3>
                    </div>
                </div>
                <div className="ConverterImage">
                    <img src={converterImg} alt="" />
                    <div className="ConverterImageText">
                        <h3 className="inline">10R80</h3>
                        <h3 className="inline">XPL PRO-LOC BILLET TORQUE CONVERTER 260MM</h3>
                    </div>
                </div>
                <div className="ConverterImage">
                    <img src={converterImg} alt="" />
                    <div className="ConverterImageText">
                        <h3 className="inline">10R80</h3>
                        <h3 className="inline">XPL PRO-LOC BILLET TORQUE CONVERTER 260MM</h3>
                    </div>
                </div>
                <div className="ConverterImage">
                    <img src={converterImg} alt="" />
                    <div className="ConverterImageText">
                        <h3 className="inline">10R80</h3>
                        <h3 className="inline">XPL PRO-LOC BILLET TORQUE CONVERTER 260MM</h3>
                    </div>
                </div>
            </div>
            <div className="ConverterDetailsWithBG">
                <h2>10R80 XPL PRO-LOC BILLET TORQUE CONVERTER 260MM</h2>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                    incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
                    nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore
                    eu fugiat nulla pariatur.
                </p>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                    incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
                    nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore
                    eu fugiat nulla pariatur.
                </p>
            </div>
            <Footer />
        </div>
    )
}