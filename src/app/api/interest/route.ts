import { NextResponse } from 'next/server';

/**
 * Route handler placeholder for Expression of Interest form submissions.
 * 
 * Note: Email integration (e.g., Nodemailer, Resend, or SendGrid) will be implemented
 * in a future phase once party recipient email addresses and credentials are provided.
 */
export async function POST(request: Request) {
  try {
    const contentType = request.headers.get('content-type') || '';
    
    let fullName = '';
    let email = '';
    let region = '';
    let comments = '';

    if (contentType.includes('application/json')) {
      const body = await request.json();
      fullName = body.fullName || '';
      email = body.email || '';
      region = body.region || '';
      comments = body.comments || '';
    } else if (contentType.includes('application/x-www-form-urlencoded') || contentType.includes('multipart/form-data')) {
      const formData = await request.formData();
      fullName = (formData.get('fullName') as string) || '';
      email = (formData.get('email') as string) || '';
      region = (formData.get('region') as string) || '';
      comments = (formData.get('comments') as string) || '';
    }

    if (!fullName || !email) {
      return NextResponse.json(
        { error: 'Full name and email address are required.' },
        { status: 400 }
      );
    }

    // Email service integration placeholder
    // Future implementation: Send email to Party email address

    return NextResponse.json(
      {
        message: 'Expression of interest submitted successfully (placeholder mode).',
        received: { fullName, email, region, comments },
      },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { error: 'An error occurred while processing the request.' },
      { status: 500 }
    );
  }
}
