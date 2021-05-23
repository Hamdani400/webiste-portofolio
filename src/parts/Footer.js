import React from 'react';
import Facebook from 'assets/image/icon/facebook.svg';
import Github from 'assets/image/icon/github.svg';
import Instagram from 'assets/image/icon/instagram.svg';
import Button from 'elements/Button';

export default function Footer () {
  return (
    <footer>
      <div className="icon-wrapper justify-content-between">
        <Button
          type="link"
          isExternal
          href="https://web.facebook.com/shaankaremania"
        >
          <img src={Facebook} alt="facebook" />
        </Button>
        <Button
          type="link"
          isExternal
          href="https://www.instagram.com/danidhaq/"
        >
          <img src={Instagram} alt="instagram" />
        </Button>
        <Button type="link" isExternal href="https://github.com/Hamdani400">
          <img src={Github} alt="github" />
        </Button>
      </div>
      <h5 className="text-center">
        Design by <span className="fw-bold">Hamdani</span>
      </h5>
    </footer>
  );
}
