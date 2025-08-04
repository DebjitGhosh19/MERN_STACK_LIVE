import { createContext } from 'react'
import { products } from '../assets/assets';

export const ShowpContext = createContext();

const ShowpContextProvider = ({ children }) => {
  const value = {
    products
  };
  return (
    <ShowpContext.Provider value={value}>
      {children}
    </ShowpContext.Provider>
  );
};

export default ShowpContextProvider