import Emphasis from "@/components/primitives/emphasis";

export default function PresentationProjetCitoyen() {
  return (
    <div className="flex h-full px-20 pt-20 snap-center">
      <div>
        <h2 className="text-7xl font-bold text-indigo-600">Projet citoyen</h2>
        <p className="text-lg leading-relaxed m-4 text-gray-600">
          bla bla bla{" "}
          <Emphasis>un ingé doit être utile pour la société</Emphasis> bla bla
          bla du coup{" "}
          <Emphasis>on doit faire un truc pour se rendre utile en A3 </Emphasis>{" "}
          bla bla bla bla bla bla blabla blabla blabla blabla blabla blabla
          blabla blabla blabla blabla blabla blabla blabla bla{" "}
          <Emphasis>bullshit marketing</Emphasis>
        </p>
      </div>
    </div>
  );
}
