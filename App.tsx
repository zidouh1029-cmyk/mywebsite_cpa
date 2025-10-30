
import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import BookSection from './components/BookSection';
import ReviewsSection from './components/ReviewsSection';
import Footer from './components/Footer';
import { BOOK_CATEGORIES, TESTIMONIALS } from './constants';

const GoldDivider: React.FC = () => (
  <div className="h-px bg-gradient-to-r from-transparent via-primary to-transparent" />
);

// Page Layout Component for legal/about pages
const PageLayout: React.FC<{ title: string; onBack: () => void; children: React.ReactNode }> = ({ title, onBack, children }) => (
  <div className="bg-background min-h-screen text-text-primary font-roboto">
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-24 sm:py-32">
      <button onClick={onBack} className="text-primary hover:text-accent mb-8 inline-flex items-center transition-colors duration-200">
        <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path></svg>
        Back to Home
      </button>
      <h1 className="text-4xl sm:text-5xl font-poppins font-bold mb-8 bg-gradient-to-r from-primary to-accent [-webkit-background-clip:text] [background-clip:text] text-transparent">
        {title}
      </h1>
      <div className="space-y-6 text-text-secondary leading-relaxed prose prose-invert max-w-none">
        {children}
      </div>
    </div>
  </div>
);

// Content Components
const PrivacyPolicyPage: React.FC<{ onBack: () => void }> = ({ onBack }) => (
  <PageLayout title="Privacy Policy" onBack={onBack}>
    <p className="text-sm">Last Updated: {new Date().toLocaleDateString()}</p>
    <h2 className="text-2xl font-poppins font-semibold text-text-primary pt-4 !mt-6">1. Introduction</h2>
    <p>Welcome to BestBooks.Reviews. We are committed to protecting your privacy. This Privacy Policy explains what information we collect, how we use it, and your rights in relation to it. Since our website's primary function is to provide information and offer free downloads via third-party content lockers, our data collection is minimal.</p>
    
    <h2 className="text-2xl font-poppins font-semibold text-text-primary pt-4 !mt-6">2. Information We Collect</h2>
    <p>We do not require user registration and do not collect any personally identifiable information (PII) such as your name, email address, or phone number directly on our website.</p>
    
    <h2 className="text-2xl font-poppins font-semibold text-text-primary pt-4 !mt-6">3. Third-Party Services (Content Lockers)</h2>
    <p>To access the book downloads, you may be required to interact with a third-party content locker. These services are not operated by us. We advise you to review the Privacy Policy of these third-party websites. We have no control over and assume no responsibility for the content, privacy policies, or practices of any third-party sites or services.</p>

    <h2 className="text-2xl font-poppins font-semibold text-text-primary pt-4 !mt-6">4. Cookies and Tracking Technologies</h2>
    <p>Our website does not use cookies for tracking or collecting personal information. Any cookies used are for essential site functionality only. Third-party content lockers may use their own cookies and tracking technologies, which are governed by their respective privacy policies.</p>

    <h2 className="text-2xl font-poppins font-semibold text-text-primary pt-4 !mt-6">5. Changes to This Privacy Policy</h2>
    <p>We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page. You are advised to review this Privacy Policy periodically for any changes.</p>

    <h2 className="text-2xl font-poppins font-semibold text-text-primary pt-4 !mt-6">6. Contact Us</h2>
    <p>If you have any questions about this Privacy Policy, please contact us at support@bestbooks.reviews.</p>
  </PageLayout>
);

const DisclaimerPage: React.FC<{ onBack: () => void }> = ({ onBack }) => (
    <PageLayout title="Disclaimer" onBack={onBack}>
        <p className="text-sm">Last Updated: {new Date().toLocaleDateString()}</p>
        <p>The information provided by BestBooks.Reviews ("we," "us," or "our") on this website is for general informational purposes only. All information on the site is provided in good faith, however, we make no representation or warranty of any kind, express or implied, regarding the accuracy, adequacy, validity, reliability, availability, or completeness of any information on the site.</p>
        
        <h2 className="text-2xl font-poppins font-semibold text-text-primary pt-4 !mt-6">No Professional Advice</h2>
        <p>The information on this website is not intended as, and shall not be understood or construed as, professional financial, legal, or any other professional advice. The content is for educational purposes only. You should consult with a professional before making any financial, legal, or other decisions.</p>

        <h2 className="text-2xl font-poppins font-semibold text-text-primary pt-4 !mt-6">External Links Disclaimer</h2>
        <p>The site may contain links to other websites or content belonging to or originating from third parties. Such external links are not investigated, monitored, or checked for accuracy, adequacy, validity, reliability, availability, or completeness by us. We do not warrant, endorse, guarantee, or assume responsibility for the accuracy or reliability of any information offered by third-party websites linked through the site.</p>

        <h2 className="text-2xl font-poppins font-semibold text-text-primary pt-4 !mt-6">Errors and Omissions Disclaimer</h2>
        <p>While we have made every attempt to ensure that the information contained in this site has been obtained from reliable sources, BestBooks.Reviews is not responsible for any errors or omissions or for the results obtained from the use of this information.</p>
    </PageLayout>
);

