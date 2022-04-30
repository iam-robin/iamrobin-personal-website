const MediaItem = (props) => {
    return (
        <div>
          <img src={props.image} alt="media image" />
          <h3>{props.title}</h3>
        </div>
    );
}

export default MediaItem;
