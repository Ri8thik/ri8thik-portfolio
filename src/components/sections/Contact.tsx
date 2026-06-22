import React, { useState } from 'react';
import { Send, CheckCircle, Phone, MapPin, Mail, Clock } from 'lucide-react';
import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa';
import { socialLinks } from '../../data/portfolio';
import { useIntersection } from '../../hooks/useIntersection';
import SectionHeading from '../shared/SectionHeading';

interface ContactProps {
  isDark: boolean;
}

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
}

const contactInfo = [
  {
    icon: <Mail size={20} />,
    label: 'Email',
    value: socialLinks.email,
    href: `mailto:${socialLinks.email}`,
    color: 'from-blue-500 to-indigo-500',
  },
  {
    icon: <Phone size={20} />,
    label: 'Phone',
    value: socialLinks.phone,
    href: `tel:${socialLinks.phone}`,
    color: 'from-indigo-500 to-purple-500',
  },
  {
    icon: <MapPin size={20} />,
    label: 'Location',
    value: socialLinks.location,
    href: 'https://maps.google.com/?q=Delhi+NCR,India',
    color: 'from-purple-500 to-pink-500',
  },
  {
    icon: <Clock size={20} />,
    label: 'Availability',
    value: 'Mon - Sat, 9AM - 7PM IST',
    href: null,
    color: 'from-pink-500 to-rose-500',
  },
];

const socialItems = [
  { icon: <FaGithub size={22} />, label: 'GitHub', href: socialLinks.github, color: 'hover:bg-gray-700' },
  { icon: <FaLinkedin size={22} />, label: 'LinkedIn', href: socialLinks.linkedin, color: 'hover:bg-blue-600' },
  { icon: <FaInstagram size={22} />, label: 'Instagram', href: socialLinks.instagram, color: 'hover:bg-pink-600' },
  { icon: <Mail size={22} />, label: 'Email', href: `mailto:${socialLinks.email}`, color: 'hover:bg-indigo-600' },
];

