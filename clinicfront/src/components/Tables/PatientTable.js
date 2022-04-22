import MaterialTable from "material-table";
import React from 'react'
import PopupAppointment from "../forms/PopupAppointment";
import { useState } from "react";
import PopUpVisitSummary from "../forms/PopUpVisitSummary";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


export default function PatientTable() {

    const notify = () => toast("Operation Deleted!");
    const notify2 = () => toast("Operation Edited!");
    const notify3 = () => toast("Successfully Booked!");
    const [buttonPopup, setButtonPopup] = useState(false);
    const [EditPopup, setEditPopup] = useState(false);

    return (
        <>
            <br />
            <div class="container">
                <div class="panel-heading">
                    <h1 style={{ "margin": "auto" }}>My Patients</h1>
                    <br />
                </div>
                <div class="panel-body table-responsive-sm">
                    <table class="table table-striped">
                        <thead>
                            <tr>
                                <th style={{ 'color': "#535356" }}>Name</th>
                                <th style={{ 'color': "#535356" }}>Email</th>
                                <th style={{ 'color': "#535356" }}>Phone Number</th>
                                <th style={{ 'color': "#535356" }}>Total Amount Due</th>
                                <th style={{ 'color': "#535356" }}>Number of Operations Done</th>
                                <th style={{ 'color': "#535356" }}></th>
                            </tr>
                        </thead>

                        <tbody>
                            <tr data-toggle="collapse" data-target="#demo1" class="accordion-toggle">
                                <td style={{ 'color': "#5D5C63" }}>Melhem Rahmeh</td>
                                <td style={{ 'color': "#5D5C63" }}>melhem.rahmehh@gmail.com</td>
                                <td style={{ 'color': "#5D5C63" }}>71 589 832</td>
                                <td style={{ 'color': "#5D5C63" }}>100$</td>
                                <td style={{ 'color': "#5D5C63" }}>6</td>
                                <td style={{ 'color': "#5D5C63" }}>  <button type="button" class="btn btn-info" onClick={() => setEditPopup(true)}>Add Visit Summary</button> </td>


                                <br />
                                <PopUpVisitSummary trigger={EditPopup} setTrigger={setEditPopup}>
                                </PopUpVisitSummary>
                                <br />
                            </tr>

                            <tr>
                                <td colspan="12" class="hiddenRow">
                                    <div class="accordian-body collapse" id="demo1">

                                        <br />
                                        <button type="button" class="btn btn-info" onClick={() => setButtonPopup(true)}>Book Appointment</button><br />
                                        <PopupAppointment trigger={buttonPopup} setTrigger={setButtonPopup}>
                                        </PopupAppointment>
                                        <br />


                                        <h5>Melhem Rahmeh's Visits</h5>
                                        <table class="table table-striped">
                                            <thead>
                                                <tr class="info">
                                                    <th style={{ 'color': "#5D5C63" }}>Visit Date</th>
                                                    <th style={{ 'color': "#5D5C63" }}>Operation</th>
                                                    <th style={{ 'color': "#5D5C63" }}>Price</th>
                                                    <th style={{ 'color': "#5D5C63" }}>Amount Paid</th>
                                                    <th style={{ 'color': "#5D5C63" }}>Amount Due</th>
                                                    <th style={{ 'color': "#5D5C63" }}>Summary</th>
                                                    <th style={{ 'color': "#5D5C63" }}></th>
                                                    <th style={{ 'color': "#5D5C63" }}></th>

                                                </tr>
                                            </thead>

                                            <tbody>

                                                <tr data-toggle="collapse" class="accordion-toggle">
                                                    <td style={{ 'color': "#5D5D60" }}>2016/09/27</td>
                                                    <td style={{ 'color': "#5D5D60" }}>Root Canal</td>
                                                    <td style={{ 'color': "#5D5D60" }}> 100$ </td>
                                                    <td style={{ 'color': "#5D5D60" }}> 100$ </td>
                                                    <td style={{ 'color': "#5D5D60" }}> 0$</td>
                                                    <td style={{ 'color': "#5D5D60" }}><i class='bx bxs-file-pdf' style={{ "font-size": "25px" }}></i>After Visit Summary</td>
                                                    <td style={{ 'color': "#5D5C63" }}>  <button type="button" class="btn btn-info" onClick={() => setEditPopup(true)}>Edit</button> </td>
                                                    <td style={{ 'color': "#5D5C63" }}> <button type="button" class="btn btn-warning" onClick={notify}>Delete</button><ToastContainer /> </td>

                                                </tr>

                                            </tbody>
                                        </table>

                                    </div>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    );

}
