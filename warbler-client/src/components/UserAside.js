import React from "react";
import DefaultImageUrl from "../images/default-profile-image.jpg";

const UserAside = ({profileImageUrl, username}) => (
    <aside className="col-sm-2">
        <div className="panel panel">
            <div className="panel-body">
                <img className="img-thumbnail" width="200px" height="200px"
                    src={profileImageUrl || DefaultImageUrl} alt={username} />
            </div>
        </div>
    </aside>
)

export default UserAside;