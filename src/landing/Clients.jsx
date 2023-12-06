import React from 'react';

const Clients = () => {
  return (
    <section className="clients landing-wrapper">
      <h1 className="manrope">ДЛЯ КОГО?</h1>
      <div className="decor-fill"></div>
      <div className="clients-wrap">
          <div className="clients__item">
            <span className='manrope'>Вдохновители Возможностей</span> - Для тех, кто обладает уникальной идеей, но не
            имеет опыта в стартап-индустрии. Мы помогаем вам воплотить мечту в жизнь.
          </div>
          <div className="clients__item">
            <span className='manrope'>Энтузиасты с Направлением</span> - для тех, кто уже собрал команду, начал
            движение, но остановился на определенном этапе. Мы предоставляем толчок в правильном
            направлении.
          </div>
          <div className="clients__item">
            <span className='manrope'>Уверенные в своем <br /> Деле</span> - для устоявшихся компаний, которые ищут
            качественные консультации в отдельных аспектах своего бизнеса. Например, разработка
            маркетинговой стратегии или финансовой модели.
          </div>
      </div>
    </section>
  );
};

export default Clients;
