import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import './index.css'
const WeZax=()=>{
    return <div className='bg_we_zax'>
        <Container>
            <Grid container>
                 <Grid item lg={8} md={10} sm={10}  xs={12} className='we_zax_heading'>
                         <h1><b>Welcome to the Future of Transactions with Zillion <br></br> Anchor XO (ZAX)!</b></h1>
                         <p>ZAX is a utility token that breaks through the boundaries between centralized and decentralized platforms. Join us now and become part of the finance revolution.</p>
                 </Grid>
            </Grid>
        </Container>
    </div>
}

export default WeZax