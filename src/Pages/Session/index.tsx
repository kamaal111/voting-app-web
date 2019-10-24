import React, { useEffect, useState } from 'react';

const Session: React.ElementType = ({ match }): JSX.Element => {
  interface CandidateType {
    name: String;
  }
  interface SessionType {
    name: String;
    candidates: CandidateType[];
  }

  const [sessionData, setSessionData] = useState<null | SessionType>(null);
  const [errors, setErrors] = useState({
    session: null,
  });

  useEffect(() => {
    if (errors !== null) {
      fetch(`http://localhost:8000/sessions/${match.params.id}`)
        .then(results => results.json())
        .then(json => setSessionData(json))
        .catch(err =>
          setErrors({
            ...errors,
            session: err,
          }),
        );
    }
  }, [match.params.id, errors]);

  console.log('sessionData', sessionData);

  return sessionData === null ? (
    <h1>LOADING....</h1>
  ) : (
    <>
      <h1>{sessionData.name}</h1>
      {sessionData.candidates.map(({ name }, index) => (
        <p key={index}> {name}</p>
      ))}
    </>
  );
};

export default Session;
