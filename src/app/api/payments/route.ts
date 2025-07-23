import { NextRequest, NextResponse } from 'next/server';
import { getServerSession } from 'next-auth/next';
import { prisma } from '@/lib/prisma';
import { authOptions } from '@/lib/auth';

// GET /api/payments - Get all payment gateways
export async function GET(req: NextRequest) {
  try {
    // Check authentication
    const session = await getServerSession(authOptions);
    if (!session || session.user.role !== 'ADMIN') {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    // Get all payment gateways
    const paymentGateways = await prisma.paymentGateway.findMany();
    
    // If no gateways exist, create default ones
    if (paymentGateways.length === 0) {
      const defaultGateways = [
        {
          name: 'Stripe',
          enabled: false,
          testMode: true,
          config: {
            publishableKey: '',
            secretKey: '',
            webhookSecret: '',
          },
        },
        {
          name: 'PayPal',
          enabled: false,
          testMode: true,
          config: {
            clientId: '',
            clientSecret: '',
            webhookId: '',
          },
        },
        {
          name: 'Razorpay',
          enabled: false,
          testMode: true,
          config: {
            keyId: '',
            keySecret: '',
            webhookSecret: '',
          },
        },
      ];

      // Create default gateways
      await Promise.all(
        defaultGateways.map((gateway) =>
          prisma.paymentGateway.create({
            data: gateway,
          })
        )
      );

      // Fetch the newly created gateways
      const newGateways = await prisma.paymentGateway.findMany();
      return NextResponse.json(newGateways);
    }

    return NextResponse.json(paymentGateways);
  } catch (error) {
    console.error('Error fetching payment gateways:', error);
    return NextResponse.json(
      { error: 'Failed to fetch payment gateways' },
      { status: 500 }
    );
  }
}

// POST /api/payments - Create a new payment gateway
export async function POST(req: NextRequest) {
  try {
    // Check authentication
    const session = await getServerSession(authOptions);
    if (!session || session.user.role !== 'ADMIN') {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    // Get request body
    const data = await req.json();

    // Validate required fields
    if (!data.name || typeof data.config !== 'object') {
      return NextResponse.json(
        { error: 'Name and config are required' },
        { status: 400 }
      );
    }

    // Create new payment gateway
    const paymentGateway = await prisma.paymentGateway.create({
      data: {
        name: data.name,
        enabled: data.enabled || false,
        testMode: data.testMode !== undefined ? data.testMode : true,
        config: data.config,
      },
    });

    return NextResponse.json(paymentGateway);
  } catch (error) {
    console.error('Error creating payment gateway:', error);
    return NextResponse.json(
      { error: 'Failed to create payment gateway' },
      { status: 500 }
    );
  }
}

// PUT /api/payments - Update a payment gateway
export async function PUT(req: NextRequest) {
  try {
    // Check authentication
    const session = await getServerSession(authOptions);
    if (!session || session.user.role !== 'ADMIN') {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    // Get request body
    const data = await req.json();

    // Validate required fields
    if (!data.id) {
      return NextResponse.json(
        { error: 'Payment gateway ID is required' },
        { status: 400 }
      );
    }

    // Check if payment gateway exists
    const existingGateway = await prisma.paymentGateway.findUnique({
      where: { id: data.id },
    });

    if (!existingGateway) {
      return NextResponse.json(
        { error: 'Payment gateway not found' },
        { status: 404 }
      );
    }

    // Update payment gateway
    const updatedGateway = await prisma.paymentGateway.update({
      where: { id: data.id },
      data: {
        name: data.name || existingGateway.name,
        enabled: data.enabled !== undefined ? data.enabled : existingGateway.enabled,
        testMode: data.testMode !== undefined ? data.testMode : existingGateway.testMode,
        config: data.config || existingGateway.config,
      },
    });

    return NextResponse.json(updatedGateway);
  } catch (error) {
    console.error('Error updating payment gateway:', error);
    return NextResponse.json(
      { error: 'Failed to update payment gateway' },
      { status: 500 }
    );
  }
}

// DELETE /api/payments/:id - Delete a payment gateway
export async function DELETE(req: NextRequest) {
  try {
    // Check authentication
    const session = await getServerSession(authOptions);
    if (!session || session.user.role !== 'ADMIN') {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    // Get payment gateway ID from URL
    const url = new URL(req.url);
    const id = url.searchParams.get('id');

    if (!id) {
      return NextResponse.json(
        { error: 'Payment gateway ID is required' },
        { status: 400 }
      );
    }

    // Check if payment gateway exists
    const existingGateway = await prisma.paymentGateway.findUnique({
      where: { id },
    });

    if (!existingGateway) {
      return NextResponse.json(
        { error: 'Payment gateway not found' },
        { status: 404 }
      );
    }

    // Delete payment gateway
    await prisma.paymentGateway.delete({
      where: { id },
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Error deleting payment gateway:', error);
    return NextResponse.json(
      { error: 'Failed to delete payment gateway' },
      { status: 500 }
    );
  }
}
