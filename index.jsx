import React, { useState } from 'react';

const Portfolio = () => {
  const [selectedSection, setSelectedSection] = useState('About Me');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleNavigationClick = (section) => {
    setSelectedSection(section);
  };

  const handleFormChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    // Add form submission logic here
  };

  return (
    <div>
      <header>
        <h1>Developer's Portfolio</h1>
        <nav>
          <ul>
            <li className={selectedSection === 'About Me' ? 'active' : ''} onClick={() => handleNavigationClick('About Me')}>About Me</li>
            <li className={selectedSection === 'Portfolio' ? 'active' : ''} onClick={() => handleNavigationClick('Portfolio')}>Portfolio</li>
            <li className={selectedSection === 'Contact' ? 'active' : ''} onClick={() => handleNavigationClick('Contact')}>Contact</li>
            <li className={selectedSection === 'Resume' ? 'active' : ''} onClick={() => handleNavigationClick('Resume')}>Resume</li>
          </ul>
        </nav>
      </header>
      
      <main>
        {selectedSection === 'About Me' && (
          <section>
            <h2>About Me</h2>
            <img src="avatar.jpg" alt="Developer's Avatar" />
            <p>Short bio about the developer</p>
          </section>
        )}

        {selectedSection === 'Portfolio' && (
          <section>
            <h2>Portfolio</h2>
            {/* Display titled images of six applications */}
          </section>
        )}

        {selectedSection === 'Contact' && (
          <section>
            <h2>Contact</h2>
            <form onSubmit={handleFormSubmit}>
              <input type="text" name="name" placeholder="Name" onChange={handleFormChange} value={formData.name} required />
              <input type="email" name="email" placeholder="Email" onChange={handleFormChange} value={formData.email} required />
              <textarea name="message" placeholder="Message" onChange={handleFormChange} value={formData.message} required></textarea>
              <button type="submit">Submit</button>
            </form>
          </section>
        )}

        {selectedSection === 'Resume' && (
          <section>
            <h2>Resume</h2>
            <a href="resume.pdf" download>Download Resume</a>
            <ul>
              <li>Proficiency 1</li>
              <li>Proficiency 2</li>
              {/* List other proficiencies */}
            </ul>
          </section>
        )}
      </main>

      <footer>
        <a href="github.com">GitHub</a>
        <a href="linkedin.com">LinkedIn</a>
        <a href="twitter.com">Twitter</a>
      </footer>
    </div>
  );
};

export default Portfolio;
