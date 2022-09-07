import React, { useState } from 'react';

export interface AccordianProps {
  title: string;

}

const Accordian: React.FC<AccordianProps> = ({ title, children }) => {
    const [isOpen, setIsOpen] = useState(false); 
    console.log(isOpen);
    return (
      <section className="accordian">
        <div>
          <h2>
            <button
              onClick={() => setIsOpen(!isOpen)}
              aria-expanded={isOpen}
              aria-controls="accordian-content"
              aria-label={ `Open ${title} Content` }
            >
              { title }
            </button>
          </h2>
        </div>
        <div 
          hidden={!isOpen}
          id="accordian-content"
          >
          { children }
        </div>
      </section>
    );
}

export default Accordian;