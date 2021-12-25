import * as React from 'react';
import Script from "next/script";
import Head from "next/head";
import {Footer} from "./Footer";
import {VerticalSideBar} from "./VerticalSideBar";
import {HorizontalSideBar} from "./HorizontalSideBar";

export  const Layout = ({ children }) => {
    return (
        <>
            <Head>
                <base href="./" />
                <meta charSet="utf-8" />
                <meta http-equiv="X-UA-Compatible" content="IE=edge" />
                <title>Family Portal</title>
                 <meta name="viewport" content="width=device-width, initial-scale=1" />
                 <link rel="stylesheet" href="/plugins/fontawesome-free/css/all.min.css" />
                 <link rel="stylesheet" href="https://code.ionicframework.com/ionicons/2.0.1/css/ionicons.min.css" />
                 <link rel="stylesheet" href="/css/adminlte.min.css" />
                 <link href="https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400,400i,700"  rel="stylesheet" />
                <script  type="text/javascript" src="/plugins/jquery/jquery.min.js" />
                <script  type="text/javascript" src="/plugins/bootstrap/js/bootstrap.bundle.min.js" />
                <script  type="text/javascript" src="/js/adminlte.min.js" />
                <script  type="text/javascript" src="/plugins/bs-custom-file-input/bs-custom-file-input.min.js" />
            </Head>
        <div className="wrapper">
            <HorizontalSideBar />
          <VerticalSideBar />
            { children }

        <Footer />
        </div>

        </>
    );
};
