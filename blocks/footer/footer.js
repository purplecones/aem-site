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

  // Dynamically import your FooterApp (which is now pure JS)
  const { default: FooterApp } = await import('./FooterApp.js');

  // Create a container for React
  const reactRoot = document.createElement('div');
  block.append(reactRoot);

  // Render the React component using the global React and ReactDOM from CDN
  ReactDOM.createRoot(reactRoot).render(
    React.createElement(FooterApp, { fragment })
  );
}
