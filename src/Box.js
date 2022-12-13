const Box = ({name,image}) => {
    return ( 
        <div className="box">
            <div className="box-image">
                <img src={image} alt={name} />
            </div>
            <div className="box-name">
                <h4>{name}</h4>
            </div>
        </div>
     );
}
 
export default Box;