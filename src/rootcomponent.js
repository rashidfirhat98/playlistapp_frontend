import React from 'react';
import Content from './content/content';
import Menu from './menu/menu';


class RootComponent extends React.Component {
    render() { 
        return (
            <div>
                <h1>Youtube Playlist App</h1>
                <div>
                    <Menu/>
                </div>
                <br/>
                <div>
                    <Content/>
                </div>
            </div>
        )
    }
}
 
export default RootComponent;