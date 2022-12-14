const Header = ({user, page}) => {
    return ( 
        <div className="header">
          <div id="user">{user}</div>
          <h2>{page}</h2>
          <hr></hr>
      </div>
     );
}
 
export default Header;