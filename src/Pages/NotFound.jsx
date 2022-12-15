import {Outlet} from "react-router-dom";


export default function NotFound()  {
    return (
        <div className="not-container">
                <div className="not-content"> 
                    <h1>404 error. Page Not Found</h1> 
                </div>
            <Outlet />

        </div>
    )
}

