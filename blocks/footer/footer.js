import { getMetadata } from '../../scripts/aem.js';
import { loadFragment } from '../fragment/fragment.js';

/**
 * loads and decorates the footer
 * @param {Element} block The footer block element
 */
export default async function decorate(block) {
  // load footer as fragment
  const footerMeta = getMetadata('footer');
  const footerPath = footerMeta ? new URL(footerMeta, window.location).pathname : '/footer';
  const fragment = await loadFragment(footerPath);

  // Clear the block
  block.textContent = '';

  // Dynamically import React, ReactDOM, and FooterApp
  const [React, ReactDOM, FooterApp] = await Promise.all([
    import('react'),
    import('react-dom/client.js'),
    import('../../dist/blocks/footer/FooterApp.js'),
  ]);

  // Create a container for React
  const reactRoot = document.createElement('div');
  block.append(reactRoot);

  // Render the React component, passing the fragment as a prop
  const root = ReactDOM.createRoot(reactRoot);
  root.render(React.createElement(FooterApp.default, { fragment }));
}
