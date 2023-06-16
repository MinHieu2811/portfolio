import { google } from 'googleapis'

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(500).json({ message: 'Not this method!' })
  }

  const {email, phone, message} = req.body

  if (!email || !phone || !message) {
    return res.status(500).json({ message: 'Invalid data' })
  }

  try {
    const auth = new google.auth.GoogleAuth({
      credentials: {
        client_email: process.env.CLIENT_EMAIL,
        client_id: process.env.CLIENT_ID,
        private_key: process.env.PRIVATE_KEY.replace(/\\n/g, '\n')
      },
      scopes: [
        'https://www.googleapis.com/auth/drive',
        'https://www.googleapis.com/auth/drive.file',
        'https://www.googleapis.com/auth/spreadsheets'
      ]
    })

    const sheets = google.sheets({
      auth,
      version: 'v4'
    })

    const date = new Date().toLocaleString('en-US', { timeZone: 'Asia/Ho_Chi_Minh' });

    await sheets.spreadsheets.values.append({
      spreadsheetId: process.env.SPREADSHEET_ID,
      range: 'Sheet1!A2:C',
      valueInputOption: 'USER_ENTERED',
      requestBody: {
        values: [[date, email, phone, message]]
      }
    })

    res.status(201)?.json({success: true})
  } catch (error) {
    console.log(error);
    return res.status(500).json(error)
  }
}
