import Sidebar from "../../components/Sidebar";
import Navbar from "../../components/ProfileNavbar";
import { useState } from "react";
import SelectField from "../../components/SelectField";
import TextField from "../../components/TextField";
import Footer from "../../components/Footer";
const EditProfilePage = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageChange = (event) => {
    const file = event.target.files[0];

    setSelectedImage(file);
  };

  const handleImageClick = () => {
    // Trigger the file input click when the image is clicked
    document.getElementById("imageInput").click();
  };

  return (
    <div className="flex flex-col min-h-screen">
      <div className="z-50">
        <Navbar></Navbar>
      </div>
      <div className="flex flex-1">
        <Sidebar></Sidebar>
        <form className="w-full">
          <h1 className="text-3xl m-8 font-semibold text-[#094B72]">
            Edit your profil
          </h1>
          <label
            htmlFor="imageInput"
            className="block text-md m-6 font-medium text-[#094B72] "
          >
            Upload a Picture
          </label>
          <div className="mt-1 flex items-center">
            <input
              type="file"
              accept="image/*"
              id="imageInput"
              onChange={handleImageChange}
              className="hidden"
            />
            <div
              onClick={handleImageClick}
              className="cursor-pointer bg-cover bg-center border border-gray-300 rounded-full w-32 h-32 mx-8"
              style={{
                backgroundImage: selectedImage
                  ? `url(${URL.createObjectURL(selectedImage)})`
                  : "url(https://cdn.vectorstock.com/i/preview-1x/08/19/gray-photo-placeholder-icon-design-ui-vector-35850819.jpg)",
              }}
            ></div>
            {selectedImage && (
              <div className="ml-3">
                <p className="text-sm text-gray-500">{selectedImage.name}</p>
              </div>
            )}
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 m-8">
            <TextField id={"name"} label={"Name"} placeholder={"John"} />

            <TextField id={"surname"} label={"Surname"} placeholder={"Doe"} />

            <TextField
              id={"email"}
              label={"Email"}
              placeholder={"a@mail.com"}
            />

            <TextField
              id={"phone"}
              label={"Phone"}
              placeholder={"06 00 00 00 00"}
            />

            <SelectField
              id={"Specification"}
              label={"Legal Specification"}
              placeholder={"Select a specification"}
              options={[
                { value: "Agression", label: "Agression" },
                { value: "Crime", label: "Crime" },
                { value: "Robbing", label: "Robbing" },
              ]}
            />

            <TextField id={"address"} label={"Address"} placeholder={"Paris"} />
          </div>

          <div className="flex justify-end m-4">
            <button className="transition-transform transform hover:scale-105 duration-500  mx-4 border-1 bg-[#094B72] py-3 px-8 rounded-3xl text-white font-normal text-md flex gap-2">
              Save changes
            </button>
          </div>
        </form>
      </div>
      <div className=" lg:hidden">
        <Footer />
      </div>
    </div>
  );
};

export default EditProfilePage;
