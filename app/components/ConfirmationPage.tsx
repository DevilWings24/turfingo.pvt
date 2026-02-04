"use client";

import { useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";

type ConfirmationData = {
  registrationId: string;
  user: {
    name: string;
    email: string;
    phone: string;
    university: string;
  };
  tournament: {
    game: string;
    platform: string;
    format: string;
    date: string;
  };
};

export default function ConfirmationPage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const orderId = searchParams.get("orderId");

  const [data, setData] = useState<ConfirmationData | null>(null);

  // 1️⃣ Fetch confirmation data
  useEffect(() => {
    if (!orderId) return;

    fetch(`/api/confirmation?orderId=${orderId}`)
      .then((res) => res.json())
      .then((res) => {
        setData(res);
      });
  }, [orderId]);

  if (!data) {
    return (
      <div style={styles.loadingContainer}>
        <p style={styles.loadingText}>Loading confirmation…</p>
      </div>
    );
  }

  return (
    <>
      <div className="announcement-bar">
        <div className="container announcement-inner">
          <span>
            Guys, this is the community group for participants and athletes —
            make sure to join the community!
          </span>
          <a
            className="announcement-link"
            href="https://chat.whatsapp.com/FSRZYdgwSB6Ax6WmZax3Pd?mode=gi_c"
            target="_blank"
            rel="noopener noreferrer"
          >
            Join WhatsApp Community
          </a>
        </div>
      </div>

      <main style={styles.container}>
      {/* Success Icon */}
      <div style={styles.successIcon}>
        <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
          <circle cx="24" cy="24" r="20" stroke="white" strokeWidth="3"/>
          <path d="M16 24L21 29L32 18" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </div>

      {/* Title */}
      <h1 style={styles.title}>Registration Successful!</h1>
      <p style={styles.subtitle}>Welcome to the tournament, {data.user.name}!</p>

      {/* Registration ID Card */}
      <div style={styles.idCard}>
        <div style={styles.idHeader}>
          <div>
            <p style={styles.idLabel}>Registration ID</p>
            <p style={styles.idValue}>{data.registrationId}</p>
          </div>
          <div style={styles.trophyIcon}>
            <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
              <path d="M8 6H24M8 6C6.5 6 5 7 5 9C5 11 6 12 8 12M8 6V12M24 6C25.5 6 27 7 27 9C27 11 26 12 24 12M24 6V12M8 12H11M24 12H21M11 12V14C11 17 13 19 16 19C19 19 21 17 21 14V12M11 12H21M16 19V22M16 22H12V26H20V22H16Z" stroke="#16a34a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
        </div>

        <div style={styles.divider}></div>

        {/* Player Details & Tournament Info */}
        <div style={styles.detailsGrid}>
          <div>
            <h3 style={styles.sectionTitle}>Player Details</h3>
            <div style={styles.detailRow}>
              <span style={styles.detailLabel}>Name:</span>
              <span style={styles.detailValue}>{data.user.name}</span>
            </div>
            <div style={styles.detailRow}>
              <span style={styles.detailLabel}>Email:</span>
              <span style={styles.detailValue}>{data.user.email}</span>
            </div>
            <div style={styles.detailRow}>
              <span style={styles.detailLabel}>University:</span>
              <span style={styles.detailValue}>{data.user.university}</span>
            </div>
          </div>

          <div>
            <h3 style={styles.sectionTitle}>Tournament Info</h3>
            <div style={styles.detailRow}>
              <span style={styles.detailLabel}>Game:</span>
              <span style={styles.detailValue}>{data.tournament.game}</span>
            </div>
            <div style={styles.detailRow}>
              <span style={styles.detailLabel}>Platform:</span>
              <span style={styles.detailValue}>{data.tournament.platform}</span>
            </div>
            <div style={styles.detailRow}>
              <span style={styles.detailLabel}>Format:</span>
              <span style={styles.detailValue}>{data.tournament.format}</span>
            </div>
            <div style={styles.detailRow}>
              <span style={styles.detailLabel}>Date:</span>
              <span style={styles.detailValue}>{data.tournament.date}</span>
            </div>
          </div>
        </div>
      </div>

      {/* What's Next Section */}
      <div style={styles.nextStepsCard}>
        <h3 style={styles.nextStepsTitle}>What's Next?</h3>
        <div style={styles.stepItem}>
          <div style={styles.stepIcon}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <rect x="5" y="4" width="14" height="16" rx="2" stroke="#16a34a" strokeWidth="2"/>
              <path d="M9 2V6M15 2V6M5 10H19" stroke="#16a34a" strokeWidth="2" strokeLinecap="round"/>
            </svg>
          </div>
          <div>
            <p style={styles.stepTitle}>Mark Your Calendar</p>
            <p style={styles.stepDescription}>Tournament starts on {data.tournament.date}. Be online 15 minutes before your match.</p>
          </div>
        </div>
      </div>

      {/* Back Button */}
      <button
        onClick={() => router.back()}
        style={styles.returnButton}
        onMouseEnter={(e) => {
          e.currentTarget.style.backgroundColor = "#15803d";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.backgroundColor = "#16a34a";
        }}
      >
        Back
      </button>

      {/* Support Footer */}
      <div style={styles.supportFooter}>
        <p style={styles.supportText}>
          Need help? Contact us at{" "}
          <a href="mailto:turfingo@gmail.com" style={styles.supportLink}>
            turfingo@gmail.com
          </a>
        </p>
      </div>
      </main>
    </>
  );
}