const Contact: React.FC<ContactProps> = ({ isDark }) => {
  const [formData, setFormData] = useState<FormData>({
    name: '', email: '', subject: '', message: ''
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const { ref: leftRef, isVisible: leftVisible } = useIntersection({ threshold: 0.2 });
  const { ref: rightRef, isVisible: rightVisible } = useIntersection({ threshold: 0.2 });

  const validate = (): boolean => {
    const newErrors: FormErrors = {};
    if (!formData.name.trim() || formData.name.trim().length < 2) {
      newErrors.name = 'Name must be at least 2 characters';
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email || !emailRegex.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }
    if (!formData.subject.trim() || formData.subject.trim().length < 5) {
      newErrors.subject = 'Subject must be at least 5 characters';
    }
    if (!formData.message.trim() || formData.message.trim().length < 20) {
      newErrors.message = 'Message must be at least 20 characters';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    setIsSubmitting(false);
    setIsSuccess(true);
    setFormData({ name: '', email: '', subject: '', message: '' });
    setTimeout(() => setIsSuccess(false), 5000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormErrors]) {
      setErrors(prev => ({ ...prev, [name]: undefined }));
    }
  };

   const inputBase = `w-full px-5 py-3.5 rounded-lg border text-sm outline-none transition-all duration-300 focus:ring-2 focus:ring-indigo-500/50 ${
     isDark
       ? 'bg-gray-800/50 border-gray-700/50 text-white placeholder-gray-600 focus:border-indigo-500 focus:bg-gray-800'
       : 'bg-gray-50/50 border-gray-200/50 text-gray-900 placeholder-gray-500 focus:border-indigo-400 focus:bg-white'
   }`;

  const errorClass = `border-red-500/50 focus:ring-red-500/30 focus:border-red-500`;

  return (
    <section
      id="contact"
      className={`py-32 md:py-40 relative overflow-hidden ${isDark ? 'bg-gray-950' : 'bg-gray-50'}`}
      aria-label="Contact section"
    >
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className={`absolute top-0 right-0 w-96 h-96 rounded-full blur-3xl opacity-5 ${isDark ? 'bg-indigo-500' : 'bg-indigo-300'}`}></div>
        <div className={`absolute bottom-0 left-0 w-64 h-64 rounded-full blur-3xl opacity-5 ${isDark ? 'bg-purple-500' : 'bg-purple-300'}`}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <SectionHeading
          badge="💬 Get In Touch"
          title="Let's Work"
          highlight="Together"
          subtitle="Have a project in mind? I'd love to hear about it. Send me a message and let's create something amazing!"
          isDark={isDark}
        />

        <div className="grid lg:grid-cols-5 gap-10">
          {/* Left - Contact Info */}
          <div
            ref={leftRef as React.RefObject<HTMLDivElement>}
            className={`lg:col-span-2 transition-all duration-700 ${leftVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'}`}
          >
            {/* Availability Banner */}
            <div className={`p-5 rounded-2xl border mb-6 ${isDark ? 'bg-gray-900/70 border-gray-700/50' : 'bg-white border-gray-200 shadow-sm'}`}>
              <div className="flex items-center gap-3 mb-3">
                <div className="w-3 h-3 rounded-full bg-green-400 animate-pulse"></div>
                <span className="font-semibold text-green-400">Available for Work</span>
              </div>
              <p className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                Currently open to full-time positions, freelance projects, and exciting collaborations. Let's build something great together!
              </p>
            </div>

            {/* Contact Details */}
            <div className="space-y-4 mb-6">
              {contactInfo.map((info) => (
                <div key={info.label}>
                  {info.href ? (
                    <a
                      href={info.href}
                      target={info.href.startsWith('http') ? '_blank' : undefined}
                      rel="noopener noreferrer"
                      className={`flex items-center gap-4 p-4 rounded-2xl border group transition-all duration-300 hover:-translate-y-1 hover:shadow-lg ${
                        isDark
                          ? 'bg-gray-900/70 border-gray-700/50 hover:border-indigo-500/30'
                          : 'bg-white border-gray-200 hover:border-indigo-300 shadow-sm'
                      }`}
                    >
                      <div className={`w-11 h-11 rounded-xl bg-gradient-to-br ${info.color} flex items-center justify-center text-white flex-shrink-0 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                        {info.icon}
                      </div>
                      <div>
                        <p className={`text-xs font-medium mb-0.5 ${isDark ? 'text-gray-500' : 'text-gray-400'}`}>{info.label}</p>
                        <p className={`text-sm font-semibold ${isDark ? 'text-gray-200' : 'text-gray-800'}`}>{info.value}</p>
                      </div>
                    </a>
                  ) : (
                    <div className={`flex items-center gap-4 p-4 rounded-2xl border ${
                      isDark ? 'bg-gray-900/70 border-gray-700/50' : 'bg-white border-gray-200 shadow-sm'
                    }`}>
                      <div className={`w-11 h-11 rounded-xl bg-gradient-to-br ${info.color} flex items-center justify-center text-white flex-shrink-0 shadow-lg`}>
                        {info.icon}
                      </div>
                      <div>
                        <p className={`text-xs font-medium mb-0.5 ${isDark ? 'text-gray-500' : 'text-gray-400'}`}>{info.label}</p>
                        <p className={`text-sm font-semibold ${isDark ? 'text-gray-200' : 'text-gray-800'}`}>{info.value}</p>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Social Links */}
            <div className={`p-5 rounded-2xl border ${isDark ? 'bg-gray-900/70 border-gray-700/50' : 'bg-white border-gray-200 shadow-sm'}`}>
              <p className={`text-sm font-semibold mb-4 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>Connect with me</p>
              <div className="flex gap-3">
                {socialItems.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    target={item.href.startsWith('http') ? '_blank' : undefined}
                    rel="noopener noreferrer"
                    aria-label={item.label}
                    className={`flex-1 flex items-center justify-center p-3 rounded-xl transition-all duration-300 hover:scale-110 hover:text-white ${
                      isDark ? 'bg-gray-800 text-gray-400' : 'bg-gray-100 text-gray-600'
                    } ${item.color} focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500`}
                  >
                    {item.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Right - Contact Form */}
          <div
            ref={rightRef as React.RefObject<HTMLDivElement>}
            className={`lg:col-span-3 transition-all duration-700 delay-200 ${rightVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'}`}
          >
            <div className={`p-6 md:p-8 rounded-2xl border ${isDark ? 'bg-gray-900/70 border-gray-700/50' : 'bg-white border-gray-200 shadow-sm'}`}>
              {isSuccess ? (
                <div className="flex flex-col items-center justify-center py-12 text-center animate-scale-in">
                  <div className="w-20 h-20 rounded-full bg-green-500/10 flex items-center justify-center mb-5 border-2 border-green-500/30">
                    <CheckCircle size={40} className="text-green-400" />
                  </div>
                  <h3 className={`text-2xl font-bold mb-2 ${isDark ? 'text-white' : 'text-gray-900'}`}>Message Sent! 🎉</h3>
                  <p className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                    Thank you for reaching out! I'll get back to you within 24 hours.
                  </p>
                  <div className="mt-6 flex flex-wrap gap-2 justify-center">
                    {['Angular', 'TypeScript', 'Spring Boot'].map(tech => (
                      <span key={tech} className="px-3 py-1 rounded-full text-xs bg-indigo-500/10 text-indigo-400 border border-indigo-500/20">{tech}</span>
                    ))}
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate>
                  <h3 className={`text-xl font-bold mb-6 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                    Send a Message 📨
                  </h3>

                  <div className="grid sm:grid-cols-2 gap-4 mb-4">
                    {/* Name */}
                    <div>
                      <label htmlFor="name" className={`block text-sm font-medium mb-2 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                        Full Name <span className="text-red-400">*</span>
                      </label>
                      <input
                        id="name"
                        name="name"
                        type="text"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Rithik Soun"
                        className={`${inputBase} ${errors.name ? errorClass : ''}`}
                        aria-describedby={errors.name ? 'name-error' : undefined}
                        aria-invalid={!!errors.name}
                      />
                      {errors.name && (
                        <p id="name-error" className="mt-1.5 text-xs text-red-400 flex items-center gap-1">
                          ⚠️ {errors.name}
                        </p>
                      )}
                    </div>

                    {/* Email */}
                    <div>
                      <label htmlFor="email" className={`block text-sm font-medium mb-2 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                        Email Address <span className="text-red-400">*</span>
                      </label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="rithik@example.com"
                        className={`${inputBase} ${errors.email ? errorClass : ''}`}
                        aria-describedby={errors.email ? 'email-error' : undefined}
                        aria-invalid={!!errors.email}
                      />
                      {errors.email && (
                        <p id="email-error" className="mt-1.5 text-xs text-red-400 flex items-center gap-1">
                          ⚠️ {errors.email}
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Subject */}
                  <div className="mb-4">
                    <label htmlFor="subject" className={`block text-sm font-medium mb-2 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                      Subject <span className="text-red-400">*</span>
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      className={`${inputBase} ${errors.subject ? errorClass : ''}`}
                      aria-describedby={errors.subject ? 'subject-error' : undefined}
                    >
                      <option value="">Select a subject...</option>
                      <option value="Job Opportunity">💼 Job Opportunity</option>
                      <option value="Freelance Project">🚀 Freelance Project</option>
                      <option value="Collaboration">🤝 Collaboration</option>
                      <option value="Technical Discussion">💬 Technical Discussion</option>
                      <option value="Other">📝 Other</option>
                    </select>
                    {errors.subject && (
                      <p id="subject-error" className="mt-1.5 text-xs text-red-400 flex items-center gap-1">
                        ⚠️ {errors.subject}
                      </p>
                    )}
                  </div>

                  {/* Message */}
                  <div className="mb-6">
                    <label htmlFor="message" className={`block text-sm font-medium mb-2 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                      Message <span className="text-red-400">*</span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={5}
                      placeholder="Tell me about your project, opportunity, or just say hi! 👋"
                      className={`${inputBase} resize-none ${errors.message ? errorClass : ''}`}
                      aria-describedby={errors.message ? 'message-error' : undefined}
                      aria-invalid={!!errors.message}
                    />
                    <div className="flex justify-between items-start mt-1.5">
                      {errors.message ? (
                        <p id="message-error" className="text-xs text-red-400 flex items-center gap-1">
                          ⚠️ {errors.message}
                        </p>
                      ) : <span />}
                      <span className={`text-xs ${isDark ? 'text-gray-600' : 'text-gray-400'}`}>
                        {formData.message.length}/500
                      </span>
                    </div>
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full flex items-center justify-center gap-2 px-6 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 text-white font-semibold rounded-xl transition-all duration-300 hover:scale-[1.02] shadow-xl shadow-indigo-500/25 disabled:opacity-70 disabled:cursor-not-allowed disabled:hover:scale-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500"
                    aria-label="Send message"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send size={18} />
                        Send Message
                      </>
                    )}
                  </button>

                  <p className={`text-center text-xs mt-4 ${isDark ? 'text-gray-500' : 'text-gray-400'}`}>
                    🔒 Your information is secure and will never be shared.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
