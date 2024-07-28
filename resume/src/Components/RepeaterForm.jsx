// import React, { useState } from 'react';
// import './RepeaterForm.css'; // Assuming you have some styles for animations like slideDown and slideUp

// const RepeaterForm = () => {
//   const [achievements, setAchievements] = useState([{ title: '', description: '' }]);
//   const [experiences, setExperiences] = useState([{ title: '', organization: '', location: '', startDate: '', endDate: '', description: '' }]);
//   const [educations, setEducations] = useState([{ school: '', degree: '', city: '', startDate: '', graduationDate: '', description: '' }]);
//   const [projects, setProjects] = useState([{ title: '', link: '', description: '' }]);
//   const [skills, setSkills] = useState(['']);

//   const handleAdd = (section, setSection) => {
//     const newSection = [...section];
//     newSection.push(section[0] instanceof Object ? { ...section[0] } : '');
//     setSection(newSection);
//   };

//   const handleRemove = (index, section, setSection) => {
//     const newSection = section.filter((_, i) => i !== index);
//     setSection(newSection);
//   };

//   const handleInputChange = (e, index, field, section, setSection) => {
//     const value = e.target.value;
//     const newSection = [...section];
//     if (newSection[index] instanceof Object) {
//       newSection[index][field] = value;
//     } else {
//       newSection[index] = value;
//     }
//     setSection(newSection);
//   };

//   const renderRepeaterSection = (section, setSection, fields) => (
//     <>
//       {section.map((item, index) => (
//         <div key={index} className="repeater-item">
//           {Object.keys(item).map((key) => (
//             <input
//               key={key}
//               type="text"
//               value={item[key]}
//               onChange={(e) => handleInputChange(e, index, key, section, setSection)}
//               placeholder={key}
//             />
//           ))}
//           <button
//             type="button"
//             onClick={() => handleRemove(index, section, setSection)}
//             disabled={section.length === 1}
//           >
//             Remove
//           </button>
//         </div>
//       ))}
//       <button type="button" onClick={() => handleAdd(section, setSection)}>
//         Add
//       </button>
//     </>
//   );

//   return (
//     <div className="repeater-form">
//       <h3>Achievements</h3>
//       {renderRepeaterSection(achievements, setAchievements, ['title', 'description'])}

//       <h3>Experiences</h3>
//       {renderRepeaterSection(experiences, setExperiences, ['title', 'organization', 'location', 'startDate', 'endDate', 'description'])}

//       <h3>Educations</h3>
//       {renderRepeaterSection(educations, setEducations, ['school', 'degree', 'city', 'startDate', 'graduationDate', 'description'])}

//       <h3>Projects</h3>
//       {renderRepeaterSection(projects, setProjects, ['title', 'link', 'description'])}

//       <h3>Skills</h3>
//       {renderRepeaterSection(skills, setSkills, ['skill'])}
//     </div>
//   );
// };

// export default RepeaterForm;
