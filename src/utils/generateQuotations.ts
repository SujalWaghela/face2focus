import * as Quotations from '../data/quotations.json';

const generateQuotes = () => {
  const index = Math.floor(Math.random() * 10);
  console.log('The Random Number Generated is ', index, Quotations[index]); // For Debug Only
  let description = Quotations[index].QuotationDescription;
  let author = Quotations[index].QuotationAuthor;
  return [description, author];
};

export default generateQuotes;
