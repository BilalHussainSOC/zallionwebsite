import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import img12 from "../../../Image/img12.png";
import img13 from "../../../Image/img13.png";
import "./index.css";

const RoadMap = () => {
  return (
    <div style={{ backgroundColor: "rgb(14, 14, 22)" }} id="raod_map">
      <h1
        style={{
          textAlign: "center",
          color: "white",
          paddingTop: "50px",
          fontFamily: "Times New Roman, Times, serif",
        }}
      >
        Zillion Anchor Xo <br></br> Road Map
      </h1>
      {/* <Grid container className="road_map_main">
        <Grid item lg={3.2} md={4} sm={5} xs={10} className="road_map_img">
          <img src={img12} alt="" id='road_margin'/>
          <div  id='road_map-main'>
            <p id="raod_map_text">
              <b>June-July-2022</b>
            </p>
            <ul id="road_map_ul">
              <li>Project Planning</li>
              <li>Zax Token Landing </li>
              <li>Pree Sale</li>
              <li>ZLaunch zillionxo.io </li>
              <li>Logistics services</li>
            </ul>
          </div>
        </Grid>
        <Grid item lg={0.5} md={0.7}>
          <img
            id="arrow_icon"
            src={img13}
            alt=""
            style={{ width: "100%", height: "auto", marginTop: "155%" }}
          />
        </Grid>
        <Grid item lg={3.2} md={3.8} sm={5} xs={10} className="road_map_img">
          <img src={img12} alt="" id='road_margin' />
          <div id='road_map-main'>
            <p id="raod_map_text">
              <b>June-July-2022</b>
            </p>
            <ul id="road_map_ul">
              <li>
                Fundraising plan for<br></br> Zax utility token
              </li>
              <li>
                Blockchain integration <br></br>for zillionxo.io{" "}
              </li>
            </ul>
          </div>
        </Grid>
        <Grid item lg={0.5} md={1}>
          <img
            id="arrow_icon"
            src={img13}
            alt=""
            style={{ width: "100%", height: "auto", marginTop: "155%" }}
          />
        </Grid>

        <Grid
          item
          lg={3.2}
          md={4}
          sm={5}
          xs={10}
          className="road_map_img"
          id="card_resp_arrow"
        >
          <img src={img12} alt="" id='road_margin_tree' />
          <div id='road_map-main'>
            <p id="raod_map_text">
              <b>June-July-2022</b>
            </p>
            <ul id="road_map_ul">
              <li>
                IDOs for Zax <br></br>utility token
              </li>
              <li>DEXs/CEXs listing </li>
            </ul>
          </div>
        </Grid>

        <Grid item lg={3.2} md={4} sm={5} xs={10} className="road_map_img">
          <img src={img12} alt="" id='road_margin' />
          <div id='road_map-main'>
            <p id="raod_map_text">
              <b>June-July-2022</b>
            </p>
            <ul id="road_map_ul">
              <li>Launching dropping to earn</li>
              <li>Crypto payment integration</li>
              <li>Zax mobile wallet</li>
              <li>DeFi staking for Zax token</li>
            </ul>
          </div>
        </Grid>

        <Grid item lg={0.5} md={2}>
          <img
            id="arrow_icon"
            src={img13}
            alt=""
            style={{ width: "100%", height: "auto", marginTop: "155%" }}
          />
        </Grid>

        <Grid item lg={3.2} md={4.1} sm={5} xs={10} className="road_map_img">
          <img src={img12} alt="" id='road_margin' />
          <div id='road_map-main'>
            <p id="raod_map_text">
              <b>June-July-2022</b>
            </p>
            <ul id="road_map_ul">
              <li>
                Raise fund for ZAX <br></br>Governance token
              </li>
              <li>Launch liveStreaming platform</li>
              <li>Onboard KOLs/Influencers</li>
              <li>
                Prepare FGT Governance
              </li>
            </ul>
          </div>
        </Grid>

        <Grid item lg={0.5} md={1.2}>
          <img
            id="arrow_icon"
            src={img13}
            alt=""
            style={{ width: "100%", height: "auto", marginTop: "155%" }}
          />
        </Grid>

        <Grid
          item
          lg={3.2}
          md={4}
          sm={5}
          xs={10}
          className="road_map_img"
          id="card_resp_arrow"
        >
          <img src={img12} alt="" id='road_margin_two' />
          <div id='road_map-main'>
            <p id="raod_map_text">
              <b>June-July-2022</b>
            </p>
            <ul id="road_map_ul">
              <li>IEO for FGT Governance<br></br> token</li>
              <li>DeFi Staking for FGT token</li>
            </ul>
          </div>
        </Grid>

        <Grid item lg={3.2} md={4} sm={5} xs={10} className="road_map_img">
          <img src={img12} alt="" id='road_margin'/>
          <div id='road_map-main'>
            <p id="raod_map_text">
              <b>June-July-2022</b>
            </p>
            <ul id="road_map_ul">
              <li>Buy now, pay later</li>
              <li>DeFi lending for Zax token </li>
              <li>Zax starter</li>
              <li>Launch full service in <br></br>Canada & UK (G7 market)</li>

            </ul>
          </div>
        </Grid>

        <Grid item lg={0.5} md={0.7}>
          <img
            id="arrow_icon"
            src={img13}
            alt=""
            style={{ width: "100%", height: "auto", marginTop: "155%" }}
          />
        </Grid>

        <Grid item lg={3.2} md={4} sm={5} xs={10} className="road_map_img">
          <img src={img12} alt="" id='road_margin'/>
          <div id='road_map-main'>
            <p id="raod_map_text">
              <b>June-July-2022</b>
            </p>
            <ul id="road_map_ul">
              <li>Community group buying</li>
              <li>Daily play-to-earn games</li>
              <li>Shopping metaverse</li>
              <li>Launch full services in <br></br>France & Italy 67 Market</li>

            </ul>
          </div>
        </Grid>

        <Grid item lg={0.5} md={0.7}>
          <img
            id="arrow_icon"
            src={img13}
            alt=""
            style={{ width: "100%", height: "auto", marginTop: "155%" }}
          />
        </Grid>

        <Grid
          item
          lg={3}
          md={4}
          sm={5}
          xs={10}
          className="road_map_img"
          id="card_resp_arrow"
        >
          <img src={img12} alt="" id='road_margin'/>
          <div id='road_map-main'>
            <p id="raod_map_text">
              <b>June-July-2022</b>
            </p>
            <ul id="road_map_ul">
              <li>Complete all main features <br></br> ready for market expansion</li>
              <li>Develop Physical goods <br></br> NFTs marketplace</li>
              <li>E-commerce franchising</li>
           
            </ul>
          </div>
        </Grid>

        <Grid item lg={3} md={4} sm={5} xs={10} className="road_map_img">
          <img src={img12} alt="" id='road_margin'/>
          <div id='road_map-main'>
            <p id="raod_map_text">
              <b>June-July-2022</b>
            </p>
            <ul id="road_map_ul">
              <li>Market expansion to SEA</li>
              <li>Market expansion to  <br></br>South Asia </li>
            </ul>
          </div>
        </Grid>

        <Grid item lg={0.5} md={0.7} style={{marginBottom:"15%"}}>
          <img
            id="arrow_icon"
            src={img13}
            alt=""
            style={{ width: "100%", height: "auto", marginTop: "155%" }}
          />
        </Grid>

        <Grid
          item
          lg={3}
          md={4}
          sm={5}
          xs={10}
          className="road_map_img"
          id="card_resp_arrow"
          style={{ marginBottom: "11%" }}
        >
          <img src={img12} alt="" id='road_margin_one'/>
          <div id='road_map-main'>
            <p id="raod_map_text">
              <b>June-July-2022</b>
            </p>
            <ul id="road_map_ul">
              <li>More market expansion</li>
              <li>More operational </li>
            </ul>
          </div>
        </Grid>
      </Grid> */}

      <Grid
        container
        style={{
          justifyContent: "center",
          marginTop: "5%",
          paddingBottom: "5%",
        }}
      >
        <Grid
          item
          lg={3.5}
          md={4.5}
          sm={5.8}
          xs={11.5}
          className="road_map_img"
        >
          <img src={img12} alt="" />
          <div className="road_map-main">
            <p className="raod_map_text">
              <b>June-July 2022</b>
            </p>
            <ul className="road_map_ul">
              <li>Project Planning</li>
              <li>Zax Token Landing </li>
              <li>Pree Sale</li>
              <li>ZLaunch zillionxo.io </li>
              <li>Logistics services</li>
            </ul>
          </div>
        </Grid>
        <Grid
          item
          lg={3.5}
          md={4.5}
          sm={5.8}
          xs={11.5}
          className="road_map_img"
        >
          <img src={img12} alt="" />
          <div className="road_map-main">
            <p className="raod_map_text">
              <b>Aug-Nov - 2022</b>
            </p>
            <ul className="road_map_ul">
              <li>
                Fundraising plan for<br></br> Zax utility token
              </li>
              <li>
                Blockchain integration <br></br>for zillionxo.io{" "}
              </li>
            </ul>
          </div>
        </Grid>
        <Grid
          item
          lg={3.5}
          md={4.5}
          sm={5.8}
          xs={11.5}
          className="road_map_img"
          id="res_card_one"
        >
          <img src={img12} alt="" />
          <div className="road_map-main">
            <p className="raod_map_text">
              <b>Dec - 2022</b>
            </p>
            <ul className="road_map_ul">
              <li>
                IDOs for Zax <br></br>utility token
              </li>
              <li>DEXs/CEXs listing </li>
            </ul>
          </div>
        </Grid>
      </Grid>

      <Grid container className="road_map_second">
        <Grid
          item
          lg={3.5}
          md={4.5}
          sm={5.8}
          xs={11.5}
          className="road_map_img"
          id="res_card_launching"
        >
          <img src={img12} alt="" />
          <div className="road_map-main">
            <p className="raod_map_text">
              <b>Jan-Mar - 2023</b>
            </p>
            <ul className="road_map_ul">
              <li>Launching dropping to earn</li>
              <li>Crypto payment integration</li>
              <li>Zax mobile wallet</li>
              <li>DeFi staking for Zax token</li>
            </ul>
          </div>
        </Grid>
        <Grid
          item
          lg={3.5}
          md={4.5}
          sm={5.8}
          xs={11.5}
          className="road_map_img"
        >
          <img src={img12} alt="" />
          <div className="road_map-main">
            <p className="raod_map_text">
              <b>Apr-Jun - 2023</b>
            </p>
            <ul className="road_map_ul">
              <li>
                Raise fund for ZAX <br></br>Governance token
              </li>
              <li>Launch liveStreaming platform</li>
              <li>Onboard KOLs/Influencers</li>
              <li>Prepare FGT Governance</li>
            </ul>
          </div>
        </Grid>

        <Grid
          item
          lg={3.5}
          md={4.5}
          sm={5.8}
          xs={11.5}
          className="road_map_img"
        >
          <img src={img12} alt="" />
          <div className="road_map-main">
            <p className="raod_map_text">
              <b>Jul-Sep - 2023</b>
            </p>
            <ul className="road_map_ul">
              <li>
                IEO for FGT Governance<br></br> token
              </li>
              <li>DeFi Staking for FGT token</li>
            </ul>
          </div>
        </Grid>
      </Grid>

      <Grid container className="road_map_second">
        <Grid
          item
          lg={3.5}
          md={4.5}
          sm={5.8}
          xs={11.5}
          className="road_map_img"
          id="res_card_buy"
        >
          <img src={img12} alt="" />
          <div className="road_map-main">
            <p className="raod_map_text">
              <b>Oct-Dec - 2023</b>
            </p>
            <ul className="road_map_ul">
              <li>Buy now, pay later</li>
              <li>DeFi lending for Zax token </li>
              <li>Zax starter</li>
              <li>
                Launch full service in <br></br>Canada & UK (G7 market)
              </li>
            </ul>
          </div>
        </Grid>
        <Grid
          item
          lg={3.5}
          md={4.5}
          sm={5.8}
          xs={11.5}
          className="road_map_img"
        >
          <img src={img12} alt="" />
          <div className="road_map-main">
            <p className="raod_map_text">
              <b>Oct-Dec - 2024</b>
            </p>
            <ul className="road_map_ul">
              <li>Community group buying</li>
              <li>Daily play-to-earn games</li>
              <li>Shopping metaverse</li>
              <li>
                Launch full services in <br></br>France & Italy 67 Market
              </li>
            </ul>
          </div>
        </Grid>

        <Grid
          item
          lg={3.5}
          md={4.5}
          sm={5.8}
          xs={11.5}
          className="road_map_img"
        >
          <img src={img12} alt="" />
          <div className="road_map-main">
            <p className="raod_map_text">
              <b>Jul-Sep - 2024</b>
            </p>
            <ul className="road_map_ul">
              <li>
                Complete all main features <br></br> ready for market expansion
              </li>
              <li>
                Develop Physical goods <br></br> NFTs marketplace
              </li>
              <li>E-commerce franchising</li>
            </ul>
          </div>
        </Grid>
      </Grid>

      <Grid container className="road_map_second">
        <Grid
          item
          lg={3.5}
          md={4.5}
          sm={5.8}
          xs={11.5}
          className="road_map_img"
          id="res_card_market"
        >
          <img src={img12} alt="" />
          <div className="road_map-main">
            <p className="raod_map_text">
              <b>Apr-Jun - 2024</b>
            </p>
            <ul className="road_map_ul">
              <li>Market expansion to SEA</li>
              <li>
                Market expansion to <br></br>South Asia{" "}
              </li>
            </ul>
          </div>
        </Grid>
        <Grid
          item
          lg={3.5}
          md={4.5}
          sm={5.8}
          xs={11.5}
          className="road_map_img"
        >
          <img src={img12} alt="" />
          <div className="road_map-main">
            <p className="raod_map_text">
              <b>Oct-Dec - 2024</b>
            </p>
            <ul className="road_map_ul">
              <li>More market expansion</li>
              <li>More operational </li>
            </ul>
          </div>
        </Grid>
      </Grid>
      <div  className='border_bottom'></div>
    </div>
  );
};

export default RoadMap;
