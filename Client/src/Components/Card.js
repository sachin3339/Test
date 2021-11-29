import Button from "./Button";

const Card = (props) => {
    return <div class="card" style={{width: "20rem"}}>
    <img src={props.src} class="card-img-top" alt={props.alt}/>
    <div class="card-body">
      <h5 class="card-title">{props.title}</h5>
      <p class="card-text">{props.description}</p>
      <Button text={props.buttonText} className={props.buttonClassName} href={props.href}/>
    </div>
  </div>
}

export default Card;