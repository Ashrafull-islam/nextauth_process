"use client";
import './login.css';
import { signIn } from "next-auth/react"; // ✅ import this
import { useRouter } from 'next/navigation';

export default function Page() {
  const router = useRouter();

  const handleLogLogIn = async (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.userEmail.value;
    const password = form.password.value;

    console.log("Logging in:", email, password);

    const result = await signIn("credentials", {
      redirect: false,
      email,
      password,
    });

    if (result?.ok) {
      alert("Login successful!");
      router.push("/dashboard"); // 🔄 redirect where needed
    } else {
      alert("Invalid email or password");
    }

    form.reset();
  };

  return (
    <>
      <main>
        {/* hero section */}
        <section>
          <div
            className="hero-container d-flex align-items-center justify-content-center"
            style={{
              backgroundImage:
                "url(assets/media/store/banner/Home-Image-1-scaled-1.jpg)"
            }}
          >
            <div className="hero-content">
              <h1 className="banner-header">My account</h1>
              <div className="d-flex gap-2 justify-content-center">
                <p className="banner-home ">
                  <a className="raf-tag" href="index.html">Home</a>
                </p>
                <span>/</span>
                <p className="banner-store ">
                  <a className="raf-tag" href="login.html">My account</a>
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* form section */}
        <section>
          <div className="login-container my-5">
            <h2>LOGIN</h2>
            <form onSubmit={handleLogLogIn}>
              <div className="mb-3 my-4">
                <label htmlFor="username" className="form-label required">
                  Username or email address
                </label>
                <input
                  type="text"
                  name="userEmail"
                  className="form-control"
                  id="userEmail"
                  required
                />
              </div>
              <div className="mb-3">
                <label htmlFor="password" className="form-label required">
                  Password
                </label>
                <div className="password-field">
                  <input
                    type="password"
                    name="password"
                    className="form-control"
                    id="password"
                    required
                  />
                  <button type="button" className="password-toggle">
                    {/* optional toggle button */}
                  </button>
                </div>
              </div>
              <button type="submit" className="btn btn-login text-white">
                LOG IN
              </button>
              <div className="d-flex justify-content-between align-items-center">
                <div className="form-check">
                  <input type="checkbox" className="form-check-input" id="remember" />
                  <label className="form-check-label" htmlFor="remember">
                    Remember me
                  </label>
                </div>
                <a href="/forgot-password" className="forgot-password">
                  Lost your password?
                </a>
              </div>
            </form>
          </div>
        </section>
      </main>
    </>
  );
}
