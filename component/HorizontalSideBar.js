import React from 'react';


export const HorizontalSideBar = () => {
    return (
        <>
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
        </>
    );
}
