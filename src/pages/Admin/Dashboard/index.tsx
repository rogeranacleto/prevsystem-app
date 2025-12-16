import { Cards } from "../../../components/Cards"
import { TableMaintenance } from "../../../components/TableMaintenance"
import { useEffect } from "react";
import { onSnapshot } from "firebase/firestore";
import { collection } from "firebase/firestore";
import { db } from "../../../services/firebaseConnection";
import { useContext } from "react";
import { CardContext } from "../../../contexts/CardContext";
export function Dashboard(){
const {activeMaintenance, finishedMaintenance, totalMaintenance} = useContext(CardContext);

useEffect(() => {
  const unsub = onSnapshot(collection(db, "maintenanceRecord"), (snapshot) => {
    let active = 0;
    let finished = 0;

    snapshot.forEach((doc) => {
      const status = doc.data().status;
      if (status === "Ativo") active++;
      if (status === "Finalizado") finished++;
    });

    activeMaintenance(active);
    finishedMaintenance(finished);
    totalMaintenance(snapshot.size);
  });

  return () => unsub();
}, []);

    return(
        <div className="bg-black max-w-screen min-h-screen rounded-2xl p-7">
            <Cards/>
            <TableMaintenance/>
        </div>
    )
}