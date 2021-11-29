const CarousalItem = (props) => {
    return (
        <div>
      <img src={props.src} class="d-block w-100" alt="..."/>
      <div class="carousel-caption d-none d-md-block">
        <h5>{props.label}</h5>
        <p>{props.description}</p>
      </div>
    </div>
    );
}

export default CarousalItem;
