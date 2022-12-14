const Tile = ({name,image}) => {
    return ( 
        <div className="tile">
            <div className="tile-image">
                <img src={image} alt={name} />
            </div>
            <div className="tile-name">
                <h4>{name}</h4>
            </div>
        </div>
     );
}
 
export default Tile;