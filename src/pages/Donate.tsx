// import { useState } from "react";
// import Layout from "@/components/layout/Layout";

// const Donate = () => {
//   const [donationAmount, setDonationAmount] = useState<number | string>("");
//   const [donationType, setDonationType] = useState("one-time");
//   const [selectedCause, setSelectedCause] = useState("");
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     mobile: "",
//     pan: "",
//   });

//   const presetAmounts = [500, 1000, 2500, 5000, 10000];

//   const handleAmountClick = (amount: number) => {
//     setDonationAmount(amount);
//   };

//   const handleCustomAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     const value = e.target.value;
//     if (value === "" || /^\d+$/.test(value)) {
//       setDonationAmount(value);
//     }
//   };

//   const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
//     const { name, value } = e.target;
//     setFormData({
//       ...formData,
//       [name]: value,
//     });
//   };

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
//     // In a real application, this would process the payment
//     // and redirect to a payment gateway
//     console.log("Donation details:", {
//       amount: donationAmount,
//       type: donationType,
//       cause: selectedCause,
//       ...formData,
//     });
//     alert("Thank you for your donation! In a live site, you would be redirected to the payment gateway.");
//   };

//   return (
//     <Layout>
//       {/* Hero Section */}
//       <section className="bg-gray-50 py-20">
//         <div className="container-custom">
//           <div className="max-w-3xl mx-auto text-center">
//             <h1 className="text-4xl md:text-5xl font-bold mb-6">Make a Donation</h1>
//             <p className="text-xl text-gray-600">
//               Your generosity creates lasting change. Every contribution helps us continue our work with vulnerable populations.
//             </p>
//           </div>
//         </div>
//       </section>

//       {/* Donation Form Section */}
//       <section className="section-padding bg-white">
//         <div className="container-custom max-w-4xl">
//           <div className="bg-white rounded-lg shadow-lg overflow-hidden">
//             <div className="p-8">
//               <form onSubmit={handleSubmit}>
//                 {/* Donation Amount */}
//                 <div className="mb-8">
//                   <h3 className="text-2xl font-semibold mb-4">Donation Amount</h3>

//                   <div className="grid grid-cols-2 md:grid-cols-5 gap-3 mb-4">
//                     {presetAmounts.map((amount) => (
//                       <button
//                         key={amount}
//                         type="button"
//                         className={`py-3 px-4 rounded-md border-2 transition-all ${
//                           donationAmount === amount
//                             ? "border-primary bg-primary text-white"
//                             : "border-gray-200 hover:border-primary"
//                         }`}
//                         onClick={() => handleAmountClick(amount)}
//                       >
//                         ₹{amount.toLocaleString()}
//                       </button>
//                     ))}
//                   </div>

//                   <div className="mt-4">
//                     <label htmlFor="customAmount" className="block text-gray-700 mb-2">
//                       Custom Amount (₹)
//                     </label>
//                     <input
//                       type="text"
//                       id="customAmount"
//                       value={donationAmount}
//                       onChange={handleCustomAmountChange}
//                       className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
//                       placeholder="Enter amount"
//                     />
//                   </div>
//                 </div>

//                 {/* Donation Type */}
//                 <div className="mb-8">
//                   <h3 className="text-2xl font-semibold mb-4">Donation Type</h3>

//                   <div className="flex space-x-4">
//                     <label className="inline-flex items-center">
//                       <input
//                         type="radio"
//                         name="donationType"
//                         value="one-time"
//                         checked={donationType === "one-time"}
//                         onChange={() => setDonationType("one-time")}
//                         className="h-5 w-5 text-primary"
//                       />
//                       <span className="ml-2 text-gray-700">One-time</span>
//                     </label>

//                     <label className="inline-flex items-center">
//                       <input
//                         type="radio"
//                         name="donationType"
//                         value="monthly"
//                         checked={donationType === "monthly"}
//                         onChange={() => setDonationType("monthly")}
//                         className="h-5 w-5 text-primary"
//                       />
//                       <span className="ml-2 text-gray-700">Monthly</span>
//                     </label>

//                     <label className="inline-flex items-center">
//                       <input
//                         type="radio"
//                         name="donationType"
//                         value="annual"
//                         checked={donationType === "annual"}
//                         onChange={() => setDonationType("annual")}
//                         className="h-5 w-5 text-primary"
//                       />
//                       <span className="ml-2 text-gray-700">Annual</span>
//                     </label>
//                   </div>
//                 </div>

//                 {/* Specific Cause */}
//                 <div className="mb-8">
//                   <h3 className="text-2xl font-semibold mb-4">Select a Cause</h3>

