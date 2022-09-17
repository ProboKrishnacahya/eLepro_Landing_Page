import "./App.css";
import { NavLink } from "react-router-dom";
import Logo from "./logo.svg";

// Fitur
function Feature(props) {
  const content = props.values.map((value) => (
    <div key={value.id} className="col">
      <div className="card border-0 rounded-3 shadow-sm h-100">
        <div className="card-body vstack gap-3">
          <div className="text-center">
            <i className={value.icon}></i>
          </div>
          <div>
            <h5 className="card-title">{value.title}</h5>
            <p className="card-text">{value.description}</p>
          </div>
        </div>
      </div>
    </div>
  ));
  return (
    <div>
      <p className="text-center">
        Berikut ini fitur-fitur yang eLepro tawarkan.
      </p>
      <div className="hstack gap-3" id="feature">
        {content}
      </div>
    </div>
  );
}

const values = [
  {
    id: 1,
    icon: "bi bi-mortarboard icon-square fs-1 p-3 rounded-circle bg-primary bg-opacity-10 text-primary",
    title: "Lorem ipsum",
    description:
      "Some quick example text to build on the card title and make up the bulk of the card's content.",
  },
  {
    id: 2,
    icon: "bi bi-mortarboard icon-square fs-1 p-3 rounded-circle bg-primary bg-opacity-10 text-primary",
    title: "Lorem ipsum",
    description:
      "Some quick example text to build on the card title and make up the bulk of the card's content.",
  },
  {
    id: 3,
    icon: "bi bi-mortarboard icon-square fs-1 p-3 rounded-circle bg-primary bg-opacity-10 text-primary",
    title: "Lorem ipsum",
    description:
      "Some quick example text to build on the card title and make up the bulk of the card's content.",
  },
];

// Tentang
function About(props) {
  const content = props.teams.map((team) => (
    <div
      key={team.id}
      className="card border-0 rounded-3 shadow-sm w-100 border-end border-5 border-primary p-3"
    >
      <div className="row g-0">
        <div className="col-md-2 align-self-center">
          <img
            src={team.photo}
            className="img-fluid rounded-circle d-block mx-auto"
            alt={team.alt}
            width={128}
          />
        </div>
        <div className="col-md-10">
          <div className="card-body vstack gap-3">
            <div>
              <div className="hstack gap-2">
                <h5 className="card-title">{team.name}</h5>
                {/* <div className="badge bg-primary bg-opacity-10 text-primary"></div> */}
              </div>

              <div className="hstack gap-2 text-muted">
                <i className="bi bi-geo-alt"></i>
                <span>{team.city}</span>
              </div>
            </div>
            <div>
              <a href={team.contact}>
                <button className="btn btn-primary">
                  <div className="hstack gap-2">
                    <i className="bi bi-envelope"></i>
                    <strong>{team.email}</strong>
                  </div>
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  ));
  return (
    <div>
      <p className="text-center">
        Hai, kami dari Tim Archotech yang merupakan Mahasiswa/i Program Studi
        Informatika di Universitas Ciputra Surabaya.
      </p>
      <div className="hstack flex-column gap-3">{content}</div>
    </div>
  );
}

const teams = [
  {
    id: 1,
    photo:
      "https://images.unsplash.com/photo-1479936343636-73cdc5aae0c3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&q=80",
    name: "Nur Azizah",
    alt: "Nur Azizah",
    city: "Tarakan",
    contact: "mailto:nazizah01@student.ciputra.ac.id",
    email: "nazizah01@student.ciputra.ac.id",
  },
  {
    id: 2,
    photo:
      "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDIwfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=600&q=80",
    alt: "Oey Darryl Valencio Wijaya",
    name: "Oey Darryl Valencio Wijaya",
    city: "Balikpapan",
    contact: "mailto:ovalencio@student.ciputra.ac.id",
    email: "ovalencio@student.ciputra.ac.id",
  },
  {
    id: 3,
    photo:
      "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&q=80",
    alt: "Nathanael Abel Arianto",
    name: "Nathanael Abel Arianto",
    city: "Makassar",
    contact: "mailto:narianto@student.ciputra.ac.id",
    email: "narianto@student.ciputra.ac.id",
  },
  {
    id: 4,
    photo:
      "https://images.unsplash.com/photo-1527980965255-d3b416303d12?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&q=80",
    alt: "Probo Krishnacahya",
    name: "Probo Krishnacahya",
    city: "Surabaya",
    contact: "mailto:pkrishnacahya@student.ciputra.ac.id",
    email: "pkrishnacahya@student.ciputra.ac.id",
  },
  {
    id: 5,
    photo:
      "https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&q=80",
    alt: "Haning Galih Rani Kumbara",
    name: "Haning Galih Rani Kumbara",
    city: "Ponorogo",
    contact: "mailto:hgalihrani@student.ciputra.ac.id",
    email: "hgalihrani@student.ciputra.ac.id",
  },
];

