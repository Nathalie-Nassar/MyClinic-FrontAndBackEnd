import React from 'react'
import { useState } from 'react';
import PopupEmployee from '../forms/PopupEmployee';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


export default function EmplTable() {
    const [buttonPopup, setButtonPopup] = useState(false);
    const notify = () => toast("Employee removed!");

    const notify2 = () => toast("Employee edited!");


    return (
        <>
            <br />
            <div class="container">
                <div class="panel-heading">
                    <h1 style={{ "margin": "auto" }}>My Employees</h1>
                    <br />
                </div>
                <div class="panel-body table-responsive-sm">
                    <table class="table table-striped">
                        <thead>
                            <tr>
                                <th style={{ 'color': "#535356" }}>Name</th>
                                <th style={{ 'color': "#535356" }}>Email</th>
                                <th style={{ 'color': "#535356" }}>Phone Number</th>
                                <th style={{ 'color': "#535356" }}>Position</th>
                            </tr>
                        </thead>

                        <tbody>
                            <tr data-toggle="collapse" data-target="#demo1" class="accordion-toggle">
                                <td style={{ 'color': "#5D5C63" }}>Melhem Rahmeh</td>
                                <td style={{ 'color': "#5D5C63" }}>melhem.rahmehh@gmail.com</td>
                                <td style={{ 'color': "#5D5C63" }}>71 589 832</td>
                                <td style={{ 'color': "#5D5C63" }}>Administrator</td>

                                <br />
                                <PopupEmployee trigger={buttonPopup} setTrigger={setButtonPopup}>
                                    <div className="container-fluid bg-primary my-5 py-5">
                                        <div className="col-lg-6" style={{ "width": "100%", "margin": "auto" }}>
                                            <div className="bg-white text-center rounded p-5">
                                                <h1 className="mb-4">Edit Employee</h1>
                                                <br />
                                                <form>
                                                    <div className="row g-3">
                                                        <div className="col-12 col-sm-6">
                                                            <label for="date"> Address</label>
                                                            <input type="text" className="form-control bg-light border-0" placeholder="Name" style={{ height: '55px' }} />
                                                        </div>
                                                        <div className="col-12 col-sm-6">
                                                            <label for="date"> Assurance</label>
                                                            <input type="text" className="form-control bg-light border-0" placeholder="Name" style={{ height: '55px' }} />
                                                        </div>
                                                        <div className="col-12 col-sm-6">
                                                            <label for="date"> Age</label>
                                                            <input type="text" className="form-control bg-light border-0" placeholder="Name" style={{ height: '55px' }} />
                                                        </div>
                                                        <div className="col-12 col-sm-6">
                                                            <label for="date"> Emergency contact number</label>
                                                            <input type="text" className="form-control bg-light border-0" placeholder="Name" style={{ height: '55px' }} />
                                                        </div>
                                                        <div className="col-12 col-sm-6">
                                                            <label for="date"> Position</label>
                                                            <select className="form-select bg-light border-0" style={{ height: '55px' }}>
                                                                <option selected>Select Position</option>
                                                                <option value="Administrator"> Administrator </option>
                                                                <option value="Dentist Assistant"> Dentist Assistant </option>
                                                                <option value="Nurse">  Nurse </option>
                                                                <option value="Secretary">  Secretary </option>
                                                            </select>
                                                        </div>
                                                        <div className="col-12 col-sm-6" >
                                                            <label for="myfile"> Salary</label>
                                                            <input type="number" className="form-control bg-light border-0" placeholder="Salary" step="1" min="0" max="1000" style={{ height: '55px' }} />
                                                        </div>
                                                        <div className="col-12" >
                                                            <button className="btn btn-primary w-100 py-3" type="submit">Submit</button>
                                                        </div>
                                                    </div>
                                                </form>
                                            </div>
                                        </div>
                                    </div>
                                </PopupEmployee>
                                <br />


                            </tr>

                            <tr>
                                <td colspan="12" class="hiddenRow">
                                    <div class="accordian-body collapse" id="demo1">
                                        <h5>Employee's Personal Information</h5>
                                        <table class="table table-striped">
                                            <thead>
                                                <tr class="info">
                                                    <th style={{ 'color': "#5D5C63" }}>Employment Type</th>
                                                    <th style={{ 'color': "#5D5C63" }}>Salary</th>
                                                    <th style={{ 'color': "#5D5C63" }}>Address</th>
                                                    <th style={{ 'color': "#5D5C63" }}>Age</th>
                                                    <th style={{ 'color': "#5D5C63" }}>Assurance</th>
                                                    <th style={{ 'color': "#5D5C63" }}>Emergency Contact </th>  
                                                    <th style={{ 'color': "#5D5C63" }}></th> 
                                                    <th style={{ 'color': "#5D5C63" }}></th> 

                                                </tr>
                                            </thead>

                                            <tbody>
                                                <tr data-toggle="collapse" class="accordion-toggle">
                                                    <td style={{ 'color': "#5D5D60" }}>Full Time</td>
                                                    <td style={{ 'color': "#5D5D60" }}> 1000$ </td>
                                                    <td style={{ 'color': "#5D5D60" }}> Byblos </td>
                                                    <td style={{ 'color': "#5D5D60" }}> 20</td>
                                                    <td style={{ 'color': "#5D5D60" }}> OOl</td>
                                                    <td style={{ 'color': "#5D5D60" }}> 09 130 922</td>

                                                    <td style={{ 'color': "#5D5C63" }}>  <button type="button" class="btn btn-info" onClick={() => setButtonPopup(true) }>Edit</button> </td>
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


// import React, { useState } from "react";
// import CreateIcon from "@material-ui/icons/Create";
// import {
// 	Box, Button, Snackbar, Table,
// 	TableBody, TableCell, TableHead, TableRow
// } from "@material-ui/core";
// import DeleteOutlineIcon from "@material-ui/icons/DeleteOutline";
// import AddBoxIcon from "@material-ui/icons/AddBox";
// import DoneIcon from "@material-ui/icons/Done";
// import ClearIcon from "@material-ui/icons/Clear";
// import { makeStyles } from "@material-ui/core/styles";
// import Alert from "@material-ui/lab/Alert";
// import Dialog from "@material-ui/core/Dialog";
// import DialogActions from "@material-ui/core/DialogActions";
// import DialogContent from "@material-ui/core/DialogContent";
// import DialogContentText from "@material-ui/core/DialogContentText";
// import DialogTitle from "@material-ui/core/DialogTitle";

// // Creating styles
// const useStyles = makeStyles({
// 	root: {
// 		"& > *": {
// 			borderBottom: "unset",
// 		},
// 	},
// 	table: {
// 		minWidth: 650,
// 	},
// 	snackbar: {
// 		bottom: "104px",
// 	},
// });

// function TableDemo() {
// 	// Creating style object
// 	const classes = useStyles();

// 	// Defining a state named rows
// 	// which we can update by calling on setRows function
// 	const [rows, setRows] = useState([
// 		{ id: 1, firstname: "", lastname: "", city: "" },
// 	]);

// 	// Initial states
// 	const [open, setOpen] = React.useState(false);
// 	const [isEdit, setEdit] = React.useState(false);
// 	const [disable, setDisable] = React.useState(true);
// 	const [showConfirm, setShowConfirm] = React.useState(false);

// 	// Function For closing the alert snackbar
// 	const handleClose = (event, reason) => {
// 		if (reason === "clickaway") {
// 			return;
// 		}
// 		setOpen(false);
// 	};

// 	// Function For adding new row object
// 	const handleAdd = () => {
// 		setRows([
// 			...rows,
// 			{
// 				id: rows.length + 1, firstname: "",
// 				lastname: "", city: ""
// 			},
// 		]);
// 		setEdit(true);
// 	};

// 	// Function to handle edit
// 	const handleEdit = (i) => {
// 		// If edit mode is true setEdit will
// 		// set it to false and vice versa
// 		setEdit(!isEdit);
// 	};

// 	// Function to handle save
// 	const handleSave = () => {
// 		setEdit(!isEdit);
// 		setRows(rows);
// 		console.log("saved : ", rows);
// 		setDisable(true);
// 		setOpen(true);
// 	};

// 	// The handleInputChange handler can be set up to handle
// 	// many different inputs in the form, listen for changes
// 	// to input elements and record their values in state
// 	const handleInputChange = (e, index) => {
// 		setDisable(false);
// 		const { name, value } = e.target;
// 		const list = [...rows];
// 		list[index][name] = value;
// 		setRows(list);
// 	};

// 	// Showing delete confirmation to users
// 	const handleConfirm = () => {
// 		setShowConfirm(true);
// 	};

// 	// Handle the case of delete confirmation where
// 	// user click yes delete a specific row of id:i
// 	const handleRemoveClick = (i) => {
// 		const list = [...rows];
// 		list.splice(i, 1);
// 		setRows(list);
// 		setShowConfirm(false);
// 	};

// 	// Handle the case of delete confirmation
// 	// where user click no
// 	const handleNo = () => {
// 		setShowConfirm(false);
// 	};

// return (
// 	<TableBody>
// 	<Snackbar
// 		open={open}
// 		autoHideDuration={2000}
// 		onClose={handleClose}
// 		className={classes.snackbar}
// 	>
// 		<Alert onClose={handleClose} severity="success">
// 		Record saved successfully!
// 		</Alert>
// 	</Snackbar>
// 	<Box margin={1}>
// 		<div style={{ display: "flex", justifyContent: "space-between" }}>
// 		<div>
// 			{isEdit ? (
// 			<div>
// 				<Button onClick={handleAdd}>
// 				<AddBoxIcon onClick={handleAdd} />
// 				ADD
// 				</Button>
// 				{rows.length !== 0 && (
// 				<div>
// 					{disable ? (
// 					<Button disabled align="right" onClick={handleSave}>
// 						<DoneIcon />
// 						SAVE
// 					</Button>
// 					) : (
// 					<Button align="right" onClick={handleSave}>
// 						<DoneIcon />
// 						SAVE
// 					</Button>
// 					)}
// 				</div>
// 				)}
// 			</div>
// 			) : (
// 			<div>
// 				<Button onClick={handleAdd}>
// 				<AddBoxIcon onClick={handleAdd} />
// 				ADD
// 				</Button>
// 				<Button align="right" onClick={handleEdit}>
// 				<CreateIcon />
// 				EDIT
// 				</Button>
// 			</div>
// 			)}
// 		</div>
// 		</div>
// 		<TableRow align="center"></TableRow>

// 		<Table
// 		className={classes.table}
// 		size="small"
// 		aria-label="a dense table"
// 		>
// 		<TableHead>
// 			<TableRow>
// 			<TableCell>First Name</TableCell>
// 			<TableCell>Last Name</TableCell>
// 			<TableCell align="center">City</TableCell>
// 			<TableCell align="center"></TableCell>
// 			</TableRow>
// 		</TableHead>
// 		<TableBody>
// 			{rows.map((row, i) => {
// 			return (
// 				<div>
// 				<TableRow>
// 					{isEdit ? (
// 					<div>
// 						<TableCell padding="none">
// 						<input
// 							value={row.firstname}
// 							name="firstname"
// 							onChange={(e) => handleInputChange(e, i)}
// 						/>
// 						</TableCell>
// 						<TableCell padding="none">
// 						<input
// 							value={row.lastname}
// 							name="lastname"
// 							onChange={(e) => handleInputChange(e, i)}
// 						/>
// 						</TableCell>
// 						<TableCell padding="none">
// 						<select
// 							style={{ width: "100px" }}
// 							name="city"
// 							value={row.city}
// 							onChange={(e) => handleInputChange(e, i)}
// 						>
// 							<option value=""></option>
// 							<option value="Karanja">Karanja</option>
// 							<option value="Hingoli">Hingoli</option>
// 							<option value="Bhandara">Bhandara</option>
// 							<option value="Amaravati">Amaravati</option>
// 							<option value="Pulgaon">Pulgaon</option>
// 						</select>
// 						</TableCell>
// 					</div>
// 					) : (
// 					<div>
// 						<TableCell component="th" scope="row">
// 						{row.firstname}
// 						</TableCell>
// 						<TableCell component="th" scope="row">
// 						{row.lastname}
// 						</TableCell>
// 						<TableCell component="th" scope="row" align="center">
// 						{row.city}
// 						</TableCell>
// 						<TableCell
// 						component="th"
// 						scope="row"
// 						align="center"
// 						></TableCell>
// 					</div>
// 					)}
// 					{isEdit ? (
// 					<Button className="mr10" onClick={handleConfirm}>
// 						<ClearIcon />
// 					</Button>
// 					) : (
// 					<Button className="mr10" onClick={handleConfirm}>
// 						<DeleteOutlineIcon />
// 					</Button>
// 					)}
// 					{showConfirm && (
// 					<div>
// 						<Dialog
// 						open={showConfirm}
// 						onClose={handleNo}
// 						aria-labelledby="alert-dialog-title"
// 						aria-describedby="alert-dialog-description"
// 						>
// 						<DialogTitle id="alert-dialog-title">
// 							{"Confirm Delete"}
// 						</DialogTitle>
// 						<DialogContent>
// 							<DialogContentText id="alert-dialog-description">
// 							Are you sure to delete
// 							</DialogContentText>
// 						</DialogContent>
// 						<DialogActions>
// 							<Button
// 							onClick={() => handleRemoveClick(i)}
// 							color="primary"
// 							autoFocus
// 							>
// 							Yes
// 							</Button>
// 							<Button
// 							onClick={handleNo}
// 							color="primary"
// 							autoFocus
// 							>
// 							No
// 							</Button>
// 						</DialogActions>
// 						</Dialog>
// 					</div>
// 					)}
// 				</TableRow>
// 				</div>
// 			);
// 			})}
// 		</TableBody>
// 		</Table>
// 	</Box>
// 	</TableBody>
// );
// }

// export default TableDemo;

