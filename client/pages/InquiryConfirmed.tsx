import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Check, Calendar, Clock, Shield, Mail, Diamond, ChevronRight, Download, ExternalLink } from "lucide-react";

const InquiryConfirmed = () => {
  const [confirmationNumber] = useState(`LUX-${Date.now()}`);

  useEffect(() => {
    document.title = "Inquiry Confirmed | Katherine Taylor";
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-4xl mx-auto px-8 py-20">
        {/* Success Icon */}
        <motion.div
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ type: "spring", duration: 0.6 }}
          className="w-32 h-32 mx-auto mb-8 bg-gray-900 rounded-full flex items-center justify-center"
        >
          <Check className="w-16 h-16 text-white" strokeWidth={3} />
        </motion.div>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-center mb-12"
        >
          <h1 className="text-5xl font-thin text-gray-900 mb-4">Inquiry Received</h1>
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-gray-100 rounded-full">
            <Lock className="w-4 h-4 text-gray-600" />
            <span className="text-sm font-mono text-gray-700">Confirmation: {confirmationNumber}</span>
          </div>
          <p className="mt-6 text-gray-600 max-w-2xl mx-auto">
            Thank you for your interest. Your inquiry has been received and is being reviewed by our team.
            We'll be in touch shortly to discuss next steps.
          </p>
        </motion.div>

        {/* Timeline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mb-12"
        >
          <h2 className="text-2xl font-thin text-center mb-8">What Happens Next</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                icon: Mail,
                title: "Confirmation Email",
                timing: "Sent immediately",
                description: "Check your inbox for a detailed confirmation with your inquiry number."
              },
              {
                icon: Shield,
                title: "Verification Review",
                timing: "24-48 hours",
                description: "Our team will review your information and verify credentials."
              },
              {
                icon: Calendar,
                title: "Discovery Call",
                timing: "Within 72 hours",
                description: "We'll schedule an initial consultation to discuss your needs."
              },
              {
                icon: Diamond,
                title: "Proposal Development",
                timing: "Within 1 week",
                description: "Receive a custom proposal tailored to your requirements."
              }
            ].map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.6 + (i * 0.1) }}
                className="flex gap-4 p-6 bg-white border border-gray-200 rounded-lg hover:border-gray-300 transition-colors"
              >
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center">
                    <step.icon className="w-6 h-6 text-gray-700" />
                  </div>
                </div>
                <div>
                  <h3 className="font-light text-lg text-gray-900 mb-1">{step.title}</h3>
                  <p className="text-sm text-gray-500 mb-2 flex items-center gap-1">
                    <Clock className="w-3 h-3" />
                    {step.timing}
                  </p>
                  <p className="text-sm text-gray-600">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Important Information */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
          className="bg-gray-50 border border-gray-200 rounded-lg p-8 mb-12"
        >
          <h3 className="text-xl font-light mb-4 flex items-center gap-2">
            <Shield className="w-5 h-5 text-gray-700" />
            Important Information
          </h3>
          <ul className="space-y-3 text-sm text-gray-600">
            <li className="flex items-start gap-3">
              <Check className="w-4 h-4 mt-0.5 text-gray-900 flex-shrink-0" />
              <span>
                <strong className="text-gray-900">Check your spam folder</strong> - Our confirmation email may be filtered.
                Add inquiries@katherinetaylor.com to your contacts.
              </span>
            </li>
            <li className="flex items-start gap-3">
              <Check className="w-4 h-4 mt-0.5 text-gray-900 flex-shrink-0" />
              <span>
                <strong className="text-gray-900">Prepare for discovery call</strong> - Review your goals, budget, and timeline.
                Have specific questions ready.
              </span>
            </li>
            <li className="flex items-start gap-3">
              <Check className="w-4 h-4 mt-0.5 text-gray-900 flex-shrink-0" />
              <span>
                <strong className="text-gray-900">NDA if requested</strong> - If you indicated NDA requirements,
                we'll send our standard agreement for review.
              </span>
            </li>
            <li className="flex items-start gap-3">
              <Check className="w-4 h-4 mt-0.5 text-gray-900 flex-shrink-0" />
              <span>
                <strong className="text-gray-900">Response time</strong> - We respond to all qualified inquiries within 48 hours.
                High-priority requests may receive same-day response.
              </span>
            </li>
          </ul>
        </motion.div>

        {/* Actions */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2 }}
          className="space-y-4"
        >
          <h3 className="text-xl font-light text-center mb-6">While You Wait</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <a
              href="/about"
              className="flex items-center justify-between p-4 border border-gray-200 rounded-lg hover:border-gray-900 transition-colors group"
            >
              <span className="text-sm font-light">Learn More About Us</span>
              <ChevronRight className="w-4 h-4 text-gray-400 group-hover:text-gray-900 transition-colors" />
            </a>
            <a
              href="/journal"
              className="flex items-center justify-between p-4 border border-gray-200 rounded-lg hover:border-gray-900 transition-colors group"
            >
              <span className="text-sm font-light">Read Our Journal</span>
              <ChevronRight className="w-4 h-4 text-gray-400 group-hover:text-gray-900 transition-colors" />
            </a>
            <a
              href="/rates"
              className="flex items-center justify-between p-4 border border-gray-200 rounded-lg hover:border-gray-900 transition-colors group"
            >
              <span className="text-sm font-light">View Rates & Registry</span>
              <ChevronRight className="w-4 h-4 text-gray-400 group-hover:text-gray-900 transition-colors" />
            </a>
          </div>
        </motion.div>

        {/* Contact Support */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.4 }}
          className="mt-12 pt-8 border-t border-gray-200 text-center"
        >
          <p className="text-sm text-gray-600 mb-4">
            Questions about your inquiry?
          </p>
          <div className="flex items-center justify-center gap-6">
            <a
              href="mailto:inquiries@katherinetaylor.com"
              className="inline-flex items-center gap-2 text-sm text-gray-900 hover:underline"
            >
              <Mail className="w-4 h-4" />
              Email Support
            </a>
            <a
              href="/faq"
              className="inline-flex items-center gap-2 text-sm text-gray-900 hover:underline"
            >
              <ExternalLink className="w-4 h-4" />
              View FAQ
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default InquiryConfirmed;
