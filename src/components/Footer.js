import React from "react";
import Email from "./icons/email.svg";
import VR from "./icons/vr.svg";
import Whatsapp from "./icons/whatsapp.svg";
import Phone from "./icons/phone.svg";
import Video from "./icons/youtube.svg";
import Wifi from "./icons/wifi.svg";

const Footer = () => {
  return (
    <div>
      <div
        style={{
          backgroundColor: "#30A7C1",
          alignItems: "center",
          justifyContent: "center",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <div
          style={{
            fontSize: 24,
            fontWeight: 500,
            color: "white",
            marginTop: 20,
          }}
        >
          CONTACT DETAILS
        </div>

        <div
          style={{
            fontSize: 24,
            fontWeight: 600,
            color: "red",
            marginTop: 20,
          }}
        >
          Mr. J Vijay Rathan Lingaa
        </div>
        <div
          style={{
            fontSize: 16,
            fontWeight: 400,
            color: "white",
            marginTop: 2,
            textAlign: "center",
            marginBottom: 32,
          }}
        >
          Techno-Legal Advisor <br /> Centre for Intellectual Asset Protection{" "}
          <br /> +91-9677002684 <br /> tladvisor@srmist.edu.in
        </div>
      </div>

      <div
        style={{
          backgroundColor: "#FFF2D0",
          display: "flex",
          justifyContent: "space-evenly",
        }}
      >
        <img
          src="/assets/srm-footer.svg"
          alt=""
          style={{ objectFit: "contain", width: 200, height: 200 }}
        />

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-evenly",
            width: "20vw",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "1vw",
              padding: "0 2vw",
            }}
          >
            <img
              src={Phone}
              alt=""
              style={{ objectFit: "contain", width: 32, height: 32 }}
            />
            <div style={{ color: "#003A92" }}>+91 4427417000</div>
          </div>

          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "1vw",
              padding: "0 2vw",
            }}
          >
            <img
              src={Whatsapp}
              alt=""
              style={{ objectFit: "contain", width: 32, height: 32 }}
            />
            <div style={{ color: "#003A92" }}>+91 4427417499</div>
          </div>

          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "1vw",
              padding: "0 2vw",
            }}
          >
            <img
              src={Email}
              alt=""
              style={{ objectFit: "contain", width: 32, height: 32 }}
            />
            <div style={{ color: "#003A92" }}>infodesk@srmist.edu.in</div>
          </div>
        </div>

        <div
          style={{
            display: "flex",
            width: "45vw",
            justifyContent: "space-evenly",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "1vw",
            }}
          >
            <img
              src={VR}
              alt=""
              style={{ objectFit: "contain", width: 32, height: 32 }}
            />
            <a
              href="/"
              style={{
                color: "#003A92",
                fontWeight: 600,
                fontSize: "22px",
                textDecoration: "none",
              }}
            >
              Virtual Tour
            </a>
          </div>

          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "1vw",
            }}
          >
            <img
              src={Video}
              alt=""
              style={{ objectFit: "contain", width: 32, height: 32 }}
            />
            <a
              href="/"
              style={{
                color: "#003A92",
                fontWeight: 600,
                fontSize: "22px",
                textDecoration: "none",
              }}
            >
              Videos
            </a>
          </div>

          <div
            style={{
              display: "flex",
              gap: "1vw",
              alignItems: "center",
            }}
          >
            <img
              src={Wifi}
              alt=""
              style={{ objectFit: "contain", width: 32, height: 32 }}
            />
            <a
              href="/"
              style={{
                color: "#003A92",
                fontWeight: 600,
                fontSize: "22px",
                textDecoration: "none",
              }}
            >
              Community radio
            </a>
          </div>
        </div>
      </div>
      <div
        style={{
          backgroundColor: "#0263BC",
          justifyContent: "space-evenly",
          display: "flex",
          alignItems: "center",
          height: "25px",
        }}
      >
        <div style={{ display: "flex", gap: "1vw" }}>
          <div style={{ color: "#FFFF", fontSize: 14 }}>Terms of Use</div>
          <div style={{ color: "#FFFF", fontSize: 14 }}>Privacy and Policy</div>
        </div>
        <div style={{ color: "#FFFF", fontSize: 14 }}>
          Copyrights All Rights Reserved
        </div>
      </div>
    </div>
  );
};
export default Footer;
