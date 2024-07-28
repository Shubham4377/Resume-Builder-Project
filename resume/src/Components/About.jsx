import React, { useState } from 'react';

const About = () => {
  const [formData, setFormData] = useState({
    firstname: '',
    middlename: '',
    lastname: '',
    image: '',
    designation: '',
    address: '',
    email: '',
    phoneno: '',
    summary: '',
    achieve_title: '',
    achieve_description: '',
    exp_title: '',
    exp_organization: '',
    exp_location: '',
    exp_start_date: '',
    exp_end_date: '',
    exp_description: '',
    edu_school: '',
    edu_degree: '',
    edu_city: '',
    edu_start_date: '',
    edu_graduation_date: '',
    edu_description: '',
    proj_title: '',
    proj_link: '',
    proj_description: '',
    skill: '',
  });

  const [imagePreview, setImagePreview] = useState('');

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === 'image') {
      const file = files[0];
      if (file) {
        const reader = new FileReader();
        reader.onloadend = () => {
          setImagePreview(reader.result);
          setFormData({ ...formData, [name]: reader.result });
        };
        reader.readAsDataURL(file);
      }
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleGenerateCV = () => {
    console.log('Generating CV...', formData);
  };

  const handlePrintCV = () => {
    window.print();
  };

  return (
    <>
      <section id="about-sc" className="">
        <div className="container">
          <div className="about-cnt">
            <form className="cv-form" id="cv-form">
              <div className="cv-form-blk">
                <div className="cv-form-row-title">
                  <h3>about section</h3>
                </div>
                <div className="cv-form-row cv-form-row-about">
                  <div className="cols-3">
                    <div className="form-elem">
                      <label className="form-label">First Name</label>
                      <input
                        name="firstname"
                        type="text"
                        className="form-control firstname"
                        value={formData.firstname}
                        onChange={handleChange}
                        placeholder="e.g. John"
                      />
                      <span className="form-text"></span>
                    </div>
                    <div className="form-elem">
                      <label className="form-label">
                        Middle Name <span className="opt-text">(optional)</span>
                      </label>
                      <input
                        name="middlename"
                        type="text"
                        className="form-control middlename"
                        value={formData.middlename}
                        onChange={handleChange}
                        placeholder="e.g. Herbert"
                      />
                      <span className="form-text"></span>
                    </div>
                    <div className="form-elem">
                      <label className="form-label">Last Name</label>
                      <input
                        name="lastname"
                        type="text"
                        className="form-control lastname"
                        value={formData.lastname}
                        onChange={handleChange}
                        placeholder="e.g. Doe"
                      />
                      <span className="form-text"></span>
                    </div>
                  </div>

                  <div className="cols-3">
                    <div className="form-elem">
                      <label className="form-label">Your Image</label>
                      <input
                        name="image"
                        type="file"
                        className="form-control image"
                        accept="image/*"
                        onChange={handleChange}
                      />
                      {imagePreview && (
                        <div className="image-preview">
                          <img src={imagePreview} alt="Image Preview" />
                        </div>
                      )}
                    </div>
                    <div className="form-elem">
                      <label className="form-label">Designation</label>
                      <input
                        name="designation"
                        type="text"
                        className="form-control designation"
                        value={formData.designation}
                        onChange={handleChange}
                        placeholder="e.g. Sr.Accountant"
                      />
                      <span className="form-text"></span>
                    </div>
                    <div className="form-elem">
                      <label className="form-label">Address</label>
                      <input
                        name="address"
                        type="text"
                        className="form-control address"
                        value={formData.address}
                        onChange={handleChange}
                        placeholder="e.g. Lake Street-23"
                      />
                      <span className="form-text"></span>
                    </div>
                  </div>

                  <div className="cols-3">
                    <div className="form-elem">
                      <label className="form-label">Email</label>
                      <input
                        name="email"
                        type="text"
                        className="form-control email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="e.g. johndoe@gmail.com"
                      />
                      <span className="form-text"></span>
                    </div>
                    <div className="form-elem">
                      <label className="form-label">Phone No:</label>
                      <input
                        name="phoneno"
                        type="text"
                        className="form-control phoneno"
                        value={formData.phoneno}
                        onChange={handleChange}
                        placeholder="e.g. 456-768-798, 567.654.002"
                      />
                      <span className="form-text"></span>
                    </div>
                    <div className="form-elem">
                      <label className="form-label">Summary</label>
                      <input
                        name="summary"
                        type="text"
                        className="form-control summary"
                        value={formData.summary}
                        onChange={handleChange}
                        placeholder="e.g. Brief summary"
                      />
                      <span className="form-text"></span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Achievements Section */}
              <div className="cv-form-blk">
                <div className="cv-form-row-title">
                  <h3>achievements</h3>
                </div>
                <div className="row-separator repeater">
                  <div className="repeater" data-repeater-list="group-a">
                    <div data-repeater-item>
                      <div className="cv-form-row cv-form-row-achievement">
                        <div className="cols-2">
                          <div className="form-elem">
                            <label className="form-label">Title</label>
                            <input
                              name="achieve_title"
                              type="text"
                              className="form-control achieve_title"
                              value={formData.achieve_title}
                              onChange={handleChange}
                              placeholder="e.g. Best Employee"
                            />
                            <span className="form-text"></span>
                          </div>
                          <div className="form-elem">
                            <label className="form-label">Description</label>
                            <input
                              name="achieve_description"
                              type="text"
                              className="form-control achieve_description"
                              value={formData.achieve_description}
                              onChange={handleChange}
                              placeholder="e.g. Awarded for outstanding performance"
                            />
                            <span className="form-text"></span>
                          </div>
                        </div>
                        <button
                          data-repeater-delete
                          type="button"
                          className="repeater-remove-btn"
                        >
                          -
                        </button>
                      </div>
                    </div>
                  </div>
                  <button
                    type="button"
                    data-repeater-create
                    className="repeater-add-btn"
                  >
                    +
                  </button>
                </div>
              </div>

              {/* Experience Section */}
              <div className="cv-form-blk">
                <div className="cv-form-row-title">
                  <h3>experience</h3>
                </div>
                <div className="row-separator repeater">
                  <div className="repeater" data-repeater-list="group-b">
                    <div data-repeater-item>
                      <div className="cv-form-row cv-form-row-experience">
                        <div className="cols-3">
                          <div className="form-elem">
                            <label className="form-label">Title</label>
                            <input
                              name="exp_title"
                              type="text"
                              className="form-control exp_title"
                              value={formData.exp_title}
                              onChange={handleChange}
                            />
                            <span className="form-text"></span>
                          </div>
                          <div className="form-elem">
                            <label className="form-label">Company / Organization</label>
                            <input
                              name="exp_organization"
                              type="text"
                              className="form-control exp_organization"
                              value={formData.exp_organization}
                              onChange={handleChange}
                            />
                            <span className="form-text"></span>
                          </div>
                          <div className="form-elem">
                            <label className="form-label">Location</label>
                            <input
                              name="exp_location"
                              type="text"
                              className="form-control exp_location"
                              value={formData.exp_location}
                              onChange={handleChange}
                            />
                            <span className="form-text"></span>
                          </div>
                        </div>
                        <div className="cols-3">
                          <div className="form-elem">
                            <label className="form-label">Start Date</label>
                            <input
                              name="exp_start_date"
                              type="text"
                              className="form-control exp_start_date"
                              value={formData.exp_start_date}
                              onChange={handleChange}
                            />
                            <span className="form-text"></span>
                          </div>
                          <div className="form-elem">
                            <label className="form-label">End Date</label>
                            <input
                              name="exp_end_date"
                              type="text"
                              className="form-control exp_end_date"
                              value={formData.exp_end_date}
                              onChange={handleChange}
                            />
                            <span className="form-text"></span>
                          </div>
                          <div className="form-elem">
                            <label className="form-label">Description</label>
                            <input
                              name="exp_description"
                              type="text"
                              className="form-control exp_description"
                              value={formData.exp_description}
                              onChange={handleChange}
                            />
                            <span className="form-text"></span>
                          </div>
                        </div>
                        <button
                          data-repeater-delete
                          type="button"
                          className="repeater-remove-btn"
                        >
                          -
                        </button>
                      </div>
                    </div>
                  </div>
                  <button
                    type="button"
                    data-repeater-create
                    className="repeater-add-btn"
                  >
                    +
                  </button>
                </div>
              </div>

              {/* Education Section */}
              <div className="cv-form-blk">
                <div className="cv-form-row-title">
                  <h3>education</h3>
                </div>
                <div className="row-separator repeater">
                  <div className="repeater" data-repeater-list="group-c">
                    <div data-repeater-item>
                      <div className="cv-form-row cv-form-row-education">
                        <div className="cols-3">
                          <div className="form-elem">
                            <label className="form-label">School</label>
                            <input
                              name="edu_school"
                              type="text"
                              className="form-control edu_school"
                              value={formData.edu_school}
                              onChange={handleChange}
                            />
                            <span className="form-text"></span>
                          </div>
                          <div className="form-elem">
                            <label className="form-label">Degree</label>
                            <input
                              name="edu_degree"
                              type="text"
                              className="form-control edu_degree"
                              value={formData.edu_degree}
                              onChange={handleChange}
                            />
                            <span className="form-text"></span>
                          </div>
                          <div className="form-elem">
                            <label className="form-label">City</label>
                            <input
                              name="edu_city"
                              type="text"
                              className="form-control edu_city"
                              value={formData.edu_city}
                              onChange={handleChange}
                            />
                            <span className="form-text"></span>
                          </div>
                        </div>
                        <div className="cols-3">
                          <div className="form-elem">
                            <label className="form-label">Start Date</label>
                            <input
                              name="edu_start_date"
                              type="text"
                              className="form-control edu_start_date"
                              value={formData.edu_start_date}
                              onChange={handleChange}
                            />
                            <span className="form-text"></span>
                          </div>
                          <div className="form-elem">
                            <label className="form-label">Graduation Date</label>
                            <input
                              name="edu_graduation_date"
                              type="text"
                              className="form-control edu_graduation_date"
                              value={formData.edu_graduation_date}
                              onChange={handleChange}
                            />
                            <span className="form-text"></span>
                          </div>
                          <div className="form-elem">
                            <label className="form-label">Description</label>
                            <input
                              name="edu_description"
                              type="text"
                              className="form-control edu_description"
                              value={formData.edu_description}
                              onChange={handleChange}
                            />
                            <span className="form-text"></span>
                          </div>
                        </div>
                        <button
                          data-repeater-delete
                          type="button"
                          className="repeater-remove-btn"
                        >
                          -
                        </button>
                      </div>
                    </div>
                  </div>
                  <button
                    type="button"
                    data-repeater-create
                    className="repeater-add-btn"
                  >
                    +
                  </button>
                </div>
              </div>

              {/* Projects Section */}
              <div className="cv-form-blk">
                <div className="cv-form-row-title">
                  <h3>projects</h3>
                </div>
                <div className="row-separator repeater">
                  <div className="repeater" data-repeater-list="group-d">
                    <div data-repeater-item>
                      <div className="cv-form-row cv-form-row-project">
                        <div className="cols-3">
                          <div className="form-elem">
                            <label className="form-label">Title</label>
                            <input
                              name="proj_title"
                              type="text"
                              className="form-control proj_title"
                              value={formData.proj_title}
                              onChange={handleChange}
                            />
                            <span className="form-text"></span>
                          </div>
                          <div className="form-elem">
                            <label className="form-label">Link</label>
                            <input
                              name="proj_link"
                              type="text"
                              className="form-control proj_link"
                              value={formData.proj_link}
                              onChange={handleChange}
                            />
                            <span className="form-text"></span>
                          </div>
                          <div className="form-elem">
                            <label className="form-label">Description</label>
                            <input
                              name="proj_description"
                              type="text"
                              className="form-control proj_description"
                              value={formData.proj_description}
                              onChange={handleChange}
                            />
                            <span className="form-text"></span>
                          </div>
                        </div>
                        <button
                          data-repeater-delete
                          type="button"
                          className="repeater-remove-btn"
                        >
                          -
                        </button>
                      </div>
                    </div>
                  </div>
                  <button
                    type="button"
                    data-repeater-create
                    className="repeater-add-btn"
                  >
                    +
                  </button>
                </div>
              </div>

              {/* Skills Section */}
              <div className="cv-form-blk">
                <div className="cv-form-row-title">
                  <h3>skills</h3>
                </div>
                <div className="row-separator repeater">
                  <div className="repeater" data-repeater-list="group-e">
                    <div data-repeater-item>
                      <div className="cv-form-row cv-form-row-skill">
                        <div className="cols-3">
                          <div className="form-elem">
                            <label className="form-label">Skill</label>
                            <input
                              name="skill"
                              type="text"
                              className="form-control skill"
                              value={formData.skill}
                              onChange={handleChange}
                            />
                            <span className="form-text"></span>
                          </div>
                        </div>
                        <button
                          data-repeater-delete
                          type="button"
                          className="repeater-remove-btn"
                        >
                          -
                        </button>
                      </div>
                    </div>
                  </div>
                  <button
                    type="button"
                    data-repeater-create
                    className="repeater-add-btn"
                  >
                    +
                  </button>
                </div>
              </div>

              {/* Actions */}
              <div className="cv-form-blk">
                <div className="cv-form-row-title">
                  <h3>actions</h3>
                </div>
                <div className="cv-form-row cv-form-row-actions">
                  <button type="button" onClick={handleGenerateCV} className="btn btn-primary">
                    Generate CV
                  </button>
                  <button type="button" onClick={handlePrintCV} className="btn btn-secondary">
                    Print
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
