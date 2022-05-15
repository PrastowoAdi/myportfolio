/* eslint-disable jsx-a11y/img-redundant-alt */
import Navbar from "../components/organism/Navbar";

export default function profile() {
  return (
    <>
      <Navbar activeMenu="Profile" />
      <section className="page-section bg-light" id="profile">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 mx-auto">
              <div className="team-member">
                <img className="mx-auto rounded-circle" src="/img/profile-image.png" alt="profile-image" />
                <h4>Prastowo Adi Nugroho</h4>
                <p className="text-muted">
                  Application Developer
                  <br />
                  {" "}
                </p>
                <p className="text-muted" />
                <a className="btn btn-dark btn-social mx-2" href="#!" aria-label="Parveen Anand Twitter Profile"><i className="fa-brands fa-instagram" /></a>
                <a className="btn btn-dark btn-social mx-2" href="#!" aria-label="Parveen Anand Facebook Profile"><i className="fa-brands fa-facebook" /></a>
                <a className="btn btn-dark btn-social mx-2" href="#!" aria-label="Parveen Anand LinkedIn Profile"><i className="fa-brands fa-linkedin" /></a>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-8 mx-auto text-center"><p className="large text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut eaque, laboriosam veritatis, quos non quis ad perspiciatis, totam corporis ea, alias ut unde.</p></div>
          </div>
        </div>
      </section>
    </>
  );
}
