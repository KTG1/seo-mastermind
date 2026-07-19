"use client";

import { geoNaturalEarth1, geoPath } from "d3-geo";
import { feature } from "topojson-client";
import world from "@d3-maps/atlas/world/countries/countries-110m";
import type { Member } from "./page";
import styles from "./world-map.module.css";

const width = 960;
const height = 460;
const topology = world as unknown as { objects: { features: object } };
const countries = feature(topology as never, topology.objects.features as never) as unknown as { features: GeoJSON.Feature[] };
const projection = geoNaturalEarth1().fitSize([width, height], { type: "FeatureCollection", features: countries.features });
const path = geoPath(projection);

export default function WorldMap({ members }: { members: Member[] }) {
  return <section className={styles.mapSection} aria-labelledby="map-title">
    <div className={styles.mapHeading}><div><span>Global room</span><h2 id="map-title">Where the table<br /><em>reaches.</em></h2></div><p>Each marker is a member currently shown in the directory. Search and filters update the map in real time.</p></div>
    <div className={styles.mapFrame}>
      <svg viewBox={`0 0 ${width} ${height}`} role="img" aria-label={`World map showing ${members.length} attendees by location`}>
        <path className={styles.sphere} d={path({ type: "Sphere" }) ?? ""} />
        {countries.features.map((country, index) => <path className={styles.country} d={path(country) ?? ""} key={country.id ?? index} />)}
        {members.map((member) => {
          const point = projection(member.coordinates);
          if (!point) return null;
          return <g className={styles.marker} transform={`translate(${point[0]},${point[1]})`} key={member.name}><title>{`${member.name}, ${member.location}`}</title><circle r="13" /><text dy="4">1</text></g>;
        })}
      </svg>
      <div className={styles.mapKey}><span><i />1 member per marker</span><b>{members.length} visible</b></div>
    </div>
  </section>;
}
