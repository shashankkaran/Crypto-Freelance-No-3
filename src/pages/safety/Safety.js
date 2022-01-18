import React from 'react'
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import "./safety.css";



import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
function createData(name) {
    return { name };
}

const rows = [
    createData('Ideology of project created and implementation started'),
    createData('Bounty Program'),
    createData('Influencer Marketing'),
    createData('Public Article'),
    createData('Expansion of Listing in PCS'),
    createData('Listing on CEX exchange'),
    // createData('BSC scan LOGO updatation'),
];


function Safety() {
    const [expanded, setExpanded] = React.useState(false);

    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };
    return (
        <div id="roadmap" className='grad1 pt-0 pb-5'>
            <div>
                <h1 class="p-5" style={{ textAlign: 'center', fontSize: '3rem', color: 'hotpink', fontWeight: 'bolder',color:'hotpink' }}>Roadmap</h1>
            </div>



<div class="container">
            <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1bh-content"
                    id="panel1bh-header"
                >
                    <Typography sx={{ width: '33%', flexShrink: 0 }}>
                        Quarter I 2022
                    </Typography>
                    <Typography sx={{ color: 'text.secondary' }}>Programs</Typography>

                </AccordionSummary>
                <AccordionDetails>
                    <Typography>

                        <TableContainer component={Paper}>
                            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                                <TableHead>
                                    <TableRow>
                                        {/* <TableCell>Names</TableCell> */}
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {rows.map((row) => (
                                        <TableRow
                                            key={row.name}
                                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                        >
                                            <TableCell component="th" scope="row">
                                                {row.name}
                                            </TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </TableContainer>


                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel2bh-content"
                    id="panel2bh-header"
                >
                    <Typography sx={{ width: '33%', flexShrink: 0 }}>Quarter II 2022</Typography>
                    <Typography sx={{ color: 'text.secondary' }}>
                        Programs
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>




                        <TableContainer component={Paper}>
                            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                                <TableHead>
                                    <TableRow

                                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                    >
                                        <TableCell>LIsting CMS token utilization expansion</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    <TableRow>
                                        <TableCell>
                                           Fork of blockchain
                                        </TableCell>
                                    </TableRow>
                                    <TableRow>

                                        <TableCell>
                                          Launch our own swap and exchange
                                        </TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell>
                                         Trust wallet listing
                                        </TableCell>
                                    </TableRow>
                                  
                                </TableBody>
                            </Table>
                        </TableContainer>



                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel3bh-content"
                    id="panel3bh-header"
                >
                    <Typography sx={{ width: '33%', flexShrink: 0 }}>
                        Quarter III 2022
                    </Typography>
                    <Typography sx={{ color: 'text.secondary' }}>
                        Programs
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>



                        <TableContainer component={Paper}>
                            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                                <TableHead>
                                    <TableRow

                                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                    >
                                        <TableCell>Coin gecko</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    <TableRow>
                                        <TableCell>
                                          Huge marketing
                                        </TableCell>
                                    </TableRow>
                                    <TableRow>

                                        <TableCell>
                                         Website Redevlopment
                                        </TableCell>
                                    </TableRow>

                                 

                                </TableBody>
                            </Table>
                        </TableContainer>




                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel4bh-content"
                    id="panel4bh-header"
                >
                    <Typography sx={{ width: '33%', flexShrink: 0 }}> Quarter IV 2022</Typography>
                    <Typography sx={{ color: 'text.secondary' }}>
                        Programs
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>




                        <TableContainer component={Paper}>
                            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                                <TableHead>
                                    <TableRow

                                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                    >
                                        <TableCell>Give away of CMCC</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    <TableRow>
                                        <TableCell>
                                          NFT Marked price launched
                                        </TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell>
                                          Apply for binance
                                        </TableCell>
                                    </TableRow>
                                </TableBody>
                            </Table>
                        </TableContainer>




                    </Typography>
                </AccordionDetails>
            </Accordion>
            </div>
        </div>
    )
}

export default Safety
