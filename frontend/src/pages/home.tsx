import * as React from 'react';
import Box from '@mui/material/Box';
import {Card, CardActionArea, CardContent, CardMedia, CircularProgress, Divider, Stack, Grid } from '@mui/material';
import Typography from '@mui/material/Typography';
import { BaseUrl } from '../util/axiosApi';
import axios from 'axios';
import { useQuery } from 'react-query';
import { useNavigate } from 'react-router-dom';
import Footer from '../pages/footer';



const Home: React.FC = () => {
    return (
        <div className="home">
            <Box sx={{ flexGrow: 1, maxWidth: 1500, margin: 'auto' , mx:15, mb:15 }}>
            <Typography sx={{fontSize:20, my:5}} textAlign='center'>지도 ..</Typography>
            </Box>
            <Box sx={{ flexGrow: 1, maxWidth: 1500, margin: 'auto' , mx:15, mb:15 }}>
                <Typography sx={{fontSize:20, my:5}} textAlign='center'>주변 인기 맛집</Typography>
                    <Grid container spacing={{ xs: 3, md: 3 }} columns={{ xs: 10, md: 10 }}>
                    {Array.from(Array(5)).map((_, index) => (
                        <Grid item xs={2} sm={2} md={2} key={index}>
                            <Card>
                                <CardActionArea>
                                    <CardContent>
                                        <CardMedia
                                            component="img"
                                            sx={{ width: 200 ,align:'center'}}
                                            image="http://placehold.it/150x150"
                                            alt="Paella dish"/>
                                    </CardContent>
                                    <CardContent>
                                        <Typography gutterBottom variant="h5" component="div" align="center">
                                            음식점 이름
                                        </Typography>
                                        <Typography variant="body2" color="text.secondary">
                                            별표
                                        </Typography>
                                        <Divider/>
                                        <Box sx={{ m: 2 }}>
                                            <Stack direction="row" spacing={3}>
                                                <Box borderRadius={1} sx={{ width:50, height:30, backgroundColor:'grey.300'}}>위치</Box>
                                                <Box borderRadius={1} sx={{ width:50, height:30, backgroundColor:'grey.300'}}>음식 정보</Box>
                                            </Stack>
                                        </Box>
                                        <Divider/>
                                    </CardContent>
                                </CardActionArea>
                            </Card>
                        </Grid>
                    ))}
                    </Grid>
                  <Footer/>
                </Box>
                <Box sx={{ flexGrow: 1, maxWidth: 1500, margin: 'auto' , mx:15, mb:15 }}>
                <Typography sx={{fontSize:20, my:5}} textAlign='center'>이벤트 중인 맛집</Typography>
                    <Grid container spacing={{ xs: 3, md: 3 }} columns={{ xs: 10, md: 10 }}>
                    {Array.from(Array(5)).map((_, index) => (
                        <Grid item xs={2} sm={2} md={2} key={index}>
                            <Card>
                                <CardActionArea>
                                    <CardContent>
                                        <CardMedia
                                            component="img"
                                            sx={{ width: 200 ,align:'center'}}
                                            image="http://placehold.it/150x150"
                                            alt="Paella dish"/>
                                    </CardContent>
                                    <CardContent>
                                        <Typography gutterBottom variant="h5" component="div" align="center">
                                            음식점 이름
                                        </Typography>
                                        <Typography variant="body2" color="text.secondary">
                                            별표
                                        </Typography>
                                        <Divider/>
                                        <Box sx={{ m: 2 }}>
                                            <Stack direction="row" spacing={3}>
                                                <Box borderRadius={1} sx={{ width:50, height:30, backgroundColor:'grey.300'}}>위치</Box>
                                                <Box borderRadius={1} sx={{ width:50, height:30, backgroundColor:'grey.300'}}>음식 정보</Box>
                                            </Stack>
                                        </Box>
                                        <Divider/>
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

export default Home;