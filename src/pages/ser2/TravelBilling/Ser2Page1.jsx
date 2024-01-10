import "../../../assets/stylesheets/ser2-style.css";
import logo from "../../../assets/images/nstu-logo.png";
import { Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
const Ser2Page1 = () => {
  return (
    <div>
      <div className="d-flex align-items-center justify-content-center">
        <div className="text-center m-3">
        <img src={logo} alt="logo" className="image-fluid" width="100" height="120" />
        <h3 className="fs-3 mt-3 mb-3">
        নোয়াখালী বিজ্ঞান ও প্রযুক্তি বিশ্ববিদ্যালয়
        </h3>
        <h4 className="fs-4 mb-3">
        ভ্রমন ভাতার বিল
        </h4>
        </div>
      </div> 
      <Container fluid>
      <form action="">
        <div className="d-flex justify-content-end">
          <div>
            {/* voucher-1 */}
            <div className="row mb-3">
              <div className="col-auto">
                <label htmlFor="vouch1" className="form-label">
                  ভাউচার নং:{" "}
                </label>
              </div>
              <div className="col-auto">
                <input type="number" name="vouch1" className="form-control" />
              </div>
            </div>

            {/* voucher-2 */}
            <div className="row mb-3">
              <div className="col-auto">
                <label htmlFor="vouch2" className="form-label">
                  ব্যয়ের খাত:{" "}
                </label>
              </div>
              <div className="col-auto">
                <input type="number" name="vouch2" className="form-control" />
              </div>
            </div>
          </div>
        </div>

        {/* name  */}
        <div className="row mb-3">
          <div className="col-auto ">
            <label htmlFor="name" className="form-label">
              ডঃ জনাবঃ জনাবাঃ{" "}
            </label>
          </div>
          <div className="col-auto">
            <input type="text" name="name" className="form-control" />
          </div>
        </div>
        {/* taka */}
        <div className="row mb-3">
          <div className="col-auto ">
            <label htmlFor="taka" className="form-label">
              দেয় টাকা:{" "}
            </label>
          </div>
          <div className="col-auto">
            <input type="text" name="taka" className="form-control" />
          </div>
          <span className="col-auto">মাত্র</span>
        </div>

        <div className="d-lg-flex justify-content-between">
          {/* date  */}
          <div className="row mb-3">
            <div className="col-auto ">
              <label htmlFor="date1" className="form-label">
                তারিখ:{" "}
              </label>
            </div>
            <div className="col-auto">
              <input type="date" name="date1" className="form-control" />
            </div>
          </div>

          {/* collect1 */}
          <div className="row mb-3">
            <div className="col-auto ">
              <label htmlFor="collect1" className="form-label">
                হিসাব পরিচালক:{" "}
              </label>
            </div>
            <div className="col-auto">
              <input type="text" name="collect1" className="form-control" />
            </div>
          </div>
        </div>

        <div className="top-down-border">
          {/* permit1 */}
          <label htmlFor="permit1" className="form-label">
            নিরীক্ষকের অনুমদন
          </label>
          <textarea name="permit1" className="form-control" rows="5"></textarea>
        </div>

        <div>
          <div className="row mb-3">
            <div className="col-auto ">
              {/* check1  */}
              <label htmlFor="check1" className="form-label">
                প্রদত্ত চেক নং:{" "}
              </label>
            </div>
            <div className="col-auto">
              <input type="number" name="check1" className="form-control" />
            </div>
          </div>

          <div className="row">
            <div className="col-lg-6 col-sm-12">
              <div className="row mb-3">
                <div className="col-auto ">
                  {/* date2  */}
                  <label htmlFor="date2" className="form-label">
                    তারিখ:{" "}
                  </label>
                </div>
                <div className="col-auto">
                  <input type="date" name="date2" className="form-control" />
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-sm-12">
              <div className="d-flex justify-content-end ">
                <div>
                  <p>চেক বুঝিয়া পাইলাম</p>
                  <span className="text-box text-center"> রাজস্ব টিকেট </span>
                </div>
              </div>
            </div>
          </div>

          <div>
         
          <div className="row">
          <div className="col-lg-4 col-sm-12 mb-3 mt-3">
          <div className="d-flex flex-lg-column-reverse  flex-lg-column flex-sm-row">
            {/* collect2 */}
          <div className="col-auto text-center mt-3">
            <label htmlFor="collect2" className="form-label">
            হিসাব পরিচালক &nbsp;
            </label>
          </div>
          <div className="col-auto">
            <input type="text" name="collect2" className="form-control" />
          </div>
          </div>
          </div>

          <div className="col-lg-4 col-sm-12 mb-3 mt-3">
          <div className="d-flex flex-lg-column-reverse  flex-lg-column flex-sm-row">
            {/* collect 3 */}
          <div className="col-auto text-center mt-3">
            <label htmlFor="collect3" className="form-label">
            রেজিস্ট্রার &nbsp;
            </label>
          </div>
          <div className="col-auto">
            <input type="text" name="collect3" className="form-control" />
          </div>
          </div>
          </div>
          
          
          <div className="col-lg-4 col-sm-12 mb-3 mt-3">
          <div className="d-flex flex-lg-column-reverse flex-lg-column flex-sm-row">
            {/* collect 4 */}
          <div className="col-auto text-center mt-3">
            <label htmlFor="collect4" className="form-label">
            প্রাপকের সাক্ষর &nbsp;
            </label>
          </div>
          <div className="col-auto">
            <input type="text" name="collect4" className="form-control" />
          </div>
          </div>
          </div>
          </div>
          
         
        
       
          </div>
        </div>
   
        <Link to="/travelbilling-page-2">
        <button type="submit" className="mb-3 mt-3 btn btn-primary"> পরবর্তী</button>
        </Link>

      </form>
      </Container>
    </div>
  );
};

export default Ser2Page1;
