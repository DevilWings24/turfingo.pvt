"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

declare global {
  interface Window {
    Razorpay: any;
  }
}

export default function RegistrationForm() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [showPayment, setShowPayment] = useState(false);
  const [paymentError, setPaymentError] = useState<string | null>(null);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    dob: "",
    university: "",
    position: "", // single position only
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    if (!showPayment) return;

    let cancelled = false;

    const markReady = () => {
      if (cancelled) return;
      setLoading(false);
      setPaymentError(null);
    };

    const markError = () => {
      if (cancelled) return;
      setLoading(false);
      setPaymentError(
        "Unable to load the payment button. Please use the direct payment link below."
      );
    };

    const initEmbed = () => {
      const rzp = (window as any).__rzp__;
      if (rzp && typeof rzp.init === "function") {
        rzp.init();
        markReady();
      } else {
        markError();
      }
    };

    try {
      const existing = document.getElementById(
        "razorpay-embed-btn-js"
      ) as HTMLScriptElement | null;

      if (!existing) {
        const script = document.createElement("script");
        script.defer = true;
        script.id = "razorpay-embed-btn-js";
        script.src = "https://cdn.razorpay.com/static/embed_btn/bundle.js";
        script.onload = initEmbed;
        script.onerror = markError;
        document.body.appendChild(script);
      } else {
        initEmbed();
      }
    } catch (error) {
      markError();
      console.error("Payment embed load failed:", error);
    }

    return () => {
      cancelled = true;
    };
  }, [showPayment]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setPaymentError(null);

    try {
      setShowPayment(true);
    } catch (err: any) {
      setPaymentError(err.message || "Something went wrong. Please try again.");
      console.error(err);
    } finally {
      if (!showPayment) {
        setLoading(false);
      }
    }
  };

  return (
    <div style={styles.pageWrapper}>
      {/* Background gradient */}
      <div style={styles.bgGradient}></div>

      {/* Back button */}
      <button 
        onClick={() => router.push('/')} 
        style={styles.backButton}
        onMouseEnter={(e) => {
          e.currentTarget.style.backgroundColor = "#f5f5f5";
          e.currentTarget.style.borderColor = "#2e7d32";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.backgroundColor = "#ffffff";
          e.currentTarget.style.borderColor = "#e0e0e0";
        }}
      >
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" style={{ marginRight: "8px" }}>
          <path d="M10 12L6 8L10 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
        Back
      </button>

      {/* Main card */}
      <div style={styles.card}>
        {/* Left: Image section */}
        <div style={styles.imageSection}>
          <div style={styles.brandOverlay}>
            <div style={styles.brandMark}></div>
            <div style={styles.brandAccent}></div>
          </div>
          
          <img 
            src="/3c7d47.png" 
            alt="Football Player" 
            style={styles.playerImg} 
          />
          
          <div style={styles.imageFade}></div>
        </div>

        {/* Right: Form section */}
        <div style={styles.formSection}>
          <div style={styles.formHeader}>
            <h1 style={styles.title}>CLUTCH ARENA</h1>
            <p style={styles.subtitle}>Tournament Registration</p>
          </div>

          <form onSubmit={handleSubmit} style={styles.form}>
            <div style={styles.inputGroup}>
              <label style={styles.label}>Full Name</label>
              <input
                name="name" 
                required 
                onChange={handleChange} 
                disabled={showPayment}
                style={styles.input}
                placeholder="Enter your full name"
                onFocus={(e) => {
                  e.currentTarget.style.borderColor = "#2e7d32";
                  e.currentTarget.style.boxShadow = "0 0 0 3px rgba(46, 125, 50, 0.1)";
                }}
                onBlur={(e) => {
                  e.currentTarget.style.borderColor = "#d1d5db";
                  e.currentTarget.style.boxShadow = "none";
                }}
              />
            </div>

            <div style={styles.inputGroup}>
              <label style={styles.label}>Email Address</label>
              <input
                name="email" 
                type="email" 
                required 
                onChange={handleChange} 
                disabled={showPayment}
                style={styles.input}
                placeholder="your.email@example.com"
                onFocus={(e) => {
                  e.currentTarget.style.borderColor = "#2e7d32";
                  e.currentTarget.style.boxShadow = "0 0 0 3px rgba(46, 125, 50, 0.1)";
                }}
                onBlur={(e) => {
                  e.currentTarget.style.borderColor = "#d1d5db";
                  e.currentTarget.style.boxShadow = "none";
                }}
              />
            </div>

            <div style={styles.inputGroup}>
              <label style={styles.label}>Phone Number</label>
              <input
                name="phone" 
                required 
                onChange={handleChange} 
                disabled={showPayment}
                style={styles.input}
                placeholder="+91 00000 00000"
                onFocus={(e) => {
                  e.currentTarget.style.borderColor = "#2e7d32";
                  e.currentTarget.style.boxShadow = "0 0 0 3px rgba(46, 125, 50, 0.1)";
                }}
                onBlur={(e) => {
                  e.currentTarget.style.borderColor = "#d1d5db";
                  e.currentTarget.style.boxShadow = "none";
                }}
              />
            </div>

            <div style={styles.inputGroup}>
              <label style={styles.label}>Date of Birth</label>
              <input
                name="dob" 
                type="date" 
                required 
                onChange={handleChange} 
                disabled={showPayment}
                style={styles.input}
                onFocus={(e) => {
                  e.currentTarget.style.borderColor = "#2e7d32";
                  e.currentTarget.style.boxShadow = "0 0 0 3px rgba(46, 125, 50, 0.1)";
                }}
                onBlur={(e) => {
                  e.currentTarget.style.borderColor = "#d1d5db";
                  e.currentTarget.style.boxShadow = "none";
                }}
              />
            </div>

            <div style={styles.inputGroup}>
              <label style={styles.label}>University/Institution</label>
              <input
                name="university" 
                required 
                onChange={handleChange} 
                disabled={showPayment}
                style={styles.input}
                placeholder="Enter your university or institution"
                onFocus={(e) => {
                  e.currentTarget.style.borderColor = "#2e7d32";
                  e.currentTarget.style.boxShadow = "0 0 0 3px rgba(46, 125, 50, 0.1)";
                }}
                onBlur={(e) => {
                  e.currentTarget.style.borderColor = "#d1d5db";
                  e.currentTarget.style.boxShadow = "none";
                }}
              />
            </div>

            <div style={styles.inputGroup}>
              <label style={styles.label}>Playing Position</label>
              <select
                name="position" 
                required 
                onChange={handleChange} 
                disabled={showPayment}
                style={styles.select}
                onFocus={(e) => {
                  e.currentTarget.style.borderColor = "#2e7d32";
                  e.currentTarget.style.boxShadow = "0 0 0 3px rgba(46, 125, 50, 0.1)";
                }}
                onBlur={(e) => {
                  e.currentTarget.style.borderColor = "#d1d5db";
                  e.currentTarget.style.boxShadow = "none";
                }}
              >
                <option value="">Select your position</option>
                <option value="GK">Goalkeeper (GK)</option>
                <option value="CB">Center Back (CB)</option>
                <option value="LB">Left Back (LB)</option>
                <option value="RB">Right Back (RB)</option>
                <option value="CM">Center Midfielder (CM)</option>
                <option value="ST">Striker (ST)</option>
              </select>
            </div>

            <div style={styles.checkboxWrapper}>
              <div style={styles.checkboxGroup}>
                <input
                  type="checkbox"
                  required
                  style={styles.checkbox}
                  id="terms"
                  disabled={showPayment}
                />
                <label htmlFor="terms" style={styles.checkboxLabel}>
                  I agree to the tournament <a href="#" style={styles.link}>terms & conditions</a> and <a href="#" style={styles.link}>privacy policy</a>
                </label>
              </div>
            </div>

            <div style={styles.buttonWrapper}>
              <button
                type="submit" 
                disabled={loading || showPayment}
                style={{
                  ...styles.button,
                  opacity: loading || showPayment ? 0.6 : 1,
                  cursor: loading || showPayment ? "not-allowed" : "pointer",
                }}
                onMouseEnter={(e) => {
                  if (!loading && !showPayment) {
                    e.currentTarget.style.backgroundColor = "#1b5e20";
                    e.currentTarget.style.boxShadow = "0 8px 24px rgba(46, 125, 50, 0.3)";
                  }
                }}
                onMouseLeave={(e) => {
                  if (!loading && !showPayment) {
                    e.currentTarget.style.backgroundColor = "#2e7d32";
                    e.currentTarget.style.boxShadow = "0 4px 12px rgba(46, 125, 50, 0.2)";
                  }
                }}
              >
                {loading ? (
                  <span style={styles.buttonContent}>
                    <svg style={styles.spinner} width="20" height="20" viewBox="0 0 24 24" fill="none">
                      <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="3" strokeLinecap="round" opacity="0.25"/>
                      <path d="M12 2a10 10 0 0 1 10 10" stroke="currentColor" strokeWidth="3" strokeLinecap="round"/>
                    </svg>
                    Preparing Payment...
                  </span>
                ) : (
                  showPayment ? "Payment Ready" : "Continue to Payment"
                )}
              </button>
            </div>

            {showPayment && (
              <div style={styles.paymentSection}>
                <h3 style={styles.paymentTitle}>Pay Now</h3>
                <p style={styles.paymentSubtitle}>
                  Use the button below to complete your registration payment.
                </p>
                <div
                  className="razorpay-embed-btn"
                  data-url="https://pages.razorpay.com/pl_SC2n9aRqQ4joj2/view"
                  data-text="Pay Now"
                  data-color="#528FF0"
                  data-size="large"
                ></div>

                {loading && !paymentError && (
                  <p style={styles.paymentLoading}>Loading payment button…</p>
                )}

                {paymentError && (
                  <p style={styles.paymentError}>{paymentError}</p>
                )}

                <a
                  href="https://pages.razorpay.com/pl_SC2n9aRqQ4joj2/view"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={styles.paymentFallbackLink}
                >
                  Open payment link in a new tab
                </a>
              </div>
            )}

            <p style={styles.secureNote}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" style={{ marginRight: "6px" }}>
                <rect x="5" y="11" width="14" height="10" rx="2" stroke="#6b7280" strokeWidth="2"/>
                <path d="M8 11V7a4 4 0 0 1 8 0v4" stroke="#6b7280" strokeWidth="2" strokeLinecap="round"/>
              </svg>
              Your payment information is secured with 256-bit encryption
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}

