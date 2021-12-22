import axios from 'axios';
import React from 'react';
import VideoList from './videolist';

class Youtube extends React.Component {

    constructor(props){
        super(props)
        this.state ={
            videoid:"",
            category:0,
            successid:0,
            videos:[],
            buttonDisabled:true,
            playvid:""
        }
    }

    componentDidMount(){
        this.getVideoList()
    }

    getVideoList(){
        axios.get("http://localhost:1234/all/video/")
            .then(response=>{
                console.log(response);
                console.log(response.data);
                this.setState({
                    videos: response.data
                })
            })
            .catch(error=>{
                console.log(error);
            })
    }

    renderVideoList = ()=>{
        return this.state.videos.map(video=>{
            return (
                <VideoList
                    key = {video.id}
                    id = {video.id}
                    name = {video.videoid}
                    category = {video.category}
                    playid = {this.callPlayId}
                    deleteid = {this.captureIdAndDelete}
                ></VideoList>
            )
        })
    
    }

    captureVideoId =(event)=>{
        console.log(event.target.value);
        this.setState({
            videoid: event.target.value
        })
        if(event.target.value.length > 0){
            this.setState({buttonDisabled: false})
        }else{
            this.setState({buttonDisabled: true})
        }
    }

    captureCategory=(event)=>{
        console.log(event.target.value);
        this.setState({
            category: event.target.value
        })
    }

    addNewVideo=()=>{
        let newVideo={
            "videoid": this.state.videoid,
            "category": parseInt(this.state.category),
           
        }
        console.log(newVideo);
        axios.post("http://localhost:1234/add/video/", newVideo)
            .then(response=>{
                console.log(response);
                this.setState({
                    successid: response.data[0].id,
                    videoid:""
                })
                this.getVideoList()
            })
            .catch(error=>{
                console.log(error);
            })
            
    }

    callPlayId=(videoid)=>{
        this.setState({
            playvid: videoid
        })
    }

    displayVideo=(videoid)=>{
        let videoURL = "https://www.youtube.com/embed/" + this.state.playvid
        console.log(videoURL);
        if(videoid === "") return null
        else return(videoURL)
    }
    
    captureIdAndDelete=(id)=>{
        axios.delete("http://localhost:1234/video/id/" + id)
            .then(response=>{
                console.log(response);
                
                this.getVideoList()
            })
            .catch(error=>{
                console.log(error);
            })
    }

    render() { 
        return (
            <div>
                <div>
                    <fieldset>
                        <legend>Add new video Id</legend>
                        <br/>
                        <label>Video Id: </label>
                        <input type="text" onChange={this.captureVideoId}
                            value={this.state.videoid}></input> &nbsp;
                        <br/><br/>
                        <label>Category: </label>
                        <select onChange ={this.captureCategory}>
                            <option value="0">Programming</option>
                            <option value="1">Technology</option>
                            <option value="2">Lifestyle</option>
                            <option value="3">Funny</option>
                            <option value="4">Sports</option>
                            <option value="5">Cute</option>
                            <option value="6">Travel</option>
                            <option value="7">Educational</option>
                        </select>
                        <br/><br/>
                        <button onClick={this.addNewVideo} disabled={this.state.buttonDisabled}>Add</button>
                    </fieldset>
                </div>
                <br/><br/><br/>
                <hr/>
                <div>
                    <iframe width="720" height="480"
                        src={this.displayVideo()}>
                    </iframe>
                    
                </div>
                <br/><br/>
                <div>
                <h3>List of stored videos</h3>
                <div>
                    <table border="1">
                        <thead>
                            <tr>
                                <th>Id</th>
                                <th>Video Id</th>
                                <th>Category</th>
                                <th colSpan="2">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.renderVideoList()}
                        </tbody>
                    </table>
                </div>
                </div>
            </div>
        )
    }
}
 
export default Youtube;