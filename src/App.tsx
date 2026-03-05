/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import FeatureTech from './components/FeatureTech';
import FeatureCommercial from './components/FeatureCommercial';
import Advantages from './components/Advantages';
import Workflow from './components/Workflow';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import CTA from './components/CTA';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900 selection:bg-blue-200 selection:text-blue-900">
      <Navbar />
      <main>
        <Hero />
        <FeatureTech />
        <FeatureCommercial />
        <Advantages />
        <Workflow />
        <Testimonials />
        <FAQ />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}
