import * as React from 'react';

// @ts-ignore
const Button = React.lazy(() => import("@mfe/Button"));

export function App() {
  return (
    <>
      <h1>This is main App</h1>
      <div>
        <React.Suspense fallback={'loading'}>
          <Button />
        </React.Suspense>
      </div>
    </>
  );
}

export default App;
