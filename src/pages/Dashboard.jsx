
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const translations = {
  en: {
    welcome: "Welcome, JeanK",
    logout: "Logout",
    confirmLogout: "Are you sure you want to logout?",
    yes: "Yes",
    no: "No",
    clientStatus: "Client Status",
    outageReports: "Outage Reports",
    mapTitle: "Live Feed",
    name: "Name",
    surname: "Surname",
    bundle: "Bundle",
    amount: "Amount Paid",
    payment: "Payment Status",
    online: "Online Status",
    issue: "Issue",
    technician: "Technician Response",
    addClient: "Add Client",
    removeClient: "Remove",
    simulate: "Simulate"
  },
  fr: {
    welcome: "Bienvenue, JeanK",
    logout: "Se déconnecter",
    confirmLogout: "Êtes-vous sûr de vouloir vous déconnecter ?",
    yes: "Oui",
    no: "Non",
    clientStatus: "Statut du client",
    outageReports: "Rapports de panne",
    mapTitle: "Flux en direct",
    name: "Prénom",
    surname: "Nom de famille",
    bundle: "Forfait",
    amount: "Montant payé",
    payment: "Statut du paiement",
    online: "Statut en ligne",
    issue: "Problème",
    technician: "Réponse du technicien",
    addClient: "Ajouter un client",
    removeClient: "Supprimer",
    simulate: "Simuler"
  }
};

const Dashboard = () => {
  const [lang, setLang] = useState("en");
  const [clients, setClients] = useState([]);
  const [outages, setOutages] = useState([]);
  const [logoutConfirm, setLogoutConfirm] = useState(false);
  const [selectedRemoveClient, setSelectedRemoveClient] = useState("");
  const navigate = useNavigate();
  const t = translations[lang];

  const handleAddClient = () => {
    const name = prompt(t.name);
    const surname = prompt(t.surname);
    const bundle = prompt(t.bundle);
    const amount = prompt(t.amount);
    const payment = prompt(t.payment);
    const online = Math.random() > 0.5 ? "Active" : "Inactive";
    if (name && surname && bundle && amount && payment) {
      setClients([...clients, { name, surname, bundle, amount, payment, online }]);
    }
  };

  const handleRemoveClient = () => {
    setClients(clients.filter(client => client.name !== selectedRemoveClient));
  };

  const handleSimulate = () => {
    const names = ["Sarah", "Luc", "Pierre", "Amina"];
    const issues = [
      "No signal since morning",
      "Frequent disconnects",
      "Slow speed",
      "Cable cut in the area"
    ];
    const name = names[Math.floor(Math.random() * names.length)];
    const issue = issues[Math.floor(Math.random() * issues.length)];
    setOutages([...outages, { name, issue, technician: "Pending" }]);
  };

  const handleLogout = () => {
    setLogoutConfirm(false);
    navigate("/");
  };

  return (
    <div className="flex h-screen">
      <aside className="w-64 bg-orange-600 text-white flex flex-col justify-between">
        <div className="p-4 space-y-4">
          <h2 className="text-xl font-bold">{t.welcome}</h2>
          <div className="space-y-2">
            <button onClick={() => setLang("en")} className="w-full bg-white text-orange-600 px-2 py-1 rounded">English</button>
            <button onClick={() => setLang("fr")} className="w-full bg-white text-orange-600 px-2 py-1 rounded">Français</button>
            <button onClick={handleAddClient} className="w-full bg-white text-orange-600 px-2 py-1 rounded font-semibold">{t.addClient}</button>
            <div className="flex flex-col gap-2">
              <select onChange={(e) => setSelectedRemoveClient(e.target.value)} className="text-black p-2 rounded">
                <option value="">{t.removeClient}</option>
                {clients.map((c, i) => <option key={i} value={c.name}>{c.name}</option>)}
              </select>
              <button onClick={handleRemoveClient} className="bg-white text-orange-600 px-2 py-1 rounded font-semibold">{t.removeClient}</button>
            </div>
            <button onClick={handleSimulate} className="w-full bg-white text-orange-600 px-2 py-1 rounded font-semibold">{t.simulate}</button>
          </div>
        </div>
        <div className="p-4">
          <button onClick={() => setLogoutConfirm(true)} className="w-full bg-white text-orange-600 px-3 py-2 rounded">{t.logout}</button>
        </div>
      </aside>

      <main className="flex-1 overflow-y-auto p-6 space-y-8">
        {logoutConfirm && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
            <div className="bg-white p-6 rounded space-y-4">
              <p>{t.confirmLogout}</p>
              <div className="flex gap-4 justify-end">
                <button onClick={handleLogout} className="bg-red-500 text-white px-4 py-2 rounded">{t.yes}</button>
                <button onClick={() => setLogoutConfirm(false)} className="bg-gray-300 text-black px-4 py-2 rounded">{t.no}</button>
              </div>
            </div>
          </div>
        )}

        <section>
          <h1 className="text-2xl font-bold text-orange-600 mb-4">{t.clientStatus}</h1>
          <table className="w-full table-auto border-collapse border">
            <thead>
              <tr className="bg-orange-100 text-left">
                <th className="border p-2">{t.name}</th>
                <th className="border p-2">{t.surname}</th>
                <th className="border p-2">{t.bundle}</th>
                <th className="border p-2">{t.amount}</th>
                <th className="border p-2">{t.payment}</th>
                <th className="border p-2">{t.online}</th>
              </tr>
            </thead>
            <tbody>
              {clients.map((client, idx) => (
                <tr key={idx} className="hover:bg-orange-50">
                  <td className="border p-2">{client.name}</td>
                  <td className="border p-2">{client.surname}</td>
                  <td className="border p-2">{client.bundle}</td>
                  <td className="border p-2">{client.amount}</td>
                  <td className="border p-2">{client.payment}</td>
                  <td className="border p-2">{client.online}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>

        <section>
          <h2 className="text-xl font-bold text-orange-600 mb-4">{t.outageReports}</h2>
          <table className="w-full table-auto border-collapse border">
            <thead>
              <tr className="bg-orange-100 text-left">
                <th className="border p-2">{t.name}</th>
                <th className="border p-2">{t.issue}</th>
                <th className="border p-2">{t.technician}</th>
              </tr>
            </thead>
            <tbody>
              {outages.map((report, idx) => (
                <tr key={idx} className="hover:bg-orange-50">
                  <td className="border p-2">{report.name}</td>
                  <td className="border p-2">{report.issue}</td>
                  <td className="border p-2">{report.technician}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>

        <section>
          <h2 className="text-xl font-bold text-orange-600 mb-4">{t.mapTitle}</h2>
          <div className="h-[300px] flex items-center justify-center border rounded bg-orange-100 text-orange-700 text-xl font-semibold">
            {t.mapTitle}
          </div>
        </section>
      </main>
    </div>
  );
};

export default Dashboard;
