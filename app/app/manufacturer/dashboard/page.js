export default function ManufacturerDashboard() {
  return (
    <main style={{ padding: "24px", fontFamily: "Arial" }}>
      <h1>Manufacturer Dashboard</h1>

      <p style={{ color: "red", fontWeight: "bold" }}>
        ⛔ Access Restricted
      </p>

      <p>
        Your account is currently under review.
        <br />
        Product listing will unlock only after:
      </p>

      <ul>
        <li>Payment verification</li>
        <li>Admin approval</li>
      </ul>

      <p>
        If you have already submitted payment proof, please wait for admin
        confirmation.
      </p>
    </main>
  );
}
