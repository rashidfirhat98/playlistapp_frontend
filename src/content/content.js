import React from 'react';
import { Route, Routes } from 'react-router';
import Help from '../pages/help';
import Home from '../pages/home';
import Youtube from '../pages/youtube/youtube';


class Content extends React.Component {
    render() { 
        return (
            <div>
                <Routes>
                    <Route path="/" element={<Home></Home>}></Route>
                    <Route path="/youtube" element={<Youtube></Youtube>}></Route>
                    <Route path="/help" element={<Help></Help>}></Route>
                </Routes>
            </div>
        )
    }
}
 
export default Content;