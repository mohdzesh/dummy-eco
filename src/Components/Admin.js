import Register from "./Register";
import Box from "@mui/material/Box";
import { useState } from "react";
import { collection, addDoc } from "firebase/firestore";
import { storage } from "../firebase_setup/firebase";
import db from "../firebase_setup/firebase";
import { ref, uploadBytes } from "@firebase/storage";
import "../index.css";
import FirestoreFetch from "../FirstoreFetch";

export default function AdminForm() {
  // const [todo, setTodo] = useState("");
  // const valueArr = [];
  // const addTodo = (e) => {
  //   e.preventDefault();
  //   console.log(valueArr);
  //   valueArr.forEach((element, indexx) => {
  //     try {
  //       const docRef = addDoc(collection(db, "todos"), {
  //         indexx: element,
  //       });
  //       console.log("Document written with ID: ", docRef.id);
  //     } catch (e) {
  //       console.error("Error adding document: ", e);
  //     }
  //   });
  // };

  // let navigate = useNavigate();
  // const logout = () => {
  //   let path = `/`;
  //   navigate(path);
  // };

  //ImageState
  const allInputs = { imgUrl: "" };
  const [imageAsFile, setImageAsFile] = useState("");
  const [imageAsUrl, setImageAsUrl] = useState("");
  
  //ProductdetailsState
  const [productTitle, setProductTitle] = useState("");
  const [productDescription, setProductDescription] = useState("");
  const [productQuantity, setProductQuantity] = useState("");
  const [productPrice, setProductPrice] = useState("");


  //ImageHandler
  const handleImageAsFile = (e) => {
    const image = e.target.files[0];
    setImageAsFile((imageFile) => image);
  };
  //Uploader
  const addProduct = (e) => {
    e.preventDefault();
    if (imageAsFile === "") {
      console.error(`not an image, the image file is a ${typeof imageAsFile}`);
    }
    const ref1 = ref(storage, `images/${imageAsFile.name}`);
    const uploadTask = uploadBytes(ref1, imageAsFile.image);
    //initiates the firebase side uploading
    uploadTask.then(
      "state_changed",
      (snapShot) => {
        //takes a snap shot of the process as it is happening
        console.log(snapShot);
      },
      (err) => {
        //catches the errors
        console.log(err);
      },
      () => {
        // gets the functions from storage refences the image storage in firebase by the children
        // gets the download url then sets the image from firebase as the value for the imgUrl key:
        storage
          .ref("images")
          .child(imageAsFile.name)
          .getDownloadURL()
          .then((fireBaseUrl) => {
            setImageAsUrl(fireBaseUrl);
            console.log(imageAsUrl);
          });
      }
    );
    const userRef = collection(db, "customersData");
    addDoc(userRef, {
      Title: productTitle,
      Description: productDescription,
      Quantity: productQuantity,
      Price: productPrice,
      image: imageAsUrl,
    });

    // setProductTitle("");
    // setProductDescription("");
    // setProductQuantity("");
    // setProductPrice("");
    console.log(imageAsUrl);
  };

  return (
    <Box sx={{ width: "15%" }} className="tabs">
      <input type="file" onChange={handleImageAsFile}></input>
      <Register
        field1="Enter Product Title"
        field2="Enter description"
        field3="Enter Quantity"
        field4="Enter Price"
        field3Type="number"
        field4Type="number"
        BtnText="Add"
        onChangeName={(e) => setProductTitle(e.target.value)}
        onChangeEmail={(e) => setProductDescription(e.target.value)}
        onChangePass={(e) => setProductQuantity(e.target.value)}
        onChangeConfirmPass={(e) => setProductPrice(e.target.value)}
        BtnClick={addProduct}
      />
      <img src={imageAsUrl.imgUrl} alt="productImage tag" />
    </Box>
  );
}
