import React, { useState } from "react";
import firebase from "firebase/compat/app";

function FirestoreFetch() {
  const [allDocs, setAllDocs] = useState([]);

  let i;

  const db = firebase.firestore();

  const fetchall = (e) => {
    e.preventDefault();

    db.collection("customersData")
      .get()
      .then((snapshot) => {
        if (snapshot.docs.length > 0) {
          snapshot.docs.forEach((doc) => {
            setAllDocs((prev) => {
              return [...prev, doc.data()];
            });
          });
        }
      });
  };
  const product = [];
  allDocs.map((doc) => {
    product = [
      {
        name: doc.name,
        price: doc.price,
      },
    ];

    console.log(product);
  });

  return (
    <>
      {/* <input onClick={fetchall} type="button" value="Submit" /> */}
      {/* <div>
        {allDocs.map((doc) => {
          const product = [
            {
              name: doc.name,
              price: doc.price,
            },
          ];
          console.log(product);
        })}
      </div> */}
    </>
  );
}

export { FirestoreFetch as default };
