import Link from "next/link";

export default function MentionsLegales() {
  return (
    <div className="bg-gray-100 h-screen w-full snap-y snap-mandatory overflow-y-scroll">
      <Link href="/" className="p-2 bottom-16 left-6 fixed glassmorphism_white">
        Retour
      </Link>
      <div className="flex h-full text-center justify-center pt-20 snap-mandatory snap-center">
        <div className="w-full h-full">
          <h2 className="text-7xl font-bold text-indigo-600">
            Mentions légales
          </h2>
          <p className="text-lg leading-relaxed m-4 text-gray-600 ">
            Collecte organisée dans le cadre du projet citoyen de Hugo CHAMPY,
            Laureline ZITTEL et Loic WALTER étudiants à CESI.
          </p>
          <p className="text-lg leading-relaxed m-4 text-gray-600 ">
            Illustrations :{" "}
            <a
              className="underline text-indigo-600"
              href="http://www.freepik.com"
            >
              Designed by Freepik
            </a>
          </p>
          <p className="text-lg leading-relaxed m-4 text-gray-600">
            Paiement sécurisé par Stripe, l&#39;argent est collecté par AX
            INTERCAMPUS, association loi 1901 située au 2 Avenue Jean Monnet,
            31520 Ramonville Saint-Agne avant d&#39;être reversé à Emmaüs
            France.
          </p>
        </div>
      </div>
    </div>
  );
}