const DMCAPage: React.FC<{ onBack: () => void }> = ({ onBack }) => (
    <PageLayout title="DMCA Policy" onBack={onBack}>
        <p>BestBooks.Reviews respects the intellectual property rights of others and expects its users to do the same. In accordance with the Digital Millennium Copyright Act (DMCA), we will respond promptly to notices of alleged copyright infringement that are reported to our Designated Copyright Agent.</p>

        <h2 className="text-2xl font-poppins font-semibold text-text-primary pt-4 !mt-6">Notification of Copyright Infringement</h2>
        <p>If you are a copyright owner or an agent thereof and believe that any content on our site infringes upon your copyright, you may submit a notification pursuant to the DMCA by providing our Copyright Agent with the following information in writing:</p>
        <ul className="list-disc pl-6 space-y-2">
            <li>A physical or electronic signature of a person authorized to act on behalf of the owner of an exclusive right that is allegedly infringed.</li>
            <li>Identification of the copyrighted work claimed to have been infringed.</li>
            <li>Identification of the material that is claimed to be infringing and where it is located on the site.</li>
            <li>Information reasonably sufficient to permit us to contact you, such as an address, telephone number, and, if available, an email address.</li>
            <li>A statement that you have a good faith belief that use of the material in the manner complained of is not authorized by the copyright owner, its agent, or the law.</li>
            <li>A statement that the information in the notification is accurate, and under penalty of perjury, that you are authorized to act on behalf of the owner of an exclusive right that is allegedly infringed.</li>
        </ul>

        <h2 className="text-2xl font-poppins font-semibold text-text-primary pt-4 !mt-6">Designated Copyright Agent</h2>
        <p>Please send all infringement notices to our Designated Copyright Agent at:</p>
        <p>Email: dmca@bestbooks.reviews</p>
    </PageLayout>
);

const AboutPage: React.FC<{ onBack: () => void }> = ({ onBack }) => (
    <PageLayout title="About Us" onBack={onBack}>
        <h2 className="text-2xl font-poppins font-semibold text-text-primary pt-4 !mt-6">Our Mission</h2>
        <p>At BestBooks.Reviews, our mission is to empower individuals on their journey to success by providing free access to the world's most transformative literature. We believe that the right book can change a life, build a fortune, and shape a mindset capable of achieving anything.</p>

        <h2 className="text-2xl font-poppins font-semibold text-text-primary pt-4 !mt-6">What We Offer</h2>
        <p>We curate a highly selective collection of books that have been instrumental in the success of entrepreneurs, leaders, and high-achievers worldwide. From developing a millionaire mindset and mastering productivity to understanding the psychology of wealth, our library is designed to provide the foundational knowledge for personal and professional growth.</p>

        <h2 className="text-2xl font-poppins font-semibold text-text-primary pt-4 !mt-6">Why It's Free</h2>
        <p>Knowledge should be accessible to everyone, regardless of their financial circumstances. We are passionate about leveling the playing field and providing the tools for self-development to anyone with the ambition to learn. Our platform is dedicated to breaking down barriers and fostering a community of driven, successful individuals.</p>

        <h2 className="text-2xl font-poppins font-semibold text-text-primary pt-4 !mt-6">Our Promise</h2>
        <p>We are committed to maintaining a high-quality, curated collection of impactful books. We continuously seek out literature that provides real-world value and actionable strategies for success. Join us, explore our collection, and start building your millionaire mindset today.</p>
    </PageLayout>
);


function App() {
  const [page, setPage] = useState('home');

  useEffect(() => {
    if (page === 'home') {
      const categoriesSection = document.getElementById('categories');
      if (categoriesSection) {
        const timer = setTimeout(() => {
          const header = document.querySelector('nav');
          const headerHeight = header ? header.offsetHeight : 0;
          const elementPosition = categoriesSection.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - headerHeight;

          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth',
          });
        }, 500);

        return () => clearTimeout(timer);
      }
    }
  }, [page]);

  const navigateTo = (pageName: string) => {
    setPage(pageName);
    window.scrollTo(0, 0);
  };
  
  useEffect(() => {
    if (page === 'home') {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add('animate-fade-in');
              observer.unobserve(entry.target);
            }
          });
        },
        {
          threshold: 0.1,
        }
      );

      const elementsToAnimate = document.querySelectorAll('.animate-on-scroll');
      elementsToAnimate.forEach((el) => observer.observe(el));
      
      return () => {
        elementsToAnimate.forEach((el) => {
          if (el) observer.unobserve(el);
        });
      };
    }
  }, [page]);
  
  const renderPage = () => {
    switch (page) {
      case 'privacy':
        return <PrivacyPolicyPage onBack={() => navigateTo('home')} />;
      case 'disclaimer':
        return <DisclaimerPage onBack={() => navigateTo('home')} />;
      case 'dmca':
        return <DMCAPage onBack={() => navigateTo('home')} />;
      case 'about':
        return <AboutPage onBack={() => navigateTo('home')} />;
      case 'home':
      default:
        return (
          <>
            <Header navigateTo={navigateTo} />
            <main>
              <Hero />
              <GoldDivider />
              <section id="books" className="pt-12 pb-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                  <div className="text-center mb-16">
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-poppins font-bold mb-6">
                      <span className="bg-gradient-to-r from-primary to-accent [-webkit-background-clip:text] [background-clip:text] text-transparent">Curated Collection</span> of Success Literature
                    </h2>
                    <p className="text-lg text-text-secondary max-w-3xl mx-auto">
                      Each book in our collection has been carefully selected based on its impact on successful entrepreneurs and business leaders worldwide.
                    </p>
                  </div>
                  
                  <div id="categories" className="space-y-20">
                    {BOOK_CATEGORIES.map((category, index) => (
                      <React.Fragment key={category.title}>
                        <BookSection 
                          title={category.title} 
                          emoji={category.emoji} 
                          books={category.books} 
                        />
                        {index < BOOK_CATEGORIES.length - 1 && <GoldDivider />}
                      </React.Fragment>
                    ))}
                  </div>
                </div>
              </section>
              <GoldDivider />
              <ReviewsSection testimonials={TESTIMONIALS} />
            </main>
            <Footer navigateTo={navigateTo}/>
          </>
        );
    }
  };

  return <>{renderPage()}</>;
}

export default App;
