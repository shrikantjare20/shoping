const NavigationBar = () => {
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <a className="navbar-brand" href="/">
                    <img src="https://img.icons8.com/ios-filled/344/javascript-logo.png" style={{width:70, height:70}}/>
                </a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse row col-md-12" id="navbarSupportedContent">
                    <form className="form-inline my-lg-0 col-md-8">
                        <input className="form-control col-md-9 mr-3" type="search" placeholder="Search" aria-label="Search" />
                        <button className="btn btn-outline-success my-2 col-md-2" type="submit">Search</button>
                    </form>
                    <ul className="navbar-nav mr-auto" >
                        <li className="nav-item active">
                            <a className="nav-link" href="/">Cart <span className="badge badge-pill badge-warning">0</span></a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/category">Profile</a>
                        </li>
                    </ul>

                </div>
            </nav>
        </>
    )
}
export default NavigationBar;