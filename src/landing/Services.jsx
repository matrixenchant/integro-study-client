import React from 'react';

import decor3 from '../assets/decor3.png';

const Services = () => {
  return (
    <section id="услуги" className="services landing-wrapper">
      <img className="decor3" src={decor3} />
      <div className="decor-fill"></div>
      <h1 className="manrope">НАШИ УСЛУГИ:</h1>

      <div className="services-wrap">
        <div className="services__item">
          <h3>1. Стартап в полном расцвете:</h3>
          <p>
            Для тех, кто стремится к максимальному успеху, мы предлагаем полный комплекс услуг — от
            разработки идеи до подготовки к акселератору.
          </p>
        </div>
        <div className="services__item">
          <h3>2. Упаковка вашей идеи:</h3>
          <p>
            Мы помогаем формировать ядро вашего стартапа: идею, MVP, прототип. Давайте воплотим вашу
            мечту в реальность.
          </p>
        </div>
        <div className="services__item">
          <h3>3. Готовим к победе:</h3>
          <p>
            Наши эксперты готовят ваш проект к жесткой конкуренции. Мы анализируем рынок,
            конкурентов и создаем выигрышные стратегии.
          </p>
        </div>
        <div className="services__item">
          <h3>4. Точные шаги к успеху:</h3>
          <p>
            Мы разрабатываем детальные user flow и финансовые модели для вашего стартапа. Переведите
            свою идею в точный путь к успеху.
          </p>
        </div>
        <div className="services__item">
          <h3>5. Премиум-консультации:</h3>
          <p>
            Эффективные стратегии и индивидуальные рекомендации от наших экспертов. Для тех, кто
            стремится к максимальным результатам.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Services;
