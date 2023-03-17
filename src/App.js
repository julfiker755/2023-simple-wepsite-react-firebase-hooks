import React, { useState } from 'react';
import { RouterProvider } from 'react-router-dom';
import routes from './Component/routes/routes';


function App() {
   return (
      <RouterProvider router={routes} />
   )
}

export default App;