const styles: { [key: string]: React.CSSProperties } = {
  pageWrapper: {
    backgroundColor: "#f8f9fa",
    minHeight: "100vh",
    width: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    position: "relative",
    overflow: "hidden",
    fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
    padding: "40px 20px",
  },
  bgGradient: {
    position: "absolute",
    inset: 0,
    background: "radial-gradient(circle at 30% 20%, rgba(46, 125, 50, 0.05) 0%, transparent 50%), radial-gradient(circle at 70% 80%, rgba(46, 125, 50, 0.03) 0%, transparent 50%)",
    zIndex: 0,
  },
  backButton: {
    position: "absolute",
    top: "30px",
    left: "30px",
    backgroundColor: "#ffffff",
    color: "#374151",
    border: "1px solid #e0e0e0",
    padding: "10px 20px",
    borderRadius: "8px",
    fontSize: "14px",
    fontWeight: "500",
    cursor: "pointer",
    zIndex: 100,
    display: "flex",
    alignItems: "center",
    transition: "all 0.2s ease",
    boxShadow: "0 1px 3px rgba(0, 0, 0, 0.05)",
  },
  card: {
    position: "relative",
    zIndex: 10,
    display: "flex",
    flexDirection: "row",
    backgroundColor: "#ffffff",
    width: "100%",
    maxWidth: "900px",
    height: "600px",
    boxShadow: "0 20px 60px rgba(0, 0, 0, 0.08), 0 0 0 1px rgba(0, 0, 0, 0.05)",
    borderRadius: "16px",
    overflow: "hidden",
  },
  imageSection: {
    width: "40%",
    height: "100%",
    backgroundColor: "#fafafa",
    position: "relative",
    overflow: "hidden",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexShrink: 0,
  },
  brandOverlay: {
    position: "absolute",
    top: "40px",
    left: "40px",
    zIndex: 3,
  },
  brandMark: {
    width: "50px",
    height: "4px",
    backgroundColor: "#2e7d32",
    marginBottom: "8px",
  },
  brandAccent: {
    width: "30px",
    height: "4px",
    backgroundColor: "#d1d5db",
  },
  playerImg: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
    objectPosition: "center",
    position: "relative",
    zIndex: 2,
  },
  imageFade: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    height: "30%",
    background: "linear-gradient(to top, rgba(250, 250, 250, 0.4) 0%, transparent 100%)",
    zIndex: 1,
  },
  formSection: {
    flex: 1,
    padding: "40px 45px",
    backgroundColor: "#ffffff",
    display: "flex",
    flexDirection: "column",
    overflowY: "auto",
  },
  formHeader: {
    marginBottom: "28px",
    borderBottom: "1px solid #e5e7eb",
    paddingBottom: "16px",
  },
  title: {
    fontSize: "28px",
    fontWeight: "800",
    margin: "0 0 4px 0",
    letterSpacing: "0.3px",
    color: "#111827",
  },
  subtitle: {
    fontSize: "14px",
    fontWeight: "400",
    color: "#6b7280",
    margin: 0,
  },
  form: {
    display: "flex",
    flexDirection: "column",
    gap: "16px",
  },
  inputGroup: {
    display: "flex",
    flexDirection: "column",
    gap: "6px",
  },
  label: {
    fontSize: "12px",
    fontWeight: "600",
    color: "#374151",
    letterSpacing: "0.2px",
  },
  input: {
    height: "38px",
    borderRadius: "8px",
    border: "1px solid #d1d5db",
    padding: "0 12px",
    fontSize: "14px",
    backgroundColor: "#ffffff",
    color: "#111827",
    outline: "none",
    transition: "all 0.2s ease",
    fontFamily: "inherit",
  },
  select: {
    height: "38px",
    borderRadius: "8px",
    border: "1px solid #d1d5db",
    padding: "0 12px",
    fontSize: "14px",
    backgroundColor: "#ffffff",
    color: "#111827",
    outline: "none",
    transition: "all 0.2s ease",
    cursor: "pointer",
    fontFamily: "inherit",
    appearance: "none",
    backgroundImage: `url("data:image/svg+xml,%3Csvg width='12' height='8' viewBox='0 0 12 8' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M1 1.5L6 6.5L11 1.5' stroke='%23374151' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E")`,
    backgroundRepeat: "no-repeat",
    backgroundPosition: "right 12px center",
    paddingRight: "36px",
  },
  checkboxWrapper: {
    marginTop: "4px",
  },
  checkboxGroup: {
    display: "flex",
    alignItems: "flex-start",
    gap: "8px",
  },
  checkbox: {
    width: "16px",
    height: "16px",
    cursor: "pointer",
    marginTop: "2px",
    flexShrink: 0,
  },
  checkboxLabel: {
    fontSize: "12px",
    color: "#4b5563",
    lineHeight: "1.5",
    fontWeight: "400",
  },
  link: {
    color: "#2e7d32",
    textDecoration: "none",
    fontWeight: "500",
  },
  buttonWrapper: {
    marginTop: "8px",
  },
  button: {
    width: "100%",
    height: "44px",
    backgroundColor: "#2e7d32",
    color: "#ffffff",
    border: "none",
    borderRadius: "8px",
    fontSize: "14px",
    fontWeight: "600",
    cursor: "pointer",
    transition: "all 0.2s ease",
    boxShadow: "0 4px 12px rgba(46, 125, 50, 0.2)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontFamily: "inherit",
  },
  buttonContent: {
    display: "flex",
    alignItems: "center",
    gap: "8px",
  },
  spinner: {
    animation: "spin 1s linear infinite",
  },
  secureNote: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "11px",
    color: "#6b7280",
    margin: "10px 0 0 0",
    fontWeight: "400",
  },
  paymentSection: {
    marginTop: "12px",
    padding: "16px",
    borderRadius: "10px",
    border: "1px solid #e5e7eb",
    backgroundColor: "#f9fafb",
    display: "flex",
    flexDirection: "column",
    gap: "10px",
  },
  paymentTitle: {
    fontSize: "16px",
    fontWeight: "700",
    color: "#111827",
    margin: 0,
  },
  paymentSubtitle: {
    fontSize: "13px",
    color: "#6b7280",
    margin: 0,
  },
  paymentLoading: {
    fontSize: "12px",
    color: "#6b7280",
    margin: 0,
  },
  paymentError: {
    fontSize: "12px",
    color: "#b91c1c",
    margin: 0,
  },
  paymentFallbackLink: {
    fontSize: "12px",
    color: "#2563eb",
    textDecoration: "none",
    fontWeight: "600",
  },
};
