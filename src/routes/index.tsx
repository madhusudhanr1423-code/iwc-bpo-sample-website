import { createFileRoute } from "@tanstack/react-router";
import {
  ArrowRight,
  Bot,
  Check,
  ChevronDown,
  CircleDollarSign,
  Headphones,
  Menu,
  Network,
  PhoneCall,
  Quote,
  Search,
  Send,
  ShieldCheck,
  Sparkles,
  Users,
} from "lucide-react";
import heroImage from "../assets/hero.webp";
import aboutImage from "../assets/about.jpg";
import aboutDetail from "../assets/about-detail.png";
import servicesImage from "../assets/services.webp";
import solutionsImage from "../assets/solutions.webp";
import technologyImage from "../assets/technology.webp";
import blogImage from "../assets/blog.webp";
import footerImage from "../assets/footer.webp";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "IWC BPO | AI Driven Call Center & BPO Solutions" },
      { name: "description", content: "AI-powered call center and BPO solutions that improve customer satisfaction and streamline operations." },
      { property: "og:title", content: "IWC BPO | AI Driven Call Center & BPO Solutions" },
      { property: "og:description", content: "AI-powered call center and BPO solutions for growing businesses." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const services = [
  { icon: Headphones, title: "Customer Support", text: "Deliver exceptional customer experiences with our 24/7 multilingual support teams, handling calls, emails, and live chats." },
  { icon: Network, title: "IT Outsourcing", text: "Leverage our expertise in IT infrastructure management, software development, and technical support to optimize your operations." },
  { icon: CircleDollarSign, title: "Finance & Accounting", text: "Streamline your financial processes with our bookkeeping, payroll, tax preparation, and accounts payable/receivable services." },
  { icon: Users, title: "(HR) Outsourcing", text: "From talent acquisition to payroll management, we handle your HR functions so you can focus on growing your business." },
];

const cases = ["Healthcare", "Retail & E-Commerce", "Technology", "Finance", "Real Estate", "IT & SaaS"];
const technologies = [
  [Sparkles, "Artificial Intelligence"], [Bot, "Robotic Process Automation"],
  [Users, "Customer Relationship Management"], [Network, "Data Analytics"], [ShieldCheck, "Cybersecurity"],
] as const;

const plans = [
  { name: "Per-Hour Plan", desc: "Ideal for businesses with fluctuating workloads, pay only for the hours you use", price: "$19/per hour", points: ["Flexible and scalable", "Transparent billing", "No long-term commitment"] },
  { name: "Per-Seat Plan", desc: "Perfect for businesses with consistent needs, pay a fixed rate per agent or seat.", price: "$39/per agent/month", points: ["Predictable costs", "Dedicated resources", "Comprehensive support"] },
  { name: "Custom Quotes", desc: "Tailored solutions designed to meet your specific business requirements & budget", price: "Based on your requirements", points: ["Personalized service", "Flexible terms", "Comprehensive consultation"] },
];

function ActionLink({ children, blue = false }: { children: React.ReactNode; blue?: boolean }) {
  return <a href="#contact" className={blue ? "button button-blue" : "button button-dark"}>{children}<ArrowRight size={17} /></a>;
}

function Index() {
  return (
    <main className="overflow-hidden">
      <header className="site-header">
        <a href="#top" className="brand" aria-label="IWC BPO home"><span className="brand-mark"><i /><i /></span>IWC BPO</a>
        <nav aria-label="Main navigation">
          {["Home", "Services", "Projects", "Pages", "Shop", "Blog"].map((item) => <a key={item} href={`#${item.toLowerCase()}`}>{item}<ChevronDown size={12} /></a>)}
          <a href="#contact">Contact Us</a>
        </nav>
        <div className="header-actions"><Search size={21} /><ActionLink>Get Started</ActionLink><Menu size={22} /></div>
      </header>

      <section id="top" className="hero">
        <div className="hero-inner">
          <div className="hero-copy">
            <h1>Your Trusted<br />Call Center &<br />BPO Partner</h1>
            <p>With 20+ years of expertise, we provide tailored solutions to enhance customer satisfaction and streamline operations.</p>
            <ActionLink blue>Schedule a Consultation</ActionLink>
          </div>
          <div className="hero-photo"><img src={heroImage} alt="Customer support professional wearing a headset" /></div>
          <div className="hero-stats"><div><strong>20+</strong><span>Years Experience</span></div><div><strong>10M+</strong><span>Calls Handled Annually</span></div></div>
        </div>
        <div className="brand-row"><b>Trusted By Growing<br />Businesses Worldwide</b></div>
      </section>

      <section className="section about" id="pages">
        <div className="intro-title"><h2>We are dedicated to delivering exceptional call center and BPO services that empower business to enhance customer satisfaction</h2></div>
        <div className="about-grid">
          <img className="media-wide" src={aboutImage} alt="Support team working together" />
          <div className="about-copy"><p>With over a decade of experience, we have served clients across diverse industries, including healthcare, retail, finance, and technology. Our team of certified professionals is equipped to handle complex customer interactions and back-office operations with precision and care.</p><ActionLink>Learn More</ActionLink></div>
          <img className="media-detail" src={aboutDetail} alt="Customer service representative at work" />
          <ul className="check-list">{["20+ Years of industry experience", "Global reach with multilingual support", "Certified professionals and cutting-edge technology", "24/7 Customer support for uninterrupted service"].map(x => <li key={x}><span><Check size={16} /></span>{x}</li>)}</ul>
        </div>
      </section>

      <section className="section services" id="services">
        <div className="services-grid">
          <img src={servicesImage} alt="Call center team" />
          <div><h2>Comprehensive BPO Services tailored to your needs</h2><div className="service-list">{services.map(({ icon: Icon, title, text }) => <article key={title}><Icon /><div><h3>{title}</h3><p>{text}</p></div></article>)}</div><a href="#contact" className="text-link">Browse All Services <ArrowRight size={18} /></a></div>
        </div>
      </section>

      <section className="section industries">
        <h2>Empowering diverse industries with tailored BPO solutions for growth and efficiency</h2>
        <div className="industry-grid"><img src={solutionsImage} alt="Business professionals discussing solutions" /><div className="industry-list">{["Healthcare", "Retail & E-Commerce", "Technology", "Finance & Banking", "Telecommunications", "Travel & Hospitality", "Manufacturing", "Education"].map(x => <div key={x}><span>*</span>{x}</div>)}</div></div>
        <div className="inline-cta"><p>Need custom solutions for your industry</p><ActionLink>Let’s Talk</ActionLink></div>
      </section>

      <section className="section benefits">
        <h2>Unlock your business potential with reliable, scalable, and cost-effective BPO solutions</h2>
        <div className="benefit-grid">{[[CircleDollarSign,"Cost Efficiency","Cut expenses while maintaining excellence with our cost-efficient BPO services."],[PhoneCall,"24/7 Support","Deliver uninterrupted service with our 24/7 support, always available when you need it."],[Users,"Industry Expertise","Benefit from our specialized expertise to meet your industry's unique challenges and goals."],[Network,"Advanced Technology","Stay ahead with cutting-edge technology that powers efficient and innovative BPO solutions."]].map(([Icon,title,text]) => { const I = Icon as typeof CircleDollarSign; return <article key={title as string}><I /><h3>{title as string}</h3><p>{text as string}</p></article>})}</div>
      </section>

      <section className="section case-studies" id="projects">
        <h2>IWC BPO has helped businesses improve customer experience, increase efficiency, and drive growth with our AI-driven BPO solutions</h2>
        <div className="case-grid">{cases.map((name, i) => <article key={name}><span className="case-number">{String(i + 1).padStart(2, "0")}</span><p className="case-type">{name}</p><h3>{name}</h3><ul><li><b>Challenge:</b> Facing challenges with scaling customer support during peak seasons</li><li><b>Solution:</b> Deployed our 24/7 multilingual customer support team to handle increased demand.</li><li><b>Results:</b> Achieved a 30% increase in customer satisfaction and reduced response time by 50%.</li></ul><a href="#contact">Read Full Case Study <ArrowRight size={16} /></a></article>)}</div>
        <div className="inline-cta dark-cta"><p>Need custom solutions for your industry</p><a href="#contact" className="button button-light">Let’s Talk <ArrowRight size={17} /></a></div>
      </section>

      <section className="section testimonial">
        <Quote size={55} /><blockquote>“Partnering with IWC BPO has been one of the best decisions for our business. Their AI-driven BPO services are efficient, reliable, and tailored to our needs, helping us achieve remarkable results. We couldn’t be happier with their support!”</blockquote><b>Placeholder Client</b><span>CEO & Founder</span>
      </section>

      <section className="section technology">
        <h2>Empowering your business with cutting-edge technology and innovative solutions for smarter, faster, and more efficient operations</h2>
        <div className="technology-layout"><div className="technology-list">{technologies.map(([Icon,title]) => <article key={title}><Icon /><div><h3>{title}</h3><p>Streamline repetitive tasks and improve accuracy with our advanced RPA solutions.</p></div></article>)}</div><img src={technologyImage} alt="Modern customer support technology" /></div>
      </section>

      <section className="section pricing" id="shop">
        <h2>Choose your plan</h2><p className="section-lead">We offer scalable, cost-effective pricing tailored to your business needs. Choose from our hourly, per-seat, or custom plans to get the best value for your operations.</p>
        <div className="pricing-grid">{plans.map(plan => <article key={plan.name}><div className="price-icon"><Sparkles /></div><h3>{plan.name}</h3><p>{plan.desc}</p><h4>{plan.price}</h4><ul>{plan.points.map(x => <li key={x}><Check size={16} />{x}</li>)}</ul><ActionLink blue>Get Started Now</ActionLink></article>)}</div>
      </section>

      <section className="section contact" id="contact">
        <div className="contact-wrap"><div><h2>Get in touch with us today. Were here to help!</h2><form><label>Name<input aria-label="Name" /></label><label>Email<input type="email" aria-label="Email" /></label><label>Phone<input type="tel" aria-label="Phone" /></label><label>Message<textarea aria-label="Message" rows={3} /></label><button type="submit" aria-label="Send message"><Send /></button></form></div><img src={footerImage} alt="Customer support specialist" /></div>
      </section>

      <section className="section insights" id="blog">
        <h2>Stay ahead in the world of Call Center & BPO services with expert insights, industry trends, and success stories.</h2>
        <div className="blog-grid"><article className="featured-blog"><img src={blogImage} alt="AI transforming customer support" /><div><span>BPOs Services · Read Time: 1 minute</span><small>May 28, 2025</small><h3>How AI is transforming customer support</h3><p>Discover how AI-driven chatbots and automation are revolutionizing customer service efficiency.</p><a href="#">Learn More <ArrowRight size={16} /></a></div></article><div className="blog-list">{["How we protect your sensitive information", "How to choose the right BPO partner"].map(x => <article key={x}><span>BPOs Services</span><small>May 28, 2025</small><h3>{x}</h3></article>)}</div></div>
      </section>

      <footer><div className="footer-cta"><div><h2>Let’s Talk</h2><p>Let’s get started right now</p></div><a href="#contact" className="circle-button" aria-label="Contact us"><ArrowRight /></a></div><div className="footer-grid"><div className="brand-footer"><a href="#top" className="brand light"><span className="brand-mark"><i /><i /></span>IWC BPO</a><p>AI Driven Solutions for smarter, faster, and more reliable call center and BPO operations.</p></div><div><h3>Contact Us</h3><p>Address to be added</p><a href="mailto:info@iwcbpo.com">info@iwcbpo.com</a><a href="tel:+10000000000">+1 000 000 0000</a></div><div><h3>Useful Links</h3><a href="#services">Services</a><a href="#projects">Projects</a><a href="#shop">Pricing</a></div><div><h3>Quick Links</h3><a href="#pages">About Us</a><a href="#blog">Blog</a><a href="#contact">Contact Us</a></div></div><div className="copyright">IWC BPO — All Rights Reserved</div></footer>
    </main>
  );
}