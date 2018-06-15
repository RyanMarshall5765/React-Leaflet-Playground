import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { pointToLayer } from "../components/PlacesMap";

describe("Basilian Marker", () => {
  it("Should return the Orthodox Cross", () => {
    expect(
      pointToLayer({
        type: "Feature",
        geometry: {
          type: "Point",
          coordinates: [14.7005667, 38.0728323]
        },
        properties: {
          place: {
            notes: null,
            record_status: "draft",
            names: [
              {
                name: "Saint Barbarus of San Marco",
                language: "en",
                preferred: true
              },
              {
                name: "San Barbaro di San Marco",
                language: "it",
                preferred: false
              }
            ],
            category: "abbey (monasteries)",
            details: {
              "reign-of-earliest-attestation": "Regency of Countess Adelasia",
              dedication: "Saint Barbarus",
              "earliest-attestation": "before 1109",
              founders: [],
              type: "monastery",
              order: "Basilian",
              gender: "Male",
              "foundation-rank": "Abbey",
              relationships: {}
            },
            references: [
              {
                section_title: null,
                publisher: "The Mediaeval Academy of America",
                sameas_uris: [
                  "https://lccn.loc.gov/38008793",
                  "https://openlibrary.org/books/OL6368091M"
                ],
                place: "Cambridge, MA",
                author_same_as_uri:
                  "http://id.loc.gov/authorities/names/n79071058",
                title: "Latin Monasticism in Norman Sicily",
                pages: "41",
                author: "White, Lynn Townsend, Jr.",
                year: "1938",
                notes: null,
                editor: null,
                editor_same_as_uri: null
              }
            ],
            same_as_uris: {}
          },
          location: {
            comune: "San Marco d'Alunzio",
            province: "Messina",
            historical_province: "Val Demone",
            seismic_class_id: 2,
            elevation: 0.0,
            positional_accuracy_assessment: "unknown",
            archaeological_remains: "unknown",
            category: "associated_modern",
            names: [
              {
                name: "l'Agathyrnum",
                language: "unknown",
                preferred: false
              },
              {
                name: "l'Agathinon",
                language: "unknown",
                preferred: false
              },
              {
                name: "Qal'at-Sciant-Marku",
                language: "unknown",
                preferred: false
              },
              {
                name: "Castrum Sancti Mauri",
                language: "unknown",
                preferred: false
              },
              {
                name: "Castrum Marci",
                language: "unknown",
                preferred: false
              }
            ]
          }
        }
      }).toBe(L.marker(latlng, { icon: this.state.orthodoxCross }))
    );
  });
});
