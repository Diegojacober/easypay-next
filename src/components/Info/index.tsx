import styles from "./style.module.css";

interface InfoProps {
  partners: number;
  clients: number;
}

export default function Info({ partners, clients }: InfoProps) {
  return (
    <section className={styles.infoContainer}>
      <article className={styles.Item}>
        <p className={styles.itemText}>16y</p>
        <small className={styles.itemDesc}>Experience</small>
      </article>

      <article className={styles.Item}>
        <p className={styles.itemText}>{partners * 5}+</p>
        <small className={styles.itemDesc}>Merchant partner</small>
      </article>

      <article className={styles.Item}>
        <p className={styles.itemText}>18+</p>
        <small className={styles.itemDesc}>Years experience</small>
      </article>

      <article className={styles.Item}>
        <p className={styles.itemText}>{clients * 10}</p>
        <small className={styles.itemDesc}>Worldwide clients</small>
      </article>
    </section>
  );
}
