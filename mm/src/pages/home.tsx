/*
import * as React from 'react';
import { BaseUrl } from '../util/axiosApi';
import axios from 'axios';
import { useQuery } from 'react-query';
import {Box, Grid, Card, CardActionArea, CardContent, Typography, CardMedia, CircularProgress, Divider, Stack } from '@mui/material';
*/

const Home: React.FC = () => {
      return (
    <div>
      aaaaa
    </div>
  );
    /*
    const getRank1CompanyList = async ()=>{
        const url = BaseUrl + "/company/rank"
        const { data } = await axios.post(url, {
            headers: 
            {
                "Content-Type": "application/json"
            },
            body: { type: 'readcnt', f_all: 0 }
        })
        return data
    }

    const { isLoading, data, error } = useQuery('getRank1CompanyList', getRank1CompanyList);

    if(isLoading){
        return <CircularProgress />
    } else {
        const DynamicContent = () => {
           if(data == "" || data == null || data == undefined || ( data != null && typeof data == "object" && !Object.keys(data).length )){
                return (
                    <div className='my-div'> 
                     기업이 없습니다.
                    </div>
                );
            }
        } else {
           return (
            <div>
              <Box sx={{ flexGrow: 1, maxWidth: 1500, margin: 'auto' , mx:15, mb:15 }}>
                <Typography sx={{fontSize:20, my:5}} textAlign='center'>주변 인기 맛집</Typography>
                    <Grid container spacing={{ xs: 3, md: 3 }} columns={{ xs: 10, sm: 8, md: 10 }}>
                    {Object.keys(data).map((value:any, index:any) => (
                        <Grid xs={2} sm={2} md={2} key={index}>
                            <Card style={{ maxHeight:400 }}>
                                <CardActionArea>
                                    <CardContent>
                                        <CardMedia
                                            component="img"
                                            sx={{ marginLeft:3, width: 200 , align:'center', maxHeight:50, objectFit:"contain"}}
                                            src={data[value]['logo_url']}
                                            alt="logo"/>
                                    </CardContent>
                                    <CardContent>
                                        <Typography gutterBottom variant="h5" component="div" align="center">
                                            {data}
                                        </Typography>
                                        <Typography variant="body2" color="text.secondary">
                                            {data}
                                        </Typography>
                                        <Divider/>
                                        <Box sx={{ m: 2 }}>
                                            <Typography gutterBottom variant="body1" sx={{ fontSize:15 }}>
                                                {data}
                                            </Typography>
                                            <Stack direction="row" spacing={3}>
                                                <Box borderRadius={1} sx={{ width:50, height:30, border:"solid 1px black"}}>
                                                    <Typography gutterBottom variant="body1" sx={{ fontSize:15, marginLeft:1.5, marginTop:0.5 }}>
                                                        {
                                                           data
                                                        }
                                                    </Typography>
                                                </Box>
                                            </Stack>
                                        </Box>
                                    </CardContent>
                                </CardActionArea>
                            </Card>
                        </Grid>
                    ))}
               </Grid>
            </Box>
        </div>
     );
 }
 */
}

export default Home;
