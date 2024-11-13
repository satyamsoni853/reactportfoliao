import React from 'react';
import './Certification.css';

function Certification() {
  return (
    <div className="certification-section">
     <p className='label heading'>Know My Experiance</p>
      <p className="section__title title-centre topic heading ">Certification</p>
      <div className="certification__main">
        <div className="certification__container">
          <input type="radio" name="slide" id="c1" defaultChecked />
          <label htmlFor="c1" className="card">
            
          </label>

          <input type="radio" name="slide" id="c2" />
          <label htmlFor="c2" className="card">
            
          </label>

          <input type="radio" name="slide" id="c3" />
          <label htmlFor="c3" className="card">
            
          </label>

          <input type="radio" name="slide" id="c4" />
          <label htmlFor="c4" className="card">
           
          </label>

          <input type="radio" name="slide" id="c5" />
          <label htmlFor="c5" className="card">
            
          </label>

          <input type="radio" name="slide" id="c6" />
          <label htmlFor="c6" className="card">
            
          </label>

          <input type="radio" name="slide" id="c7" />
          <label htmlFor="c7" className="card">
           
          </label>
        </div>
      </div>
    </div>
  );
}

export default Certification;
