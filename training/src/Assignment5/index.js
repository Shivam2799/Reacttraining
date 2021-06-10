import React from 'react';
import {makeStyles,Drawer,List,ListItem,ListItemIcon,Button,TextField,Switch,Typography,Link,Table,TableContainer,TableCell,TableBody,TableRow,TableHead} from "@material-ui/core";
import Icon from '@material-ui/core/Icon';
import AccountBalanceIcon from "@material-ui/icons/AccountBalance";
import {ArrowDownwardOutlined, Message, DetailsOutlined, Fingerprint, AlarmAddOutlined, AccessAlarmSharp, ThreeDRotation, ContactSupport, GetAppOutlined, ForumSharp, GetApp, PersonAdd,Language,Twitter,Reddit,Facebook,Telegram,GitHub} from "@material-ui/icons";
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';




const styles = makeStyles({
  mainContainer:{
    width: "100%",
    backgroundColor: "#f4f6f8",
    color: "#f4f6f8"
    
    
}, 
navBar:{
    backgroundColor: "#f4f6f8",
    width: "100%"
},
myDrawer:{
   
    width: "100px",
    color: "red"
}, 
downArrow:{
    backgroundColor: "#373737",
    width: "70px", height: "60px", color: "white"
}, 
toolBar:{
 display: "flex",
 flexDirection: "column", 

 alignItems: "center",
 
 height: "100%",
 backgroundColor: "#1565c0"
}, setIcon:{
    fontSize: "30px", 
    color: "white",
    marginTop: "16px"

},
header:{
   width: "100%",
   height: "60px",
   backgroundColor: "white",
   boxShadow: " 0 2px 3px -1px rgba(0, 0, 0, 0.3)",
   alignItems: "center"
},
signUp:{
    backgroundColor: "#388538",
    marginRight: "15px",
    color: "#ffffff",
    marginTop: "10px"
},
login:{
    backgroundColor: "#1565c0",
    color: "#ffffff",
    marginTop: "10px"
},
button:{
    marginLeft: "1200px",
    marginBottom: "10px",
},

buybuttona:{
  
  fontSize:"20px",
  fontWeight:"bold",
  width:"270px",
  margin:'10px 0 0 25px',
  cursor:"pointer",
},
sellbuttona:{
  backgroundColor:'white',
  fontSize:"20px",
  fontWeight:"bold",
  width:"270px",
  color:'grey',
  cursor:"pointer",
  margin:'10px 0 0 25px',
},
search:{
     width:'620px',
     height:'300px',
    display:'inline-block',
    border:'1px solid lightgrey',
    backgroundColor:"white",
    margin:'80px 0 0 170px ',
    borderRadius:"8px",
},
textfield:{
  width:"270px",
  margin:'20px 0 0 25px',
},
inr:{
  width:"270px",
  margin:'20px 0 0 25px',
},
inIndia:{
  width:"270px",
  margin:'20px 0 0 25px',
},
all:{
  width:"270px",
  margin:'20px 0 0 25px',
},
btn:{
width:"567px",
height:'50px',
margin:'20px 0 0 25px',
},
signup:{
  width:'620px',
  height:'300px',
 position:'absolute',
 border:'1px solid lightgrey',
 backgroundColor:"white",
 margin:'-302px 0 0 840px ',
 borderRadius:"8px",

},
bm:{
  color:'black',
  margin:'20px 0 0 0',
},
sm:{
  color:'black',
},
cash:{
  color:'black',
},
any:{
  color:'black',
},
btn1:{
  backgroundColor: "#388538",
  color: "#ffffff",
  margin:"30px 0 0 225px",
  height:'50px',
},
categories:{
 
 width:'700px',
 margin:'60px 0 0 165px',
},
you:{
 color:'black',
 margin:'30px 0 0 0',
},
ad:{
  color:'green',
  margin:"-55px 0 0px 290px",
  display:'inline-block',
  
},
follow:{
  color:'black',
  margin:'-50px 0 0 0',
},
plus:{
  color:"green",
},
green:{
  color:"green",
  margin:'-32px 0 0 24px',
},
earth:{
  color:'black',
  margin:'30px 0 0 40px',
},
changebtn:{
  margin:'-55px 0 0 900px',
},
copyRight:{

  color: "#373737"
},
socialLinks:{

 display: "flex",
 justifyContent: "center",
 alignItems: "center",
 flexWrap: "wrap",
 width: "500px",
 marginLeft: "420px",
 marginTop: "18px"
},
innerContainerLink:{

  width: "100%",
  marginTop: "80px",
  textAlign: "center",
  alignItems: "center"
},
linkSection:{

display: "flex",
width: "1000px",
alignItems: "center",
justifyContent: "center",
marginTop: "30px",
color: "#1565c0",
marginLeft: "220px"
},
socialIcons:{

marginLeft: "60px",

},
linksRow:{

width: "160px",
height: "150px",
display: "flex",
marginLeft: "0px",
color: "black",
flexDirection: "column",
justifyContent: "start"
},

languageBtn:{

marginTop: "40px",
color: "#1565c0",

fontSize: "20px",


},
languageIcon:{

 color: "#1565c0",
 fontSize: "30px"
},
blank1:{
width:'100%',
border:"1px solid grey",
},
content:{
  display:'inline-desktop',
  width:'1000px',
  margin:"0 0 0 100px",
},
protect:{
  color:'black',
  margin:'10px 0 0 -60px',
},
p1:{
  color:'black',
  
},
if:{
  color:"black",
  margin:'10px 0 0 280px',
},
crypto:{
  color:'black',
  margin:'10px 0 0 250px',
},
p2:{
  color:'black',
  
},
loc:{
  color:"black",
  margin:'10px 0 0 280px',

},
tableheading: {
  
  width: "700px",
  margin: "40px 0px 0 -240px",
  color: "grey",
},
tablecontainer: {
  
  margin: "20px 175px",
  width: "1260px",
  height: "550px",
  boxShadow: "0 0 2px grey",
},
tablehead: {
  fontSize: "22px",
  fontWeight: "bold",
  width: "250px",
},
tablehead2: {
  fontSize: "20px",
  fontWeight: "bold",
  width: "350px",
},
sellercol: {
  fontSize: "17px",
  color: "blue",
},
paymentcol: {
  fontSize: "20px",
},
pricecol: {
  fontSize: "22px",
  color: "green",
  fontWeight: "bold",
},
limitcol: {
  fontSize: "20px",
},
buybutton: {
  backgroundColor: "orange",
  // color:"red",
  padding: "7px 25px",
  marginLeft: "-60px",
  fontSize: "15px",
  fontWeight: "bold",
},
showbutton: {
  width: "200px",
  fontWeight: "bold",
  fontSize: "20px",
  marginLeft: "-150px",
},

tableheading2: {
  
  width: "700px",
  margin: "40px 0px 0 -240px",
  color: "grey",
},
tablecontainer2: {
  
  margin: "20px 175px",
  width: "1260px",
  height: "550px",
  boxShadow: "0 0 2px grey",
},
tableheading3: {
  
  width: "700px",
  margin: "1820px 40px",
  color: "grey",
},
tablecontainer3: {
  
  margin: "1880px 110px",
  width: "1260px",
  height: "422px",
  boxShadow: "0 0 2px grey",
},
distancecol: {
  fontSize: "20px",
},
})
export default function Assignment5(){
 const classes = styles();
    return(
      <div className = {classes.mainContainer}>
         <Drawer
        className={classes.myDrawer}
        variant="permanent"
      
        anchor="left"
      ><ArrowDownwardOutlined className = {classes.downArrow}/>
       <div className = {classes.toolBar}>
        <AlarmAddOutlined className = {classes.setIcon} fontSize = "large"/>
        <AccessAlarmSharp className = {classes.setIcon} fontSize = "large"/>
        <ContactSupport className = {classes.setIcon} fontSize = "large"/>
        <GetAppOutlined className = {classes.setIcon} fontSize = "large"/>
        <ThreeDRotation className = {classes.setIcon} fonrSize = "large"/>
        <Message className = {classes.setIcon} fontSize = "large"/>
        <DetailsOutlined className = {classes.setIcon} fontSize = "large"/>
        <ForumSharp className = {classes.setIcon} fontSize = "large"/>
        <GetAppOutlined className = {classes.setIcon} fontSize = "large"/>
        <AlarmAddOutlined className = {classes.setIcon} fontSize = "large"/>
        <AccessAlarmSharp className = {classes.setIcon} fontSize = "large"/>
        
        </div>
      </Drawer>
      <div className = {classes.header}>
        
         <div className = {classes.button}>
             <Button
             variant = "contained"
             color = "secondary"
             className = {classes.signUp}
             startIcon = {<PersonAdd/>}>
                 {" "}{"sign up free"} {" "}
             </Button>
             <Button
             variant = "contained"
             color = "secondary"
             className = {classes.login}
             startIcon = {<Fingerprint/>}
             >
                 {" "} {"log in"} {" "}
             </Button>
             </div> 
     </div>
      
    <div className={classes.search}>
          <Button
        variant="contained"
        color="primary"
        className={classes.buybuttona}
        startIcon={<ShoppingCartIcon fontSize={"large"} className={classes.icon}/>}>
        BUY
      </Button>
      <Button
        variant="contained"
        color="secondary"
        className={classes.sellbuttona}
        startIcon={<ShoppingCartIcon fontSize={"large"} className={classes.icon}/>}>
        sell
      </Button>
      <TextField className={classes.textfield}  label="Amount" variant="outlined" />
      <TextField className ={classes.inr} select label="INR" variant="outlined"></TextField>
      <TextField className ={classes.inIndia} select label="inIndia" variant="outlined"></TextField>
      <TextField className ={classes.all} select label="All indian offers" variant="outlined"></TextField>
      <Button className={classes.btn} variant="contained" color="primary">
  SEARCH
    </Button>
      </div>
      <div className={classes.signup}>
      <Typography  className ={classes.bm}variant="h4" align='center'>
    Buy Monero.
</Typography>
<Typography  className ={classes.sm}variant="h4" align='center'>
    Sell Monero.
</Typography>
<Typography  className ={classes.cash}variant="h4" align='center'>
    Cash or Online.
</Typography>
<Typography  className ={classes.any}variant="h4" align='center'>
    Anywhere.
</Typography>
<Button variant = "contained" className={classes.btn1} color = "secondary" startIcon = {<PersonAdd/>}> {" "}{"sign up free"} {" "} </Button>

      </div>
      
      <div className={classes.tableheading}>
          <Typography variant="h5" align="right">
            Buy Monero online in India
          </Typography>
        </div>
        <div className={classes.tablecontainer}>
          <TableContainer>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell className={classes.tablehead}>Seller</TableCell>
                  <TableCell className={classes.tablehead2}>
                    Payment Methods
                  </TableCell>
                  <TableCell className={classes.tablehead}>Price/XMR</TableCell>
                  <TableCell className={classes.tablehead2}>Limits</TableCell>
                  <TableCell></TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                <TableRow>
                  <TableCell className={classes.sellercol}>
                    <u>chandanbits007(54;100%)</u>
                  </TableCell>
                  <TableCell className={classes.paymentcol}>
                    <AccountBalanceIcon
                      fontSize={"small"}
                      className={classes.accounticon}
                    />
                    IMPS Bank Transfer India
                  </TableCell>
                  <TableCell className={classes.pricecol}>
                    19366.77 INR
                  </TableCell>
                  <TableCell className={classes.limitcol}>
                    2500.00-20000.00 INR
                  </TableCell>
                  <TableCell>
                    <Button
                      variant="contained"
                      color="primary"
                      className={classes.buybutton}
                    >
                      BUY
                    </Button>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className={classes.sellercol}>
                    <u>appukttam0(529;100%)</u>
                  </TableCell>
                  <TableCell className={classes.paymentcol}>
                    <AccountBalanceIcon
                      fontSize={"small"}
                      className={classes.accounticon}
                    />
                    Other online payment
                  </TableCell>
                  <TableCell className={classes.pricecol}>
                    19566.77 INR
                  </TableCell>
                  <TableCell className={classes.limitcol}>
                    100.00-22000.00 INR
                  </TableCell>
                  <TableCell>
                    <Button
                      variant="contained"
                      color="primary"
                      className={classes.buybutton}
                    >
                      BUY
                    </Button>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className={classes.sellercol}>
                    <u>jdboi(5114;100%)</u>
                  </TableCell>
                  <TableCell className={classes.paymentcol}>
                    <AccountBalanceIcon
                      fontSize={"small"}
                      className={classes.accounticon}
                    />
                    IMPS Bank Transfer India
                  </TableCell>
                  <TableCell className={classes.pricecol}>
                    21366.77 INR
                  </TableCell>
                  <TableCell className={classes.limitcol}>
                    8500.00-50000.00 INR
                  </TableCell>
                  <TableCell>
                    <Button
                      variant="contained"
                      color="primary"
                      className={classes.buybutton}
                    >
                      BUY
                    </Button>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className={classes.sellercol}>
                    <u>chgbyry(4535;100%)</u>
                  </TableCell>
                  <TableCell className={classes.paymentcol}>
                    <AccountBalanceIcon
                      fontSize={"small"}
                      className={classes.accounticon}
                    />
                    IMPS Bank Transfer India
                  </TableCell>
                  <TableCell className={classes.pricecol}>
                    21966.77 INR
                  </TableCell>
                  <TableCell className={classes.limitcol}>
                    1000.00-25000.00 INR
                  </TableCell>
                  <TableCell>
                    <Button
                      variant="contained"
                      color="primary"
                      className={classes.buybutton}
                    >
                      BUY
                    </Button>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className={classes.sellercol}>
                    <u>chandanbits007(54;100%)</u>
                  </TableCell>
                  <TableCell className={classes.paymentcol}>
                    <AccountBalanceIcon
                      fontSize={"small"}
                      className={classes.accounticon}
                    />
                    IMPS Bank Transfer India
                  </TableCell>
                  <TableCell className={classes.pricecol}>
                    19366.77 INR
                  </TableCell>
                  <TableCell className={classes.limitcol}>
                    2500.00-20000.00 INR
                  </TableCell>
                  <TableCell>
                    <Button
                      variant="contained"
                      color="primary"
                      className={classes.buybutton}
                    >
                      BUY
                    </Button>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className={classes.sellercol}>
                    <u>appukuttam(5764;100%)</u>
                  </TableCell>
                  <TableCell className={classes.paymentcol}>
                    <AccountBalanceIcon
                      fontSize={"small"}
                      className={classes.accounticon}
                    />
                    IMPS Bank Transfer India
                  </TableCell>
                  <TableCell className={classes.pricecol}>
                    21766.77 INR
                  </TableCell>
                  <TableCell className={classes.limitcol}>
                    Up to 25000.00 INR
                  </TableCell>
                  <TableCell>
                    <Button
                      variant="contained"
        
                      className={classes.buybutton}
                    >
                      BUY
                    </Button>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell></TableCell>
                  <TableCell></TableCell>
                  <TableCell></TableCell>
                  <TableCell></TableCell>
                  <TableCell>
                    <Button color="primary" className={classes.showbutton}>
                      SHOW MORE...
                    </Button>
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
        </div>
        <div className={classes.tableheading2}>
          <Typography variant="h5" align="right">
            Sell Monero online in India
          </Typography>
        </div>
        <div className={classes.tablecontainer2}>
          <TableContainer>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell className={classes.tablehead}>Buyer</TableCell>
                  <TableCell className={classes.tablehead2}>
                    Payment Methods
                  </TableCell>
                  <TableCell className={classes.tablehead}>Price/XMR</TableCell>
                  <TableCell className={classes.tablehead2}>Limits</TableCell>
                  <TableCell></TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                <TableRow>
                  <TableCell className={classes.sellercol}>
                    <u>chandanbits007(54;100%)</u>
                  </TableCell>
                  <TableCell className={classes.paymentcol}>
                    <AccountBalanceIcon
                      fontSize={"small"}
                      className={classes.accounticon}
                    />
                    IMPS Bank Transfer India
                  </TableCell>
                  <TableCell className={classes.pricecol}>
                    19366.77 INR
                  </TableCell>
                  <TableCell className={classes.limitcol}>
                    2500.00-20000.00 INR
                  </TableCell>
                  <TableCell>
                    <Button
                      variant="contained"
                      color="primary"
                      className={classes.buybutton}
                    >
                      SELL
                    </Button>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className={classes.sellercol}>
                    <u>appukttam0(529;100%)</u>
                  </TableCell>
                  <TableCell className={classes.paymentcol}>
                    <AccountBalanceIcon
                      fontSize={"small"}
                      className={classes.accounticon}
                    />
                    Other online payment
                  </TableCell>
                  <TableCell className={classes.pricecol}>
                    19566.77 INR
                  </TableCell>
                  <TableCell className={classes.limitcol}>
                    100.00-22000.00 INR
                  </TableCell>
                  <TableCell>
                    <Button
                      variant="contained"
                      color="primary"
                      className={classes.buybutton}
                    >
                      SELL
                    </Button>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className={classes.sellercol}>
                    <u>jdboi(5114;100%)</u>
                  </TableCell>
                  <TableCell className={classes.paymentcol}>
                    <AccountBalanceIcon
                      fontSize={"small"}
                      className={classes.accounticon}
                    />
                    IMPS Bank Transfer India
                  </TableCell>
                  <TableCell className={classes.pricecol}>
                    21366.77 INR
                  </TableCell>
                  <TableCell className={classes.limitcol}>
                    8500.00-50000.00 INR
                  </TableCell>
                  <TableCell>
                    <Button
                      variant="contained"
                      color="primary"
                      className={classes.buybutton}
                    >
                      SELL
                    </Button>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className={classes.sellercol}>
                    <u>chgbyry(4535;100%)</u>
                  </TableCell>
                  <TableCell className={classes.paymentcol}>
                    <AccountBalanceIcon
                      fontSize={"small"}
                      className={classes.accounticon}
                    />
                    IMPS Bank Transfer India
                  </TableCell>
                  <TableCell className={classes.pricecol}>
                    21966.77 INR
                  </TableCell>
                  <TableCell className={classes.limitcol}>
                    1000.00-25000.00 INR
                  </TableCell>
                  <TableCell>
                    <Button
                      variant="contained"
                      color="primary"
                      className={classes.buybutton}
                    >
                      SELL
                    </Button>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className={classes.sellercol}>
                    <u>chandanbits007(54;100%)</u>
                  </TableCell>
                  <TableCell className={classes.paymentcol}>
                    <AccountBalanceIcon
                      fontSize={"small"}
                      className={classes.accounticon}
                    />
                    IMPS Bank Transfer India
                  </TableCell>
                  <TableCell className={classes.pricecol}>
                    19366.77 INR
                  </TableCell>
                  <TableCell className={classes.limitcol}>
                    2500.00-20000.00 INR
                  </TableCell>
                  <TableCell>
                    <Button
                      variant="contained"
                      color="primary"
                      className={classes.buybutton}
                    >
                      SELL
                    </Button>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className={classes.sellercol}>
                    <u>appukuttam(5764;100%)</u>
                  </TableCell>
                  <TableCell className={classes.paymentcol}>
                    <AccountBalanceIcon
                      fontSize={"small"}
                      className={classes.accounticon}
                    />
                    IMPS Bank Transfer India
                  </TableCell>
                  <TableCell className={classes.pricecol}>
                    21766.77 INR
                  </TableCell>
                  <TableCell className={classes.limitcol}>
                    Up to 25000.00 INR
                  </TableCell>
                  <TableCell>
                    <Button
                      variant="contained"
                      color="primary"
                      className={classes.buybutton}
                    >
                      SELL
                    </Button>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell></TableCell>
                  <TableCell></TableCell>
                  <TableCell></TableCell>
                  <TableCell></TableCell>
                  <TableCell>
                    <Button color="primary" className={classes.showbutton}>
                      SHOW MORE...
                    </Button>
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
        </div>
      <div className={classes.categories}>
      <Typography  className ={classes.you}variant="h5" align='left'>
    You can be the first one to
</Typography>
<Button  className={classes.ad} variant="outlined">
  Post an ad
</Button>
<Typography  className ={classes.follow}variant="h5" align='right'>
   in the following categories: 
</Typography>
<Icon style={{ fontSize: 30 }} className={classes.plus}>+</Icon>
<Typography  className ={classes.green} variant="h6" align='left'>
   Buy Monero with cash in india 
</Typography>
</div>
<div className={classes.earth}>
<Typography  className ={classes.e1} variant="h6" align='center'>
   Showing advertisements in India
</Typography>
<Button className={classes.changebtn}color="primary">CHANGE</Button>

</div>
<div className={classes.blank1}>

</div>
<div className={classes.content}>
<Typography  className ={classes.protect}variant="h6" align='center'>
Protect your right to privacy - buy Monero.
</Typography>
<div className={classes.if}>
<Typography className={classes.p1} variant='h8' align='center'>
If you are concerned about the invasion of privacy - the best cryptocurrency to invest in is XMR. Monero is an untraceable coin developed with privacy by design in mind.
Where to buy Monero? LocalMonero is the biggest, most trusted and well-established P2P Monero exchange in the XMR community. We have no KYC checks - you can simply buy Monero anonymously without ID verification with PayPal, credit card, gift card, cash by mail or convert bitcoin to Monero - our platform supports any payment method 
</Typography>
</div>
<Typography  className ={classes.crypto}variant="h6" align='center'>
Sell Monero to people worldwide or locally - support the community and make.
</Typography>
<div className={classes.loc}>
<Typography className={classes.p2} variant='h8' align='center'>
LocalMonero is the best place to sell XMR - whether it's your mining rewards, Monero price arbitrage, or you simply see the value in servicing the community. The escrow system and our secure Monero wallet provide you with a robust XMR trading experience - so you can convert XMR to USD, EUR, AUD, GBP or any other local currency with peace of mind.
</Typography>
</div>
</div>
<div className={classes.innerContainerLink}>
<Typography className={classes.copyRight} vairent="p">&copy; 2021 Blue Sunday Limited</Typography>
<div className={classes.linkSection}>
<Typography className={classes.linksRow}>
<Link href="#" underline={"always"}>
About
</Link>
<Link href="#" underline={"always"}>
Terms of service
</Link>
<Link href="#" underline={"always"}>
Fees
</Link>
<Link href="#" underline={"always"}>
Contact us
</Link>
<Link href="#" underline={"always"}>
Law Enforcement Inquiries
</Link>
</Typography>

<Typography className={classes.linksRow}>
<Link href="#" underline={"always"}>
Security bounty
</Link>
<Link href="#" underline={"always"}>
Affiliate
</Link>
<Link href="#" underline={"always"}>
Statistics
</Link>
<Link href="#" underline={"always"}>
API docs
</Link>
</Typography>

<Typography className={classes.linksRow}>
<Link href="#" underline={"always"}>
Local Bitcoins Alternative
</Link>
<Link href="#" underline={"always"}>
Monero News
</Link>
<Link href="#" underline={"always"}>
Knowledge
</Link>
<Link href="#" underline={"always"}>
Monero Block Explorer
</Link>
</Typography>

<Typography className={classes.linksRow}>
<Link href="#" underline={"always"}>
Tor hidden service
</Link>
<Link href="#" underline={"always"}>
I2P
</Link>
<Link href="#" underline={"always"}>
B32 I2P
</Link>
<Link href="#" underline={"always"}>
AgoraDesk
</Link>
</Typography>
</div>
<Button className={classes.languageBtn}>
<Language className={classes.languageIcon}/>
{"Change Language"}
</Button>
</div>
<div className={classes.socialLinks}>
<Button><Twitter className={classes.socialIcons} /></Button>
<Button><Reddit className={classes.socialIcons} /></Button>
<Button><Facebook className={classes.socialIcons} /></Button>
<Button><Telegram className={classes.socialIcons} /></Button>
<Button><GitHub className={classes.socialIcons} /></Button>
</div>
</div>
         
         
      
    
      
    );
}