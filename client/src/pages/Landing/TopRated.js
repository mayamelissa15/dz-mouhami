// TopRated.jsx
import React from "react";
import CardLawyer from "../../components/CardLawyer";
import lawyerPlaceholder from "../../assets/lawyer_placeholder.png";
const TopRated = () => {
  // Tableau d'objets représentant les avocats
  const lawyersData = [
    {
      name: "Marzouk Lounes",
      location: "Tizi-Ouzou, Algeria",
      categories: ["Usurpation ", "Criminologie"],
      description:
        "je suis un avocat specialisé en affaire de crimes et d'usurpation d'identite  , je suis devouée et je suis passioné par mon travail",
      image: lawyerPlaceholder,
    },
    // Ajoutez d'autres avocats selon vos besoins
  ];

  return (
    <div>
      <div className="flex justify-between py-8 px-24">
        <h1 className="text-[#094B72] text-4xl font-medium">
          Top Rated Lawyers
        </h1>
        <button className="bg-[#094E771A] font-medium text-[#094B72E5] rounded-full px-6 py-2 hover:bg-blue-100 hover:duration-500 hover:shadow-md focus:outline-none">
          See All
        </button>
      </div>
      {/* opérateur spread (...) qui prend toutes les propriétés de l'objet lawyer et les passe en tant que props individuelles au composant CardLawyer. */}
      <div className="px-24 pb-8 grid sm:grid-cols-1 lg:grid-cols-2">
        {lawyersData.map((lawyer, index) => (
          <CardLawyer key={index} {...lawyer} />
        ))}
      </div>
    </div>
  );
};

export default TopRated;