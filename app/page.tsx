import React from 'react';
import {
  Zap,
  Users,
  Target,
  TrendingUp,
  Globe,
  Lightbulb,
  Shield,
  BarChart3,
  Briefcase,
  Map,
  Twitter,
  Linkedin,
  Facebook,
  Instagram,
  Youtube,
  Send,
  ChevronDown,
  MapPin,
  Cpu,
  Calendar
} from 'lucide-react';
import Image from "next/image";

const StartupConnectLanding = () => {
  return (
    <div className="landing-page">
      {/* Navigation */}
      <nav className="navbar">
        <div className="container">
          <div className="nav-content">
            <div className="logo">
              <Image
                src="/logo3.png"
                alt="Startup Connect Logo"
                width={210}
                height={49}
              />
            </div>
            <ul className="nav-links">
              <li>About</li>
              <li>Portfolio</li>
              <li>Our Offering</li>
              <li className="dropdown">
                <span className="dropdown-label">
                  Global chapter
                  <ChevronDown size={14} />
                </span>
              </li>              <li>Team</li>
            </ul>
          </div>
        </div>
      </nav>

      <section className="hero">
        <div className="container">
          <div className="hero-grid">
            <div className="hero-content">
              <h1>Co-Creating the Future, One Startup at a Time</h1>
              <button className="cta-button">
                <span className="cta-text">Contact Us</span>
                <span className="cta-arrow">➤</span>
              </button>
            </div>
            <div className="hero-image">
              <div className="image-container">
                <Image
                  src="/group.webp"
                  alt="Startup Connect Logo"
                  fill
                  style={{ objectFit: "contain" }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Partner Logos */}
      <section className="partners">
        <div className="container">
          <p>Over 120+ Business Growing With Us</p>
          <div className="partner-logos">
            <div className="partner-logo">STRIPE</div>
            <div className="partner-logo">MICROSOFT</div>
            <div className="partner-logo">SCALE</div>
            <div className="partner-logo">THE MAKERS</div>
            <div className="partner-logo">ENVISION</div>
            <div className="partner-logo">QUANTUM</div>
            <div className="partner-logo">NEXUS</div>
          </div>
        </div>
      </section>

      {/*Buisness Growing */}
     <section className="story-section">
      <div className="story-container">
        <div className="story-grid">
          {/* Left Content */}
          <div className="story-left">
            <div className="story-header">
              <h3 className="story-label">OUR STORY</h3>
              <h1 className="story-title">
                From Founders to Force Multipliers
              </h1>
            </div>
            
            <p className="story-description">
              In a world accelerating toward disruption, innovation has become more than just a buzzword—it's the bedrock of progress. But great ideas, no matter how revolutionary, rarely succeed in isolation.
            </p>

            {/* Logo/Icon */}
            <div className="story-logo">
              <div className="dots-container">
                <Image
  src="/bitmap-copy.webp"
  alt="Stripe"
  width={150}
  height={80}
  style={{ objectFit: "contain" }}
/>
              </div>
            </div>
          </div>

          {/* Right Content - Programs */}
          <div className="programs-list">
            <div className="program-item">
              <div className="program-content">
                <div className="program-icon">
                  <MapPin size={32} />
                </div>
                <div className="program-text">
                  <h3 className="program-title">
                    INDIA LAUNCHPAD (FOR INTERNATIONAL STARTUPS)
                  </h3>
                  <p className="program-description">
                    Designed for startups looking to enter and scale in the Indian market.
                  </p>
                </div>
              </div>
            </div>

            <div className="program-item">
              <div className="program-content">
                <div className="program-icon">
                  <Globe size={32} />
                </div>
                <div className="program-text">
                  <h3 className="program-title">
                    GLOBAL SCALEUP (FOR INDIAN STARTUPS GOING GLOBAL)
                  </h3>
                  <p className="program-description">
                    Helping Indian innovators break into markets like Japan, UAE, Southeast Asia, and the US.
                  </p>
                </div>
              </div>
            </div>

            <div className="program-item">
              <div className="program-content">
                <div className="program-icon">
                  <Cpu size={32} />
                </div>
                <div className="program-text">
                  <h3 className="program-title">
                    DEEPTECH CATALYST
                  </h3>
                  <p className="program-description">
                    For AI, Blockchain, and Web3 startups needing high-touch tech + business support.
                  </p>
                </div>
              </div>
            </div>

            <div className="program-item">
              <div className="program-content">
                <div className="program-icon">
                  <Calendar size={32} />
                </div>
                <div className="program-text">
                  <h3 className="program-title">
                    INVESTOR READINESS & CAPITAL CONNECT
                  </h3>
                  <p className="program-description">
                    For early and growth-stage startups preparing to raise capital.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="story-cta">
          <button className="cta-button2">
            That's Where StartupConnect Global Comes In
          </button>
        </div>
      </div>
    </section>

      {/* Philosophy Cards */}
      <section className="philosophy">
        <div className="container">
          <h2>We are Co-Founders in Spirit, Strategists by Design, and Global Catalysts by Conviction.</h2>
          <p className="subtitle">Our approach combines hands-on partnership with strategic insight to help startups achieve breakthrough success.</p>

          <div className="philosophy-cards">
            <div className="philosophy-card">
              <Shield size={48} />
              <h3>Our Philosophy is Simple</h3>
              <p>We believe in building alongside founders, sharing both risks and rewards as true partners in growth.</p>
            </div>
            <div className="philosophy-card">
              <Lightbulb size={48} />
              <h3>Our Mission</h3>
              <p>To empower the next generation of entrepreneurs with capital, expertise, and connections.</p>
            </div>
            <div className="philosophy-card">
              <BarChart3 size={48} />
              <h3>What We Do Differently</h3>
              <p>We provide more than funding—we offer strategic guidance, operational support, and long-term partnership.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Playbook Section */}
      <section className="playbook">
        <div className="container">
          <div className="playbook-content">
            <div className="playbook-text">
              <span className="label">OUR SUPPORT EXTENDS ACROSS FOUR "PHASES" IN OUR FRAMEWORK (A ROADMAP VS. PLAYBOOK) - WE BUILD AND BACK FOUNDERS THROUGH EACH STAGE.</span>

              <div className="stage-buttons">
                <button className="stage-btn active">Pre-Accelerator</button>
                <button className="stage-btn">Scaleup cohorts</button>
                <button className="stage-btn">Accelerate</button>
                <button className="stage-btn">Late Stage</button>
              </div>
            </div>
            <div className="playbook-image">
              <div className="laptop-mockup">
                <Briefcase size={60} color="#00d9ff" />
              </div>
            </div>
          </div>
          <h2>No more theoretical playbooks.</h2>
          <p>We provide real, actionable strategies based on what actually works. Our framework is built from decades of collective experience building and scaling successful companies.</p>
          <a href="#" className="learn-more">See how these work in all of StartupConnect →</a>
        </div>
      </section>

      {/* Future Section */}
      <section className="future">
        <div className="container">
          <span className="section-tag">IT'S A FOUNDERS APPROACH</span>
          <h2>The Future is Intelligent and Decentralized.</h2>

          <div className="future-cards">
            <div className="future-card">
              <div className="card-gradient gradient-1"></div>
              <h3>Artificial & Modular Decentralization</h3>
              <p>Building next-generation infrastructure for the decentralized web</p>
            </div>
            <div className="future-card">
              <div className="card-gradient gradient-2"></div>
              <h3>Designing Imaginative User Experiences</h3>
              <p>Creating intuitive interfaces that make complex technology accessible</p>
            </div>
            <div className="future-card">
              <div className="card-gradient gradient-3"></div>
              <h3>Crypto, Tech, Web3 and Beyond</h3>
              <p>Investing in the future of digital economies and decentralized systems</p>
            </div>
          </div>
        </div>
      </section>

      {/* Capital Section */}
      <section className="capital">
        <div className="container">
          <span className="section-tag">THE VENTURE SIDE</span>
          <h2>Capital is Not Just About Funding—It's About Alignment.</h2>

          <div className="capital-cards">
            <div className="capital-card card-cyan">
              <h3>Angel Investors and Accelerators</h3>
              <p>Early-stage funding and mentorship programs</p>
            </div>
            <div className="capital-card card-purple">
              <h3>Family Offices and HNIs</h3>
              <p>Strategic capital from high-net-worth individuals</p>
            </div>
            <div className="capital-card card-magenta">
              <h3>Strategic VCs and Corporate Investors</h3>
              <p>Growth capital with strategic value</p>
            </div>
          </div>

          <p className="capital-description">
            We're more focused on "who you raise from" (and why) over "how much" was raised. We believe the right investors bring not just capital but strategic value, industry connections, and long-term vision alignment.
          </p>
        </div>
      </section>

      {/* Strategic Gateway */}
      <section className="strategic">
        <div className="container">
          <span className="section-tag">PROGRAMS AND NETWORK</span>
          <h2>India As A Strategic Gateway</h2>

          <div className="strategic-grid">
            <div className="strategic-card">
              <h3>Regulatory and Legal Framework</h3>
              <div className="card-bg"></div>
            </div>
            <div className="strategic-card">
              <h3>Cultural Market Access</h3>
              <div className="card-bg"></div>
            </div>
            <div className="strategic-card">
              <h3>Scalable Business & Technology</h3>
              <div className="card-bg"></div>
            </div>
            <div className="strategic-card">
              <h3>Investor-Conscious Exits and Scaling</h3>
              <div className="card-bg"></div>
            </div>
          </div>

          <p className="strategic-description">
            We don't just connect you with India. We help you succeed in India. Our deep understanding of the Indian market, regulatory environment, and cultural nuances gives our portfolio companies a significant advantage.
          </p>
        </div>
      </section>

      {/* Ecosystem Section */}
      <section className="ecosystem">
        <div className="container">
          <h2>The StartupConnect Global Ecosystem</h2>
          <p>We've built a comprehensive support system that spans the entire startup journey, from ideation to exit.</p>

          <div className="ecosystem-visual">
            <div className="gear-system">
              <div className="gear gear-1"><Zap size={32} /></div>
              <div className="gear gear-2"><Target size={24} /></div>
              <div className="gear gear-3"><Globe size={28} /></div>
              <div className="gear gear-4"><Users size={26} /></div>
              <div className="gear gear-5"><TrendingUp size={30} /></div>
            </div>
          </div>

          <p className="ecosystem-subtitle">
            Whether you're a pre-seed founder or a Series-B startup, we become your gateway to global opportunity.
          </p>
        </div>
      </section>

      {/* Global Reach */}
      <section className="global-reach">
        <div className="container">
          <span className="section-tag">DESIGNED FOR SCALE AND BUILT WITH LOVE</span>

          <div className="stats-grid">
            <div className="stat-item">
              <h3>40+</h3>
              <p>Portfolio companies</p>
            </div>
            <div className="stat-item">
              <h3>25+</h3>
              <p>Countries represented</p>
            </div>
            <div className="stat-item">
              <h3>$2+</h3>
              <p>Billion in follow-on funding</p>
            </div>
            <div className="stat-item">
              <h3>15+</h3>
              <p>Successful exits</p>
            </div>
            <div className="stat-item">
              <h3>$25 Million+</h3>
              <p>Total capital invested</p>
            </div>
            <div className="map-visual">
              <Map size={120} color="#00d9ff" />
              <p className="map-label">Global Investment Hubs</p>
              <p className="map-sublabel">India, Kenya, Singapore, UAE, USA</p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="team">
        <div className="container">
          <div className="team-content">
            <div className="team-image">
              <div className="team-photo">
                <Users size={80} color="#00d9ff" />
              </div>
            </div>
            <div className="team-text">
              <span className="label">FOR STARTUPS GLOBALLY</span>
              <h2>We believe in a future where startups transcend borders, barriers, and biases—where geography and impact becomes the true metric of success.</h2>
              <p>Our team brings together diverse perspectives and experiences from across the global startup ecosystem.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section className="ecosystem-partners">
        <div className="container">
          <span className="section-tag">ECOSYSTEM AND OUR PARTNERS</span>
          <h2>Igniting Dreams with Elite Startups and Partnerships</h2>

          <div className="partner-grid">
            <div className="partner-item">GROWTH</div>
            <div className="partner-item">SCALE X</div>
            <div className="partner-item">VENTURE LABS</div>
            <div className="partner-item">FOUNDERS HUB</div>
            <div className="partner-item">CAPITAL PARTNERS</div>
            <div className="partner-item">NEXUS VENTURES</div>
            <div className="partner-item">GLOBAL FUND</div>
            <div className="partner-item">ENTERPRISE CO</div>
            <div className="partner-item">TECH VENTURES</div>
            <div className="partner-item">INNOVATION LABS</div>
            <div className="partner-item">FUTURE CAPITAL</div>
            <div className="partner-item">STARTUP HQ</div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-brand">
              <div className="footer-logo">
                <Zap size={32} />
                <span>StartupConnect Global</span>
              </div>
              <p>© 2025 StartupConnect Global. All rights reserved.</p>
            </div>

            <div className="footer-links">
              <div className="footer-column">
                <h4>Navigation</h4>
                <ul>
                  <li>Why SC</li>
                  <li>Portfolios</li>
                  <li>Resources</li>
                  <li>Contact</li>
                </ul>
              </div>

              <div className="footer-column">
                <h4>Information</h4>
                <ul>
                  <li>About Us</li>
                  <li>Careers</li>
                  <li>Press</li>
                  <li>Blog</li>
                </ul>
              </div>

              <div className="footer-column">
                <h4>Connect</h4>
                <div className="social-icons">
                  <Twitter size={20} />
                  <Linkedin size={20} />
                  <Facebook size={20} />
                  <Instagram size={20} />
                  <Youtube size={20} />
                  <Send size={20} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default StartupConnectLanding;

