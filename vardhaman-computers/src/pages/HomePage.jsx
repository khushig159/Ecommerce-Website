import React from "react";
import ImageSlideSHow from "../components/ImageSlideSHow";
import CategoryCard from '../components/categoryCart';
import TopSellerCard from "../components/top-seller";
import FeatureCard from "../components/FeatureCard";
import delivery from '../assets/deliveryy.png'
import { Link } from "react-router-dom";
export default function Homepage() {
  return <>
      <div className="head">
        <div className="heading">
          <h2>Vardhaman Computers</h2>
          <p>Your One-Stop Tech Hub – Secure, Print, Compute, Connect.</p>
          <p>Shop laptops, Storage Devices, mouse, keyBoard, <br></br>printer, cctv cameras and more...</p>
          <Link to='/all-products'><button>View More</button></Link>
        </div>
          <ImageSlideSHow/>
      </div>
      <div className="category-head">
      <h2>Shop By Category</h2>
      <div className="category-Shopping">
        <CategoryCard image='https://img.freepik.com/premium-vector/vector-illustration-laptop-with-cloud-storage-screen-all-files-one-security-white-background_320290-491.jpg?uid=R124924140&ga=GA1.1.250133232.1718623156&semt=ais_hybrid' text='LAPTOPS' link='/laptop'/>
        <CategoryCard image='https://img.freepik.com/free-vector/realistic-video-surveillance-camera-side-view-vector-illustration_1284-66719.jpg?uid=R124924140&ga=GA1.1.250133232.1718623156&semt=ais_hybrid' text='CCTV' link='/cctv'/>
        <CategoryCard image='https://img.freepik.com/free-photo/printer-with-white-sheets_1232-569.jpg?uid=R124924140&ga=GA1.1.250133232.1718623156&semt=ais_hybrid' text='PRINTERS' link='/printer'/>
        <CategoryCard image='https://img.freepik.com/premium-vector/hard-disk-icons-set-isometric-style_98402-1772.jpg?uid=R124924140&ga=GA1.1.250133232.1718623156&semt=ais_hybrid' text='STORAGE DEVICES' link='/storage'/>
        </div>
      </div>
      <div className="delivery">
        <div className="delivery-1">
        <h2>VARDHAMAN DELIVERS <br></br>TO YOU</h2>
        <p>Fastest Pan-India shipping. We Ship to over 10 states and <br></br>regions, right at your doorstep</p>
      </div>
       <img src={delivery} alt="" />
      </div>
      <h2 style={{textAlign:"center",marginTop:"60px"}}>Our Top Selling Products</h2>
      <div className="category-TopSellers">
        <TopSellerCard image='https://i.dell.com/is/image/DellContent/content/dam/ss2/product-images/dell-client-products/notebooks/inspiron-notebooks/14-2-in-1-7440-intel/media-gallery/notebook-inspiron-14-7440-t-ice-blue-fpr-gallery-1.psd?fmt=png-alpha&pscan=auto&scl=1&hei=320&wid=281&qlt=100,1&resMode=sharp2&size=281,320&chrss=full' text='Dell Inspiron 14 Intel Core i5 13th gen 1335U' reviews='12k reviews' star='4.5 rating' price='67,999'/>
        <TopSellerCard image='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSU2D-pGmMRbeoNJBeMBhrtk21_hkMw2xXFTg&s' text='Logitech MK345 wireless keyboard and mouse combo' price='1,999' reviews='5k reviews' star='4.4 rating' />
        <TopSellerCard image='data:image/jpeg;base64,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' text='Kingston Canvas select plus 128 GB micro SD card' price='1,999' reviews='10k reviews' star='4.3 rating' />
        <TopSellerCard price='1,999' reviews='16k reviews' star='4.9 rating' image='data:image/jpeg;base64,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' text='securus SS-15D-TPHD-M5' link='/storage'/>
        </div>
        <div className="AboutUs" id="Aboutus" style={{textAlign:"center",marginTop:"70px"}}>
          <h1>ABOUT US</h1>
          <div className="ABoutUs-div">
            <img src="https://img.freepik.com/free-vector/job-interview-concept-illustration_114360-24598.jpg?uid=R124924140&ga=GA1.1.250133232.1718623156&semt=ais_hybrid" alt="" />
            <p>Vardhaman Computers is your go-to destination for all things tech, offering a wide range of high-quality laptops, keyboards, mice, printers, storage devices, CCTV systems, and more.<br></br><br></br> With a strong commitment to reliability and customer satisfaction, we provide top-tier products and expert support to meet the needs of individuals and businesses alike. Whether you're upgrading your workspace, enhancing security, or looking for the latest gadgets, we ensure you get the best solutions with unmatched service and affordability.</p>
          </div>
        </div>
        <div className="Features-container">
          <FeatureCard text='Wide Product Range' des='Laptops, accessories, printers, storage devices, CCTV systems, and more—all in one place.' image='https://img.freepik.com/free-vector/electronic-device-collection_23-2147649198.jpg?uid=R124924140&ga=GA1.1.250133232.1718623156&semt=ais_hybrid' />
          <FeatureCard text='Genuine & High-Quality Products' des='Only authentic, top-brand products for reliable performance.' image='https://img.freepik.com/free-vector/product-quality-concept-illustration_114360-7461.jpg?uid=R124924140&ga=GA1.1.250133232.1718623156&semt=ais_hybrid' />
          <FeatureCard text='Fast & Reliable Delivery' des=' Quick and secure delivery to your doorstep.' image='https://img.freepik.com/free-vector/express-courier-delivery-professional-postal-service-cargo-transportation-business-gods-distribution-home-delivering-idea-design-element_335657-34.jpg?uid=R124924140&ga=GA1.1.250133232.1718623156&semt=ais_hybrid' />
          <FeatureCard text='Easy Returns & Hassle-Free Warranty' des='Smooth return process and manufacturer-backed warranties.' image='https://img.freepik.com/free-vector/parcel-delivery-unpacking-receiving-order-box-contents-inspecting-female-consignee-cartoon-character-targeted-shipping-service_335657-1170.jpg?uid=R124924140&ga=GA1.1.250133232.1718623156&semt=ais_hybrid' />
        </div>
        <div className="contactUs" id="contact">
        <h1 className="contactUs-heading">Reach Out to us</h1>

          <div className="contact">
            <div className="details" >
            <h2>Store Address :</h2>
            <p>Shop No 10, Nadiadwala Market, Poddar Road, Malad East,<br></br> Mumbai - 400097 (Opp Laxmi Narayan Shopping Center)</p>
            <h2>Phone Number :</h2>
            <p>7942690671</p>
            <h2>Email Address</h2>
            <p>sanjaydoshi@gmail.com</p>
            <h2>Business Hours:</h2>
            <p>Open Until 8pm</p>
            <a href="https://www.justdial.com/Mumbai/Vardhaman-Computers-Opp-Laxmi-Narayan-Shopping-Center-Malad-East/022PNE00804_BZDET"><button>Click here for more info</button></a></div>
            <div className="map">
              <h3>We are Loacted here!</h3>
              <div className="mapitem"><iframe src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d3768.18388913776!2d72.84761472370522!3d19.18716898204038!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1s%20%20%20%20%20%20%20%20%20%20%20%20Shop%20No%2010%2C%20Nadiadwala%20Market%2C%20Poddar%20Road%2C%20Malad%20East%2C%20Mumbai%20-%20400097%20(Opp%20Laxmi%20Narayan%20Shopping%20Center)!5e0!3m2!1sen!2sin!4v1743059941578!5m2!1sen!2sin" style={{width:"600px", height:"330px", style:"border:0", allowfullscreen:"", loading:"lazy", referrerpolicy:"no-referrer-when-downgrade"}}></iframe></div>
            </div>
          </div>
        </div>
        <footer>
        <div className="container">
            <div className="footer-content">
                <div className="footer-logo">
                    <h2>VARDHAMAN<span> COMPUTERS</span></h2>
                    <p>Your trusted source for high-quality tech products and reliable IT solutions</p>
                </div>

                <div className="footer-links">
                    <div className="footer-column">
                        <h3>Quick Links</h3>
                        <ul>
                            <li><Link to='/home'>Home</Link></li>
                            <li><Link to='/all-product'>Products</Link></li>
                            <li><a href="#Aboutus">About Us</a></li>
                            <li><a href="#contact">Contact</a></li>
                            <li><Link to="/signin">SignIn</Link></li>
                            <li><Link to="/signup">SignUp</Link></li>

                        </ul>
                    </div>

                    <div class="footer-column">
                        <h3>Product Categories</h3>
                        <ul>
                        <li><Link to='/all-products'>All Products</Link></li>
                        <li><Link to='/printer'>Printer</Link></li>
                        <li><Link to='/cctv'>CCTV</Link></li>
                        <li><Link to='/storage'>Storage Devices</Link></li>
                        <li><Link to='/laptop'>Laptop</Link></li>
                        </ul>
                    </div>

                    
                </div>
            </div>

           
        </div>
        <div class="footer-bottom">
                <p>&copy; Vardhaman Computers. All rights reserved.</p>
                <div class="footer-bottom-links">

                </div>
            </div>
    </footer>
  </>;
}
