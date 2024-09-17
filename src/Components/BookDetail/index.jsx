import "./index.css";

const BookDetail = () => {
  const { bookDetails } = this.props;
  const { title, authour, coverimage } = bookDetails;

  return (
    <div>
      <h1>{title}</h1>

      <p>{authour}</p>
      <img src={coverimage} />
    </div>
  );
};

export default BookDetail;
