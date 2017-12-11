import React from 'react';
import { getYear } from 'date-fns';

let currentYear = getYear(Date.now());

const Footer = () => (
  <footer>
    <div className="copyright">Copyright &copy;{currentYear}</div>
  </footer>
);

export default Footer;
