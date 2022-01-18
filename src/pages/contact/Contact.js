import React,{useState} from 'react'
import "./c.css";
import Navbar from '../../components/navbar/Nav2';
import Footer from '../../components/footer/Footer';
import filee from "../../images/coin.pdf";
// import jsPDF from 'jspdf';
import { Document,Page } from 'react-pdf/dist/esm/entry.webpack';
import { Button } from '@mui/material';
import {NavLink as Link} from "react-router-dom";
function Contact() {


  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  function onDocumentLoadSuccess({numPages}){
    setNumPages(numPages);
    setPageNumber(1);
  }

  function changePage(offSet){
    setPageNumber(prevPageNumber => prevPageNumber + offSet);
  }

  function changePageBack(){
    changePage(-1)
  }

  function changePageNext(){
    changePage(+1)
  }

  return (
    // <div>
   
    //   <div>
   
    //     <embed class="ml-auto mr-auto" src={filee} type="application/pdf" width="80%" height="600px" />

    //   </div>
    // </div>




    <div className="App">
      <Navbar/>
      <h2 class="p-2 pb-3 ml-auto mr-auto center" style={{textAlign:'center', fontSize:'3rem',color:'hotpink',fontWeight:'bolder'}}>Whitepaper</h2>
       
    
    <header className="App-header">
    <div> <span > <Link to={filee} download target="_blank"><Button  variant="contained">Download</Button></Link>
        </span>
       </div>
      <Document file={filee} onLoadSuccess={onDocumentLoadSuccess}>
        <Page pageNumber={pageNumber} />
      </Document>
      <p> Page {pageNumber} of {numPages}</p>
      { pageNumber > 1 && 
      <button onClick={changePageBack}>Previous Page</button>
      }
      {
        pageNumber < numPages &&
        <button onClick={changePageNext}>Next Page</button>
      }
    </header>
    <center>
      {/* <div>
        <Document file={filee} onLoadSuccess={onDocumentLoadSuccess}>
          {Array.from(
            new Array(numPages),
            (el,index) => (
              <Page 
                key={`page_${index+1}`}
                pageNumber={index+1}
              />
            )
          )}
        </Document>
      </div> */}
    </center>
    <Footer/>
  </div>




  )
}

export default Contact
