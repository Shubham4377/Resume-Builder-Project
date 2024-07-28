// import React, { useState } from 'react';

// // Validation regex patterns
// const strRegex = /^[a-zA-Z\s]*$/;
// const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
// const phoneRegex = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;
// const digitRegex = /^\d+$/;

// const validType = {
//   TEXT: 'text',
//   TEXT_EMP: 'text_emp',
//   EMAIL: 'email',
//   DIGIT: 'digit',
//   PHONENO: 'phoneno',
//   ANY: 'any',
// };

// const CVForm = () => {
//   const [formData, setFormData] = useState({
//     firstname: '',
//     middlename: '',
//     lastname: '',
//     image: null,
//     designation: '',
//     address: '',
//     email: '',
//     phoneno: '',
//     summary: '',
//     achievements: [{ title: '', description: '' }],
//     experiences: [{ title: '', organization: '', location: '', startDate: '', endDate: '', description: '' }],
//     educations: [{ school: '', degree: '', city: '', startDate: '', graduationDate: '', description: '' }],
//     projects: [{ title: '', link: '', description: '' }],
//     skills: [''],
//   });

//   const [errors, setErrors] = useState({});

//   const handleInputChange = (e, index, field, section) => {
//     const value = e.target.value;
//     if (section) {
//       const newSection = [...formData[section]];
//       newSection[index][field] = value;
//       setFormData({ ...formData, [section]: newSection });
//     } else {
//       setFormData({ ...formData, [field]: value });
//     }
//   };

//   const handleValidation = (value, type, name) => {
//     let isValid = true;
//     switch (type) {
//       case validType.TEXT:
//         isValid = strRegex.test(value) && value.trim().length > 0;
//         break;
//       case validType.TEXT_EMP:
//         isValid = strRegex.test(value);
//         break;
//       case validType.EMAIL:
//         isValid = emailRegex.test(value) && value.trim().length > 0;
//         break;
//       case validType.PHONENO:
//         isValid = phoneRegex.test(value) && value.trim().length > 0;
//         break;
//       case validType.ANY:
//         isValid = value.trim().length > 0;
//         break;
//       default:
//         break;
//     }
//     setErrors({ ...errors, [name]: isValid ? '' : `${name} is invalid` });
//   };

//   const fetchValues = (attrs, ...nodeLists) => {
//     let elemsAttrsCount = nodeLists.length;
//     let elemsDataCount = nodeLists[0].length;
//     let tempDataArr = [];

//     for (let i = 0; i < elemsDataCount; i++) {
//       let dataObj = {};
//       for (let j = 0; j < elemsAttrsCount; j++) {
//         dataObj[`${attrs[j]}`] = nodeLists[j][i].value;
//       }
//       tempDataArr.push(dataObj);
//     }

//     return tempDataArr;
//   };

//   const getUserInputs = () => {
//     return {
//       ...formData,
//     };
//   };

//   const displayCV = (userData) => {
//     return (
//       <>
//         <div>{`${userData.firstname} ${userData.middlename} ${userData.lastname}`}</div>
//         <div>{userData.phoneno}</div>
//         <div>{userData.email}</div>
//         <div>{userData.address}</div>
//         <div>{userData.designation}</div>
//         <div>{userData.summary}</div>
//         <div>{showListData(userData.projects)}</div>
//         <div>{showListData(userData.achievements)}</div>
//         <div>{showListData(userData.skills)}</div>
//         <div>{showListData(userData.educations)}</div>
//         <div>{showListData(userData.experiences)}</div>
//       </>
//     );
//   };

//   const showListData = (listData) => {
//     return listData.map((listItem, index) => (
//       <div key={index} className="preview-item">
//         {Object.keys(listItem).map((key, idx) => (
//           <span key={idx} className="preview-item-val">
//             {listItem[key]}
//           </span>
//         ))}
//       </div>
//     ));
//   };

//   const generateCV = () => {
//     let userData = getUserInputs();
//     displayCV(userData);
//     console.log(userData);
//   };

//   const previewImage = () => {
//     let file = formData.image;
//     if (file) {
//       let oFReader = new FileReader();
//       oFReader.readAsDataURL(file);
//       oFReader.onload = function (ofEvent) {
//         document.getElementById('image_dsp').src = ofEvent.target.result;
//       };
//     }
//   };

//   const printCV = () => {
//     window.print();
//   };

//   const handleImageChange = (e) => {
//     setFormData({ ...formData, image: e.target.files[0] });
//   };

//   return (
//     <div>
//       <form id="cv-form">
//         <input
//           type="text"
//           value={formData.firstname}
//           onChange={(e) => handleInputChange(e, null, 'firstname')}
//           onBlur={(e) => handleValidation(e.target.value, validType.TEXT, 'First Name')}
//           placeholder="First Name"
//         />
//         <span>{errors.firstname}</span>

//         <input
//           type="text"
//           value={formData.middlename}
//           onChange={(e) => handleInputChange(e, null, 'middlename')}
//           onBlur={(e) => handleValidation(e.target.value, validType.TEXT_EMP, 'Middle Name')}
//           placeholder="Middle Name"
//         />
//         <span>{errors.middlename}</span>

//         <input
//           type="text"
//           value={formData.lastname}
//           onChange={(e) => handleInputChange(e, null, 'lastname')}
//           onBlur={(e) => handleValidation(e.target.value, validType.TEXT, 'Last Name')}
//           placeholder="Last Name"
//         />
//         <span>{errors.lastname}</span>

//         <input type="file" onChange={handleImageChange} />
//         <button type="button" onClick={previewImage}>
//           Preview Image
//         </button>
//         <span>{errors.image}</span>

//         <input
//           type="text"
//           value={formData.designation}
//           onChange={(e) => handleInputChange(e, null, 'designation')}
//           onBlur={(e) => handleValidation(e.target.value, validType.TEXT, 'Designation')}
//           placeholder="Designation"
//         />
//         <span>{errors.designation}</span>

//         <input
//           type="text"
//           value={formData.address}
//           onChange={(e) => handleInputChange(e, null, 'address')}
//           onBlur={(e) => handleValidation(e.target.value, validType.ANY, 'Address')}
//           placeholder="Address"
//         />
//         <span>{errors.address}</span>

//         <input
//           type="email"
//           value={formData.email}
//           onChange={(e) => handleInputChange(e, null, 'email')}
//           onBlur={(e) => handleValidation(e.target.value, validType.EMAIL, 'Email')}
//           placeholder="Email"
//         />
//         <span>{errors.email}</span>

//         <input
//           type="text"
//           value={formData.phoneno}
//           onChange={(e) => handleInputChange(e, null, 'phoneno')}
//           onBlur={(e) => handleValidation(e.target.value, validType.PHONENO, 'Phone Number')}
//           placeholder="Phone Number"
//         />
//         <span>{errors.phoneno}</span>

//         <textarea
//           value={formData.summary}
//           onChange={(e) => handleInputChange(e, null, 'summary')}
//           onBlur={(e) => handleValidation(e.target.value, validType.ANY, 'Summary')}
//           placeholder="Summary"
//         />
//         <span>{errors.summary}</span>

//         <button type="button" onClick={generateCV}>
//           Generate CV
//         </button>
//         <button type="button" onClick={printCV}>
//           Print CV
//         </button>
//       </form>
//       <div id="cv-preview">
//         <img id="image_dsp" alt="Preview" />
//         {displayCV(formData)}
//       </div>
//     </div>
//   );
// };

// export default CVForm;