//                   <select
//                     value={selectedCause}
//                     onChange={(e) => setSelectedCause(e.target.value)}
//                     className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
//                   >
//                     <option value="">Where Most Needed</option>
//                     <option value="rehab">Drug Addict Rehab Centers</option>
//                     <option value="orphanages">Orphanages (PANNAH)</option>
//                     <option value="senior-citizens">Senior Citizen Centers</option>
//                     <option value="widow-training">Widow Training Centers</option>
//                     <option value="education">Adult Education</option>
//                     <option value="emergency">Emergency Aid</option>
//                   </select>
//                 </div>

//                 {/* Donor Information */}
//                 <div className="mb-8">
//                   <h3 className="text-2xl font-semibold mb-4">Donor Information</h3>

//                   <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//                     <div>
//                       <label htmlFor="name" className="block text-gray-700 mb-2">
//                         Full Name*
//                       </label>
//                       <input
//                         type="text"
//                         id="name"
//                         name="name"
//                         value={formData.name}
//                         onChange={handleInputChange}
//                         required
//                         className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
//                         placeholder="Your name"
//                       />
//                     </div>

//                     <div>
//                       <label htmlFor="email" className="block text-gray-700 mb-2">
//                         Email Address*
//                       </label>
//                       <input
//                         type="email"
//                         id="email"
//                         name="email"
//                         value={formData.email}
//                         onChange={handleInputChange}
//                         required
//                         className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
//                         placeholder="Your email"
//                       />
//                     </div>

//                     <div>
//                       <label htmlFor="mobile" className="block text-gray-700 mb-2">
//                         Mobile Number*
//                       </label>
//                       <input
//                         type="tel"
//                         id="mobile"
//                         name="mobile"
//                         value={formData.mobile}
//                         onChange={handleInputChange}
//                         required
//                         className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
//                         placeholder="Your mobile number"
//                       />
//                     </div>

//                     <div>
//                       <label htmlFor="pan" className="block text-gray-700 mb-2">
//                         PAN Number (Optional, for 80G certificate)
//                       </label>
//                       <input
//                         type="text"
//                         id="pan"
//                         name="pan"
//                         value={formData.pan}
//                         onChange={handleInputChange}
//                         className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
//                         placeholder="Your PAN number"
//                       />
//                     </div>
//                   </div>
//                 </div>

//                 {/* Terms and Submit */}
//                 <div>
//                   <div className="mb-6">
//                     <label className="inline-flex items-center">
//                       <input
//                         type="checkbox"
//                         required
//                         className="h-5 w-5 text-primary"
//                       />
//                       <span className="ml-2 text-gray-700">
//                         I agree to the donation <a href="#" className="text-primary underline">terms and conditions</a>
//                       </span>
//                     </label>
//                   </div>

//                   <button
//                     type="submit"
//                     className="w-full btn-primary"
//                     disabled={!donationAmount}
//                   >
//                     {donationAmount ? `Donate ₹${donationAmount}` : 'Select an amount to donate'}
//                   </button>

//                   <p className="text-center mt-4 text-sm text-gray-600">
//                     Secured by 128-bit encryption. Your information is secure.
//                   </p>
//                 </div>
//               </form>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Why Donate Section */}
//       <section className="section-padding bg-gray-50">
//         <div className="container-custom">
//           <div className="max-w-3xl mx-auto text-center mb-16">
//             <h2 className="text-3xl font-bold mb-6">Why Donate to CNCT?</h2>
//             <p className="text-xl text-gray-600">
//               Your support makes a tangible difference in the lives of thousands. Here's why your contribution matters:
//             </p>
//           </div>

//           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//             <div className="bg-white p-6 rounded-lg shadow-md">
//               <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
//                 <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
//                 </svg>
//               </div>
//               <h3 className="text-xl font-semibold mb-3">Trusted Organization</h3>
//               <p className="text-gray-700">
//                 CNCT is a registered nonprofit with 19+ years of transparency and accountability. All donations are eligible for tax benefits under 80G.
//               </p>
//             </div>

//             <div className="bg-white p-6 rounded-lg shadow-md">
//               <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mb-4">
//                 <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
//                 </svg>
//               </div>
//               <h3 className="text-xl font-semibold mb-3">Direct Impact</h3>
//               <p className="text-gray-700">
//                 85% of donations go directly to program services. We maintain low overhead to maximize the impact of your contribution.
//               </p>
//             </div>

