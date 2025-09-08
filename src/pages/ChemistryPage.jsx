import React from "react";
import { Link } from "react-router-dom";
import data from "../data/chemistry";
import "../styles/ChemistryPage.css";

export default function ChemistryPage() {
  const organicTopics = data.filter(t => t.type === "organic");
  const inorganicTopics = data.filter(t => t.type === "inorganic");

  return (
    <div className="container-fluid">
      <section className="">
        <h1 className="text-center mt-3">Хімія</h1>
        <article className="mx-2 ">
          <p>
            <strong>Хімія</strong> - це природнича наука, яка вивчає молекулярно-атомні перетворення речовин, тобто, при яких молекули одних речовин руйнуються, а на їх місці утворюються молекули інших речовин з новими властивостями.
          </p>
          <p>
            Сучасна хімія являє собою величезну галузь людських знань і відіграє важливу роль у житті суспільства. Багато її розділів є самостійними, хоча й тісно взаємозв'язаними науковими дисциплінами. За ознакою об'єктів вивчення (речовин) хімію прийнято поділяти на органічну та неорганічну. Також розрізняють аналітичну, колоїдну та ін.
          </p>
          <p>
            Сьогодні не можна назвати жодної сфери виробництва, де б людина не стикалася з хімією. Практично все наше життя, наше здоров'я, наш настрій тісно пов'язані з численними речовинами, які нас оточують, і хімічними процесами, що відбуваються навколо нас і всередині нас. Хімічними знаннями повинна володіти кожна цивілізована людина. Без них неможлива екологічно грамотна поведінка в побуті, природі, на виробництві тощо.
          </p>
        </article>
        <h2 className="text-center mt-3">Органічна Хімія</h2>
        <article className="organic mx-2">
          <p>
            <strong>Органічна хімія</strong> - один із найважливіших розділів хімії, який вивчає склад, будову, властивості та реакційну здатність органічних сполук рослинного чи тваринного походження, а також розробку методів синтезу органічних сполук різних класів.
          </p>
          {organicTopics.map(topic => (
            <Link key={topic.id} to={`/chemistry/${topic.id}`} className="btn btn-organic m-2">
              {topic.title}
            </Link>
          ))}
        </article>
        <h2 className="text-center mt-3">Неорганічна Хімія</h2>
        <article className="inorganic mx-2">
          <p>
            <strong>Неорганічна хімія</strong> - природнича наука, яка вивчає матеріальний світ у всьому розмаїтті його існування та перетворень. Вона вивчає склад, будову та властивості неорганічних речовин, умови та шляхи перетворення одних речовин в інші тощо. 
          </p>
          {inorganicTopics.map(topic => (
            <Link key={topic.id} to={`/chemistry/${topic.id}`} className="btn btn-inorganic m-2">
              {topic.title}
            </Link>
          ))}
        </article>
      </section>
    </div>
  );
}
