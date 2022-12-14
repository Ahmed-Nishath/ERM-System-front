const PanelTile = ({name,image}) => {
    return ( 
        <div title={name} id="side-panel-block">
            <img src={image} alt={name} />
        </div>
     );
}
 
export default PanelTile;