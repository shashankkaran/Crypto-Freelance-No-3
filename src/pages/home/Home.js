import React, { useEffect } from 'react'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import c1 from '../../images/c1.jpg';
import c2 from '../../images/c2.jpg';
import c3 from '../../images/c3.jpg';
import bat from '../../images/bat.jpg';
import logo from "../../images/logo.png"
import Aos from "aos";
import './home.css'
import CountUp, { useCountUp } from 'react-countup';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import { CopyToClipboard } from 'react-copy-to-clipboard';
// import Button from '@mui/material/Button';
import About from '../about/About';
import Services from '../services/Services';
import Safety from '../safety/Safety';
import Contact from '../contact/Contact';
import Navbar from '../../components/navbar/Navbar';
import Footer from '../../components/footer/Footer';
import TelegramIcon from '@mui/icons-material/Telegram';

function Home() {



  const contractVal = "0x03a59453406cc024a2d6e55526401bdc";
  useEffect(() => {
    Aos.init({
      duration: 1000,
      delay: 500,
    });
  }, []);
  return (
    <div id="/">
      <Navbar/>







      <div  class="card">

        <Card data-aos="fade-out" sx={{ maxWidth: 400 }}>
          <CardMedia
            component="img"
            height="140"
            image={logo}
            alt="green iguana"
          />
          <CardContent data-aos="fade-right">
            <Typography gutterBottom variant="h5" component="div">
            No one has ever become poor by giving 
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Environment To Provide a Better Life Through Blockchain
            </Typography>
          </CardContent>
          <CardActions>
            <Button href="https://t.me/httpstmeHFa2ZYn2PtM0YzRl" variant="contained"><TelegramIcon /> Join </Button>

            <p class="pl-6">Contract Number Copy</p>
            <CopyToClipboard text={contractVal}>
              <Button >
                <ContentCopyIcon />
              </Button>
            </CopyToClipboard>

          </CardActions>
        </Card>
      </div>



      <div  id="carouselExampleIndicators" class=" carousel slide" data-bs-ride="carousel">






        <div class="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>
        <div  class="carousel-inner">
          <div class="carousel-item active">
            <img src={c1} class="cimg d-block w-100" alt="..." />
          </div>
          <div class="carousel-item">
            <img src={c2} class="cimg d-block w-100" alt="..." />
          </div>
          <div class="carousel-item">
            <img src={c3} class="cimg d-block w-100" alt="..." />
          </div>
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>




     

<Services/>
<About/>
<Safety/>
{/* <Contact/> */}















<Footer/>

     

    </div>
  )
}

export default Home
