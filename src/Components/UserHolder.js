import React, {useEffect, useState} from "react";
import UserSearch from "./UserSearch";
import axios from "axios";

const UserContext = React.createContext('UnKnown');

// const result = await axios(
//     `https://fitbit-dat.herokuapp.com/user/${data.user_id}`,
// );


class UserHolder extends React.Component {



    render() {
        // Use a Provider to pass the current theme to the tree below.
        // Any component can read it, no matter how deep it is.
        // In this example, we're passing "dark" as the current value.
        const [data, setData] = useState();

        useEffect(async () => {
            // window.addEventListener('load', () => this.handleLoad());
            const result = await axios(
                'https://fitbit-dat.herokuapp.com/user/1',
            );
            setData(result.data);
        }, []);
        return (
            <UserContext.Provider value="UnKnown">
                <UserSearch />
            </UserContext.Provider>
        );
    }
}