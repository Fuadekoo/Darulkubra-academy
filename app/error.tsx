"use client";
import React from "react";

function Error() {
  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        background: "#f8fafc",
      }}
    >
      <svg width="80" height="80" viewBox="0 0 24 24" fill="none">
        <circle cx="12" cy="12" r="10" fill="#fee2e2" />
        <path
          d="M15 9l-6 6M9 9l6 6"
          stroke="#ef4444"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>
      <h1
        style={{ color: "#ef4444", fontSize: "2rem", margin: "1rem 0 0.5rem" }}
      >
        Oops! Something went wrong.
      </h1>
      <p style={{ color: "#64748b", fontSize: "1.1rem", marginBottom: "2rem" }}>
        An unexpected error has occurred. Please try refreshing the page or
        contact support if the problem persists.
      </p>
      <button
        onClick={() => window.location.reload()}
        style={{
          background: "#ef4444",
          color: "#fff",
          border: "none",
          padding: "0.75rem 1.5rem",
          borderRadius: "0.375rem",
          fontSize: "1rem",
          cursor: "pointer",
          boxShadow: "0 2px 8px rgba(0,0,0,0.05)",
        }}
      >
        Refresh Page
      </button>
    </div>
  );
}

export default Error;
