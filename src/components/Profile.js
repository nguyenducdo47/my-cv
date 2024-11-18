import React from 'react';
import '../App.css';
import data from '../data/user';

const Profile = () => (
  <div>
    <h4 className="text-primary">Profile</h4>
    <ul className="list-unstyled">
      <li>
        <div className="d-flex">
          <div>
            <strong><i class="fa-solid fa-cake-candles"></i></strong>&nbsp;
          </div>
          <div>{data.profile.date_of_birth}</div>
        </div>
      </li>

      <li>
        <div className="d-flex">
          <div>
            <strong><i class="fa-solid fa-phone"></i></strong>&nbsp;
          </div>
          <div>
            <a href={`tel:${data.profile.phone}`}>{data.profile.phone}</a>
          </div>
        </div>
      </li>

      <li>
        <div className="d-flex">
          <div>
            <strong><i class="fa-solid fa-envelope"></i></strong>&nbsp;
          </div>
          <div>
            <a href={`mailto:${data.profile.email}`}>
              {data.profile.email}
            </a>
          </div>
        </div>
      </li>

      <li>
        <div className="d-flex">
          <div>
            <strong><i className="fa-solid fa-address-book"></i></strong>&nbsp;
          </div>
          <div>
            <a
              href={`https://www.google.com/maps?q=${encodeURIComponent(data.profile.address)}`}
              target="_blank"
              rel="noopener noreferrer">
              {data.profile.address}
            </a>
          </div>
        </div>
      </li>



      <li>
        <div className="d-flex">
          <div><strong><i class="fa-brands fa-github"></i></strong></div>&nbsp;
          <div>
            <a href={`https://github.com/${data.profile.github}`} target="_blank" rel="noreferrer">
              {data.profile.github}
            </a>
          </div>
        </div>
      </li>
    </ul>
  </div>
);

export default Profile;
