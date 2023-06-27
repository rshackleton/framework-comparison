import * as React from 'react';

export type ColorOnVisibleProps = React.PropsWithChildren<{}>;

const ColorOnVisible: React.FC<ColorOnVisibleProps> = ({ children }) => {
  const refContainer = React.useRef<HTMLDivElement>(null);
  const [color, setColor] = React.useState('red');

  React.useEffect(() => {
    const element = refContainer.current;

    if (!element) {
      return;
    }

    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        setColor('blue');
      }
    });

    observer.observe(element);
  }, []);

  return (
    <section
      ref={refContainer}
      style={
        {
          background: 'var(--color)',
          padding: '4rem',
          transition: 'background-color 0.6s ease-out',
          '--color': color,
        } as React.CSSProperties
      }
    >
      {children}
    </section>
  );
};

export default ColorOnVisible;
