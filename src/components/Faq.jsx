import { useState } from "react"

const Faq = () => {

    const [activeIndex, setActiveIndex] = useState(null);

    const handleToggle = (index) => {
        setActiveIndex(activeIndex === index ? null: index);
    }

  return (
    <section className="">
        
    </section>
  )
}

export default Faq
