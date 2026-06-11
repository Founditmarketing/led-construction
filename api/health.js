export default function handler(req, res) {
  res.status(200).json({
    ok: true,
    commit: process.env.VERCEL_GIT_COMMIT_SHA || 'unknown',
    deployedAt: process.env.VERCEL_DEPLOYMENT_CREATED_AT || 'unknown',
    hasResendKey: Boolean(process.env.RESEND_API_KEY),
  });
}
