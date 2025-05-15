import React from 'react';

export default function FooterApp({ fragment }) {
  return (
    <footer>
      {/* Render the fragment's HTML if present */}
      {fragment && (
        <div dangerouslySetInnerHTML={{ __html: fragment.innerHTML }} />
      )}
      <div style={{ marginTop: '1em', color: '#888' }}>
        <p>This footer is powered by React!</p>
      </div>
    </footer>
  );
} 