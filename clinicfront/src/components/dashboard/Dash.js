import { Link } from 'react-router-dom'
import styles from 'styles.css'
import { CCardBody, CCardHeader, CCardTitle, CCardText, CCard } from '@coreui/react'
import React from 'react'

export default function Dash() {
    return (
        <main>

            {[
                { color: 'primary', textColor: 'white' },
                { color: 'secondary', textColor: 'white' },
                { color: 'success', textColor: 'white' },
                { color: 'danger', textColor: 'white' },
                { color: 'warning' },
                { color: 'info', textColor: 'white' },
                { color: 'light' },
                { color: 'dark', textColor: 'white' },
            ].map((item, index) => (
                <CCard
                    color={item.color}
                    textColor={item.textColor}
                    className="mb-3"
                    style={{ maxWidth: '18rem' }}
                    key={index}
                >
                    <CCardHeader>Header</CCardHeader>
                    <CCardBody>
                        <CCardTitle>{item.color} card title</CCardTitle>
                        <CCardText>
                            Some quick example text to build on the card title and make up the bulk of the card's
                            content.
                        </CCardText>
                    </CCardBody>
                </CCard>
            ))}



            <div className="head-title">
                <div className="left">
                    <h1>Dashboard</h1>
                    <ul className="breadcrumb">
                        <li>
                            <a href="#">Dashboard</a>
                        </li>
                        <li>
                            <i className="bx bx-chevron-right" />
                        </li>
                        <li>
                            <a className="active" href="#">
                                Home
                            </a>
                        </li>
                    </ul>
                </div>

                <a href="#" className="btn-download">
                    <Link to={"../bookappointment"}><span className="text" style={{ color: "white" }}>Add Appointment </span></Link>
                </a>
            </div>



            <div>
                <ul className="box-info col-12">
                    <li>
                        <i className="bx bxs-calendar-check" />
                        <span className="text">
                            <h3>1020</h3>
                            <p>New Order</p>
                        </span>
                    </li>
                    <li>
                        <i className="bx bxs-group" />
                        <span className="text">
                            <h3>2834</h3>
                            <p>All Patient</p>
                        </span>
                    </li>
                    <li>
                        <i className="bx bxs-dollar-circle" />
                        <span className="text">
                            <h3>$2543</h3>
                            <p>Total Balance</p>
                        </span>
                    </li>
                </ul>

            </div>
            <br />
            <div className="table-data">
                <div className="order">
                    <div className="head">
                        <h3>Recent Appointments</h3>
                        <i className="bx bx-filter" />
                    </div>
                    <table>
                        <thead>
                            <tr>
                                <th>User</th>
                                <th>Date and Time</th>
                                <th>Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>
                                    <img src="assets/dashboard/img/people.png" alt="" />
                                    <p>John Doe</p>
                                </td>
                                <td>01-10-2020</td>
                                <td>
                                    <span className="status completed">Completed</span>
                                </td>
                            </tr>


                        </tbody>
                    </table>
                </div>
            </div>

        </main>
    );
}