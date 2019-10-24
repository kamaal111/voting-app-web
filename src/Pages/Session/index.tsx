import React, { useContext, useEffect } from 'react';

import { SessionContext } from '../../Contexts/sessionContext';

const Session: React.ElementType = ({ match }): JSX.Element => {
  const sessionContext = useContext(SessionContext);

  useEffect(() => {
    fetch(`http://localhost:8000/sessions/${match.params.id}`)
      .then(results => results.json())
      .then(json => console.log(json))
      .catch(err => console.error(err));
  }, [match.params.id]);

  if (Array.isArray(sessionContext)) {
    // const [session, setSession] = sessionContext;
  }

  return <p>Session</p>;
};

export default Session;
