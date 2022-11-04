import { useState } from 'react';
import ErrorMessage from '../ErrorMessage';

export const withErrorApi = (Component) => {
  return (props) => {
    const [apiError, setApiError] = useState(false);
    return (
      <>
      {(apiError) ?
        (
          <ErrorMessage />
        ) :
        <Component 
          setApiError={setApiError}
          {...props}
        />
      }
      </>
    )
  }
}