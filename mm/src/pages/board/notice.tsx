import * as React from 'react';
import { BaseUrl } from '../../util/axiosApi';   
import axios from 'axios';
import { useQuery } from 'react-query';
import { Box, 
         Paper, 
         Stack,
         styled, 
         Table, 
         TableBody, 
         TableCell, 
         tableCellClasses, 
         TableContainer, 
         TableHead, 
         TableRow,
         CircularProgress,
         Typography} from '@mui/material';

const Bookmark: React.FC = () => {
  const noticeRead = async ()=>{
    const url = BaseUrl + "/notice/list"
    const { data } = await axios.get(url)
   return data
 }

const { isLoading, data } = useQuery('noticeRead', noticeRead );

if( isLoading ){
  return <CircularProgress color="success" />
}
else{
       return <div>
        {data}
       </div>
}
}


export default Bookmark;