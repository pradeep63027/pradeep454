import BookDetail from "../BookDetail";

const booksList = [
  {
    author_key: ["OL2822775A"],
    author_name: ["Victoria Griffin"],
    ebook_access: "no_ebook",
    ebook_count_i: 0,
    edition_count: 1,
    edition_key: ["OL41603402M"],
    first_publish_year: 2019,
    has_fulltext: false,
    isbn: ["1687595429", "9781687595423"],
    key: "/works/OL30263473W",
    language: ["eng"],
    last_modified_i: 1669489491,
    public_scan_b: false,
    publish_date: ["2019"],
    publish_year: [2019],
    publisher: ["Independently Published"],
    seed: ["/books/OL41603402M", "/works/OL30263473W", "/authors/OL2822775A"],
    title: "Craft Your Query",
    title_suggest: "Craft Your Query",
    title_sort: "Craft Your Query",
    type: "work",
    publisher_facet: ["Independently Published"],
    _version_: 1795899585883799554,
    author_facet: ["OL2822775A Victoria Griffin"],
  },
];

const BooksCard = () => (
  <div>
    <ul>
      {booksList.map((eachBook) => (
        <BookDetail bookDetails={eachBook} />
      ))}
    </ul>
  </div>
);

export default BooksCard;
