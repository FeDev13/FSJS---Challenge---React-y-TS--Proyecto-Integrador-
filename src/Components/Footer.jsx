import React from "react";
import {
  MDBFooter,
  MDBContainer,
  MDBIcon,
  MDBInput,
  MDBCol,
  MDBRow,
  MDBBtn,
} from "mdb-react-ui-kit";

export default function Footer() {
  return (
    <MDBFooter className="text-center footer" color="white">
      <MDBContainer className="p-4">
        <section className="mb-4">
          <MDBBtn
            outline
            color="light"
            floating
            className="m-1"
            href="#!"
            role="button"
          >
            <MDBIcon fab icon="facebook-f" />
          </MDBBtn>

          <MDBBtn
            outline
            color="light"
            floating
            className="m-1"
            href="#!"
            role="button"
          >
            <MDBIcon fab icon="twitter" />
          </MDBBtn>

          <MDBBtn
            outline
            color="light"
            floating
            className="m-1"
            href="#!"
            role="button"
          >
            <MDBIcon fab icon="google" />
          </MDBBtn>

          <MDBBtn
            outline
            color="light"
            floating
            className="m-1"
            href="#!"
            role="button"
          >
            <MDBIcon fab icon="instagram" />
          </MDBBtn>

          <MDBBtn
            outline
            color="light"
            floating
            className="m-1"
            href="#!"
            role="button"
          >
            <MDBIcon fab icon="linkedin-in" />
          </MDBBtn>

          <MDBBtn
            outline
            color="light"
            floating
            className="m-1"
            href="#!"
            role="button"
          >
            <MDBIcon fab icon="github" />
          </MDBBtn>
        </section>

        <section className="">
          <form action="">
            <MDBRow className="d-flex justify-content-center">
              <MDBCol size="auto">
                <p className="pt-2">
                  <strong>Suscribite a nuestro newsletter</strong>
                </p>
              </MDBCol>

              <MDBCol md="5" start>
                <MDBInput
                  contrast
                  type="email"
                  label="Email"
                  className="mb-4"
                />
              </MDBCol>

              <MDBCol size="auto">
                <MDBBtn outline color="light" type="submit" className="mb-4">
                  Suscribite
                </MDBBtn>
              </MDBCol>
            </MDBRow>
          </form>
        </section>

        <section className="mb-4">
          <p>Nuestros partners</p>
        </section>

        <section className="">
          <MDBRow>
            <MDBCol lg="3" md="6" className="mb-4 mb-md-0">
              <h5 className="text-uppercase">Links</h5>
            </MDBCol>

            <MDBCol lg="3" md="6" className="mb-4 mb-md-0">
              <h5 className="text-uppercase">Links</h5>
            </MDBCol>

            <MDBCol lg="3" md="6" className="mb-4 mb-md-0">
              <h5 className="text-uppercase">Links</h5>
            </MDBCol>

            <MDBCol lg="3" md="6" className="mb-4 mb-md-0">
              <h5 className="text-uppercase">Links</h5>
            </MDBCol>
          </MDBRow>
        </section>
      </MDBContainer>

      <div className="text-center p-3" style={{ backgroundColor: "black" }}>
        © 2020 Copyright:
        <a className="text-white" href="https://mdbootstrap.com/"></a>
      </div>
    </MDBFooter>
  );
}
