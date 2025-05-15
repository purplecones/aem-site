export default function FooterApp(props) {
  return React.createElement(
    'footer',
    null,
    props.fragment &&
      React.createElement('div', {
        dangerouslySetInnerHTML: { __html: props.fragment.innerHTML },
      }),
    React.createElement(
      'div',
      { style: { marginTop: '1em', color: '#888' } },
      React.createElement('p', null, 'This footer is powered by React!')
    )
  );
} 