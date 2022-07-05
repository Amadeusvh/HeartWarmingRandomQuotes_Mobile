import axios from "axios";
import { QuoteType } from "../types/quoteType";

const getQuote = async () => {

  console.log(`${process.env.API_URL}/quote`)

  return axios.get(`${process.env.API_URL}/quote`)
  .then(res => res.data)
  .catch((Error) => {
    console.log(Error)
  })
};

const createQuote = async (content: string, author: string): Promise<QuoteType> => {
  return axios.post(`${process.env.API_URL}/quote`, {
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
