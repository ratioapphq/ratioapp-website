// import Footer from "./Footer";
import Header from "@/components/Header";

export default function Layout({ children }) {
  return (
    <div>
      <Header />
      <main>{children}</main>
      {/* <Footer /> */}
    </div>
  );
}
