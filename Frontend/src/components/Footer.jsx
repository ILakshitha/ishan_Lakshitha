import React from 'react'

export default function Footer() {
  return (
    <div style={{ backgroundColor: '#282c34', color: 'white', padding: '20px', textAlign: 'center' }}>
      <p>&copy; 2023 Your Company. All rights reserved.</p>
      <p>
        <a href="/privacy" style={{ color: 'white', textDecoration: 'none', margin: '0 10px' }}>Privacy Policy</a>
        <a href="/terms" style={{ color: 'white', textDecoration: 'none', margin: '0 10px' }}>Terms of Service</a>
      </p>
    </div>
  )
}
