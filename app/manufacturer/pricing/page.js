"use client";

export default function ManufacturerPricing() {
  return (
    <main style={{ padding: "24px", fontFamily: "Arial", maxWidth: "700px" }}>
      <h1>Manufacturer Pricing & Payment</h1>

      <h2>Introductory Trial</h2>
      <p>
        <strong>PKR 5,000</strong> — valid until your first order is generated.
      </p>

      <h2>After First Order</h2>
      <p>
        <strong>PKR 10,000 per month</strong>
      </p>

      <h2>Long-Term Plans</h2>
      <ul>
        <li>6 Months — PKR 60,000</li>
        <li>12 Months — PKR 120,000</li>
      </ul>

      <hr />

      <h2>Payment Method (Manual Only)</h2>
      <ul>
        <li>Easypaisa</li>
        <li>JazzCash</li>
        <li>Bank Transfer</li>
      </ul>

      <p>
        After payment, upload a clear screenshot of your payment proof. Your
        account will be reviewed and approved by the PakSupply.pk admin.
      </p>

      <p style={{ color: "red", fontWeight: "bold" }}>
        ❌ Product listing is locked until payment is verified and approved.
      </p>

      <hr />

      <h3>Upload Payment Screenshot</h3>
      <input type="file" />

      <p style={{ marginTop: "20px", color: "gray" }}>
        Approval usually takes 24–48 hours.
      </p>
    </main>
  );
}
