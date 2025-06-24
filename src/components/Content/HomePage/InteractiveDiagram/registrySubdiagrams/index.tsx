import { registerVSKSubdiagram } from "./versorgungskonzepte";
import { registerKomponentenSubdiagram } from "./komponenten";
import type { FlexibleDiagramConfig } from "../data/flow-types";

/**
 * Diese Funktion ist der zentrale "Verteiler" (Dispatcher) für die Registrierung aller Subdiagramme.
 * Sie erhält die gesammelten Daten der Subdiagramme aus der JSON-Datei und ruft für jedes
 * die jeweilige, spezialisierte Registrierungsfunktion auf.
 * @param subdiagramData Ein Objekt, bei dem die Schlüssel die Diagramm-IDs sind
 * und die Werte die dazugehörige Konfiguration (Knoten und Kanten).
 */

export function registerAllSubdiagrams(
  subdiagramData: Record<string, FlexibleDiagramConfig>
): void {
  console.log("STARTE REGISTRIERUNG aller Sub-Diagramme...");
  if (subdiagramData.versorgungskonzepte) {
    registerVSKSubdiagram(subdiagramData.versorgungskonzepte);
  }
  if (subdiagramData.komponenten) {
    registerKomponentenSubdiagram(subdiagramData.komponenten);
  }
  console.log("ABGESCHLOSSEN: Registrierung aller Sub-Diagramme.");
}
