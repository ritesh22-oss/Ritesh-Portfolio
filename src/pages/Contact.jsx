import { Suspense, useRef, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { Helmet } from "react-helmet-async";

// components
import { Loader, Alert } from "../components";

import { Fox } from "../models";
import useAlert from "../hooks/useAlert";
import { SITE_NAME } from "../constants";

// Web3Forms public access key (supports VITE_WEB3FORMS_ACCESS_KEY env variable with user default fallback)
const WEB3FORMS_ACCESS_KEY =
  import.meta.env.VITE_WEB3FORMS_ACCESS_KEY ||
  "b39cac08-4f6d-49e1-9428-3fb51481f63d";

// contact
const Contact = () => {
  // refs
  const formRef = useRef(null);

  // states
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "New Portfolio Contact Message",
    message: "",
    botcheck: "", // Honeypot field for spam protection
  });
  const [isLoading, setIsLoading] = useState(false);
  const [currentAnimation, setCurrentAnimation] = useState("idle");

  // hooks
  const { alert, showAlert, hideAlert } = useAlert();

  // handle form change
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // handle form input focus
  const handleFocus = () => setCurrentAnimation("walk");

  // handle form input blur (when user enters out of form)
  const handleBlur = () => setCurrentAnimation("idle");

  // handle form submit via Web3Forms
  const handleSubmit = async (e) => {
    // prevent page reload
    e.preventDefault();

    // prevent duplicate submissions while already processing
    if (isLoading) return;

    // show loader & fox hit animation
    setIsLoading(true);
    setCurrentAnimation("hit");

    try {
      // payload for Web3Forms API
      const payload = {
        access_key: WEB3FORMS_ACCESS_KEY,
        name: form.name.trim(),
        email: form.email.trim(),
        subject: form.subject || "New Portfolio Contact Message",
        message: form.message.trim(),
        from_name: `${SITE_NAME} Portfolio`,
        botcheck: form.botcheck, // Spam honeypot
      };

      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(payload),
      });

      const data = await response.json();

      if (response.ok && data.success) {
        // Successful submission confirmed by Web3Forms
        showAlert({
          show: true,
          text: data.message || "Message sent successfully!",
          type: "success",
        });

        // Clear form only on confirmed success
        setForm({
          name: "",
          email: "",
          subject: "New Portfolio Contact Message",
          message: "",
          botcheck: "",
        });
      } else {
        // API returned unsuccessful response
        showAlert({
          show: true,
          text:
            data.message ||
            "Failed to send message. Please check details and try again.",
          type: "danger",
        });
      }
    } catch (error) {
      console.error("Web3Forms submission error:", error);
      showAlert({
        show: true,
        text: "Network error occurred. Please try again later.",
        type: "danger",
      });
    } finally {
      // Reset animation, loader, and hide alert after timeout
      setIsLoading(false);
      setTimeout(() => {
        setCurrentAnimation("idle");
        hideAlert();
      }, 4000);
    }
  };

  return (
    <>
      {/* update site title */}
      <Helmet>
        <title>{SITE_NAME} | Contact Me</title>
      </Helmet>

      {/* contact section */}
      <section className="relative flex lg:flex-row flex-col max-container min-h-[calc(100vh-80px)] lg:h-auto gap-8 sm:gap-12 pb-16">
        {/* show alert on form submit */}
        {alert.show && <Alert {...alert} />}

        {/* get in touch */}
        <div className="flex-1 min-w-[50%] flex flex-col justify-center">
          {/* head text */}
          <h1 className="head-text">Get in Touch</h1>
          <p className="mt-3 text-slate-500 text-sm sm:text-base">
            Have a project or want to collaborate? Send a message and let&apos;s connect!
          </p>

          {/* contact form */}
          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className="w-full flex flex-col gap-5 sm:gap-7 mt-8 sm:mt-12 bg-white/70 p-5 sm:p-8 rounded-2xl border border-slate-200/80 shadow-sm"
          >
            {/* Honeypot field (hidden from genuine users for spam prevention) */}
            <input
              type="checkbox"
              name="botcheck"
              className="hidden"
              style={{ display: "none" }}
              checked={!!form.botcheck}
              onChange={(e) =>
                setForm({ ...form, botcheck: e.target.checked ? "bot" : "" })
              }
              tabIndex={-1}
              autoComplete="off"
            />

            {/* Hidden metadata fields */}
            <input
              type="hidden"
              name="from_name"
              value={`${SITE_NAME} Portfolio`}
            />

            {/* name */}
            <label className="text-slate-800 text-sm sm:text-base font-semibold" htmlFor="name">
              Name
              <input
                type="text"
                id="name"
                name="name"
                className="input disabled:cursor-not-allowed"
                placeholder="Ritesh"
                title="Name"
                value={form.name}
                onChange={handleChange}
                onFocus={handleFocus}
                onBlur={handleBlur}
                disabled={isLoading}
                required
              />
            </label>

            {/* email */}
            <label className="text-slate-800 text-sm sm:text-base font-semibold" htmlFor="email">
              E-mail
              <input
                type="email"
                id="email"
                name="email"
                className="input disabled:cursor-not-allowed"
                placeholder="ritesh12@gmail.com"
                value={form.email}
                title="Email"
                onChange={handleChange}
                onFocus={handleFocus}
                onBlur={handleBlur}
                disabled={isLoading}
                required
              />
            </label>

            {/* message */}
            <label className="text-slate-800 text-sm sm:text-base font-semibold" htmlFor="message">
              Your Message
              <textarea
                id="message"
                name="message"
                className="textarea disabled:cursor-not-allowed"
                rows={4}
                placeholder="Let me know how I can help you!"
                value={form.message}
                title="Message"
                onChange={handleChange}
                onFocus={handleFocus}
                onBlur={handleBlur}
                disabled={isLoading}
                required
              />
            </label>

            {/* form submit btn */}
            <button
              type="submit"
              disabled={isLoading}
              title={isLoading ? "Sending..." : "Send Message"}
              className="btn mt-2 flex items-center justify-center gap-2 cursor-pointer disabled:cursor-not-allowed disabled:opacity-75"
              onFocus={handleFocus}
              onBlur={handleBlur}
            >
              {isLoading && (
                <svg
                  className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  />
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                  />
                </svg>
              )}
              <span>{isLoading ? "Sending..." : "Send Message"}</span>
            </button>
          </form>
        </div>

        <div className="lg:w-1/2 w-full h-[280px] sm:h-[350px] lg:h-auto min-h-[280px] rounded-2xl overflow-hidden bg-slate-200/20 border border-white/50">
          {/* Three.js Canvas Component */}
          <Canvas
            camera={{
              position: [0, 0, 5], // Camera position in 3D space
              fov: 75, // Field of view
              near: 0.1, // Near clipping plane
              far: 1000, // Far clipping plane
            }}
          >
            {/* Directional Light for realistic lighting */}
            <directionalLight intensity={2.5} position={[0, 0, 1]} />

            {/* Ambient Light for overall scene illumination */}
            <ambientLight intensity={0.5} />

            {/* Suspense for handling loading state */}
            <Suspense fallback={<Loader />}>
              {/* Fox Model */}
              <Fox
                currentAnimation={currentAnimation} // Current animation state
                position={[0.5, 0.35, 0]} // Initial position in 3D space
                rotation={[12.6, -0.6, 0]} // Initial rotation
                scale={[0.5, 0.5, 0.5]} // Initial scale
              />
            </Suspense>
          </Canvas>
        </div>
      </section>
    </>
  );
};

export default Contact;
