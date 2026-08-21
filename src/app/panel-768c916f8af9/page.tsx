import type { Metadata } from "next";
import AdminPanelClient from "./AdminPanelClient";

// Not linked anywhere in the site's nav/footer/sitemap. This only keeps
// search engines from indexing it if the URL ever leaks — it does not make
// the page itself secure (the worker's password check does that).
export const metadata: Metadata = {
  title: "Panel",
  robots: { index: false, follow: false, nocache: true },
};

export default function AdminPage() {
  return <AdminPanelClient />;
}
