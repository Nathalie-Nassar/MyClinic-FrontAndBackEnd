import React from 'react'
import { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import OperationsFormVisit from '../tables/OperationsFormVisit'
import ReactDOMServer from "react-dom/server";
import jsPDF from "jspdf";


// import AutoComplete from "../../Autocomplete/AutoComplete";
import PopUpMultipleOps from './PopUpMultipleOps.js'
{/* USE THIS TO AUTOFILL THE FORM:
<div>
<Autocomplete suggestions={"Oranges", "Apples", "Banana", "Kiwi", "Mango"]}/>
</div> */}


export default function AfterVisit() {

    const [buttonPopup, setButtonPopup] = useState(false);
    const notify = () => toast("Summary added!");
    const doc = new jsPDF();

    // change this to be incremented as the detals are added in the form 
    const PatientInfo = <b>...</b>;


    const save = () => { // change here to make the name of the visit anb and patient name
        doc.html(ReactDOMServer.renderToStaticMarkup(PatientInfo), {
            callback: () => {
                doc.save("myDocument1.pdf");
            }
        });
    };

    return (
        <div className="container-fluid bg-primary my-5 py-5">
            <div className="container py-5" style={{ "width": "100%", "alignItems": "center" }}>
                <div className="row gx-5" style={{ "margin": "auto" }}>
                    <div className="col-lg-6" style={{ "width": "70%", "margin": "auto" }}>
                        <div className="bg-white text-center rounded p-5">
                            <h1 className="mb-4">Visit Summary</h1>
                            <br />
                            <form>
                                <div className="row g-3">
                                    <div className="col-12 col-sm-6">
                                        <label for="date"> Patient First Name</label>
                                        <input type="text" className="form-control bg-light border-0" placeholder="First Name" style={{ height: '55px' }} />
                                    </div>
                                    <div className="col-12 col-sm-6">
                                        <label for="date"> Patient Last Name</label>
                                        <input type="text" className="form-control bg-light border-0" placeholder="Last Name" style={{ height: '55px' }} />
                                    </div>
                                    <div className="col-12 col-sm-6">
                                        <label for="date"> Patient Email</label>
                                        <input type="email" className="form-control bg-light border-0" placeholder="Email" style={{ height: '55px' }} />
                                    </div>
                                    <div className="col-12 col-sm-6">
                                        <div className="date" id="date" data-target-input="nearest">
                                            <label for="date"> Visit Date</label>
                                            <input type="date" value="2017-06-01" className="form-control bg-light border-0 datetimepicker-input" data-target="#date" data-toggle="datetimepicker" style={{ height: '55px' }} />
                                        </div>
                                    </div>
                                    <div className="col-12 col-sm-6">
                                    </div>
                                    <div className="col-12 col-sm-6">

                                        <br /> <br />


                                    </div>
                                    <div className="col-12 col-sm-6">
                                        <div className="date" id="date" data-target-input="nearest">
                                        </div>
                                    </div>

                                    <div className="col-12 col-sm-6">
                                        <div className="date" id="date" data-target-input="nearest">
                                        </div>
                                    </div>

                                    <OperationsFormVisit></OperationsFormVisit>
                                    <div className="col-12 col-sm-12">
                                        <div className="date" id="date" data-target-input="nearest">
                                            Total Amount Due:

                                        </div>

                                        <div className="col-12 col-sm-6">
                                            <br /> <br />
                                            <textarea rows="4" cols="80" className="form-control bg-light border-0">
                                                Medicaments List
                                            </textarea>
                                        </div>
                                        <div className="col-12 col-sm-6">
                                        </div>

                                        <div className="col-12 col-sm-6">

                                            <div >
                                                <br />
                                                <label for="myfile"> Please upload files, if needed</label>
                                                <input type="file" id="myfile" name="myfile" className="form-control bg-light border-0" />
                                            </div>

                                        </div>
                                        <div className="col-12" style={{ "width": "70%", "margin": "auto" }}>
                                            <br /><br />

                                            <button type="submit" class="btn btn-primary w-100 py-3" onClick={() => { notify(); save(); }}>Save</button><ToastContainer />


                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}