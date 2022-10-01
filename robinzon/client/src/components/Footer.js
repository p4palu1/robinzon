import React from 'react'
import "../css/Footer.css"

const Footer = () => {
    return (
        <footer className="text-center text-lg-start bg-light text-muted">
  <section
    className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom"
  >


    
  </section>

  <section className="text-black">
    <div className="container text-center text-md-start mt-5">
      <div className="row mt-3">
        <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
          <h6 className="text-center fw-bold mb-4">
            צרו קשר
          </h6>
          <div className="text-center">
            
            <a style={{font: 'Open Sans',  textDecoration: 'none', color: 'Black'}} href="mailto:Orly@robinzone.co.il">Orly@robinzone.co.il</a>
          </div>
          
          <div className="mt-3 mb-5 text-center "><a style={{color: 'black', textDecoration: "none"}} href="https://wa.me/+972547689787"><i class="fa fa-whatsapp"></i> 
          לחצו לשליחת הודעה 
          
          </a>
          </div>
        </div>


       <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
          <h5 className="text-uppercase fw-bold mb-4 pl-2">

          אורלי רובינזון
          </h5>
          <div >
          מעצבת פנים מקצועית
          </div>
        </div>

        

       
      </div>
    </div>
  </section>


  <div className="text-center p-4 " style={{direction: 'rtl' ,backgroundColor: "rgba(0, 0, 0, 0.05)"}}>
כל הזכויות שמורות לאורלי רובינזון ©
  </div>
</footer>
    )
}

export default Footer
