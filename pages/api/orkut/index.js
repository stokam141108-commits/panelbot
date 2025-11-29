export default function handler(req, res) {
  // Menentukan host dinamis dari request
  const host = req.headers.host || 'api-malzxyz.vercel.app';
  const protocol = req.headers['x-forwarded-proto'] || 'http';
  const baseUrl = `${protocol}://${host}`;

  res.status(200).json({
    statusCode: 200,
    success: true,
    message: 'QRIS API Service is running',
    documentation: `${baseUrl}/api-docs`,
    version: '1.0.0',
    endpoints: [
      {
        path: '/api/orkut/createpayment',
        method: 'GET/POST',
        parameters: ['apikey', 'username', 'token', 'amount'],
        description: 'Create a payment QRIS code with a specific amount',
        example: `${baseUrl}/orderkuota/createpayment?apikey=free&username=YOUR_USERNAME&token=YOUR_TOKEN&amount=1000`
      },
      {
        path: '/api/orkut/cekstatus',
        method: 'GET/POST',
        parameters: ['apikey', 'username', 'token'],
        description: 'Check the status of a QRIS payment',
        example: `${baseUrl}/orderkuota/mutasiqr?apikey=free&username=YOUR_USERNAME&token=YOUR_TOKEN`
      }
    ]
  });
} 