import CommentItem from "./CommentItem";

function ReplyComent({ data }) {
  return (
    <>
      <ul className="send-comment">
        {data.map((replyCom, index) => {
          return <CommentItem key={index} data={replyCom} />;
        })}
      </ul>
    </>
  );
}

export default ReplyComent;
