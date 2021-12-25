import * as React from 'react';
import Script from "next/script";
import Head from "next/head";

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
            <nav className="main-header navbar navbar-expand navbar-dark navbar-purple">

                <ul className="navbar-nav">
                    <li className="nav-item">
                        <a className="nav-link" data-widget="pushmenu" href="#" role="button">
                            <i className="fas fa-bars"></i></a>
                    </li>
                    <li className="nav-item d-none d-sm-inline-block">
                        <a href="/" className="nav-link">Home</a>
                    </li>
                    <li className="nav-item d-none d-sm-inline-block">
                        <a href="/categories" className="nav-link">Categories</a>
                    </li>
                    <li className="nav-item d-none d-sm-inline-block">
                        <a href="/new/article" className="nav-link">New article</a>
                    </li>
                </ul>

                <ul className="navbar-nav ml-auto">
                    <li className="nav-item">
                        <a className="nav-link" style={{display:"none"}} data-widget="control-sidebar" data-slide="true"
                           href="#" role="button">
                            <i className="fas fa-th-large"></i>
                        </a>
                    </li>
                </ul>
            </nav>
            <aside className="main-sidebar elevation-4 sidebar-light-warning">

                <a href="/" className="brand-link">
                    <img src="https://consoft.blob.core.windows.net/gsmall/AdminLTELogo.png" alt="AdminLTE Logo"
                         className="brand-image img-circle elevation-3" style={{opacity: .8}} />
                        <span className="brand-text font-weight-light">Local Intranet</span>
                </a>

                <div className="sidebar">

                    <div className="user-panel mt-3 pb-3 mb-3 d-flex">
                        <div className="image">
                            <img src="/img/avatar.png" className="img-circle elevation-2" alt="User Image" />
                        </div>
                        <div className="info">
                            <a href="/" className="d-block">veniuscloudpower@live.com</a>
                        </div>
                    </div>

                    <nav className="mt-2">
                        <ul className="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu"
                            data-accordion="false">

                            <li className="nav-item">
                                <a href="/" className="nav-link active">
                                    <i className="fas fa-tachometer-alt"></i>
                                    <p>Dashboard</p>
                                </a>
                            </li>
                            <li className="nav-item has-treeview">
                                <a href="#" className="nav-link">
                                    <i className="fas fa-tags"></i>
                                    <p>
                                        Categories
                                        <i className="fas fa-angle-left right"></i>
                                    </p>
                                </a>
                                <ul className="nav nav-treeview">
                                    <li className="nav-item">
                                        <a className="nav-link" href="/list/category/1">
                                            <i className="fas fa-tag"></i> <p>Java</p></a>
                                    </li>
                                </ul>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/categories">
                                    <i className="fas fa-puzzle-piece"></i> <p>Categories Management</p>
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/users">
                                    <i className="fas fa-user"></i> <p>Users Management</p>
                                </a>
                            </li>
                            <li className="nav-item" style={{display:"none"}}>
                                <a className="nav-link" href="/Settings">
                                    <i className="fas fa-cog"></i> <p>Settings</p>
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/logout" >
                                    <i className="fas fa-door-closed"></i><p>Logout</p>
                                </a>
                            </li>
                        </ul>
                    </nav>
                    <form action="/logout" method="post" wtx-context="9C8AFFC2-79D5-4198-A4AA-DF5E9B97690C"><input
                        type="hidden" name="_csrf" value="bd426331-7417-4e18-80a9-11add14ed6dc"
                        wtx-context="DCE193BB-AFAC-4F02-83F4-1CE56B65642F" />
                        <button id="logoutbtn" className="nav-link" type="submit" value="Logout" style={{display: "none"}}>
                        </button>
                    </form>
                </div>

            </aside>
            { children }

        <footer className="main-footer">
                <div className="float-right d-none d-sm-block"><strong> Local Intranet</strong> Version 1.1.2</div>
                <strong>Copyright © 2014-2019 <a href="http://adminlte.io">AdminLTE.io </a>.</strong> Version 3.0.4. All
                rights
                reserved.
        </footer>
        <aside className="control-sidebar control-sidebar-light">

        </aside>
        </div>

        </>
    );
};
