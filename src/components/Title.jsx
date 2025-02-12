import React from "react";

const Title = ({ titleEng, titleJp }) => {
  return (
    <div className="bg-black/30 w-full">
      <section class="section-title">
        <div class="c-section-title">
          <p class="c-section-title__en js-splitText js-text-effect" id="01">
            {titleEng}
          </p>
          <h2 class="c-section-title__jp">{titleJp}</h2>
        </div>
      </section>
    </div>
  );
};

export default Title;