//             <div className="bg-white p-6 rounded-lg shadow-md">
//               <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mb-4">
//                 <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
//                 </svg>
//               </div>
//               <h3 className="text-xl font-semibold mb-3">Sustainable Change</h3>
//               <p className="text-gray-700">
//                 We don't just provide temporary relief. Our programs create lasting change through education, skill development, and community building.
//               </p>
//             </div>
//           </div>

//           <div className="mt-16 p-6 bg-white rounded-lg shadow-md">
//             <h3 className="text-xl font-semibold mb-3">Donation Receipt and 80G Certificate</h3>
//             <p className="text-gray-700">
//               Upon completing your donation, you will receive:
//             </p>
//             <ul className="list-disc list-inside text-gray-700 mt-2 space-y-2">
//               <li>An immediate donation receipt via email</li>
//               <li>An 80G tax exemption certificate (please provide your PAN number)</li>
//               <li>Regular updates on how your donation is making an impact</li>
//             </ul>
//           </div>
//         </div>
//       </section>
//     </Layout>
//   );
// };

// export default Donate;

import Header from "@/components/layout/Header";
import { Card, CardContent } from "../components/ui/card";
import Footer from "@/components/layout/Footer";
// import a from "next/a";
// import img from "next/img";

export default function Donate() {
  const isLive = import.meta.env.VITE_RAZORPAY_LIVE === "1";

  const razorpayUrl = isLive
    ? import.meta.env.VITE_RAZORPAY_LIVE_PAYMENT_PAGE_URL
    : import.meta.env.VITE_RAZORPAY_TEST_PAYMENT_PAGE_URL;

  return (
    <div className="font-sans">
      <Header />
      {/* Banner with Background img and Text */}

      <div
        className="relative w-full bg-cover bg-center h-max md:h-[450px] mb-10 flex items-center"
        style={{
          backgroundImage: `url('/donattion-banner.jpg')`,
          backgroundSize: "cover",
        }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative z-10 h-full lg:w-1/2 flex items-center px-6 sm:px-16 py-6">
          <div className="text-white space-y-6">
            <blockquote className="text-2xl sm:text-4xl italic font-semibold text-white border-l-4 border-white pl-4">
              Join us in making a difference for those in need. Your donation
              brings food, warmth, and hope.
            </blockquote>
            <p className="text-white text-lg sm:text-xl font-bold mb-4">
              Let’s join hands together and help the needy people.
            </p>
            {razorpayUrl ? (
              <a
                href={razorpayUrl}
                target="_blank"
                className="inline-block  text-white btn-primary px-6 py-3 rounded-lg font-bold text-xl mt-4 transition"
              >
                Donate Now
              </a>
            ) : (
              <p className="text-red-600 font-semibold">
                Payment a not available.
              </p>
            )}
          </div>
        </div>
      </div>

      {/* Description & Donation Options */}
      <div className="min-h-screen">
        <div className="space-y-8 w-full px-6 sm:px-16">
          <h1 className="text-2xl sm:text-3xl font-bold text-primary mb-4">
            Donate to Care for Needy Charitable Trust
          </h1>
          <p className="text-md sm:text-xl text-gray-700 leading-relaxed">
            We are a privileged group of individuals, grateful for the grace of
            God, who feel a deep responsibility to give back to society. Through
            heartfelt compassion, we aim to uplift those suffering from hunger,
            homelessness, addiction, and loneliness.
            <br />
            At CNCT – Care for Needy Charitable Trust, we believe that even a
            small sacrifice from us can be a big blessing in someone’s life.
            Items you no longer need could become life-changing for someone who
            does. What might seem useless to one could bring hope and dignity to
            another.
            <br />
            We know the pain of being hungry, cold, homeless, or alone. That’s
            why we serve from the heart — to restore hope, provide support, and
            help people survive and thrive. When we live for others, we believe
            God blesses us in return.
          </p>

          <h2 className="text-xl sm:text-2xl font-bold text-primary mb-4">
            Why Donate?
          </h2>
          <p className="text-md sm:text-xl text-gray-700 leading-relaxed mb-4">
            Your generous donation supports those who need assistance in
            obtaining life’s basic necessities. We aim to help those who
            struggle to survive and thrive in the community.
          </p>

          <h1 className="text-xl sm:text-2xl font-bold text-primary mb-4">
            Tax Benefits for indian income taxpayers
          </h1>
          <p>
            Your donation to <strong>Care for Needy Charitable Trust</strong> is
            eligible for tax benefits under Section 80G of the Indian Income Tax
            Act. By contributing to our organization, you can avail of tax
            deductions up to 50% of your donated amount. This means that your
            generous support not only helps us fulfill our mission but also
            provides you with a financial benefit.
          </p>

          <h1 className="text-xl sm:text-2xl font-bold text-primary mb-4">
            Tax Benefits for International Donors (FCRA)
          </h1>
          <p>
            International donors can also contribute to{" "}
            <strong>Care for Needy Charitable Trust</strong> under the Foreign
            Contribution Regulation Act (FCRA). As per FCRA regulations, your
            donations are exempted from income tax in India. Care for Needy
            Charitable Trust has an FCRA account to facilitate international
            donations, and the details are as follows:
          </p>
          <p>
            <strong>Note:</strong> Please ensure to provide accurate details
            while donating. If you require a tax exemption certificate or any
            further assistance, please contact us at [{" "}
            <a
              href="mailto:careforneedytrust@gmail.com"
              className="text-blue-800"
            >
              careforneedytrust@gmail.com
            </a>{" "}
            ] with your donation details.
          </p>
        </div>

        <Card className="shadow-xl border-green-200 bg-white w-auto mx-0 sm:mx-16 my-10">
          <CardContent className="p-3 py-4 sm:py-10 sm:p-10 text-center">
            <p className="text-gray-700 mb-4">
              Your generous donation will help us provide food, shelter,
              clothing, and emotional support to those who need it most.
              Together, we can transform lives.
            </p>
            <p className="text-primary text-lg font-semibold mb-6">
              Let’s join hands together and help the needy people.
            </p>
            <div className="flex justify-center items-center gap-6 flex-wrap">
              {razorpayUrl && (
                <a href={razorpayUrl} target="_blank">
                  <img
                    src="/razorpay.jpeg"
                    alt="Razorpay"
                    width={150}
                    height={120}
                    className="object-contain rounded-xl"
                  />
                </a>
              )}

              {razorpayUrl && (
                <a href={razorpayUrl!} target="_blank">
                  <img
                    src="/donate.png"
                    alt="Donate"
                    width={126}
                    height={120}
                    className="object-contain rounded-xl"
                  />
                </a>
              )}
            </div>
          </CardContent>
        </Card>

        <blockquote className="text-lg sm:text-xl italic font-medium text-blue-800 text-center">
          “With our little sacrifice, we can do big work in someone’s life who
          is needy.”
        </blockquote>

        <Card className="shadow-xl border-green-200 bg-white w-auto mx-0 sm:mx-16 mt-10">
          <CardContent className="p-6 sm:p-10 space-y-6">
            <h2 className="text-2xl font-bold text-primary text-center">
              Bank Details for Direct Donation
            </h2>
            <p className="text-gray-700 text-center">
              You can directly transfer your donation amount to our bank
              account. Please find the details below:
            </p>

            <div className="grid md:grid-cols-2 gap-8 text-gray-700">
              {/* Bank Account 1 */}
              <div className="space-y-2 border p-4 rounded-lg shadow-sm">
                <p>
                  <strong>Bank Name:</strong> ICICI Bank
                </p>
                <p>
                  <strong>Account Name:</strong> Care for Needy Charitable Trust
                </p>
                <p>
                  <strong>Account Number:</strong> 397705000149
                </p>
                <p>
                  <strong>IFSC Code:</strong> ICIC0003977
                </p>
                <p>
                  <strong>Branch:</strong> Pune, Maharashtra
                </p>
                <p>
                  <strong>Account Type:</strong> Current
                </p>
              </div>

              {/* Bank Account 2 */}
              <div className="space-y-2 border p-4 rounded-lg shadow-sm">
                <p>
                  <strong>Bank Name:</strong> HDFC Bank
                </p>
                <p>
                  <strong>Account Name:</strong> Care for Needy Charitable Trust
                </p>
                <p>
                  <strong>Account Number:</strong> 50200106768385
                </p>
                <p>
                  <strong>IFSC Code:</strong> HDFC0000391
                </p>
                <p>
                  <strong>Branch:</strong> ADARSH NAGAR,DELHI
                </p>
                <p>
                  <strong>Account Type:</strong> Current
                </p>
              </div>
            </div>

            <p className="text-sm text-center text-gray-600">
              <strong>Note: </strong>Please send us a confirmation or screenshot
              of your transaction at{" "}
              <strong>
                <a
                  href="mailto:careforneedytrust@gmail.com"
                  className="text-blue-600 hover:underline"
                >
                  careforneedytrust@gmail.com
                </a>
              </strong>{" "}
              to help us acknowledge your contribution.
            </p>
          </CardContent>
        </Card>
      </div>
      <Footer />
    </div>
  );
}
