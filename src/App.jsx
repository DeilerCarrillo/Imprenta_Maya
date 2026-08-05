import { Navigate, Route, Routes } from "react-router";
import Layout from "./components/layout/Layout.jsx";
import ScrollToTop from "./components/ScrollToTop.jsx";
import HomePage from "./pages/HomePage.jsx";
import AboutPage from "./pages/AboutPage.jsx";
import ServicesPage from "./pages/ServicesPage.jsx";
import CatalogPage from "./pages/CatalogPage.jsx";
import GalleryPage from "./pages/GalleryPage.jsx";
import QuotePage from "./pages/QuotePage.jsx";
import ContactPage from "./pages/ContactPage.jsx";
import NotFoundPage from "./pages/NotFoundPage.jsx";

function App() {
  return (
    <>
      <ScrollToTop />

      <Routes>
    <Route element={<Layout />}>
    <Route index element={<Navigate to="/inicio" replace />} />
    <Route path="/inicio" element={<HomePage />} />
    <Route path="/nosotros" element={<AboutPage />} />
    <Route path="/servicios" element={<ServicesPage />} />
    <Route path="/catalogo" element={<CatalogPage />} />
    <Route path="/galeria" element={<GalleryPage />} />
    <Route path="/cotizacion" element={<QuotePage />} />
    <Route path="/contacto" element={<ContactPage />} />
    </Route>
  <Route path="*" element={<NotFoundPage />} />
</Routes>
    </>
  );
}

export default App;
