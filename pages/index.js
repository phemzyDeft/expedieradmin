import Head from "next/head";
import Image from "next/image";
import { DM_Sans } from "next/font/google";
import styles from "../styles/auth/login.module.css";
import { BsEyeSlash, BsEye } from "react-icons/bs";
import { useState } from "react";

const inter = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

export default function Home() {
  const [toggle, setToggle] = useState(false);

  const handleToggle = () => {
    setToggle(!toggle);
  };

  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="container-fluid">
        <div className="row" style={{ height: "100vh", overflowY: "hidden" }}>
          <div
            className={`${styles.loginbg} d-flex justify-content-start flex-column  py-5 px-2 py-md-5 px-md-5 col-md-6 col-12`}
          >
            <Image
              src={"/expedierlogo.svg"}
              className="img-fluid"
              width={200}
              height={50}
            />
            <div className="p-3 p-md-4">
              <h1 className={`${styles.welcome}`}>Welcome Back</h1>
              <form>
                <div className={`${styles.widthRes} py-3`}>
                  <label htmlFor="email">Email</label>
                  <input
                    className={`${styles.loginInput} w-100 w-md-50 form-control`}
                    id="email"
                    type="email"
                    placeholder="username@gmail.com"
                  />
                </div>
                <div className={`${styles.widthRes} py-3`}>
                  <label htmlFor="password">Password</label>
                  <div className="d-flex position-relative align-items-center w-100">
                    <input
                      className={`${styles.loginInput} form-control`}
                      id="password"
                      type={toggle ? "text" : "password"}
                      placeholder="Password"
                    />
                    <span
                      className="position-absolute end-0 pe-4"
                      style={{ cursor: "pointer" }}
                      onClick={handleToggle}
                    >
                      {toggle ? <BsEye size={17} /> : <BsEyeSlash size={17} />}
                    </span>
                  </div>
                </div>
                <div className="d-flex align-items-center">
                  <input type="checkbox" className="me-2" />
                  <span
                    style={{
                      color: "#666666",
                      cursor: "pointer",
                      fontSize: ".9rem",
                    }}
                  >
                    Remember Me
                  </span>
                </div>
                <div className={`${styles.widthRes} d-grid mt-4`}>
                  <button className={`${styles.loginBtn} btn btn-lg`}>
                    Sign In
                  </button>
                </div>
              </form>
            </div>
          </div>
          <div className="col-12 col-md-6 d-none d-md-flex align-items-center justify-content-center items-center">
            <Image
              src={"/loginphone.svg"}
              className="img-fluid p-4"
              width={600}
              height={600}
              alt="img"
            />
          </div>
        </div>
      </main>
    </>
  );
}
