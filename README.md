# Project Configuration

This section outlines the configuration settings required for various components of the project.

## Clerk Login System Configuration

### Clerk Public and Secret Keys

- **NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY**: The public key for Clerk authentication.
- **CLERK_SECRET_KEY**: The secret key for Clerk authentication.

### Clerk Routes

- **NEXT_PUBLIC_CLERK_SIGN_IN_URL**: URL for Clerk's sign-in page (Default: `/sign-in`).
- **NEXT_PUBLIC_CLERK_SIGN_UP_URL**: URL for Clerk's sign-up page (Default: `/sign-up`).
- **NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL**: URL to redirect users to after successful sign-in (Default: `/dashboard`).
- **NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL**: URL to redirect users to after successful sign-up (Default: `/dashboard`).

## OpenAI API Key

- **OPENAI_API_KEY**: Your API key for accessing OpenAI services.

## Replicate API Token

- **REPLICATE_API_TOKEN**: Token required for interacting with the Replicate API.

## Prisma Configuration

- **DATABASE_URL**: Database URL configuration, which may vary depending on your database provider (e.g., Planetscale).

## Stripe Configuration

### Stripe API Key

- **STRIPE_API_KEY**: Your API key for Stripe integration.

### Stripe Webhook Secret

- **STRIPE_WEBHOOK_SECRET**: Webhook secret key for Stripe. You can create a webhook [here](https://dashboard.stripe.com/test/webhooks/create?endpoint_location=local).

## Public URL Configuration

- **NEXT_PUBLIC_APP_URL**: The public URL for your application, which can be either a localhost URL during development or your production URL.
