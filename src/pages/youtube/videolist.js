import React from 'react';

class VideoList extends React.Component {

    showCategory=()=>{
        if(this.props.category === 0){
            return <span>Programming</span>

        }else if(this.props.category === 1){
            return <span>Technology</span>

        }else if(this.props.category === 2){
            return <span>Lifestyle</span>

        }else if(this.props.category === 3){
            return <span>Funny</span>

        }else if(this.props.category === 4){
            return <span>Sports</span>

        }else if(this.props.category === 5){
            return <span>Cute</span>

        }else if(this.props.category === 6){
            return <span>Travel</span>

        }else{
            return <span>Educational</span>
        }
    }

    playVideoById=()=>{
        this.props.playid(this.props.name)
    }

    deleteVideoById=()=>{
        this.props.deleteid(this.props.id)
    }

    render() { 
        return (
            <tr>
                <td>&nbsp;{this.props.id}&nbsp;</td>
                <td>&nbsp;{this.props.name}&nbsp;</td>
                <td>
                    &nbsp;{this.showCategory()}&nbsp;
                </td>
                <td>
                    &nbsp;<button onClick={this.playVideoById}>Play Now</button>&nbsp;
                </td>
                <td>
                    &nbsp;<button onClick={this.deleteVideoById}>Delete</button>&nbsp;
                </td>
            </tr>
            )
    }
}
 
export default VideoList;