"use client";

import { useState } from "react";
import Link from "next/link";

export default function ManufacturerSignup() {
  const [accepted, setAccepted] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
  e.preventDefault();

  if (!accepted) {
    setError("You must accept the Privacy Policy and Manufacturer Contract.");
    return;
  }

  window.location.href = "/manufacturer/pricing";
};


    alert("Signup successful. Redirecting to pricing & payment page.");
    // next step: redirect to pricing page
  };

  return (
    <main style={{ padding: "24px", fontFamily: "Arial", maxWidth: "500px" }}>
      <h1>Manufacturer Signup</h1>

      <form onSubmit={handleSubmit}>
        <label>Email</label>
        <input
          type="email"
          required
          style={{ width: "100%", padding: "8px", marginBottom: "12px" }}
        />

        <label>Phone Number</label>
        <input
          type="tel"
          required
          style={{ width: "100%", padding: "8px", marginBottom: "12px" }}
        />

        <div style={{ marginBottom: "12px" }}>
          <input
            type="checkbox"
            id="accept"
            checked={accepted}
            onChange={(e) => setAccepted(e.target.checked)}
          />
          <label htmlFor="accept" style={{ marginLeft: "8px" }}>
            I agree to the{" "}
            <Link href="/privacy-policy">Privacy Policy</Link> and{" "}
            <Link href="/manufacturer-contract">
              Manufacturer Contract
            </Link>
          </label>
        </div>

        {error && <p style={{ color: "red" }}>{error}</p>}

        <button
          type="submit"
          style={{
            padding: "10px",
            width: "100%",
            background: "black",
            color: "white",
          }}
        >
          Continue
        </button>
      </form>
    </main>
  );
}
