/**
 * ContactForm Component
 * 
 * Sends contact form submissions via Web3Forms API.
 * 
 * Environment Variable Setup:
 * 1. Create a `.env.local` file in the project root
 * 2. Add: VITE_WEB3FORMS_KEY=your-access-key-here
 * 3. Do NOT commit `.env.local` to version control (it's in .gitignore)
 * 4. Restart dev server after adding env var
 * 
 * Get your Web3Forms access key from: https://web3forms.com
 */

import React, { useState } from 'react';
import { ArrowRight, Loader2 } from 'lucide-react';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: '',
  });
  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null); // 'success' | 'error' | null

  // Get access key from env var or use fallback (developer should replace with env var)
  const accessKey = import.meta.env.VITE_WEB3FORMS_KEY || '19871348-d2cd-4940-877b-85914d67cc19';

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Nama wajib diisi';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email wajib diisi';
    } else if (!validateEmail(formData.email)) {
      newErrors.email = 'Masukkan alamat email yang valid';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Pesan wajib diisi';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: '',
      }));
    }
    // Clear submit status when user modifies form
    if (submitStatus) {
      setSubmitStatus(null);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsLoading(true);
    setSubmitStatus(null);

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          access_key: accessKey,
          name: formData.name,
          email: formData.email,
          company: formData.company || '',
          message: formData.message,
          _gotcha: '', // Honeypot field
        }),
      });

      const data = await response.json();

      if (response.ok && data.success) {
        setSubmitStatus('success');
        setFormData({
          name: '',
          email: '',
          company: '',
          message: '',
        });
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      console.error('Form submission error:', error);
      setSubmitStatus('error');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className='mt-8 grid sm:grid-cols-2 gap-4' noValidate>
      {/* Honeypot field - hidden from users */}
      <input
        type='text'
        name='_gotcha'
        tabIndex={-1}
        autoComplete='off'
        style={{ position: 'absolute', left: '-9999px' }}
        aria-hidden='true'
      />

      {/* Name field */}
      <div className='sm:col-span-2 sm:col-start-1'>
        <label htmlFor='name' className='sr-only'>
          Nama Anda
        </label>
        <input
          id='name'
          name='name'
          type='text'
          value={formData.name}
          onChange={handleChange}
          placeholder='Nama Anda'
          required
          aria-required='true'
          aria-invalid={errors.name ? 'true' : 'false'}
          aria-describedby={errors.name ? 'name-error' : undefined}
          className={`p-3 rounded-md text-slate-800 w-full ${errors.name ? 'border-2 border-red-500' : 'border border-slate-300'
            } focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent`}
        />
        {errors.name && (
          <p id='name-error' className='mt-1 text-sm text-red-200' role='alert'>
            {errors.name}
          </p>
        )}
      </div>

      {/* Email field */}
      <div className='sm:col-span-2 sm:col-start-1'>
        <label htmlFor='email' className='sr-only'>
          Alamat Email
        </label>
        <input
          id='email'
          name='email'
          type='email'
          value={formData.email}
          onChange={handleChange}
          placeholder='Alamat Email'
          required
          aria-required='true'
          aria-invalid={errors.email ? 'true' : 'false'}
          aria-describedby={errors.email ? 'email-error' : undefined}
          className={`p-3 rounded-md text-slate-800 w-full ${errors.email ? 'border-2 border-red-500' : 'border border-slate-300'
            } focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent`}
        />
        {errors.email && (
          <p id='email-error' className='mt-1 text-sm text-red-200' role='alert'>
            {errors.email}
          </p>
        )}
      </div>

      {/* Company field (optional) */}
      <div className='sm:col-span-2'>
        <label htmlFor='company' className='sr-only'>
          Perusahaan (opsional)
        </label>
        <input
          id='company'
          name='company'
          type='text'
          value={formData.company}
          onChange={handleChange}
          placeholder='Perusahaan (opsional)'
          className='p-3 rounded-md text-slate-800 w-full border border-slate-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent'
        />
      </div>

      {/* Message field */}
      <div className='sm:col-span-2'>
        <label htmlFor='message' className='sr-only'>
          Ceritakan tentang proyek Anda
        </label>
        <textarea
          id='message'
          name='message'
          value={formData.message}
          onChange={handleChange}
          placeholder='Ceritakan tentang proyek Anda'
          required
          aria-required='true'
          aria-invalid={errors.message ? 'true' : 'false'}
          aria-describedby={errors.message ? 'message-error' : undefined}
          rows={5}
          className={`p-3 rounded-md text-slate-800 w-full resize-y ${errors.message ? 'border-2 border-red-500' : 'border border-slate-300'
            } focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent`}
        />
        {errors.message && (
          <p id='message-error' className='mt-1 text-sm text-red-200' role='alert'>
            {errors.message}
          </p>
        )}
      </div>

      {/* Submit button */}
      <div className='sm:col-span-2'>
        <button
          type='submit'
          disabled={isLoading}
          aria-busy={isLoading}
          className='w-full inline-flex items-center justify-center gap-3 bg-white text-indigo-600 rounded-md px-6 py-3 font-semibold hover:opacity-95 disabled:opacity-50 disabled:cursor-not-allowed focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-indigo-600'
        >
          {isLoading ? (
            <>
              <Loader2 size={16} className='animate-spin' aria-hidden='true' />
              Mengirim...
            </>
          ) : (
            <>
              Kirim Pesan <ArrowRight size={16} aria-hidden='true' />
            </>
          )}
        </button>
      </div>

      {/* Status messages with aria-live */}
      <div className='sm:col-span-2' aria-live='polite' aria-atomic='true'>
        {submitStatus === 'success' && (
          <div
            className='mt-4 p-4 rounded-md bg-green-500 text-white text-sm'
            role='status'
          >
            Terima kasih! Pesan Anda berhasil terkirim. Kami akan segera menghubungi Anda.
          </div>
        )}
        {submitStatus === 'error' && (
          <div
            className='mt-4 p-4 rounded-md bg-red-500 text-white text-sm'
            role='alert'
          >
            Maaf, terjadi kesalahan saat mengirim pesan. Silakan coba lagi atau hubungi kami langsung via WhatsApp.
          </div>
        )}
      </div>
    </form>
  );
}
