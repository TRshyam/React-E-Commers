import React,{createContext,useContext} from 'react'
import useFetchData from './useFetchData'
import Category from '../pages/Category';
import ProductItems from './ProductItems';

const DataContext = createContext() 
export const useData = () => useContext(DataContext);


export default function ProductData({children }) {
    const {data,error}=useFetchData('http://localhost:5000/api/data')
    if(error){
        return <div>Error: {error.message}</div>;
    }
    if(!data){
        return <div>Loading...</div>;
    }
  return (
    <DataContext.Provider value={{data,error}}>
      {children}
    </DataContext.Provider>
  )
}
