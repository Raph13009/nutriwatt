import type { APIRoute } from 'astro';

export const POST: APIRoute = async ({ request }) => {
  try {
    const data = await request.json();
    const firstName = data.firstName;
    const lastName = data.lastName;
    const email = data.email;
    const phone = data.phone;
    const message = data.message;

    // Validate the data
    if (!firstName || !lastName || !email || !message) {
      return new Response(
        JSON.stringify({ 
          error: 'Missing required fields' 
        }),
        { 
          status: 400,
          headers: { 'Content-Type': 'application/json' }
        }
      );
    }

    // Send email using Web3Forms (free service)
    // IMPORTANT: Get a free access key from https://web3forms.com
    // 1. Visit https://web3forms.com
    // 2. Enter your email (raphaellevy027@gmail.com)
    // 3. Get your free access key
    // 4. Set it as an environment variable: WEB3FORMS_ACCESS_KEY
    // Or replace 'YOUR_ACCESS_KEY_HERE' below with your key
    const accessKey = import.meta.env.WEB3FORMS_ACCESS_KEY || 'YOUR_ACCESS_KEY_HERE';
    
    const formData = new FormData();
    formData.append('access_key', accessKey);
    formData.append('subject', `New Contact Form Submission from ${firstName} ${lastName}`);
    formData.append('from_name', `${firstName} ${lastName}`);
    formData.append('email', email.toString());
    formData.append('replyto', email.toString());
    formData.append('phone', phone?.toString() || '');
    formData.append('message', `Name: ${firstName} ${lastName}\nEmail: ${email}\nPhone: ${phone || 'N/A'}\n\nMessage:\n${message}`);
    formData.append('to', 'raphaellevy027@gmail.com');

    const response = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      body: formData
    });

    const result = await response.json();

    if (result.success) {
      return new Response(
        JSON.stringify({ 
          success: true,
          message: 'Message sent successfully!' 
        }),
        { 
          status: 200,
          headers: { 'Content-Type': 'application/json' }
        }
      );
    } else {
      return new Response(
        JSON.stringify({ 
          error: 'Failed to send message. Please try again.' 
        }),
        { 
          status: 500,
          headers: { 'Content-Type': 'application/json' }
        }
      );
    }
  } catch (error) {
    console.error('Contact form error:', error);
    return new Response(
      JSON.stringify({ 
        error: 'An error occurred. Please try again later.' 
      }),
      { 
        status: 500,
        headers: { 'Content-Type': 'application/json' }
      }
    );
  }
};

