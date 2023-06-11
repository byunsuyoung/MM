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

 const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
      },
      [`&.${tableCellClasses.body}`]: {
        fontSize: 14,
      }
      }));
                    
    const StyledTableRow = styled(TableRow)(({ theme }) => ({
      '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.action.hover,
      },
      // hide last border
         '&:last-child td, &:last-child th': {
        border: 0,
            },
                      }));            

const Bookmark: React.FC = () => {

  const noticeRead = async ()=>{
    const url = BaseUrl + "/notice/list"
    const { data } = await axios.post(url, {
       headers: 
       {
           "Content-Type": "application/json"
       },
        body: {}
    })
   return data
 }

const { isLoading, data } = useQuery('noticeRead', noticeRead );

if( isLoading ){
  return <CircularProgress color="success" />
}
else{
    const DynamicContent = () => {
       if(data == "" || data == null || data == undefined || ( data != null && typeof data == "object" && !Object.keys(data).length )){
            return (
                <div className='my-div'> 
                공지사항이 없습니다.
                </div>
            );
        } else {
          return(
            <TableContainer component={Paper}>
            <Table sx={{ minWidth: 700 }} aria-label="customized table">
              <TableHead>
                <TableRow>
                  <StyledTableCell>순서</StyledTableCell>
                  <StyledTableCell>제목</StyledTableCell>
                  <StyledTableCell>내용</StyledTableCell>
                  <StyledTableCell> </StyledTableCell>
                  <StyledTableCell>생성 날짜</StyledTableCell>
                  <StyledTableCell>수정 날짜</StyledTableCell>
                </TableRow>
              </TableHead>
              <TableBody>
              {Object.keys(data).map((result:any, _index: any ) => (
                <StyledTableRow>
                    <StyledTableCell component="th" scope="row">{data[result]['id']}</StyledTableCell>
                    <StyledTableCell>{ data[result]['title']}</StyledTableCell>
                    <StyledTableCell> { data[result]['content']} </StyledTableCell>
                    <StyledTableCell> </StyledTableCell>
                    <StyledTableCell>{ data[result]['created_at']} </StyledTableCell>
                    <StyledTableCell>{ data[result]['updated_at']}</StyledTableCell>
                  </StyledTableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
          );
        }
      }
  return (
      <div>
          <Stack direction={'row'} spacing={2} className='mypagecontents'>
           <Box sx={{ width: '100%' }} >
             <Stack direction="row" alignItems="center" justifyContent="space-between" mb={5}>
              <Typography variant="h5" marginTop={3} marginLeft={3} gutterBottom>
              공지사항
              </Typography>
            </Stack>
            <DynamicContent/>
          </Box>
        </Stack>
      </div>
  );
 }
}


export default Bookmark;