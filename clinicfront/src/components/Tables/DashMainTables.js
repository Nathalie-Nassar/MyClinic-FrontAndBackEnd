import React from 'react'
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';
import 'font-awesome/css/font-awesome.min.css';

export default function DashMainTables(props) {

    var is_admin = props.is_admin;
    const options = ['canceled', 'completed', 'unspecified'];
    const defaultOption = options[2];


    if (is_admin) { return <></>; }
    return (
        <div style={{ "marginLeft": "100px" }}>
            <br />
            <div class="container">
                <div class="panel-heading">
                    <h1 style={{ "margin": "auto" }}>Upcoming Visits</h1>
                    <br />
                </div>
                <div class="panel-body table-responsive-sm">
                    <table class="table table-striped">
                        <thead>
                            <tr>
                                <th style={{ 'color': "#535356" }}>Name</th>
                                <th style={{ 'color': "#535356" }}>Date and Time</th>
                                <th style={{ 'color': "#535356" }}>operations</th>
                                <th style={{ 'color': "#535356" }}>Status</th>
                                <th style={{ 'color': "#535356" }}></th>
                            </tr>
                        </thead>

                        <tbody>
                            <tr data-toggle="collapse" data-target="#demo1" class="accordion-toggle">
                                <td style={{ 'color': "#5D5C63" }}>Melhem Rahmeh</td>
                                <td style={{ 'color': "#5D5C63" }}>20-2-2022 at 3.15 PM</td>
                                <td style={{ 'color': "#5D5C63" }}>.....</td>
                                <td style={{ 'color': "#5D5C63" }}>..
                                    {/* <Dropdown options={options} onChange={this._onSelect} value={defaultOption} placeholder="Select an option"/>; */}
                                </td>
                                <td style={{ 'color': "#5D5C63" }}>  <button type="button" class="btn btn-info">
                                    <i class="fa-thin fa-grid-2-plus fa-lg">+</i>
                                </button> </td>

                            </tr>

                        </tbody>
                    </table>
                    <br /><br />
                </div>
            </div>
            <div class="container">
                <div class="panel-heading">
                    <h1 style={{ "margin": "auto" }}>Latest Visits</h1>
                    <br />
                </div>
                <div class="panel-body table-responsive-sm">
                    <table class="table table-striped">
                        <thead>
                            <tr>
                                <th style={{ 'color': "#535356" }}>Name</th>
                                <th style={{ 'color': "#535356" }}>Date and Time</th>
                                <th style={{ 'color': "#535356" }}>Fee</th>
                                <th style={{ 'color': "#535356" }}></th>
                            </tr>
                        </thead>

                        <tbody>
                            <tr data-toggle="collapse" data-target="#demo1" class="accordion-toggle">
                                <td style={{ 'color': "#5D5C63" }}>Melhem Rahmeh</td>
                                <td style={{ 'color': "#5D5C63" }}>20-2-2022 at 3.15 PM</td>
                                <td style={{ 'color': "#5D5C63" }}>100$</td>
                                <td style={{ 'color': "#5D5C63" }}>  <button type="button" class="btn btn-info">
                                    <i class="fa-thing fa-grid-2-plus fa-lg"> +</i>                                </button> </td>
                            </tr>

                        </tbody>
                    </table>
                    <br /><br />
                </div>
            </div>
        </div>


    );
}
