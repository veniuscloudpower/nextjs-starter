import React from 'react';

export const VerticalSideBar = (props) => {
    return (
    <>
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
    </>
    );
}
