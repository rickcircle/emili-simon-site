export default async function handler(req, res) {
  const { code } = req.query;
  const clientId = process.env.GITHUB_CLIENT_ID;
  const clientSecret = process.env.GITHUB_CLIENT_SECRET;

  if (!code) {
    res.status(400).send('Missing OAuth code');
    return;
  }

  const tokenRes = await fetch('https://github.com/login/oauth/access_token', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
    body: JSON.stringify({ client_id: clientId, client_secret: clientSecret, code }),
  });
  const data = await tokenRes.json();

  if (data.error || !data.access_token) {
    res.status(400).setHeader('Content-Type', 'text/html').send(
      `<script>window.opener.postMessage('authorization:github:error:${JSON.stringify(data.error_description || 'auth failed')}', '*');</script>`
    );
    return;
  }

  const token = data.access_token;
  const html = `
    <script>
      (function() {
        function receiveMessage(e) {
          window.opener.postMessage(
            'authorization:github:success:' + JSON.stringify({ token: '${token}', provider: 'github' }),
            e.origin
          );
          window.removeEventListener('message', receiveMessage, false);
        }
        window.addEventListener('message', receiveMessage, false);
        window.opener.postMessage('authorizing:github', '*');
      })();
    </script>
  `;
  res.setHeader('Content-Type', 'text/html');
  res.status(200).send(html);
}
