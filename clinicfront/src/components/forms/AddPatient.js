import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";





export default function AddPatient() {
    
  let navigate = useNavigate();
  const [state, setState] = useState({});
  const [firstName, setfirstName] = useState(null);
  const [lastName, setLastName] = useState(null);
  const [PhoneNumber, setPhoneNumber] = useState(null);
  const [email, setEmail] = useState(null);
  const [birthDate, setbirthDate] = useState(null);
  const [address, setaddress] = useState(null);
  const [gender, setgender] = useState(null);
  const [medicattions, setmedicattions] = useState(null);
  const [med_text, setmed_text] = useState(null);
  const [allergies, setallergies] = useState(null);
  const [allergies_text, setallergies_text] = useState(null);
  const [E_firstName, setE_firstName] = useState(null);
  const [E_lastName, setE_lastName] = useState(null);
  const [E_contactNumber, setE_contactNumber] = useState(null);

    // const handleChange = (e) => {
    //   setState({ ...state, [e.target.name]: e.target.value });
    // };

  const addNewPatient = async () => {
    // let formField = new FormData();
    // formField.append("firstname", firstName);
    // formField.append("lastname", lastName);
    // formField.append("phoneNumber", phoneNumber);
    // formField.append("email", email);
    // formField.append("Birthdate", Birthdate);
    // formField.append("address", address);
    // formField.append("gender", gender);
    // formField.append("medications", medications);
    // formField.append("med_text", med_text);
    // formField.append("allergies", allergies);
    // formField.append("allergies_text", allergies_text);
    // formField.append("e_firstName", e_firstName);
    // formField.append("e_lastName", e_lastName);
    // formField.append("e_contactNumber", e_contactNumber);
    const form = {
      firstName,
      lastName,
      PhoneNumber,
      email,
      birthDate,
      address,
      // gender,
      medicattions,
      med_text, 
      allergies,
      allergies_text,
      E_firstName,
      E_lastName,
      E_contactNumber,
    };
    console.log(form);
    await axios({
      method: "POST",
      url: "http://127.0.0.1:8000/api/patients/create/",
      data: form,
    })
      .then((response) => {
        console.log(response.data);
        navigate("/");
      })
      .catch((e) => {
        console.log(e);
      });
  };

  return (
    <div className="container-fluid bg-primary my-5 py-5">
      <div
        className="container py-5"
        style={{ width: "100%", alignItems: "center" }}
      >
        <div className="row gx-5" style={{ margin: "auto" }}>
          <div className="col-lg-6" style={{ width: "70%", margin: "auto" }}>
            <div className="bg-white text-center rounded p-5">
              <h1 className="mb-4">New Patient Enrollment</h1>
              <br />
              <form>
                <div className="row g-3">
                  <div className="col-12 col-sm-6">
                    <label for="date"> Patient First Name</label>
                    <input
                      type="text"
                      className="form-control bg-light border-0"
                      placeholder="First Name"
                      name="firstname"
                      value={firstName}
                      //   onChange={handleChange}
                      onChange={(e) => setfirstName(e.target.value)}
                      style={{ height: "55px" }}
                    />
                  </div>
                  <div className="col-12 col-sm-6">
                    <label for="date"> Patient Last Name</label>
                    <input
                      type="text"
                      className="form-control bg-light border-0"
                      placeholder="Last Name"
                      name="lastname"
                      value={lastName}
                      onChange={(e) => setLastName(e.target.value)}
                      style={{ height: "55px" }}
                    />
                  </div>
                  <div className="col-12 col-sm-6">
                    <label for="date"> Patient Email</label>
                    <input
                      type="email"
                      className="form-control bg-light border-0"
                      placeholder="Email"
                      name="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      style={{ height: "55px" }}
                    />
                  </div>

                  <div className="col-12 col-sm-6">
                    <label for="date"> Phone Number</label>
                    <input
                      type="tel"
                      placeholder="123-45-678"
                      value={PhoneNumber}
                      onChange={(e) => setPhoneNumber(e.target.value)}
                      pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
                      className="form-control bg-light border-0"
                      style={{ height: "55px" }}
                    />
                  </div>
                  <div className="col-12 col-sm-6">
                    <label for="myfile"> Sex</label>
                    <select
                      className="form-select bg-light border-0"
                      name="gender"
                      value={gender}
                      onChange={(e) => setgender(e.target.value)}
                      style={{ height: "55px" }}
                    >
                      <option selected>Select Sex</option>
                      <option value="Female"> Female </option>
                      <option value="Male"> Male </option>
                      <option value="Other"> Prefer not to Say </option>
                    </select>
                  </div>
                  <div className="col-12 col-sm-6">
                    <div className="date" id="date" data-target-input="nearest">
                      <label for="date"> Patient Birthdate</label>
                      <input
                        type="date"
                        className="form-control bg-light border-0 datetimepicker-input"
                        data-target="#date"
                        data-toggle="datetimepicker"
                        name="Birthdate"
                        value={birthDate}
                        onChange={(e) => setbirthDate(e.target.value)}
                        style={{ height: "55px" }}
                      />
                    </div>
                  </div>

                  <div className="col-12 col-sm-6">
                    <label for="date"> Address</label>
                    <input
                      type="text"
                      className="form-control bg-light border-0"
                      placeholder="Address"
                      value={address}
                      onChange={(e) => setaddress(e.target.value)}
                      style={{ height: "55px" }}
                    />
                    a{" "}
                  </div>

                  <div className="col-12 col-sm-6"></div>
                  <div className="col-12 col-sm-6">
                    <br /> <br />
                    <label for="date" style={{ float: "left" }}>
                      {" "}
                      Taking any medications, currently?
                    </label>
                    <br /> <br />
                    <div style={{ float: "left" }}>
                      <input
                        type="radio"
                        id="html"
                        name="fav_language"
                        value={medicattions}
                        onChange={(e) => setmedicattions(e.target.value)}
                      />
                      <label for="html">Yes</label> <br />
                      <input
                        type="radio"
                        id="html"
                        name="fav_language"
                        value={medicattions}
                        onChange={(e) => setmedicattions(e.target.value)}
                      />
                      <label for="html">No</label> <br />
                    </div>
                  </div>
                  <div className="col-12 col-sm-6">
                    <br /> <br />
                    <label for="myfile"> If yes, list them</label>
                    <textarea
                      rows="4"
                      cols="80"
                      className="form-control bg-light border-0"
                      value={med_text}
                      onChange={(e) => setmed_text(e.target.value)}
                    >
                      Medicaments List
                    </textarea>
                  </div>
                  <div className="col-12 col-sm-6">
                    <br /> <br />
                    <label for="date" style={{ float: "left" }}>
                      {" "}
                      Having allergies?
                    </label>
                    <br /> <br />
                    <div style={{ float: "left" }}>
                      <input
                        type="radio"
                        id="html"
                        name="fav_language"
                        value={allergies}
                        onChange={(e) => setallergies(e.target.value)}
                      />
                      <label for="html">Yes</label> <br />
                      <input
                        type="radio"
                        id="html"
                        name="fav_language"
                        value={allergies}
                        onChange={(e) => setallergies(e.target.value)}
                      />
                      <label for="html">No</label> <br />
                    </div>
                  </div>
                  <div className="col-12 col-sm-6">
                    <br /> <br />
                    <label for="myfile"> If yes, list them</label>
                    <textarea
                      rows="4"
                      cols="80"
                      className="form-control bg-light border-0"
                      value={allergies_text}
                      onChange={(e) => setallergies_text(e.target.value)}
                    >
                      Allergies List
                    </textarea>
                  </div>
                </div>
              </form>
              <br />
              <br />
              <br />
              <br />

              <h2 className="mb-4">In Case of Emergency</h2>
              <form>
                <div className="row g-3">
                  <div className="col-12 col-sm-6">
                    <label for="date"> Emergency Contact First Name</label>
                    <input
                      type="text"
                      className="form-control bg-light border-0"
                      placeholder="First Name"
                      value={E_firstName}
                      onChange={(e) => setE_firstName(e.target.value)}
                      style={{ height: "55px" }}
                    />
                  </div>
                  <div className="col-12 col-sm-6">
                    <label for="date"> Emergency Contact Last Name</label>
                    <input
                      type="text"
                      className="form-control bg-light border-0"
                      placeholder="Last Name"
                      value={E_lastName}
                      onChange={(e) => setE_lastName(e.target.value)}
                      style={{ height: "55px" }}
                    />
                  </div>
                  {/* <div className="col-12 col-sm-6">
                                        <label for="date"> Relationship</label>
                                        <input type="text" className="form-control bg-light border-0" placeholder="Relationship" value={address} onChange={(e) => setAddress(e.target.value)}  style={{ height: '55px' }} />
                                    </div> */}
                  <div className="col-12 col-sm-6">
                    <label for="date"> Contact Number</label>
                    <input
                      type="tel"
                      placeholder="123-45-678"
                      value={E_contactNumber}
                      onChange={(e) => setE_contactNumber(e.target.value)}
                      pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
                      className="form-control bg-light border-0"
                      style={{ height: "55px" }}
                    />
                  </div>
                </div>
              </form>
              <div className="col-12" style={{ width: "80%", margin: "auto" }}>
                <br />
                <br />
                <br />
                <button
                  className="btn btn-primary w-100 py-3"
                  type="submit"
                  onClick={addNewPatient}
                >
                  Add Patient
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}