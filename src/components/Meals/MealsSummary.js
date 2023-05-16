import React from 'react'
import classes from './MealsSummary.module.css';

export default function MealsSummary() {
  return (
    <section className={classes.summary}>
      <h2> Lækker mad, leveret til dig </h2>
      <p>
      Vælg dit yndlingsmåltid fra vores brede udvalg af tilgængelige måltider og nyd en lækker frokost eller middag derhjemme.
      </p>
      <p>
      Alle vores måltider tilberedes med råvarer af høj kvalitet, just-in-time og selvfølgelig af erfarne kokke!
      </p>
    </section>
  )
}
