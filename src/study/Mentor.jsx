import React, { useState } from 'react';
import { useEffect } from 'react';

const _messages = [
  {
    type: 'mentor',
    text: `Отличная работа, вы прекрасно справились с задачами прошедшей недели. Теперь можно переходить к следующему этапу. Проверьте вкладку “расписание” - вас ждет план на предстоящую неделю. Так же напоминаю, что в справочнике для вас была подготовлена вся необходимая информация для комфортного обучения и понимания, Мы с вами поднимаемся на новый уровень! Жду ваших отчетов по его завершению. `,
  },
  {
    type: 'student',
    text: `Здравствуйте! Спасибо за отзыв. Обязательно проверю расписание на следующую неделю. Готов приступить к новым задачам и уровню обучения. Какие конкретные темы мы будем рассматривать?`,
  },
  {
    type: 'mentor',
    text: `Привет! Рад, что вы готовы к следующему этапу. На предстоящей неделе мы сосредоточимся на более сложных аспектах вашей области обучения. Основные темы будут связаны с [тема 1] и [тема 2]. Пожалуйста, обратите внимание на материалы в справочнике, они помогут вам лучше понять и подготовиться. Жду ваших отчетов!`,
  },
  {
    type: 'student',
    text: 'Спасибо за информацию! Звучит интересно. Я уже начал изучать материалы в справочнике, и они очень полезны. Если у меня возникнут вопросы по ходу изучения, могу ли я обратиться за помощью?',
  },
  {
    type: 'mentor',
    text: 'Конечно! Всегда рад помочь. Если у вас возникнут вопросы или затруднения, не стесняйтесь обращаться. Вы также можете использовать наш чат для обмена идеями с другими учениками. Важно, чтобы вы чувствовали поддержку в процессе обучения. Удачи в изучении материалов, и не забудьте делиться своими впечатлениями и вопросами!',
  },
];

const Mentor = () => {
  const [messages, setMessages] = useState(_messages);

  const [loading, setLoading] = useState(false);
  const [input, setInput] = useState('');

  useEffect(() => {
    document.querySelector('.app-mentor-wrap')?.scrollTo(0, 99999);
  }, [messages]);

  const sendMessage = () => {
    if (input.trim() === '') return;

    setMessages([
      ...messages,
      {
        type: 'student',
        text: input,
      },
    ]);

    getAnswer(input);
  };

  useEffect(() => {
    document.querySelector('.app-mentor-wrap')?.scrollTo(0, 99999);
  }, [])

  const getAnswer = async (content) => {
    const system = 'Ты чат бот ассистент на образовательной платформе по подготовке стартапов';
    setInput('');
    setLoading(true);
    try {
      const res = await fetch(`https://kbtux.only-dev.kz/gpt?content=${content}&system=${system}`);
      const text = await res.text();
      console.log(text);
      let format = text.replaceAll('"', '');
      format = format.replaceAll('\n', '<br />')

      setMessages(prev => [
        ...prev,
        {
          type: 'mentor',
          text: text.replaceAll('"', ''),
        },
      ]);
      
    } catch (e) {
      console.warn(e);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="app-mentor">
      <div className="app-mentor-wrap">
        {messages.map((m, i) => (
          <div key={i} className={`app-mentor-msg app-mentor-msg--${m.type}`}>
            {m.type === 'mentor' && <div className='avatar'><MentorAvatar /></div>}
            <p dangerouslySetInnerHTML={{ __html: m.text}}></p>
          </div>
        ))}
      </div>
      <div className={`app-mentor-input ${loading ? 'loading' : ''}`}>
        <input onKeyUp={(e) => e.key === 'Enter' ? sendMessage() : null} disabled={loading} value={input} onChange={(e) => setInput(e.target.value)} />
        <button disabled={loading} onClick={sendMessage} className="main-btn">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="512" height="512">
            <g id="_01_align_center">
              <path d="M1.444,6.669a2,2,0,0,0-.865,3.337l3.412,3.408V20h6.593l3.435,3.43a1.987,1.987,0,0,0,1.408.588,2.034,2.034,0,0,0,.51-.066,1.978,1.978,0,0,0,1.42-1.379L23.991.021ZM2,8.592l17.028-5.02L5.993,16.586v-4Zm13.44,13.424L11.413,18h-4L20.446,4.978Z" />
            </g>
          </svg>
        </button>
      </div>
    </div>
  );
};

const MentorAvatar = () => (
  <svg xmlns="http://www.w3.org/2000/svg" id="Layer_1" viewBox="0 0 24 24" width="512" height="512">
    <path d="m3,10.5c0-1.933,1.567-3.5,3.5-3.5s3.5,1.567,3.5,3.5-1.567,3.5-3.5,3.5-3.5-1.567-3.5-3.5Zm3.5,5.5c-3.584,0-6.5,2.916-6.5,6.5,0,.828.671,1.5,1.5,1.5s1.5-.672,1.5-1.5c0-1.93,1.57-3.5,3.5-3.5s3.5,1.57,3.5,3.5c0,.828.671,1.5,1.5,1.5s1.5-.672,1.5-1.5c0-3.584-2.916-6.5-6.5-6.5ZM18.5,0h-8.535c-1.958,0-3.783,1.054-4.763,2.749-.415.717-.17,1.635.547,2.05.716.415,1.635.169,2.049-.548.446-.771,1.276-1.251,2.167-1.251h8.535c1.378,0,2.5,1.121,2.5,2.5v8c0,1.379-1.122,2.5-2.5,2.5h-.5v-.5c0-.828-.671-1.5-1.5-1.5h-2c-.829,0-1.5.672-1.5,1.5v2c0,.828.671,1.5,1.5,1.5h4c3.033,0,5.5-2.468,5.5-5.5V5.5c0-3.032-2.467-5.5-5.5-5.5Z" />
  </svg>
);

export default Mentor;
