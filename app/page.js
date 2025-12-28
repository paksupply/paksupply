import Link from "next/link";

export default function Home() {
  return (
    <main style={{ padding: "20px", fontFamily: "Arial" }}>
      <h1>PakSupply.pk</h1>

      <p>
        Pakistan’s B2B FMCG visibility & order-generation platform.
      </p>

      <ul>
        <li>Direct Manufacturer Visibility</li>
        <li>Israel-Free Product Listings</li>
        <li>WhatsApp-Based Live Ordering</li>
        <li>Trusted by Shopkeepers Across Pakistan</li>
      </ul>

      <hr />

      <h2>For Manufacturers</h2>
      <p>
        List your FMCG products, get visibility, and receive real orders from
        shopkeepers.
      </p>

      <h2>For Shopkeepers</h2>
      <p>
        Browse verified manufacturers and place orders directly on WhatsApp.
      </p>

      <hr />

      <p>
        <Link href="/privacy-policy">Privacy Policy</Link> |{" "}
        <Link href="/manufacturer-contract">Manufacturer Contract</Link>
      </p>

      <p style={{ marginTop: "30px", fontSize: "14px", color: "gray" }}>
        © PakSupply.pk — Visibility, Trust & Growth
      </p>
    </main>
  );
}
