# **ScanFill: QR Code Autofill Form App**

## **Overview**

ScanFill is a mobile-first web application designed to simplify form-filling using QR code scanning technology. By scanning a QR code, the app extracts user information such as name and email, automatically populating form fields for a seamless user experience. It is perfect for events, digital check-ins, and fast online form submissions.

## **Features**

- **Mobile-First Design**: Optimized for smartphones and tablets.
- **QR Code Scanning**: Quickly scan QR codes to extract and autofill form data.
- **Autofill Support**: Automatically populates fields like Name and Email with data from the QR code.
- **Real-time Feedback**: Provides instant feedback after scanning or submitting forms.
- **Responsive Layout**: Adapts seamlessly across all screen sizes, from mobile devices to desktops.
- **Secure Data Handling**: Ensures safe submission of personal data over HTTPS.

## **Technologies Used**

- **HTML5**
- **CSS3** (with mobile-first design)
- **JavaScript** (for interactive functionality)
- **html5-qrcode** library (for QR code scanning)
- **Bootstrap** or **Tailwind CSS** (for responsive and clean UI)

## **Setup Instructions**

### 1. **Clone the Repository**

```bash
git clone https://github.com/Benighter/scanfill.git
cd scanfill
```

### 2. **Open the App Locally**

- Simply open the `index.html` file in your browser to test the app locally.
  
### 3. **Run on a Local Server (optional but recommended)**

To avoid any issues with security policies around QR code scanning, it's recommended to serve the app through a local web server. You can use `http-server` or Python's built-in server:

For Python:

```bash
python3 -m http.server 8000
```

Then, open your browser and navigate to `http://localhost:8000`.

### 4. **Install Node.js (Optional for Custom Build)**

If you're modifying the codebase and using additional tools or libraries, ensure that **Node.js** is installed:

```bash
npm install
npm start
```

### 5. **Deploying to a Web Server**

Deploy the `index.html` file along with the associated CSS and JavaScript files to your preferred web hosting platform (e.g., GitHub Pages, Netlify, or a custom server).

## **Usage**

1. **Scan QR Code**: Open the app on your mobile device, point the camera at a QR code, and wait for the data to be scanned.
2. **Autofill the Form**: The form fields (e.g., Name, Email) will be automatically populated based on the data encoded in the QR code.
3. **Review and Submit**: Review the autofilled form and press "Submit" to complete the process.

## **Contributing**

We welcome contributions! Please follow the steps below:

1. Fork the repository.
2. Create a new branch: `git checkout -b feature-branch-name`.
3. Commit your changes: `git commit -m 'Add some feature'`.
4. Push to the branch: `git push origin feature-branch-name`.
5. Open a pull request.

## **License**

This project is licensed under the MIT License. See the `LICENSE` file for more details.
