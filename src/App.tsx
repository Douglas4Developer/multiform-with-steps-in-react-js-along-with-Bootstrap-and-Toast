import { Router } from './router';
import { FormProvider } from './contexts/FormContext';
import React from 'react';

const App = () => {
  return (
    <FormProvider>
      <Router />
    </FormProvider>
  );
}

export default App;