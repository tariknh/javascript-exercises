const getTheTitles = function(bookArray){
    return bookArray.map((item1) => item1.title);
};


const books = [
    {
      title: 'Book',
      author: 'Name'
    },
    {
      title: 'Book2',
      author: 'Name2'
    }
  ]
// Do not edit below this line
module.exports = getTheTitles;
