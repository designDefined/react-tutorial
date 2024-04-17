import styles from "./styles/frame1.module.css";

export default function Frame1({
  toggleFrame,
}: {
  toggleFrame: (x: number) => void;
}) {
  return (
    <div className={styles.buttonWrapper}>
      <button className={styles.addButton} onClick={() => toggleFrame(1)}>
        <img src="/plus.png" alt="" />
        <div className={styles.text}>새로운 멤버 추가</div>
      </button>
    </div>
  );
}
