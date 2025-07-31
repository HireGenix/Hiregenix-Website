import { NextRequest, NextResponse } from 'next/server';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/auth';

// GET /api/integrations - Get all integrations
export async function GET(req: NextRequest) {
  try {
    // Check authentication
    const session = await getServerSession(authOptions);
    if (!session?.user) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    // Mock integrations data
    const integrations = [
      {
        id: '1',
        name: 'Google Analytics',
        type: 'analytics',
        status: 'connected',
        config: {
          trackingId: 'UA-123456789-1',
          anonymizeIp: true,
        },
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
      },
      {
        id: '2',
        name: 'Google Tag Manager',
        type: 'tag_manager',
        status: 'connected',
        config: {
          containerId: 'GTM-ABCDEF',
        },
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
      },
      {
        id: '3',
        name: 'Facebook Pixel',
        type: 'pixel',
        status: 'disconnected',
        config: {},
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
      },
      {
        id: '4',
        name: 'LinkedIn Insight',
        type: 'pixel',
        status: 'disconnected',
        config: {},
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
      },
      {
        id: '5',
        name: 'Stripe',
        type: 'payment',
        status: 'connected',
        config: {
          publicKey: 'pk_test_*****',
          webhookSecret: 'whsec_*****',
        },
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
      },
      {
        id: '6',
        name: 'PayPal',
        type: 'payment',
        status: 'disconnected',
        config: {},
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
      },
    ];

    return NextResponse.json(integrations);
  } catch (error) {
    console.error('Error fetching integrations:', error);
    return NextResponse.json(
      { error: 'Failed to fetch integrations' },
      { status: 500 }
    );
  }
}

// POST /api/integrations - Create or update an integration
export async function POST(req: NextRequest) {
  try {
    // Check authentication
    const session = await getServerSession(authOptions);
    if (!session?.user) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    // Get request body
    const body = await req.json();
    
    // Validate required fields
    if (!body.name || !body.type) {
      return NextResponse.json(
        { error: 'Name and type are required' },
        { status: 400 }
      );
    }

    // Mock creating/updating an integration
    const integration = {
      id: body.id || Math.random().toString(36).substring(7),
      name: body.name,
      type: body.type,
      status: body.config && Object.keys(body.config).length > 0 ? 'connected' : 'disconnected',
      config: body.config || {},
      createdAt: body.id ? body.createdAt : new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    };

    return NextResponse.json(integration, { status: 201 });
  } catch (error) {
    console.error('Error creating/updating integration:', error);
    return NextResponse.json(
      { error: 'Failed to create/update integration' },
      { status: 500 }
    );
  }
}
