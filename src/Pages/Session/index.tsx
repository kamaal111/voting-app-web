import React, { useEffect, useState, useCallback } from 'react';
import { post as postRequest, get as getRequest } from 'superagent';

import { apiUrl } from '../../config';

interface CandidateType {
  name: String;
}
interface SessionType {
  name: String;
  candidates: CandidateType[];
}

const Session: React.ElementType = ({ match }): JSX.Element => {
  const [sessionData, setSessionData] = useState<null | SessionType>(null);
  const [selectedCandidate, setSelectedCandidate] = useState<null | string>(
    null,
  );
  const [errors, setErrors] = useState({
    session: null,
  });

  const fetchDataCallback = useCallback(async () => {
    if (errors !== null) {
      try {
        const response = await getRequest(
          `${apiUrl}/sessions/${match.params.id}`,
        );

        setSessionData(response.body);
      } catch (err) {
        setErrors({
          ...errors,
          session: err,
        });
      }
    }
  }, [match.params.id, errors, setErrors]);

  useEffect(() => {
    if (errors !== null) {
      fetchDataCallback();
    }
  }, [errors, fetchDataCallback]);

  const onchange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setSelectedCandidate(event.target.value);
  };

  const onSubmit = async () => {
    try {
      const response = await postRequest(
        `http://localhost:5000/sessions/${match.params.id}`,
      ).send({ selectedCandidate });
      console.log(response.body);
    } catch (error) {
      console.log(errors);
    }
  };

  return sessionData === null ? (
    <h1>LOADING....</h1>
  ) : (
    <>
      <h1>{sessionData.name}</h1>
      {selectedCandidate === null ? (
        <></>
      ) : (
        <button onClick={onSubmit}>Submit</button>
      )}
      <div onChange={onchange}>
        {sessionData.candidates.map(({ name }, index) => (
          <div key={index}>
            <input
              type="radio"
              name="candidate"
              id={`${name}`}
              value={`${name}`}
            />
            {name}
          </div>
        ))}
      </div>
    </>
  );
};

export default Session;
