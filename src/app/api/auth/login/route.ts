// app/api/auth/login/route.ts
import { NextRequest, NextResponse } from 'next/server';
import { LoginCredentials } from '@/types/auth';
import { mockUsers } from '@/_mockApis/user/data';
import { generateMockToken } from '@/utils/helper';

export async function POST(request: NextRequest) {
  try {
    // Add artificial delay to simulate network latency
    await new Promise((resolve) => setTimeout(resolve, 1000));

    // Get credentials from request body
    const credentials: LoginCredentials = await request.json();

    // Validate input
    if (!credentials.email || !credentials.password) {
      return NextResponse.json({ error: 'Email and password are required' }, { status: 400 });
    }

    // Find user in mock data
    const user = mockUsers.find((u) => u.email.toLowerCase() === credentials.email.toLowerCase() && u.password === credentials.password);

    // If no user found or password doesn't match
    if (!user) {
      return NextResponse.json({ error: 'Invalid email or password' }, { status: 401 });
    }

    // Generate mock token
    const token = generateMockToken(user.id);

    // Return user data and token (excluding password)
    const { password, ...userWithoutPassword } = user;

    return NextResponse.json({
      user: userWithoutPassword,
      token
    });
  } catch (error) {
    console.error('Login error:', error);

    return NextResponse.json({ error: 'An error occurred during login' }, { status: 500 });
  }
}

// Optional: Add a route to verify token and get current user
export async function GET(request: NextRequest) {
  try {
    // Get token from Authorization header
    const authHeader = request.headers.get('Authorization');
    if (!authHeader?.startsWith('Bearer ')) {
      return NextResponse.json({ error: 'No token provided' }, { status: 401 });
    }

    const token = authHeader.split(' ')[1];

    // In a real app, you would verify the JWT token
    // For mock purposes, we'll just check if it's properly formatted
    const [header, payload, signature] = token.split('.');
    if (!header || !payload || !signature) {
      return NextResponse.json({ error: 'Invalid token' }, { status: 401 });
    }

    // Decode the payload
    const decodedPayload = JSON.parse(Buffer.from(payload, 'base64').toString());

    // Find user by ID from token
    const user = mockUsers.find((u) => u.id === decodedPayload.sub);
    if (!user) {
      return NextResponse.json({ error: 'User not found' }, { status: 404 });
    }

    // Return user data without password
    const { password, ...userWithoutPassword } = user;
    return NextResponse.json({ user: userWithoutPassword });
  } catch (error) {
    console.error('Auth verification error:', error);
    return NextResponse.json({ error: 'An error occurred during authentication' }, { status: 500 });
  }
}
