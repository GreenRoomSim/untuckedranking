# Setup

## 1. Create the Firebase project
1. Go to console.firebase.google.com, click **Add project**, name it, and skip Analytics.
2. **Build > Authentication > Get started > Email/Password**, enable it, save.
3. **Build > Firestore Database > Create database**, pick a region, choose **production mode**.

## 2. Connect the site
1. **Project settings (gear) > Your apps > Web (`</>`)**, register an app.
2. Copy the config values into `firebase-config.js`. These are safe to publish. The rules protect your data.

## 3. Make your admin login
1. **Authentication > Users > Add user**. Enter your email and a strong password.
2. Copy that user's **User UID** from the table.
3. Open `firestore.rules`, replace `PASTE_ADMIN_UID` with it.
4. **Firestore > Rules**, paste the whole file, click **Publish**.

Only that UID can read all ballots or write the cast, results and voting switch.

## 4. Host on GitHub
1. Put all files in a repo (root folder), then **Settings > Pages > Deploy from branch > main / root**.
2. In Firebase, **Authentication > Settings > Authorized domains > Add domain**: `yourname.github.io`.
3. Voters use `https://yourname.github.io/repo/`, you use `.../admin.html`.

## 5. First run
1. Open `admin.html`, sign in, click **Start season**.
2. Under **Cast and accounts**, add each person with a display name, username and 4-digit code. Send them their login by DM.
3. Write the challenge, switch Voting to **Open**.
4. When everyone has submitted, switch to **Locked**, mark who is eliminated, then **Publish**. **Start episode N** moves on.

## Good to know
- Voters can resubmit any number of times while voting is open. The last ballot counts, and it's always one ballot per person.
- Codes are shown in the admin table so you can resend them. Firebase can't change another user's password from a web page. If someone's code is compromised, remove them from the cast and add a new account with a new username.
- Four-digit codes can be guessed by someone patient. Use 6 digits if that worries you (change the pattern in `admin.html`).
