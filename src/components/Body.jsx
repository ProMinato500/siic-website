import React from "react";
import "./Body.css";

const Body = () => {
  return (
    <div className="bodyContainer">
      <div className="categoriesContainer">
        <h3>
          The Product Expo'23 has events in 3 categories based on the visitors:
        </h3>
        <div className="categoriesList">{/*  */}</div>
      </div>
      <div className="whyExpo">
        <h1>
          <span>WHY</span> this Expo?
        </h1>
        <p className="expoBody">
          SRM Institute of Science & Technology is a dynamic hub of vibrant
          research groups. These research groups approach problems in various
          fields of engineering, medical, etc. to provide a viable solution to
          the market. Our next-gen researchers have addressed many real-world
          problems whose solutions are the need of the hour to the scientific
          and industrial fraternity. The Intellectual Properties of our
          Institution are protected and maintained by the Centre for
          Intellectual Asset Protection.
          <br />
          <br />
          SRMIST has filed around 693 patents and has received 85+ grants which
          includes international patents in countries like the US, UK, Korea,
          Singapore and Japan. This expo provides an excellent opportunity for
          investors and industries to see first-hand the products and solutions
          that have been developed by SRMIST researchers. This could lead to
          potential partnerships, collaborations, or commercialization
          opportunities that could ultimately bring these innovations to the
          market and benefit society at large.
        </p>
      </div>
      <div className="benefitsBody">
        <h1>Benefits:</h1>
        <ul className="benefits">
          <li className="benefitslist">Know about breakthrough Inventions</li>
          <li className="benefitslist">
            Possibilities for potential technology transfer and licensing
            opportunities
          </li>
          <li className="benefitslist">
            Possible Collaboration for Co-Creation
          </li>
          <li className="benefitslist">
            Investors get a chance to evaluate the value of the product and the
            startups
          </li>
          <li className="benefitslist">
            Opportunity for the investors to invest in novel technologies with
            high market potential.
          </li>
          <li className="benefitslist">
            Networking Opportunities with people who share similar areas of
            interest
          </li>
        </ul>
      </div>
      <div className="productBody">
        <h1>Product Sectors:</h1>
        <ul className="products">
          <li className="productlist">
            Healthcare, BioTech, FoodTech, Agriculture
          </li>
          <li className="productlist">
            Green technology, Clean energy, Smart Mobility, Intelligent
            Transportation, E- Vehicles, Aerospace
          </li>
          <li className="productlist">
            Industrially utilizable smart materials
          </li>
          <li className="productlist">
            Waste to Wealth, Water & Sewage Management
          </li>
          <li className="productlist">
            IoT, Robotics, Automation, Cyber Security, Drone Technology
          </li>
          <li className="productlist">Production & Manufacturing</li>
          <li className="productlist">SaaS Product</li>
          <li className="productlist">Design</li>
        </ul>
      </div>
      <div className="about">
        <h1>About SIIEC</h1>
        <p className="aboutBody">
          SRM Innovation, Incubation and Entrepreneurship Centre (SIIEC) is the
          prime hub for nurturing the ideas into products that can revolutionize
          the market. Till date SIIEC has guided and supported various start-ups
          in their product development through its other centers like FabLab,
          SRM Innovation and Design Centre and Centre for Intellectual Asset
          Protection.
        </p>
        <div className="achievements"></div>
      </div>
    </div>
  );
};

export default Body;
