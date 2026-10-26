// Paste the values from Firebase console > Project settings > Your apps > Web app
export const firebaseConfig = {
  apiKey: "AIzaSyCsnK44tDmWVvNpH7mteHqU-4rlnSxaEcc",
  authDomain: "seasonbalot.firebaseapp.com",
  projectId: "seasonbalot",
  appId: "1:380098760835:web:10e994685729b7e6d4cbb6"
};
// Voters type a username + short code. Firebase needs email + 6+ char password, so we convert.
export const emailFor = u => u.trim().toLowerCase().replace(/[^a-z0-9]/g, "") + "@sim.local";
export const passFor = c => "rp-" + c.trim();
