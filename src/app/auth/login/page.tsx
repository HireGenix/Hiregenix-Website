'use client';

import React, { useState, Suspense } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { signIn } from 'next-auth/react';
import {
  Box,
  Button,
  Container,
  TextField,
  Typography,
  Paper,
  Link as MuiLink,
  Alert,
  CircularProgress,
} from '@mui/material';
import Link from 'next/link';

// Component that uses useSearchParams wrapped in Suspense
function LoginContent() {
  const router = useRouter();
  const searchParams = useSearchParams();
  // Fix for incorrect callback URLs that contain "login"
  let callbackUrl = searchParams.get('callbackUrl') || '/admin';
  
  // If the callback URL contains "/admin/login", redirect to "/admin" instead
  if (callbackUrl.includes('/admin/login')) {
    callbackUrl = '/admin';
  }
  const error = searchParams.get('error');

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(
    error === 'CredentialsSignin' ? 'Invalid email or password' : error
  );
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setErrorMessage(null);

    try {
      const result = await signIn('credentials', {
        redirect: false,
        email,
        password,
        callbackUrl,
      });

      if (result?.error) {
        setErrorMessage('Invalid email or password');
        setLoading(false);
      } else {
        router.push(callbackUrl);
      }
    } catch (error) {
      setErrorMessage('An error occurred. Please try again.');
      setLoading(false);
    }
  };

  return (
    <Container maxWidth="sm" sx={{ py: 8 }}>
      <Paper
        elevation={3}
        sx={{
          p: 4,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          borderRadius: 2,
        }}
      >
        <Box sx={{ mb: 4, textAlign: 'center' }}>
          <Typography variant="h4" component="h1" fontWeight={700} color="primary" sx={{ mb: 1 }}>
            HireGenix CMS
          </Typography>
          <Typography variant="h5" component="h2" fontWeight={600}>
            Sign in to continue
          </Typography>
        </Box>

        {errorMessage && (
          <Alert severity="error" sx={{ mb: 3, width: '100%' }}>
            {errorMessage}
          </Alert>
        )}

        <Box component="form" onSubmit={handleSubmit} sx={{ width: '100%' }}>
          <TextField
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            disabled={loading}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            disabled={loading}
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2, py: 1.5 }}
            disabled={loading}
          >
            {loading ? <CircularProgress size={24} /> : 'Sign In'}
          </Button>
        </Box>

        <Box sx={{ mt: 2, textAlign: 'center' }}>
          <Typography variant="body2" color="text.secondary">
            Don&apos;t have an account?{' '}
            <MuiLink component={Link} href="/auth/register" variant="body2">
              Sign up
            </MuiLink>
          </Typography>
          <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>
            <MuiLink component={Link} href="/auth/forgot-password" variant="body2">
              Forgot password?
            </MuiLink>
          </Typography>
        </Box>
      </Paper>

      <Box sx={{ mt: 4, textAlign: 'center' }}>
        <Typography variant="body2" color="text.secondary">
          <MuiLink component={Link} href="/" variant="body2">
            Back to website
          </MuiLink>
        </Typography>
      </Box>
    </Container>
  );
}

// Loading fallback for Suspense
function LoginFallback() {
  return (
    <Container maxWidth="sm" sx={{ py: 8, display: 'flex', justifyContent: 'center' }}>
      <CircularProgress />
    </Container>
  );
}

export default function LoginPage() {
  return (
    <Suspense fallback={<LoginFallback />}>
      <LoginContent />
    </Suspense>
  );
}
