/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import PropTypes from "prop-types";
import React from "react";
import Footer from "../Footer/footer";
import Header from "../Header/header";

const Layout = ({ children, page = 'home', slide = false, lan = 'es' }) => {

  return (
    <>
      <Header siteTitle='Alex Peracaula Ruiz' slide={slide} page={page} lan={lan} />
        <main>{children}</main>
      <Footer />
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
