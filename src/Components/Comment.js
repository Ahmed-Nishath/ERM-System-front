import { useParams, withRouter } from "react-router-dom";
import { useEffect, useState } from "react";
import Header from "./Header.js";
import WorkOrderService from "../WorkOrderService";

const Comment = (props) => {

    const [comments, setComments] = useState('');
    const allComments = [];
    const [newComment, setNewComment] = useState('');
    const [errorMessage, setErrorMessage] = useState('no-error-class');

    const {id} = useParams();

    useEffect(() => {
        WorkOrderService.getComment(id).then(res => {
            setComments(res.data);
        }).catch(error =>{
            console.log(error); 
        });
    },[]);

    const Splitter = () => {
        const splittedComments = comments.split('*');
        for(var i=0; i<splittedComments.length; i++){
            const cmnt = splittedComments[i].split('|');
            allComments.push(cmnt[0]);
            allComments.push(cmnt[1]);
        }
    }

    const saveComment = (e) =>{
        e.preventDefault(); 
        
        if(newComment === '' ) {
            setErrorMessage("error-class");
            return;
        }
        else{
            setErrorMessage('no-error-class'); 
        }
        // setComments(comments + new Date().toGMTString() + " | " + newComment);

        let commentUpdated = {comment:new Date().toGMTString() + " | " + newComment}

        WorkOrderService.updateComment(id, commentUpdated).then(res => {
            props.history.push(`/workorders/${id}`);
        }).catch(error => {
            console.log(error);
        });
    }

    const cancel = () =>{
        props.history.push(`/workorders/${id}`);
    } 

    return ( 
        <div>
            {Splitter()}
            <Header user="Technician" page="Comments"/>
            <div className="previous-comments">
                {allComments.map((cmt,i)=>{
                    return(
                        <div key={i} className="previous-comments-list">
                            {!comments && i%2==1 && "No comments here.!" }
                            { comments && i%2==1 && <span> &bull; </span>}
                            {cmt}
                        </div>
                    )})}
            </div>
            <div className="comment">
                <div>Comment Here</div>
                <textarea value={newComment} 
                          onChange = {(e) => setNewComment(e.target.value)}></textarea>
                <div id="add-comment-button">
                    <span id="cancel-comment-button" ><button onClick={cancel} >Cancel</button></span>
                    <button onClick={saveComment}>Add</button>
                </div> 
                <div className={errorMessage}>
                    Comment cannot be empty.!
                </div>   
            </div>
        </div> 
    );
}
 
export default withRouter(Comment);