const CharDetails = ({ name, imageUrl, description }) => {
    return (
      <>
        <h2>{name}</h2>
        <img src={imageUrl} className="img-fluid" alt="cup" width={500}/>
        <p className="char-description">{description}</p>
        </>
    );
  };
  
  export default CharDetails;