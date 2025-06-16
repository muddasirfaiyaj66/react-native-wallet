// lib/utils.js
export function formatDate(dateString) {
  // format date nicely
  // example: from this 👉 2025-05-30 to this 👉 May 30, 2025
  const date = new Date(dateString);
  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}