import NavBar from "../Components/NavBar";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import Faq from "../Components/Faq";
import Slideshow from "../Components/Slideshow";

export default function Home() {
  return (
    <div>
      <NavBar />
      <Slideshow />
      <header style={{ paddingLeft: 0 }}>
        <div
          className="p-5 text-center bg-image"
          style={{
            backgroundImage:
              "url('https://www.musicavenue.com.cy/wp-content/uploads/2020/11/shop_photos_-11.jpg')",
            height: 400,
          }}
        >
          <div
            className="mask"
            style={{ backgroundColor: "rgba(0, 0, 0, 0.6)" }}
          >
            <div className="d-flex justify-content-center align-items-center h-100">
              <div className="text-white">
                <Link to="/Faq">
                  <Button variant="contained">FAQ</Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}
