import './Card.css';

const Card = ({event, close}) => {
    return(
        <div className="card"> 
        <button
        type="button"
        className="card__exit"
        onClick={close}>※</button>
        <p className="card__text">
          {event}
        </p>
        </div>
    )
}

export default Card;