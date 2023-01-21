import addImg from "./Icons/add.svg";

const CreateNew = () => {
    return ( 
        <div className="create-new-button">
            <img src={addImg} alt="Add new"></img>
            <div>Create</div> 
        </div>
     );
}
 
export default CreateNew;