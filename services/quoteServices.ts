import axios from "axios";
import { QuoteType } from "../type/quoteType";

const getQuote =async () => {
  return axios.get("http://localhost:3030/quote")
  .then(res => res.data);
};

const createQuote = async (content: string, author: string): Promise<QuoteType> => {
  return axios.post("http://localhost:3030/quote", {
    content,
    author
  })
  .then(res => res.data);
};

const QuoteService = {
  getQuote,
  createQuote
};

export default QuoteService;
