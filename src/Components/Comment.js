import { useEffect, useState } from "react";
import Header from "./Header.js";

const Comment = () => {

    const comments = ["2022-01-20 10:55:AM | Customer not answered the phone.", "2022-07-12 08:25:PM | Customer agreed to approve the estimate within this week."];
    const [allComments, setAllComments] =useState([]);
    const [newComment, setNewComment] = useState('');

    const Splitter = (newComment) => {
        for(var i=0; i<comments.length; i++){
            const cmnt = comments[i].split('|');
            allComments.push(cmnt[0]);
            allComments.push(cmnt[1]);
        }
        allComments.push(newComment)
    }

    return ( 
        <div>
            <Header user="Technician" page="Comments"/>
            {Splitter()}
            <div className="previous-comments">
                {allComments.map((cmt,i)=>{
                    return(
                        <div key={i} className="previous-comments-list">
                            {i%2==1 && <span>&bull;</span>}{cmt}
                        </div>
                    )})}
            </div>
            <div className="comment">
                <div>Comment Here</div>
                <textarea value={newComment} 
                          onChange = {(e) => setNewComment(e.target.value)}></textarea>
                <div id="add-comment-button">
                    <button onClick={()=>{
                        Splitter(newComment)
                        }}>Add</button>
                </div>  
            </div>
        </div> 
    );
}
 
export default Comment;