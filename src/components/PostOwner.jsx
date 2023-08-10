export const PostOwner = ({
  photo,
  name,
  text,
  like,
  imglike,
  }) => {
  return <div className="vstack gap-3">
    <div className="d-flex align-items-center gap-3">
    <img src= {photo}
              width="48"
              height="48"
              className="rounded-circle"
              style={{ objectFit: "cover" }}></img>
    <span className="fw-semibold fs-5">{name}</span>
    </div>
   <span>{text}</span>
   <div className="d-flex align-items-center gap-1">
            <img src={imglike}width={20}></img>
   <span className="text-muted">{like}</span>
   </div>
    <hr className="m-0 border" />
  </div>;
};
