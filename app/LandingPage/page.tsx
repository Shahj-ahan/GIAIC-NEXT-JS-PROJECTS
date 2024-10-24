import Nav from "../components/Header/Nav";
import Footer from '../components/Header/Footer'
import styleCss from "./Landing.module.css";
import About from "../About/about"
import image from '../components/image.png'

function Landing() {
  return (
    <div>
      <Nav />
      <div className={styleCss.hero}>
        <div className={styleCss.content}>
          <h1 className={styleCss.title}>Welcome to Auction Table</h1>
          <p className={styleCss.subtitle}>
            Buy, sell, and discover amazing deals in one place.
          </p>
          <a href="#" className={styleCss.ctaButton}>
            Get Started
          </a>
        </div>
      </div>


      <h1 style={{paddingTop:"15px",
                paddingLeft:"15px", 
                fontSize:"25px",
                color:"black",
                fontWeight:"20px"
                }}>
                Fashion Acution</h1>

      <div className={styleCss.about}>
       
        <div className={styleCss.img}>

        <img 
          src="/shurt-3.png" 
          alt="Auction Table Image"
          width="300" 
          style={{height:"220px"}}
        />
        <h3 style={{padding:"5px"}}>Heading</h3>
        <p style={{padding:"4px"}}>Sub heading this a e-commerce img for cart to some </p>
        <button type="submit" className={styleCss.btn}>Add to cart</button>



        </div>

    {/* 2nd img */}

    <div className={styleCss.img}>
        {/* Image element */}
        <img 
          src="/image1.png" 
          alt="Auction Table Image"
          width="300" 
          style={{height:"220px"}}
        />
        <h3 style={{padding:"5px"}}>Heading</h3>
        <p style={{padding:"4px"}}>Sub heading this a e-commerce img for cart to some </p>
        <button type="submit" className={styleCss.btn}>Add to cart</button>
        </div>

      {/* 3rd img */}
      <div className={styleCss.img}>
        {/* Image element */}
        <img 
          src="/shurt-5.png" 
          alt="Auction Table Image"
          width="350" 
          style={{height:"220px"}}
          />
        <h3 style={{padding:"5px"}}>Heading</h3>
        <p style={{padding:"4px"}}>Sub heading this a e-commerce img for cart to some </p>
        <button type="submit" className={styleCss.btn}>Add to cart</button>
        </div>

        {/* 4th img */}

        <div className={styleCss.img}>
        {/* Image element */}
        <img 
          src="/shurt-2.png" 
          alt="Auction Table Image"
          width="300" 
          style={{height:"220px"}}
        />
        <h3 style={{padding:"5px"}}>Heading</h3>
        <p style={{padding:"4px"}}>Sub heading this a e-commerce img for cart to some </p>
        <button type="submit" className={styleCss.btn}>Add to cart</button>
        </div>

          
        {/* 5th img */}

        <div className={styleCss.img}>

        <img 
          src="/shurt-4.png" 
          alt="Auction Table Image"
          width="300" 
          style={{height:"220px"}}
        />
        <h3 style={{padding:"5px"}}>Heading</h3>
        <p style={{padding:"4px"}}>Sub heading this a e-commerce img for cart to some </p>
        <button type="submit" className={styleCss.btn}>Add to cart</button>
        </div>

      </div>
      <Footer />
    </div>
  );
}

export default Landing;
