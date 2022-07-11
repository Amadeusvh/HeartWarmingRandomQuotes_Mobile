import axios from "axios";
import { QuoteType } from "../types/quoteType";

const Adress = 'http://192.168.101.3:3030'

const getQuote = async (): Promise<QuoteType> =>  {

  console.log(`${Adress}/quote`)

  return axios.get(`${Adress}/quote`)
  .then(res => res.data)
  .catch((Error) => {
    console.log(Error)
  })
};

const createQuote = async (content: string, author: string): Promise<QuoteType> => {
  return axios.post(`${Adress}/quote`, {
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
