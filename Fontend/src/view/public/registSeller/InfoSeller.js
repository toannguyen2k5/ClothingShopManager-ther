import React, { Component } from "react";
import { urlapi } from "../../../setting/store/const";

class InfoSeller extends Component {
  render() {
    return (
      <>
        <link rel="stylesheet" href={`${urlapi}/getCss/bootstrap.min.css`} />
        <section id="hero" className="d-flex align-items-center">
          <div className="container">
            <div className="row">
              <div
                className="col-lg-6 d-lg-flex flex-lg-column justify-content-center align-items-stretch pt-5 pt-lg-0 order-2 order-lg-1 aos-init aos-animate"
                data-aos="fade-up"
              >
                <div>
                  <h1>Smart Online Shopping</h1>
                  <h2>
                    Lorem ipsum dolor sit amet, tota senserit percipitur ius ut,
                    usu et fastidii forensibus voluptatibus. His ei nihil
                    feugait
                  </h2>&nbsp;
                </div>
              </div>
              <div
                className="col-lg-6 d-lg-flex flex-lg-column align-items-stretch order-1 order-lg-2 hero-img aos-init aos-animate"
                data-aos="fade-up"
              >
                &nbsp;
                <img
                  src={`${urlapi}/getImage/hero-img.png`}
                  className="img-fluid"
                  alt=""
                />
              </div>
            </div>
          </div>
        </section>
        <main id="main">
          <section id="details" className="details">
            <div className="container">
              <div className="row content">
                <div
                  className="col-md-4 aos-init aos-animate"
                  data-aos="fade-right"
                >
                  <img
                    src={`${urlapi}/getImage/details-1.png`}
                    className="img-fluid"
                    alt=""
                  />
                </div>
                <div
                  className="col-md-8 pt-4 aos-init aos-animate"
                  data-aos="fade-up"
                >
                  <h3>
                    Voluptatem dignissimos provident quasi corporis voluptates
                    sit assumenda.
                  </h3>
                  <p className="fst-italic">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                  </p>
                  <ul>
                    <li>
                      <i className="bi bi-check"></i> Ullamco laboris nisi ut
                      aliquip ex ea commodo consequat.
                    </li>
                    <li>
                      <i className="bi bi-check"></i> Duis aute irure dolor in
                      reprehenderit in voluptate velit.
                    </li>
                    <li>
                      <i className="bi bi-check"></i> Iure at voluptas
                      aspernatur dignissimos doloribus repudiandae.
                    </li>
                    <li>
                      <i className="bi bi-check"></i> Est ipsa assumenda id
                      facilis nesciunt placeat sed doloribus praesentium.
                    </li>
                  </ul>
                  <p>
                    Voluptas nisi in quia excepturi nihil voluptas nam et ut.
                    Expedita omnis eum consequatur non. Sed in asperiores aut
                    repellendus. Error quisquam ab maiores. Quibusdam sit in
                    officia
                  </p>
                </div>
              </div>
              <div className="row content">
                <div
                  className="col-md-4 order-1 order-md-2 aos-init aos-animate"
                  data-aos="fade-left"
                >
                  <img
                    src={`${urlapi}/getImage/details-2.png`}
                    className="img-fluid"
                    alt=""
                  />
                </div>
                <div
                  className="col-md-8 pt-5 order-2 order-md-1 aos-init aos-animate"
                  data-aos="fade-up"
                >
                  <h3>Corporis temporibus maiores provident</h3>
                  <p className="fst-italic">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                  </p>
                  <p>
                    Ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                    occaecat cupidatat non proident, sunt in culpa qui officia
                    deserunt mollit anim id est laborum
                  </p>
                  <p>
                    Inventore id enim dolor dicta qui et magni molestiae.
                    Mollitia optio officia illum ut cupiditate eos autem. Soluta
                    dolorum repellendus repellat amet autem rerum illum in.
                    Quibusdam occaecati est nisi esse. Saepe aut dignissimos
                    distinctio id enim.
                  </p>
                </div>
              </div>
              <div className="row content">
                <div
                  className="col-md-4 aos-init aos-animate"
                  data-aos="fade-right"
                >
                  <img
                    src={`${urlapi}/getImage/details-3.png`}
                    className="img-fluid"
                    alt=""
                  />
                </div>
                <div
                  className="col-md-8 pt-5 aos-init aos-animate"
                  data-aos="fade-up"
                >
                  <h3>
                    Sunt consequatur ad ut est nulla consectetur reiciendis
                    animi voluptas
                  </h3>
                  <p>
                    Cupiditate placeat cupiditate placeat est ipsam culpa.
                    Delectus quia minima quod. Sunt saepe odit aut quia
                    voluptatem hic voluptas dolor doloremque.
                  </p>
                  <ul>
                    <li>
                      <i className="bi bi-check"></i> Ullamco laboris nisi ut
                      aliquip ex ea commodo consequat.
                    </li>
                    <li>
                      <i className="bi bi-check"></i> Duis aute irure dolor in
                      reprehenderit in voluptate velit.
                    </li>
                    <li>
                      <i className="bi bi-check"></i> Facilis ut et voluptatem
                      aperiam. Autem soluta ad fugiat.
                    </li>
                  </ul>
                  <p>
                    Qui consequatur temporibus. Enim et corporis sit sunt harum
                    praesentium suscipit ut voluptatem. Et nihil magni debitis
                    consequatur est.
                  </p>
                  <p>
                    Suscipit enim et. Ut optio esse quidem quam reiciendis esse
                    odit excepturi. Vel dolores rerum soluta explicabo vel
                    fugiat eum non.
                  </p>
                </div>
              </div>
              <div className="row content">
                <div
                  className="col-md-4 order-1 order-md-2 aos-init aos-animate"
                  data-aos="fade-left"
                >
                  <img
                    src={`${urlapi}/getImage/details-4.png`}
                    className="img-fluid"
                    alt=""
                  />
                </div>
                <div
                  className="col-md-8 pt-5 order-2 order-md-1 aos-init aos-animate"
                  data-aos="fade-up"
                >
                  <h3>
                    Quas et necessitatibus eaque impedit ipsum animi consequatur
                    incidunt in
                  </h3>
                  <p className="fst-italic">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                  </p>
                  <p>
                    Ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                    occaecat cupidatat non proident, sunt in culpa qui officia
                    deserunt mollit anim id est laborum
                  </p>
                  <ul>
                    <li>
                      <i className="bi bi-check"></i> Et praesentium laboriosam
                      architecto nam .
                    </li>
                    <li>
                      <i className="bi bi-check"></i> Eius et voluptate. Enim
                      earum tempore aliquid. Nobis et sunt consequatur. Aut
                      repellat in numquam velit quo dignissimos et.
                    </li>
                    <li>
                      <i className="bi bi-check"></i> Facilis ut et voluptatem
                      aperiam. Autem soluta ad fugiat.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </section>
        </main>
        <div className="d-grid gap-2 col-2 mx-auto mb-3">
          <a className="btn btn-primary" href="/RegistSeller">
            Đăng Kí Bán Hàng
          </a>
        </div>
      </>
    );
  }
}

export default InfoSeller;
