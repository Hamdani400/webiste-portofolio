import React, {Component} from 'react';

import CertificateJson from 'json/Certificate';

import CertificateCard from 'parts/CertificateCard';
import Header from 'parts/Header';

export default class Certificate extends Component {
  render () {
    return (
      <figure className="container">
        <Header {...this.props} />
        <CertificateCard
          data={CertificateJson.certificate}
          data2={CertificateJson.certificateCol2}
        />
      </figure>
    );
  }
}