function App() {
  return (
    <div className="App">
      {/* Header */}
      <nav className="navbar navbar-expand-lg navbar-dark user-select-none py-3">
        <div className="container">
          <NavLink className="navbar-brand" to="/">
            <div className="hstack gap-2">
              <img src={Logo} alt="eLepro" />
              <span className="fs-2 text-primary" id="brand">
                eLepro
              </span>
            </div>
          </NavLink>
          <button
            className="navbar-toggler collapsed bg-primary"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
            <button
              type="button"
              className="btn-close btn-close-white"
              aria-label="Close"
            ></button>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto gap-3">
              <li className="nav-item">
                <a href="#fitur" className="nav-link text-primary">
                  Fitur
                </a>
              </li>
              <li className="nav-item">
                <a href="#tentang" className="nav-link text-primary">
                  Tentang
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Content */}
      <div className="container my-5">
        {/* Section Hero */}
        <section className="col" data-aos="fade-up">
          <div className="row flex-lg-row-reverse align-items-center">
            <div className="col-12 col-sm-8 col-lg-6">
              <img
                src="https://images.unsplash.com/photo-1600195077909-46e573870d99?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                className="d-block mx-lg-auto img-fluid rounded-2 shadow-sm"
                alt="Hero"
                loading="lazy"
              />
            </div>

            <div className="col-lg-6 vstack justify-content-between">
              <div>
                <h1>
                  eLepro hadir untuk proses pembelajaran yang lebih optimal.
                </h1>
                <p className="lead">
                  Tingkatkan kualitas penerapan Metode Self-Paced Learning
                  dengan eLepro. Kapan pun dan di mana pun.
                </p>
              </div>
              <div className="d-grid gap-2 d-md-flex">
                <button type="button" className="btn btn-primary btn-lg px-4">
                  <div className="hstack gap-3 justify-content-center">
                    <i className="bi bi-download"></i>
                    <strong>Unduh</strong>
                  </div>
                </button>
                <a href="#eksplor">
                  <button
                    type="button"
                    className="btn btn-outline-info btn-lg px-4 border border-2 border-info"
                  >
                    <div className="hstack gap-3 justify-content-center">
                      <i className="bi bi-info-circle"></i>
                      <strong>Eksplor</strong>
                    </div>
                  </button>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Section  */}
        <section className="my-5" id="eksplor" data-aos="fade-up">
          <iframe
            src="https://pitch.com/embed/6688a050-ce0c-4745-b837-2d19e6df4b47"
            allow="fullscreen"
            allowfullscreen=""
            title="Pitch Deck"
            className="rounded-2 w-100 vh-100"
          ></iframe>
        </section>

        {/* Section Fitur */}
        <section className="vstack gap-3" id="fitur" data-aos="fade-up">
          <div className="hstack gap-2 justify-content-center">
            <i className="bi bi-star fs-4"></i>
            <span className="fw-semibold fs-4">Fitur</span>
          </div>
          <div className="row row-cols-1 row-cols-md-1 g-4">
            <Feature values={values} />
          </div>
        </section>

        {/* Section Tentang */}
        <section className="vstack gap-3 my-5" id="tentang" data-aos="fade-up">
          <div className="hstack gap-2 justify-content-center">
            <i className="bi bi-people fs-4"></i>
            <span className="fw-semibold fs-4">Tentang</span>
          </div>

          <About teams={teams} />
        </section>
      </div>
    </div>
  );
}

export default App;
