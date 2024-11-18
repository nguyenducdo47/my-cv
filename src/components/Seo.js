import React from 'react';
import { Helmet } from 'react-helmet';
import data from '../data/user';

const Seo = () => {
  return (
    <div>
      <Helmet>
        <title>{`Resume - ${data.profile.name}`}</title>

        <meta name="description" content={`Profile of ${data.profile.name}, a skilled ${data.profile.title}.`} />
        <meta name="keywords" content={`${data.profile.name}, ${data.profile.title}, web developer, full-stack`} />

        <meta property="og:type" content="website" />
        <meta property="og:title" content={`${data.profile.name} - ${data.profile.title}`} />
        <meta property="og:description" content={`Profile of ${data.profile.name}, a skilled ${data.profile.title}.`} />
        <meta property="og:image" content={data.profile.avatar} /> 
        <meta property="og:url" content={window.location.href} /> 
        <meta property="og:site_name" content="My Resume" />
        <meta property="og:locale" content="vi_VN" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={`${data.profile.name} - ${data.profile.title}`} />
        <meta name="twitter:description" content={`Profile of ${data.profile.name}, a skilled ${data.profile.title}.`} />
        <meta name="twitter:image" content={data.profile.avatar} />

        <meta property="og:image:type" content="image/jpeg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />

      </Helmet>
    </div>
  );
}

export default Seo;
