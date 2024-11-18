import React from 'react';
import { Helmet } from 'react-helmet';
import data from '../data/user';


const Seo = () => {
  return (
    <div>
      <Helmet>
        <title>{`${data.profile.name} - ${data.profile.title}`}</title>
        <meta name="description" content={`Profile of ${data.profile.name}, a skilled ${data.profile.title}.`} />
        <meta name="keywords" content={`${data.profile.name}, ${data.profile.title}, web developer, full-stack`} />
        <meta property="og:title" content={`${data.profile.name} - ${data.profile.title}`} />
        <meta property="og:description" content={`Profile of ${data.profile.name}, a skilled ${data.profile.title}.`} />
        <meta property="og:image" content={data.profile.avatar} /> {/* Thêm ảnh đại diện nếu có */}
      </Helmet>
    </div>
  );
}

export default Seo;
