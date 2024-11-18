import React from 'react';
import { useTranslation } from 'react-i18next'; 
import '../App.css';

const Profile = () => {
  const { t } = useTranslation(); 

  const profile = t('profile', { returnObjects: true }); 

  return (
    <div>
      <h4 className="text-primary">{profile.title}</h4>
      <ul className="list-unstyled">
        <li>
          <div className="d-flex">
            <div>
              <strong><i className="fa-solid fa-cake-candles"></i></strong>&nbsp;
            </div>
            <div>{profile.date_of_birth}</div>
          </div>
        </li>

        <li>
          <div className="d-flex">
            <div>
              <strong><i className="fa-solid fa-phone"></i></strong>&nbsp;
            </div>
            <div>
              <a href={`tel:${profile.phone}`}>{profile.phone}</a>
            </div>
          </div>
        </li>

        <li>
          <div className="d-flex">
            <div>
              <strong><i className="fa-solid fa-envelope"></i></strong>&nbsp;
            </div>
            <div>
              <a href={`mailto:${profile.email}`}>
                {profile.email}
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
                href={`https://www.google.com/maps?q=${encodeURIComponent(profile.address)}`}
                target="_blank"
                rel="noopener noreferrer">
                {profile.address}
              </a>
            </div>
          </div>
        </li>

        <li>
          <div className="d-flex">
            <div><strong><i className="fa-brands fa-github"></i></strong></div>&nbsp;
            <div>
              <a href={`https://github.com/${profile.github}`} target="_blank" rel="noreferrer">
                {profile.github}
              </a>
            </div>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default Profile;
