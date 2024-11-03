import React, { createContext, useEffect, useState } from 'react';
import { database } from '../firebase';
import { ref, get } from 'firebase/database';

export const firebaseContext = createContext();

const FirebaseContextProvider = ({ children }) => {
  console.log(process.env.REACT_APP_DATABASE_URL);
  
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const dbRef = ref(database, "/");
      try {
        const snapshot = await get(dbRef);
        if (snapshot.exists()) {
          setUserData(snapshot.val());
        } else {
          console.log("Aucune donnée disponible");
        }
      } catch (error) {
        console.error("Erreur lors de la récupération des données:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <firebaseContext.Provider value={{ userData }}>
      {children}
    </firebaseContext.Provider>
  );
};

export default FirebaseContextProvider;
