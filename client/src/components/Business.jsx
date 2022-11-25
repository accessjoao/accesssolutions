import { features } from "../constants";
import styles, { layout } from "../style";
import Button from "./Button";

const Business = () => {
  return (
    <section id="features" className={layout.section}>
      <div className="{layout.sectionInfo}">
        <h2 className={styles.heading2}>You do the business. <br className="sm:block hidden"/> We'll handle the style.</h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>With the right solutions, you can create usable art by improving your design and having a modern stack in a quick and efficient way.</p>

        <Button styles="mt-10"/>
      </div>

    </section>
  )
}

export default Business