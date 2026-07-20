@import url('https://fonts.googleapis.com/css2?family=Cairo:wght@300;400;500;600;700;800;900&family=Inter:wght@300;400;500;600;700;800&display=swap');

@tailwind base;
@tailwind components;
@tailwind utilities;

@layer base {
  html {
    scroll-behavior: smooth;
  }

  body {
    font-family: 'Cairo', 'Inter', system-ui, sans-serif;
    background-color: #ffffff;
    color: #102a43;
    overflow-x: hidden;
  }

  [dir='rtl'] {
    text-align: right;
  }

  ::selection {
    background-color: #ff6b1a;
    color: white;
  }

  /* Custom Scrollbar */
  ::-webkit-scrollbar {
    width: 10px;
  }
  ::-webkit-scrollbar-track {
    background: #0a1a2f;
  }
  ::-webkit-scrollbar-thumb {
    background: linear-gradient(180deg, #ff6b1a, #e55510);
    border-radius: 10px;
  }
  ::-webkit-scrollbar-thumb:hover {
    background: #ff8a4a;
  }
}

@layer components {
  .glass {
    background: rgba(255, 255, 255, 0.08);
    backdrop-filter: blur(16px);
    -webkit-backdrop-filter: blur(16px);
    border: 1px solid rgba(255, 255, 255, 0.12);
  }

  .glass-light {
    background: rgba(255, 255, 255, 0.7);
    backdrop-filter: blur(16px);
    -webkit-backdrop-filter: blur(16px);
    border: 1px solid rgba(255, 255, 255, 0.5);
  }

  .glass-nav {
    background: rgba(16, 42, 67, 0.65);
    backdrop-filter: blur(20px) saturate(180%);
    -webkit-backdrop-filter: blur(20px) saturate(180%);
    border-bottom: 1px solid rgba(255, 255, 255, 0.08);
  }

  .gradient-text {
    background: linear-gradient(135deg, #ff6b1a 0%, #ff8a4a 50%, #ff6b1a 100%);
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  .gradient-blue {
    background: linear-gradient(135deg, #102a43 0%, #1e3a8a 50%, #243b53 100%);
  }

  .hero-overlay {
    background: linear-gradient(
      90deg,
      rgba(10, 26, 47, 0.92) 0%,
      rgba(16, 42, 67, 0.85) 40%,
      rgba(16, 42, 67, 0.55) 70%,
      rgba(16, 42, 67, 0.3) 100%
    );
  }

  [dir='rtl'] .hero-overlay {
    background: linear-gradient(
      270deg,
      rgba(10, 26, 47, 0.92) 0%,
      rgba(16, 42, 67, 0.85) 40%,
      rgba(16, 42, 67, 0.55) 70%,
      rgba(16, 42, 67, 0.3) 100%
    );
  }

  .card-shadow {
    box-shadow: 0 10px 40px -10px rgba(16, 42, 67, 0.15);
  }

  .card-shadow-hover {
    transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  }
  .card-shadow-hover:hover {
    box-shadow: 0 25px 60px -15px rgba(16, 42, 67, 0.25);
    transform: translateY(-8px);
  }

  .btn-primary {
    background: linear-gradient(135deg, #ff6b1a, #e55510);
    color: white;
    padding: 0.875rem 2rem;
    border-radius: 9999px;
    font-weight: 700;
    transition: all 0.3s ease;
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
    box-shadow: 0 8px 24px -8px rgba(255, 107, 26, 0.5);
  }
  .btn-primary:hover {
    transform: translateY(-2px);
    box-shadow: 0 12px 32px -8px rgba(255, 107, 26, 0.7);
  }

  .btn-outline {
    background: rgba(255, 255, 255, 0.08);
    color: white;
    padding: 0.875rem 2rem;
    border-radius: 9999px;
    font-weight: 700;
    transition: all 0.3s ease;
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
    border: 1.5px solid rgba(255, 255, 255, 0.25);
  }
  .btn-outline:hover {
    background: rgba(255, 255, 255, 0.15);
    border-color: rgba(255, 255, 255, 0.5);
    transform: translateY(-2px);
  }

  .btn-whatsapp {
    background: linear-gradient(135deg, #25d366, #128c7e);
    color: white;
    padding: 0.875rem 2rem;
    border-radius: 9999px;
    font-weight: 700;
    transition: all 0.3s ease;
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
    box-shadow: 0 8px 24px -8px rgba(37, 211, 102, 0.5);
  }
  .btn-whatsapp:hover {
    transform: translateY(-2px);
    box-shadow: 0 12px 32px -8px rgba(37, 211, 102, 0.7);
  }

  .section-padding {
    padding-top: 6rem;
    padding-bottom: 6rem;
  }

  .text-balance {
    text-wrap: balance;
  }
}

@layer utilities {
  .animate-delay-100 { animation-delay: 0.1s; }
  .animate-delay-200 { animation-delay: 0.2s; }
  .animate-delay-300 { animation-delay: 0.3s; }
  .animate-delay-500 { animation-delay: 0.5s; }
  .animate-delay-700 { animation-delay: 0.7s; }

  .bg-grid {
    background-image: linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px),
      linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px);
    background-size: 50px 50px;
  }
}
