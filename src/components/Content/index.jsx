import './style.scss';
import React from 'react';
import PageHeader from './Page_Header';
import PageBody from './Page_Body';
import PageBanner from './Page_Banner';
export default function Page() {
  return (
    <div className="Page">
      <PageBanner />
      <PageHeader />
      <PageBody />
    </div>
  );
}
