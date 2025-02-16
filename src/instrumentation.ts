export async function register() {
  if (process.env.NEXT_RUNTIME === 'nodejs' && process.env.NODE_ENV !== 'production') {
    const { server } = await import('./mocks/node');
    server.listen({ onUnhandledRequest: 'bypass' });
  }
}
