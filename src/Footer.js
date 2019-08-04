import React from 'react';

import { NavItem, Navbar } from 'react-bootstrap';

function Footer(/*props*/) {
  return (
    <footer>
      <Navbar fixed="bottom" className="justify-content-center">
        <NavItem className="small copyright">
          © dive galaxsea 2019
        </NavItem>

        {/* <div className="text-center small copyright">
      </div> */}
      </Navbar>

    </footer>
  );
}

export default Footer;