const styles: { [key: string]: React.CSSProperties } = {
  loadingContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    minHeight: "100vh",
    backgroundColor: "#f9fafb",
  },
  loadingText: {
    fontSize: "16px",
    color: "#6b7280",
  },
  container: {
    maxWidth: "600px",
    margin: "0 auto",
    padding: "60px 24px",
    backgroundColor: "#f9fafb",
    minHeight: "100vh",
  },
  successIcon: {
    width: "80px",
    height: "80px",
    borderRadius: "50%",
    backgroundColor: "#16a34a",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    margin: "0 auto 24px",
    boxShadow: "0 4px 12px rgba(22, 163, 74, 0.3)",
  },
  title: {
    fontSize: "32px",
    fontWeight: "700",
    textAlign: "center",
    color: "#111827",
    margin: "0 0 8px 0",
  },
  subtitle: {
    fontSize: "16px",
    textAlign: "center",
    color: "#6b7280",
    margin: "0 0 32px 0",
  },
  idCard: {
    backgroundColor: "#ffffff",
    borderRadius: "12px",
    padding: "24px",
    marginBottom: "24px",
    border: "1px solid #e5e7eb",
    boxShadow: "0 1px 3px rgba(0, 0, 0, 0.05)",
  },
  idHeader: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: "20px",
  },
  idLabel: {
    fontSize: "12px",
    color: "#6b7280",
    margin: "0 0 4px 0",
    textTransform: "uppercase",
    letterSpacing: "0.5px",
  },
  idValue: {
    fontSize: "18px",
    fontWeight: "600",
    color: "#16a34a",
    margin: "0",
  },
  trophyIcon: {
    width: "48px",
    height: "48px",
    borderRadius: "8px",
    backgroundColor: "#f0fdf4",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  divider: {
    height: "1px",
    backgroundColor: "#e5e7eb",
    margin: "20px 0",
  },
  detailsGrid: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: "32px",
  },
  sectionTitle: {
    fontSize: "14px",
    fontWeight: "600",
    color: "#111827",
    margin: "0 0 12px 0",
  },
  detailRow: {
    display: "flex",
    justifyContent: "space-between",
    marginBottom: "8px",
    fontSize: "13px",
  },
  detailLabel: {
    color: "#6b7280",
  },
  detailValue: {
    color: "#111827",
    fontWeight: "500",
  },
  nextStepsCard: {
    backgroundColor: "#ffffff",
    borderRadius: "12px",
    padding: "24px",
    marginBottom: "24px",
    border: "1px solid #e5e7eb",
    boxShadow: "0 1px 3px rgba(0, 0, 0, 0.05)",
  },
  nextStepsTitle: {
    fontSize: "18px",
    fontWeight: "600",
    color: "#111827",
    margin: "0 0 20px 0",
  },
  stepItem: {
    display: "flex",
    gap: "16px",
    marginBottom: "20px",
  },
  stepIcon: {
    width: "48px",
    height: "48px",
    borderRadius: "8px",
    backgroundColor: "#f0fdf4",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexShrink: 0,
  },
  stepTitle: {
    fontSize: "14px",
    fontWeight: "600",
    color: "#111827",
    margin: "0 0 4px 0",
  },
  stepDescription: {
    fontSize: "13px",
    color: "#6b7280",
    margin: "0",
    lineHeight: "1.5",
  },
  returnButton: {
    width: "100%",
    padding: "16px",
    backgroundColor: "#16a34a",
    color: "#ffffff",
    border: "none",
    borderRadius: "8px",
    fontSize: "15px",
    fontWeight: "600",
    cursor: "pointer",
    transition: "background-color 0.2s ease",
    marginBottom: "16px",
  },
  supportFooter: {
    backgroundColor: "#ffffff",
    borderRadius: "8px",
    padding: "16px",
    border: "1px solid #e5e7eb",
    textAlign: "center",
  },
  supportText: {
    fontSize: "13px",
    color: "#6b7280",
    margin: "0",
  },
  supportLink: {
    color: "#16a34a",
    textDecoration: "none",
    fontWeight: "500",
  },
};
